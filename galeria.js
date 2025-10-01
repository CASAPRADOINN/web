document.addEventListener('DOMContentLoaded', () => {
    // Definición de la RUTA CORREGIDA: Apunta a la carpeta 'fotos/'
    const FOTOS_PATH = "fotos/"; 

    const galleryItems = [
        {
            title: "Habitación Individual #1 (Piso 2)",
            images: [
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.04.41_754b6a2f.jpg", alt: "Cama individual y decoración" },
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.06.34_bb675a63.jpg", alt: "Vista de la habitación y el baño" }
            ]
        },
        {
            title: "Habitación Doble #2 (Piso 3)",
            images: [
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.25.40_0b40ddce.jpg", alt: "Cama doble y ventana" },
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.38.13_64d23edf.jpg", alt: "Vista lateral de la habitación" }
            ]
        },
        {
            title: "Habitación Familiar/Cuádruple #3 (Piso 1)",
            images: [
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 15.10.31_4fd41b26.jpg", alt: "Varias camas en la habitación" },
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 15.16.00_666b0cf2.jpg", alt: "Vista del baño privado" }
            ]
        },
        {
            title: "Zonas Comunes: Recepción y Áreas de Estar",
            images: [
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.12.47_cd681c09.jpg", alt: "Zona de recepción o pasillo principal" },
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.12.47_87e9cd56.jpg", alt: "Área de estar común" }
            ]
        },
        {
            title: "Terraza y Exteriores",
            images: [
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.15.54_0d857edb.jpg", alt: "Terraza con vista" },
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 17.54.31_c951bbaf.jpg", alt: "Fachada o exterior de la casa" }
            ]
        }
    ];

    const galleryContainer = document.querySelector('.container.mx-auto section#galeria-seccion');

    galleryItems.forEach(item => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('mb-12');

        const h3 = document.createElement('h3');
        h3.classList.add('text-2xl', 'font-semibold', 'mb-4', 'text-gray-800', 'border-b', 'pb-2');
        h3.textContent = item.title;
        sectionDiv.appendChild(h3);

        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-gallery'); 

        item.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src; 
            img.alt = image.alt;
            
            const imgWrapper = document.createElement('div');
            imgWrapper.appendChild(img);
            gridDiv.appendChild(imgWrapper);
        });

        sectionDiv.appendChild(gridDiv);
        galleryContainer.appendChild(sectionDiv);
    });
});
