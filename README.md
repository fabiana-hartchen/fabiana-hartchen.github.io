# Dr. Fabiana Hartchen - Portfolio Website

Personal portfolio website for Dr. Fabiana Hartchen, Savantin, Super-Recognizerin, and Demokratieforscherin at Ludenscheidt Research.

## Project Overview

This is a React + TypeScript Single Page Application (SPA) built with:
- **React 19** with TypeScript
- **Vite** as build tool
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

The site is deployed on GitHub Pages with custom domain configuration via Cloudflare.

## Local Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The development server runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build is output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages Deployment

This project is configured for GitHub Pages deployment with the following settings:

1. **Repository Settings**: GitHub Pages source is set to `gh-pages` branch or `main` branch with `/ (root)` folder
2. **Vite Configuration**: `vite.config.ts` has `base: './'` for relative paths
3. **Build Output**: All assets are in `dist/` directory

### Cloudflare Configuration

To use Cloudflare with this GitHub Pages site:

#### 1. Add Custom Domain in Cloudflare

1. Log in to Cloudflare Dashboard
2. Select your domain (e.g., `fabiana-hartchen.de` or similar)
3. Go to **DNS** > **Records**
4. Add the following records:

| Type | Name | Content | Proxy Status | TTL |
|------|------|---------|--------------|-----|
| CNAME | www | fabiana-hartchen.github.io. | Proxied (Orange Cloud) | Auto |
| CNAME | @ | fabiana-hartchen.github.io. | Proxied (Orange Cloud) | Auto |

**Note**: The trailing dot after `github.io` is important for FQDN.

#### 2. Configure GitHub Pages Custom Domain

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Custom domain**, add your domain (e.g., `fabiana-hartchen.de` or `www.fabiana-hartchen.de`)
4. Wait for DNS to propagate (may take up to 24 hours)
5. Enable **Enforce HTTPS** in GitHub Pages settings

#### 3. Cloudflare SSL/TLS Configuration

1. In Cloudflare, go to **SSL/TLS** > **Overview**
2. Set encryption mode to **Full (strict)** or **Full**
3. Ensure **Always Use HTTPS** is enabled in Cloudflare > SSL/TLS > Edge Certificates

#### 4. Cloudflare Page Rules (Optional but Recommended)

Add the following Page Rules in Cloudflare > Rules > Page Rules:

1. **Redirect non-www to www** (or vice versa):
   - Pattern: `fabiana-hartchen.de/*`
   - Setting: Forwarding URL (301) → `https://www.fabiana-hartchen.de/$1`

2. **Cache static assets**:
   - Pattern: `www.fabiana-hartchen.de/assets/*`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

#### 5. Cloudflare Security Settings

Recommended security configurations:

- **Bot Fight Mode**: Enable
- **Security Level**: Medium or High
- **Browser Integrity Check**: Enable
- **Hotlink Protection**: Enable (to prevent image hotlinking)

#### 6. Cloudflare Analytics

Enable Cloudflare Analytics to monitor:
- Traffic patterns
- Geographic distribution
- Security events
- Performance metrics

#### 7. Verify DNS Propagation

Use tools like `dig` or online DNS checkers to verify:

```bash
dig www.fabiana-hartchen.de
```

The response should show Cloudflare nameservers.

## SEO Configuration

### robots.txt
The `robots.txt` file is configured to:
- Allow all crawlers
- Specify sitemap location
- Set crawl delays for aggressive bots

### sitemap.xml
The `sitemap.xml` file includes:
- Main page URL
- Last modified date
- Change frequency
- Priority

### Meta Tags
The `index.html` includes:
- Canonical URL
- Open Graph tags for social media
- Twitter Card tags
- Schema.org structured data (Person and WebSite schemas)

## Project Structure

```
fabiana-hartchen.github.io/
├── src/
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── images/              # Image assets
│   ├── Fabiana.png
│   ├── Koblenz-Deutsches_Eck.png
│   └── Menschenmenge.png
├── dist/                # Production build output
├── index.html           # HTML template
├── robots.txt           # Search engine crawler instructions
├── sitemap.xml          # Sitemap for search engines
├── vite.config.ts       # Vite configuration
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion for professional transitions
- **Accessibility**: Semantic HTML with proper ARIA labels
- **Performance**: Optimized build with code splitting
- **SEO**: Complete SEO configuration with structured data

## External Links

All external links are properly configured with:
- `target="_blank"` for opening in new tabs
- `rel="noreferrer"` for security and privacy

## Contact

- Email: fabiana.hartchen@protonmail.com
- Work: Ludenscheidt Research, Koblenz
- Home: Neuwied, Germany

## License

Personal portfolio website - All rights reserved.

## Build Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run clean    # Clean dist directory
npm run lint     # Type checking
```

## Troubleshooting

### Images Not Loading
- Ensure images are in the `images/` directory
- Check that image paths in code are relative: `images/filename.png`
- Verify images are copied to `dist/images/` after build

### Links Not Working
- Check that all external links use HTTPS
- Verify `target="_blank"` and `rel="noreferrer"` are present
- For GitHub Pages, ensure base path is set to `./` in `vite.config.ts`

### Cloudflare 521/522 Errors
- Verify DNS records are correct
- Check SSL/TLS settings in Cloudflare
- Ensure GitHub Pages is enabled and accessible

### Build Errors
- Delete `node_modules/` and run `npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check TypeScript errors with `npm run lint`
