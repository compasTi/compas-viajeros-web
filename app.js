const WHATSAPP_NUMBER = "573002286553";

const fallbackTestimonials = [
  { name:"Valentina R.", comment:"Una experiencia increíble, todo muy bien organizado, conocí lugares hermosos y hice grandes amigos.", location:"Medellín, Antioquia", image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80", alt:"Viajeros compartiendo una experiencia", active:true },
  { name:"Juan P.", comment:"Compas Viajeros no es solo viajar, es vivir momentos que se quedan en el corazón.", location:"Bogotá, Cundinamarca", image:"https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80", alt:"Viajero disfrutando un destino", active:true },
  { name:"Daniela M.", comment:"La mejor decisión que tomé, volvería a viajar con ustedes mil veces más.", location:"Pereira, Risaralda", image:"https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=700&q=80", alt:"Viajera disfrutando sus vacaciones", active:true },
  { name:"Sebastián G.", comment:"Excelentes guías, destinos increíbles y una energía espectacular en los grupos.", location:"Cali, Valle del Cauca", image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80", alt:"Grupo de viajeros en un destino", active:true }
];

const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
}[character]));

const fallbackDestinations = [
  { name:"Capurganá", category:"playa", label:"Playa", dates:"14 al 17 Ago", price:"$950.000", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", alt:"Playa tropical de aguas azules", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true },
  { name:"Desierto de la Tatacoa", category:"aventura", label:"Aventura", dates:"31 Jul al 03 Ago", price:"$750.000", image:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80", alt:"Paisaje desértico de Colombia", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true },
  { name:"Eje Cafetero", category:"naturaleza", label:"Naturaleza", dates:"07 al 10 Ago", price:"$820.000", image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", alt:"Paisaje cafetero de Colombia", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true },
  { name:"Avistamiento de Ballenas", category:"experiencia", label:"Experiencia", dates:"10 al 13 Jul", price:"$1.980.000", image:"https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80", alt:"Avistamiento de ballenas", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true },
  { name:"Santander", category:"escapada", label:"Escapada", dates:"24 al 27 Jul", price:"$880.000", image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80", alt:"Paisaje montañoso de Santander", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true },
  { name:"Huila", category:"naturaleza", label:"Naturaleza", dates:"17 al 20 Jul", price:"$890.000", image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80", alt:"Cascada en un paisaje natural", duration:"4 días / 3 noches", description:"Paisajes increíbles, experiencias únicas y diversión.", featured:true }
];

const card = (destination) => `
  <article class="travel-card" data-category="${destination.category}" data-tipo="${destination.tipo || "nacional"}">
    <div class="travel-image"><img src="${destination.image}" alt="${destination.alt}" loading="lazy"><span>${destination.label}</span>${destination.tipo === "internacional" ? `<i class="badge-intl">Internacional</i>` : ""}</div>
    <div class="travel-info">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <div class="travel-meta"><span class="meta-line meta-dates"><svg class="ico" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>${escapeHtml(destination.dates)}</span><span class="meta-line meta-duration"><svg class="ico" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>${escapeHtml(destination.duration)}</span></div>
      <div class="travel-bottom"><b>Desde<br><strong>${destination.price}</strong></b><a data-whatsapp="Hola, quiero información del viaje a ${destination.name}" data-destination="${escapeHtml(destination.name)}">Ver más</a></div>
    </div>
  </article>`;

const testimonialCard = (testimonial) => `
  <article>
    <div class="test-image" style="background-image: url('${escapeHtml(testimonial.image)}');" role="img" aria-label="${escapeHtml(testimonial.alt)}"></div>
    <p>“${escapeHtml(testimonial.comment)}”</p>
    <b>— ${escapeHtml(testimonial.name)}</b><small>⌖ ${escapeHtml(testimonial.location)}</small>
  </article>`;

const bindWhatsApp = () => document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.onclick = () => {
    window.compasAnalytics?.event("whatsapp_click", {
      placement: link.className || "link",
      destination: link.dataset.destination || "general"
    });
    window.compasAnalytics?.event("generate_lead", { method: "whatsapp" });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(link.dataset.whatsapp)}`, "_blank", "noopener");
  };
});

const revealTargets = [
  ".section-title",
  ".mission-card",
  ".payment-card",
  ".why-grid article",
  ".test-grid article",
  ".travel-card",
  ".home-cta",
  ".benefit-strip > b",
  ".newsletter",
  ".destination-layout aside",
  ".results-head",
  ".destinations-hero > div",
  "footer > div"
];

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }), { threshold: 0.15, rootMargin: "0px 0px -48px" })
  : null;

const setupReveals = () => {
  document.querySelectorAll(revealTargets.join(",")).forEach((element) => {
    if (element.dataset.revealReady) return;
    element.dataset.revealReady = "true";
    const position = [...element.parentElement.children].filter((sibling) => sibling.dataset.revealReady).indexOf(element);
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(position * 90, 450)}ms`);
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add("revealed");
  });
};

const parsePrice = (price = "") => {
  const digits = String(price).replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
};

const injectDestinationsSchema = (destinations) => {
  if (!document.querySelector("#destination-grid")) return;
  const absolute = (url = "") => url.startsWith("http") ? url : `https://compasviajeros.com${url}`;
  const items = destinations.filter((destination) => destination.active !== false).map((destination, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "TouristTrip",
      name: destination.name,
      description: destination.description,
      image: absolute(destination.image),
      touristType: destination.tipo === "internacional" ? "Internacional" : "Nacional",
      itinerary: { "@type": "ItemList", "name": `${destination.duration || ""}`.trim() || destination.name },
      provider: { "@type": "TravelAgency", name: "Compas Viajeros", url: "https://compasviajeros.com/" },
      ...(parsePrice(destination.price) && {
        offers: {
          "@type": "Offer",
          price: parsePrice(destination.price),
          priceCurrency: "COP",
          availability: "https://schema.org/InStock",
          url: "https://compasviajeros.com/destinos"
        }
      })
    }
  }));
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Destinos de Compas Viajeros",
    itemListElement: items
  });
  document.head.appendChild(script);
};

