# Analítica de Compas Viajeros

La web está preparada para Google Analytics 4 (GA4). Para activarla:

1. Entra a [Google Analytics](https://analytics.google.com/) con la cuenta del negocio.
2. Crea una propiedad GA4 y un flujo de datos web para `https://compasviajeros.com`.
3. Copia el ID de medición, con formato `G-XXXXXXXXXX`.
4. Reemplaza `G-XXXXXXXXXX` en `analytics.js`.
5. Publica el cambio en `main`.

Mientras el valor sea `G-XXXXXXXXXX`, la web no carga scripts de Google ni envía datos.

## Eventos incluidos

- `page_view`: visitas y páginas vistas, enviado por GA4.
- `whatsapp_click`: clic en cualquier CTA de WhatsApp, con ubicación y destino.
- `generate_lead`: conversión generada por un clic de WhatsApp.
- `destination_filter`: uso de los filtros del catálogo.
- `navigation_click`: clics de navegación.
- `newsletter_submit`: envío del formulario de novedades.
- `scroll`: llegada aproximada al 90 % de la página.

En GA4 se recomienda marcar `generate_lead` como evento de conversión. Los reportes de usuarios, sesiones, dispositivos, ciudades, fuentes de tráfico y páginas visitadas se habilitan automáticamente después de recibir datos.
