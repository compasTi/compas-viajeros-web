const WHATSAPP_NUMBER = "573000000000";
const destinations = [
  { name: "Guatapé", category: "aventura", label: "Aventura", dates: "12 – 14 julio, 2026", price: "$780.000", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80", alt: "Paisaje de Guatapé" },
  { name: "San Andrés", category: "playa", label: "Playa", dates: "05 – 09 agosto, 2026", price: "$1.890.000", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", alt: "Playa tropical de aguas azules" },
  { name: "Eje Cafetero", category: "naturaleza", label: "Naturaleza", dates: "21 – 24 agosto, 2026", price: "$1.240.000", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", alt: "Montañas del eje cafetero" },
  { name: "Cabo de la Vela", category: "playa", label: "Playa", dates: "10 – 13 septiembre, 2026", price: "$1.450.000", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80", alt: "Paisaje desértico junto al mar" },
  { name: "Ciudad Perdida", category: "aventura", label: "Aventura", dates: "18 – 23 octubre, 2026", price: "$1.680.000", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", alt: "Sendero de montaña" },
  { name: "Cartagena", category: "cultura", label: "Cultura", dates: "06 – 09 noviembre, 2026", price: "$990.000", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80", alt: "Calle colorida de Cartagena" }
];
const grid = document.querySelector("#destination-grid");
const bindWhatsApp = () => document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.onclick = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(link.dataset.whatsapp)}`, "_blank", "noopener");
});
const renderDestinations = (filter = "todos") => {
  grid.innerHTML = destinations.map((destination) => `<article class="destination-card ${filter !== "todos" && destination.category !== filter ? "hidden" : ""}"><div class="card-image"><img src="${destination.image}" alt="${destination.alt}" loading="lazy"><span class="card-category">${destination.label}</span></div><div class="card-content"><h3>${destination.name}</h3><span class="card-meta">${destination.dates}</span><div class="card-footer"><span class="price">Desde ${destination.price}</span><a class="card-link" data-whatsapp="Hola, quiero información del viaje a ${destination.name}">Ver experiencia ↗</a></div></div></article>`).join("");
  bindWhatsApp();
};
document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active");
  renderDestinations(button.dataset.filter);
}));
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".nav").classList.remove("open")));
renderDestinations();
