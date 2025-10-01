document.addEventListener('DOMContentLoaded', () => {
    // RUTA ABSOLUTA CORREGIDA: Apunta a la carpeta '/web/fotos/' en GitHub Pages
    const FOTOS_PATH = "/web/fotos/"; 

    const galleryItems = [
        {
            title: "Habitación Individual #1 (Piso 2)",
            images: [
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.04.41_754b6a2f.JPG", alt: "Cama individual y decoración" },
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.06.34_bb675a63.JPG", alt: "Vista de la habitación y el baño" }
            ]
        },
        {
            title: "Habitación Doble #2 (Piso 3)",
            images: [
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.25.40_0b40ddce.JPG", alt: "Cama doble y ventana" },
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 14.38.13_64d23edf.JPG", alt: "Vista lateral de la habitación" }
            ]
        },
        {
            title: "Habitación Familiar/Cuádruple #3 (Piso 1)",
            images: [
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 15.10.31_4fd41b26.JPG", alt: "Varias camas en la habitación" },
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 15.16.00_666b0cf2.JPG", alt: "Vista del baño privado" }
            ]
        },
        {
            title: "Zonas Comunes: Recepción y Áreas de Estar",
            images: [
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.12.47_cd681c09.JPG", alt: "Zona de recepción o pasillo principal" },
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.12.47_87e9cd56.JPG", alt: "Área de estar común" }
            ]
        },
        {
            title: "Terraza y Exteriores",
            images: [
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 19.15.54_0d857edb.JPG", alt: "Terraza con vista" },
                // CAMBIADO A .JPG
                { src: FOTOS_PATH + "Imagen de WhatsApp 2025-09-30 a las 17.54.31_c951bbaf.JPG", alt: "Fachada o exterior de la casa" }
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
