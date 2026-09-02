const WHATSAPP_NUMBER = "573000000000";

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
      <div class="travel-bottom"><b>Desde<br><strong>${destination.price}</strong></b><a data-whatsapp="Hola, quiero información del viaje a ${destination.name}">Ver más</a></div>
    </div>
  </article>`;

const bindWhatsApp = () => document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.onclick = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(link.dataset.whatsapp)}`, "_blank", "noopener");
});

const render = (destinations) => {
  const activeDestinations = destinations.filter((destination) => destination.active !== false);
  const destinationGrid = document.querySelector("#destination-grid");
  const featuredGrid = document.querySelector("#featured-grid");
  if (destinationGrid) destinationGrid.innerHTML = activeDestinations.map(card).join("");
  if (featuredGrid) featuredGrid.innerHTML = activeDestinations.filter((destination) => destination.featured).slice(0, 6).map(card).join("");
  bindWhatsApp();
};

fetch("data/destinations.json")
  .then((response) => response.ok ? response.json() : Promise.reject(new Error("Destinations unavailable")))
  .then((data) => render(data.items || data))
  .catch(() => render(fallbackDestinations));

document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".travel-card").forEach((item) => { item.hidden = button.dataset.filter !== "todos" && item.dataset.category !== button.dataset.filter; });
}));

document.querySelector(".menu-toggle")?.addEventListener("click", () => document.querySelector(".topbar nav").classList.toggle("open"));
