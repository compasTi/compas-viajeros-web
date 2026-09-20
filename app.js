const WHATSAPP_NUMBER = "5730002286553";

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
  <article class="travel-card" data-category="${destination.category}">
    <div class="travel-image"><img src="${destination.image}" alt="${destination.alt}" loading="lazy"><span>${destination.label}</span></div>
    <div class="travel-info">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <div class="travel-meta">▣　${destination.dates}　　☼　${destination.duration}</div>
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

const render = (destinations) => {
  const activeDestinations = destinations.filter((destination) => destination.active !== false);
  const destinationGrid = document.querySelector("#destination-grid");
  const featuredGrid = document.querySelector("#featured-grid");
  if (destinationGrid) destinationGrid.innerHTML = activeDestinations.map(card).join("");
  if (featuredGrid) featuredGrid.innerHTML = activeDestinations.filter((destination) => destination.featured).slice(0, 6).map(card).join("");
  bindWhatsApp();
};

const renderTestimonials = (testimonials) => {
  const testimonialsGrid = document.querySelector("#testimonials-grid");
  if (testimonialsGrid) testimonialsGrid.innerHTML = testimonials.filter((testimonial) => testimonial.active !== false).map(testimonialCard).join("");
};

fetch("data/destinations.json")
  .then((response) => response.ok ? response.json() : Promise.reject(new Error("Destinations unavailable")))
  .then((data) => render(data.items || data))
  .catch(() => render(fallbackDestinations));

fetch("data/testimonials.json")
  .then((response) => response.ok ? response.json() : Promise.reject(new Error("Testimonials unavailable")))
  .then((data) => renderTestimonials(data.items || data))
  .catch(() => renderTestimonials(fallbackTestimonials));

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  window.compasAnalytics?.event("destination_filter", { category: button.dataset.filter });
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".travel-card").forEach((item) => { item.hidden = button.dataset.filter !== "todos" && item.dataset.category !== button.dataset.filter; });
}));

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
