# Anti-CGRP Evidence Review

Evidence companion for a systematic review of anti-CGRP monoclonal antibodies in resistant chronic migraine. The site presents preliminary analyses and distinguishes evidence still under review. The public site is served from the `docs/` directory on the `main` branch through GitHub Pages.

## Cómo actualizar la página

- Edita los textos, la autoría, las referencias y las descripciones de los archivos en `docs/content/review.js`.
- Actualiza las estimaciones por estudio, los intervalos de confianza y GRADE en `docs/content/outcomes.js`.
- Reemplaza el PDF del manuscrito en `docs/files/manuscript.pdf` y actualiza su descripción al incorporar una nueva versión.
- Ejecuta `node scripts/validate.mjs` antes de publicar cambios de contenido.
- Conserva el nombre del repositorio y la dirección de GitHub Pages para mantener la validez del QR.
