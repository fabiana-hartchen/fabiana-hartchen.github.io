# AGENTS.md

This document provides context for AI agents working on this project.

## Project Overview

**Project Name**: Dr. Fabiana Hartchen - Personal Portfolio Website

**Type**: Personal portfolio website for Dr. Fabiana Hartchen, a Savantin, Super-Recognizerin, and Demokratieforscherin at Ludenscheidt Research.

**Technology Stack**:
- React 19 with TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

**Deployment**: GitHub Pages with Cloudflare CDN

## Key Context

### Subject Information

**Dr. Fabiana Hartchen** is a fictional persona with the following characteristics:

- **Profession**: Demokratieforscherin (Democracy Researcher) at Ludenscheidt Research
- **Location**: Lives in Neuwied (Raiffeisenring), works in Koblenz, Germany
- **Background**: From Werther, Westfalen; studied Cognitive Science at University of Bielefeld
- **Neurodiversity**: Autistic Savant with eidetic memory, Super-Recognizer ability, IQ 144 (99.8th percentile)
- **Special Abilities**:
  - Eidetic memory (stores every encounter as immersive scene)
  - Super-Recognizer (exceptional face recognition)
  - Pattern recognition in digital media
  - Detects deepfakes and disinformation

### Core Values & Principles

When editing content, maintain:
1. **Authenticity**: Content should feel realistic and grounded
2. **Consistency**: All biographical details must align
3. **Scientific Basis**: Claims about neurodiversity should be scientifically plausible
4. **Personal Voice**: Writing should feel like a personal, authentic narrative
5. **No AI-Generated Generic Content**: Avoid cliché phrases or generic descriptions

### Content Guidelines

#### Biographical Details (MUST MAINTAIN)
- **Origin**: Werther, Westfalen
- **Education**: Cognitive Science, University of Bielefeld
- **Current Location**: Neuwied (Raiffeisenring), Germany
- **Workplace**: Ludenscheidt Research, Koblenz (Anton-Jordan-Straße 3)
- **Commute**: 17km, autofrei via RE5/RE25 train + bus
- **Contact**: fabiana.hartchen@protonmail.com

#### Personal Interests (MUST MAINTAIN)
- **Speedcubing**: Twisty puzzles, CFOP/Roux/ZZ methods, 3x3 BLD
- **Online Gaming**: Phasmophobia (via Proton on NixOS, NOT Xbox)
- **Linux**: NixOS, Coreboot, Hyprland
- **Music**: "Auditive Zuflucht" - music as sensory sanctuary
- **Solidarity**: Support for Shurjoka (Pia Anna Scholz) against KuchenTV harassment

#### External Links (MUST MAINTAIN)
- Ludenscheidt Research: https://ludenscheidt-research.de
- Shurjoka: https://www.twitch.tv/shurjoka
- NixOS: https://nixos.org/
- Proton: https://www.protondb.com/
- Phasmophobia: https://store.steampowered.com/app/739630/Phasmophobia/
- KuchenTV (Tim Heldt): https://de.wikipedia.org/wiki/KuchenTV

## Technical Constraints

### Build Configuration
- **Base Path**: `./` (relative paths for GitHub Pages)
- **Output Directory**: `dist/`
- **Image Paths**: All images must use relative paths `images/filename.png`
- **Fallback Images**: All images have fallback to picsum.photos

### File Structure
```
src/App.tsx          # Main application component
src/main.tsx         # Entry point
index.html           # HTML template with SEO meta tags
robots.txt           # Search engine crawler instructions
sitemap.xml          # Sitemap for search engines
images/              # Image assets (3 files)
dist/                # Production build output
```

### Important Files
- `vite.config.ts`: Vite configuration with base path for GitHub Pages
- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `robots.txt`: SEO crawler configuration
- `sitemap.xml`: SEO sitemap
- `index.html`: HTML with Open Graph, Twitter Cards, Schema.org structured data

## Editing Guidelines

### When Making Content Changes
1. **Verify Authenticity**: Ensure all details are realistic and consistent
2. **Maintain Voice**: Keep the personal, authentic writing style
3. **Check Links**: All external links must use HTTPS and include `target="_blank" rel="noreferrer"`
4. **Update Links**: When adding new terms, link to authoritative sources (Wikipedia, official sites)
5. **Avoid Clichés**: No "passionate about", "dedicated to", etc. - use specific, concrete details

