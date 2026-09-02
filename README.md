# Compas Viajeros

Landing page estática para Compas Viajeros, preparada para desplegar directamente en Cloudflare Pages, Netlify o cualquier hosting estático.

## Gestión de destinos con Decap CMS

El catálogo se guarda en `data/destinations.json` y se administra desde `/admin`. Allí se puede agregar, editar, destacar u ocultar un destino con nombre, categoría, fechas, precio, duración, descripción, imagen y texto alternativo. Los cambios se guardan como commits en la rama `develop`; Cloudflare Pages los publica automáticamente cuando esa rama tenga previews configurados.

Para activar el panel:

1. Configura un OAuth de GitHub para Decap CMS y publica un endpoint `/api/auth` que complete el flujo OAuth sin exponer el `client_secret`.
2. Mantén `repo: compasTi/compas-viajeros-web` y `branch: develop` en `admin/config.yml`.
3. Abre `https://compasviajeros.com/admin/` e inicia sesión con una cuenta que tenga permisos de escritura en el repositorio.

La configuración incluida deja lista la interfaz y la colección; el endpoint OAuth es obligatorio porque Cloudflare Pages no proporciona por sí solo autenticación GitHub para Decap CMS.

Antes de publicar:

1. Cambia `WHATSAPP_NUMBER` por el número real con código de país y sin `+`.
2. Actualiza el dominio canonical y Schema.org en `index.html`.
3. Sustituye las imágenes de Unsplash por fotografías propias.
4. Completa RNT, redes sociales, historia, socios y métodos de pago.

## Publicación

En Cloudflare Pages conecta el repositorio, selecciona `main`, usa preset **None**, deja vacío el comando de build y usa `/` como directorio de salida. `develop` queda para trabajo y previews.