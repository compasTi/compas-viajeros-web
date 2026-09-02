const WHATSAPP_NUMBER = "573000000000";
const destinations = [
  { name:"Capurganá",category:"playa",label:"Playa",dates:"14 al 17 Ago",price:"$950.000",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",alt:"Playa tropical de aguas azules"},
  { name:"Desierto de la Tatacoa",category:"aventura",label:"Aventura",dates:"31 Jul al 03 Ago",price:"$750.000",image:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",alt:"Paisaje desértico de Colombia"},
  { name:"Eje Cafetero",category:"naturaleza",label:"Naturaleza",dates:"07 al 10 Ago",price:"$820.000",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",alt:"Paisaje cafetero de Colombia"},
  { name:"Avistamiento de Ballenas",category:"experiencia",label:"Experiencia",dates:"10 al 13 Jul",price:"$1.980.000",image:"https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80",alt:"Avistamiento de ballenas"},
  { name:"Santander",category:"escapada",label:"Escapada",dates:"24 al 27 Jul",price:"$880.000",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",alt:"Paisaje montañoso de Santander"},
  { name:"Huila",category:"naturaleza",label:"Naturaleza",dates:"17 al 20 Jul",price:"$890.000",image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",alt:"Cascada en un paisaje natural"}
];
const card = (d) => `<article class="travel-card" data-category="${d.category}"><div class="travel-image"><img src="${d.image}" alt="${d.alt}" loading="lazy"><span>${d.label}</span></div><div class="travel-info"><h3>${d.name}</h3><p>${d.description || "Paisajes increíbles, experiencias únicas y diversión."}</p><div class="travel-meta">▣　${d.dates}　　☼　4 días / 3 noches</div><div class="travel-bottom"><b>Desde<br><strong>${d.price}</strong></b><a data-whatsapp="Hola, quiero información del viaje a ${d.name}">Ver más</a></div></div></article>`;
const grid = document.querySelector("#destination-grid") || document.querySelector("#featured-grid");
if (grid) grid.innerHTML = destinations.map(card).join("");
const bindWhatsApp = () => document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.onclick = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(link.dataset.whatsapp)}`, "_blank", "noopener");
});
bindWhatsApp();
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".travel-card").forEach((item) => { item.hidden = button.dataset.filter !== "todos" && item.dataset.category !== button.dataset.filter; });
}));
document.querySelector(".menu-toggle")?.addEventListener("click", () => document.querySelector(".topbar nav").classList.toggle("open"));