const render = (destinations) => {
  const activeDestinations = destinations.filter((destination) => destination.active !== false);
  const destinationGrid = document.querySelector("#destination-grid");
  const featuredGrid = document.querySelector("#featured-grid");
  if (destinationGrid) destinationGrid.innerHTML = activeDestinations.map(card).join("");
  if (featuredGrid) featuredGrid.innerHTML = activeDestinations.filter((destination) => destination.featured).slice(0, 6).map(card).join("");
  bindWhatsApp();
  applyFilters();
  setupReveals();
};

const renderTestimonials = (testimonials) => {
  const testimonialsGrid = document.querySelector("#testimonials-grid");
  if (testimonialsGrid) testimonialsGrid.innerHTML = testimonials.filter((testimonial) => testimonial.active !== false).map(testimonialCard).join("");
  setupReveals();
};

fetch("data/destinations.json")
  .then((response) => response.ok ? response.json() : Promise.reject(new Error("Destinations unavailable")))
  .then((data) => { render(data.items || data); injectDestinationsSchema(data.items || data); })
  .catch(() => { render(fallbackDestinations); injectDestinationsSchema(fallbackDestinations); });

fetch("data/testimonials.json")
  .then((response) => response.ok ? response.json() : Promise.reject(new Error("Testimonials unavailable")))
  .then((data) => renderTestimonials(data.items || data))
  .catch(() => renderTestimonials(fallbackTestimonials));

const filters = { category: "todos", tipo: "todos" };
const applyFilters = () => {
  let visible = 0;
  document.querySelectorAll("#destination-grid .travel-card").forEach((item) => {
    item.hidden = (filters.category !== "todos" && item.dataset.category !== filters.category)
      || (filters.tipo !== "todos" && item.dataset.tipo !== filters.tipo);
    if (!item.hidden) visible += 1;
  });
  const emptyNote = document.querySelector(".empty-note");
  if (emptyNote) emptyNote.hidden = visible !== 0;
};

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  window.compasAnalytics?.event("destination_filter", { category: button.dataset.filter });
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  filters.category = button.dataset.filter;
  applyFilters();
}));

const setTypeFilter = (tipo, updateUrl = true) => {
  if (!["todos", "nacional", "internacional"].includes(tipo)) tipo = "todos";
  filters.tipo = tipo;
  document.querySelectorAll("[data-type]").forEach((button) => button.classList.toggle("active", button.dataset.type === tipo));
  applyFilters();
  if (updateUrl) {
    const url = new URL(window.location);
    if (tipo === "todos") url.searchParams.delete("tipo");
    else url.searchParams.set("tipo", tipo);
    window.history.replaceState(null, "", url);
  }
};

document.querySelectorAll("[data-type]").forEach((button) => button.addEventListener("click", () => {
  window.compasAnalytics?.event("destination_type_filter", { tipo: button.dataset.type });
  setTypeFilter(button.dataset.type);
}));

const initialType = new URLSearchParams(window.location.search).get("tipo");
if (initialType) setTypeFilter(initialType, false);

document.querySelector(".menu-toggle")?.addEventListener("click", () => document.querySelector(".topbar nav").classList.toggle("open"));

document.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => {
  window.compasAnalytics?.event("navigation_click", { label: link.textContent.trim(), destination: link.href });
}));

document.querySelectorAll("form").forEach((form) => form.addEventListener("submit", () => {
  window.compasAnalytics?.event("newsletter_submit");
}));

const trackScrollDepth = () => {
  let tracked = false;
  window.addEventListener("scroll", () => {
    if (!tracked && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * 0.9) {
      tracked = true;
      window.compasAnalytics?.event("scroll", { percent_scrolled: 90 });
    }
  }, { passive: true });
};

trackScrollDepth();
setupReveals();
