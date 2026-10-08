const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu'});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}));
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
/* Scroll focus: text blocks brighten (and big statements grow slightly) as they reach the middle of the screen */
(()=>{
  const big=document.querySelectorAll('.statement-copy,.services-intro-copy p,.fee-panel p,.origin-lead,.team-principle blockquote');
  const all=document.querySelectorAll('.statement-copy,.services-intro-copy p,.fee-panel p,.origin-lead,.team-principle blockquote,.approach-steps article,.value-grid article');
  if(!all.length||!('IntersectionObserver' in window))return;
  big.forEach(el=>el.classList.add('focus-big'));
  all.forEach(el=>el.classList.add('focus-text'));
  document.documentElement.classList.add('focus-ready');
  const mid=()=>window.innerHeight/2;
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    const el=e.target;
    if(e.isIntersecting)el.classList.add('is-focus');
    else if(e.boundingClientRect.top>mid())el.classList.remove('is-focus'); /* still below: dim */
    else el.classList.add('is-focus'); /* already scrolled past: stay bright */
  }),{rootMargin:'-35% 0px -35% 0px',threshold:0});
  all.forEach(el=>io.observe(el));
  /* items near the page bottom can never reach the middle band: light them once they are fully on screen at the end */
  let ticking=false;
  const onScroll=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-8)all.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight)el.classList.add('is-focus')});
  })};
  window.addEventListener('scroll',onScroll,{passive:true});
})();
(()=>{const h=document.querySelector('.site-header');if(!h)return;const f=()=>h.classList.toggle('scrolled',window.scrollY>40);f();window.addEventListener('scroll',f,{passive:true})})();
