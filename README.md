# ALXC — Portfolio (Project Subpath)

Deployed at: https://alexanderchia05.github.io/ALXC/

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build static site to `./out` (via output:'export')

## Notes
- `next.config.mjs` uses `basePath:'/ALXC'` and `assetPrefix:'/ALXC/'` for project pages.
- Section nav links use `#id` (no leading slash) so anchors work under subpath.
- Scroll snap is disabled until first user scroll to avoid snapping off the hero.
- Cinematic intro is merged into Main, navs ease-in after intro, and the text caret is hidden globally.

© 2025 ALXC.
