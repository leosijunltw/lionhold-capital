# Lionhold Capital website

A dependency-free static website that can be hosted free on GitHub Pages or Cloudflare Pages.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public GitHub repository (for example, `lionhold-capital`).
2. Upload everything in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will provide a free URL such as `https://yourusername.github.io/lionhold-capital/`.

## Publish with Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Leave the build command blank and set the output directory to `/`.
4. Deploy. Cloudflare will provide a free `*.pages.dev` URL.

## Before launch

- Replace `hello@lionholdcapital.com` in `index.html` if that inbox is not active yet.
- Add your registered company name, jurisdiction, address and any required financial-services or investment disclaimers.
- When you buy a domain, connect it in either GitHub Pages or Cloudflare Pages without changing the site.
