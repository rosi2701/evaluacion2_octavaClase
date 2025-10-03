console.log("hola");

const trabajos = [
    {
        title: "Batimóvil",
        category: "Industrial/Modelado 3D",
        imagen: "img/BatimovilContexto.jpg"
    },
    {
        title: "Transformaciones corporales",
        category: "Diseño gráfico e ilustración",
        imagen: "img/Taller3Nari.png"
    },
    {
        title: "Festival del Cachureo",
        category: "Diseño de experiencia",
        imagen: "img/Potadafestival.png"
    },
    {
        title: "NgenPet",
        category: "Diseño de productos",
        imagen: "img/NgenPet.jpg"
    },
    {
        title: "Preventips",
        category: "Diseño de sistemas",
        imagen: "img/Preventipsportada.png"
    },
    {
        title: "Scape!",
        category: "Diseño de sistemas",
        imagen: "img/Scape.png"
    },
    {
        title: "Tocador PALADS",
        category: "Diseño Industrial",
        imagen: "img/TocadorPALADS.png"
    },
    {
        title: "Bloody Heart",
        category: "Diseño industrial",
        imagen: "img/BloodyHeart.png"
    }
];



const galleryGrid = document.querySelector(".gallery-grid");

if (galleryGrid) {
    trabajos.forEach(trabajo => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");
        item.innerHTML = `
            <img src="${trabajo.imagen}" alt="${trabajo.title}">
            <div class="gallery-overlay">
                <h3>${trabajo.title}</h3>
                <p>${trabajo.category}</p>
            </div>
        `;
        galleryGrid.appendChild(item);
    });
}