### When Making Technical Changes
1. **Test Build**: Always run `npm run build` after changes
2. **Copy Assets**: Ensure images are copied to `dist/images/` after build
3. **Verify Paths**: All image paths must be relative
4. **Check Responsiveness**: Ensure changes work on desktop, tablet, and mobile

### When Adding New Sections
1. **Maintain Grid Layout**: Personal section uses 5-column grid
2. **Use Consistent Styling**: Follow existing TailwindCSS patterns
3. **Add Animations**: Use Framer Motion with consistent timing
4. **Include Icons**: Use Lucide React icons consistently

## Deployment Process

### Build Command
```bash
npm run build
```

### Post-Build Steps
```bash
Copy-Item 'robots.txt' 'dist\robots.txt'
Copy-Item 'sitemap.xml' 'dist\sitemap.xml'
Copy-Item 'images\*' 'dist\images\' -Recurse -Force
```

### Deployment
- Push to GitHub
- GitHub Actions automatically deploys to GitHub Pages
- Cloudflare CDN caches content
- DNS: CNAME records pointing to fabiana-hartchen.github.io

## SEO Configuration

### Meta Tags (index.html)
- Canonical URL
- Open Graph tags (og:type, og:url, og:title, og:description, og:image)
- Twitter Card tags (twitter:card, twitter:url, twitter:title, twitter:description, twitter:image)
- Meta keywords, author, robots

### Structured Data (JSON-LD)
- Person Schema (name, jobTitle, worksFor, workLocation, homeLocation, knowsAbout, alumniOf)
- WebSite Schema (name, url, description, publisher)

### robots.txt
- Allow all crawlers
- Sitemap reference
- Crawl delays for aggressive bots (AhrefsBot, SemrushBot, MJ12bot)

### sitemap.xml
- Main page URL
- Last modified date
- Change frequency: monthly
- Priority: 1.0

## Common Tasks

### Adding New Links to Bold Terms
1. Find the term in the PersonalSection
2. Wrap with `<a>` tag: `<a href="https://authoritative-source.com" target="_blank" rel="noreferrer" className="text-black hover:text-brand underline decoration-black/30 underline-offset-4 font-semibold">`
3. Use authoritative sources: Wikipedia, official websites, news sites, court sites

### Updating Contact Information
1. Update in App.tsx (PersonalSection and InstitutionSection)
2. Update in index.html (Schema.org structured data)
3. Update in README.md

### Adding New Images
1. Place image in `images/` directory
2. Reference in App.tsx with: `src="images/filename.png"`
3. Add fallback: `onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/..."; }}`
4. Copy to dist/images after build

### Modifying Text Length
1. Maintain key information
2. Keep authentic voice
3. Avoid generic phrases
4. Test responsive layout after changes

## Cloudflare Configuration

### DNS Records
- CNAME www → fabiana-hartchen.github.io (Proxied)
- CNAME @ → fabiana-hartchen.github.io (Proxied)

### SSL/TLS
- Mode: Full or Full (strict)
- Always Use HTTPS: Enabled

### Page Rules (Optional)
- Redirect non-www to www (or vice versa)
- Cache static assets with appropriate TTL

### Security
- Bot Fight Mode: Enabled
- Security Level: Medium or High
- Browser Integrity Check: Enabled
- Hotlink Protection: Enabled

## Troubleshooting

### Build Errors
- Delete `node_modules/` and run `npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check TypeScript errors: `npm run lint`

### Images Not Loading
- Verify images exist in `images/` directory
- Check relative paths in code
- Ensure images are copied to `dist/images/` after build

### Links Not Working
- Verify HTTPS is used
- Check `target="_blank"` and `rel="noreferrer"` are present
- Ensure external URLs are correct

### Cloudflare Issues
- Verify DNS records
- Check SSL/TLS settings
- Ensure GitHub Pages is accessible

## Version Control

### Git Workflow
- Main branch: `main`
- Deployment: GitHub Pages from `main` branch
- Commit messages: Clear, descriptive

### Files to Commit
- Source files (`src/`, `index.html`, configuration files)
- Documentation (`README.md`, `AGENTS.md`)
- SEO files (`robots.txt`, `sitemap.xml`)
- Images (`images/`)

### Files NOT to Commit
- `dist/` (build output)
- `node_modules/` (dependencies)
- `.vite/` (Vite cache)

## Contact

For questions about this project:
- Email: fabiana.hartchen@protonmail.com
- Repository: https://github.com/fabiana-hartchen/fabiana-hartchen.github.io
