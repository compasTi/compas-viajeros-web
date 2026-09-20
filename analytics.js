const MEASUREMENT_ID = "G-WV7N2ZKK5F";
const analyticsEnabled = /^G-[A-Z0-9]+$/.test(MEASUREMENT_ID) && MEASUREMENT_ID !== "G-XXXXXXXXXX";

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag() {
  window.dataLayer.push(arguments);
};

window.compasAnalytics = {
  event(name, parameters = {}) {
    if (analyticsEnabled) window.gtag("event", name, parameters);
  }
};

if (analyticsEnabled) {
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
