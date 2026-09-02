# Compas Viajeros

Landing page estática para Compas Viajeros, preparada para desplegar directamente en Cloudflare Pages, Netlify o cualquier hosting estático.

## Gestión de destinos

Los destinos se administran en el arreglo `destinations` de `app.js`. Para agregar uno, duplica un objeto y completa `name`, `category`, `label`, `dates`, `price`, `image` y `alt`. Para retirarlo, elimina su objeto. Los filtros se actualizan automáticamente.

Antes de publicar:

1. Cambia `WHATSAPP_NUMBER` por el número real con código de país y sin `+`.
2. Actualiza el dominio canonical y Schema.org en `index.html`.
3. Sustituye las imágenes de Unsplash por fotografías propias.
4. Completa RNT, redes sociales, historia, socios y métodos de pago.

## Publicación

En Cloudflare Pages conecta el repositorio, selecciona `main`, usa preset **None**, deja vacío el comando de build y usa `/` como directorio de salida. `develop` queda para trabajo y previews.