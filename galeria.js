document.addEventListener('DOMContentLoaded', () => {
    // RUTA ABSOLUTA CORRECTA: /web/fotos/
    const FOTOS_PATH = "/web/fotos/"; 

    // Función que transforma el título a minúsculas y sin espacios para el nombre de archivo
    const cleanName = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, ''); 
    };

    // La extensión del archivo ahora es .jpg.jpg
    const IMAGE_SUFFIX_1 = "1.jpg.jpg"; 
    const IMAGE_SUFFIX_2 = "2.jpg.jpg"; 

    const galleryItems = [
        // ----------------------------------------------------
        // TÍTULOS Y ARCHIVOS DE LAS 20 HABITACIONES
        // ----------------------------------------------------
        
        // 1. DABEIDA
        {
            title: "DABEIDA", 
            images: [
                { src: FOTOS_PATH + cleanName("DABEIDA") + IMAGE_SUFFIX, alt: "Habitación Dabeida vista A" },
                { src: FOTOS_PATH + cleanName("DABEIDA") + IMAGE_SUFFIX_2, alt: "Habitación Dabeida vista B" }
            ]
        },
        
        // 2. BARBOSA
        {
            title: "BARBOSA", 
            images: [
                { src: FOTOS_PATH + cleanName("BARBOSA") + IMAGE_SUFFIX, alt: "Habitación Barbosa vista A" },
                { src: FOTOS_PATH + cleanName("BARBOSA") + IMAGE_SUFFIX_2, alt: "Habitación Barbosa vista B" }
            ]
        },
        
        // 3. BELMIRA
        {
            title: "BELMIRA", 
            images: [
                { src: FOTOS_PATH + cleanName("BELMIRA") + IMAGE_SUFFIX, alt: "Habitación Belmira vista A" },
                { src: FOTOS_PATH + cleanName("BELMIRA") + IMAGE_SUFFIX_2, alt: "Habitación Belmira vista B" }
            ]
        },

        // 4. SANTA FE DE ANTIOQUIA
        {
            title: "SANTA FE DE ANTIOQUIA", 
            images: [
                { src: FOTOS_PATH + cleanName("SANTAFEDEANTIOQUIA") + IMAGE_SUFFIX, alt: "Habitación Santa Fe de Antioquia vista A" },
                { src: FOTOS_PATH + cleanName("SANTAFEDEANTIOQUIA") + IMAGE_SUFFIX_2, alt: "Habitación Santa Fe de Antioquia vista B" }
            ]
        },
        
        // 5. RIONEGRO
        {
            title: "RIONEGRO", 
            images: [
                { src: FOTOS_PATH + cleanName("RIONEGRO") + IMAGE_SUFFIX, alt: "Habitación Rionegro vista A" },
                { src: FOTOS_PATH + cleanName("RIONEGRO") + IMAGE_SUFFIX_2, alt: "Habitación Rionegro vista B" }
            ]
        },

        // 6. MARINILLA
        {
            title: "MARINILLA", 
            images: [
                { src: FOTOS_PATH + cleanName("MARINILLA") + IMAGE_SUFFIX, alt: "Habitación Marinilla vista A" },
                { src: FOTOS_PATH + cleanName("MARINILLA") + IMAGE_SUFFIX_2, alt: "Habitación Marinilla vista B" }
            ]
        },
        
        // 7. LA CEJA
        {
            title: "LA CEJA", 
            images: [
                { src: FOTOS_PATH + cleanName("LACEJA") + IMAGE_SUFFIX, alt: "Habitación La Ceja vista A" },
                { src: FOTOS_PATH + cleanName("LACEJA") + IMAGE_SUFFIX_2, alt: "Habitación La Ceja vista B" }
            ]
        },
        
        // 8. SAN CARLOS
        {
            title: "SAN CARLOS", 
            images: [
                { src: FOTOS_PATH + cleanName("SANCARLOS") + IMAGE_SUFFIX, alt: "Habitación San Carlos vista A" },
                { src: FOTOS_PATH + cleanName("SANCARLOS") + IMAGE_SUFFIX_2, alt: "Habitación San Carlos vista B" }
            ]
        },
        
        // 9. URRAO
        {
            title: "URRAO", 
            images: [
                { src: FOTOS_PATH + cleanName("URRAO") + IMAGE_SUFFIX, alt: "Habitación Urrao vista A" },
                { src: FOTOS_PATH + cleanName("URRAO") + IMAGE_SUFFIX_2, alt: "Habitación Urrao vista B" }
            ]
        },
        
        // 10. GUARNE
        {
            title: "GUARNE", 
            images: [
                { src: FOTOS_PATH + cleanName("GUARNE") + IMAGE_SUFFIX, alt: "Habitación Guarne vista A" },
                { src: FOTOS_PATH + cleanName("GUARNE") + IMAGE_SUFFIX_2, alt: "Habitación Guarne vista B" }
            ]
        },
        
        // 11. SOPETRAN
        {
            title: "SOPETRAN", 
            images: [
                { src: FOTOS_PATH + cleanName("SOPETRAN") + IMAGE_SUFFIX, alt: "Habitación Sopetran vista A" },
                { src: FOTOS_PATH + cleanName("SOPETRAN") + IMAGE_SUFFIX_2, alt: "Habitación Sopetran vista B" }
            ]
        },
        
        // 12. LA PINTADA
        {
            title: "LA PINTADA", 
            images: [
                { src: FOTOS_PATH + cleanName("LAPINTADA") + IMAGE_SUFFIX, alt: "Habitación La Pintada vista A" },
                { src: FOTOS_PATH + cleanName("LAPINTADA") + IMAGE_SUFFIX_2, alt: "Habitación La Pintada vista B" }
            ]
        },
        
        // 13. SAN PEDRO DE LOS MILAGROS
        {
            title: "SAN PEDRO DE LOS MILAGROS", 
            images: [
                { src: FOTOS_PATH + cleanName("SANPEDRODELOSMILAGROS") + IMAGE_SUFFIX, alt: "Habitación San Pedro vista A" },
                { src: FOTOS_PATH + cleanName("SANPEDRODELOSMILAGROS") + IMAGE_SUFFIX_2, alt: "Habitación San Pedro vista B" }
            ]
        },
        
        // 14. ENVIGADO
        {
            title: "ENVIGADO", 
            images: [
                { src: FOTOS_PATH + cleanName("ENVIGADO") + IMAGE_SUFFIX, alt: "Habitación Envigado vista A" },
                { src: FOTOS_PATH + cleanName("ENVIGADO") + IMAGE_SUFFIX_2, alt: "Habitación Envigado vista B" }
            ]
        },
        
        // 15. COPACABANA
        {
            title: "COPACABANA", 
            images: [
                { src: FOTOS_PATH + cleanName("COPACABANA") + IMAGE_SUFFIX, alt: "Habitación Copacabana vista A" },
                { src: FOTOS_PATH + cleanName("COPACABANA") + IMAGE_SUFFIX_2, alt: "Habitación Copacabana vista B" }
            ]
        },

        // 16. ITAGUI
        {
            title: "ITAGUI", 
            images: [
                { src: FOTOS_PATH + cleanName("ITAGUI") + IMAGE_SUFFIX, alt: "Habitación Itagui vista A" },
                { src: FOTOS_PATH + cleanName("ITAGUI") + IMAGE_SUFFIX_2, alt: "Habitación Itagui vista B" }
            ]
        },
        
        // 17. CANDELARIA
        {
            title: "CANDELARIA", 
            images: [
                { src: FOTOS_PATH + cleanName("CANDELARIA") + IMAGE_SUFFIX, alt: "Habitación Candelaria vista A" },
                { src: FOTOS_PATH + cleanName("CANDELARIA") + IMAGE_SUFFIX_2, alt: "Habitación Candelaria vista B" }
            ]
        },
        
        // 18. EL POBLADO
        {
            title: "EL POBLADO", 
            images: [
                { src: FOTOS_PATH + cleanName("ELPOBLADO") + IMAGE_SUFFIX, alt: "Habitación El Poblado vista A" },
                { src: FOTOS_PATH + cleanName("ELPOBLADO") + IMAGE_SUFFIX_2, alt: "Habitación El Poblado vista B" }
            ]
        },
        
        // 19. CARMEN DE VIBORAL
        {
            title: "CARMEN DE VIBORAL", 
            images: [
                { src: FOTOS_PATH + cleanName("CARMENDEVIBORAL") + IMAGE_SUFFIX, alt: "Habitación Carmen de Viboral vista A" },
                { src: FOTOS_PATH + cleanName("CARMENDEVIBORAL") + IMAGE_SUFFIX_2, alt: "Habitación Carmen de Viboral vista B" }
            ]
        },
        
        // 20. LAURELES
        {
            title: "LAURELES" 
            images: [
                { src: FOTOS_PATH + cleanName("LAURELES") + IMAGE_SUFFIX, alt: "Habitación Laureles vista A" },
                { src: FOTOS_PATH + cleanName("LAURELES") + IMAGE_SUFFIX_2, alt: "Habitación Laureles vista B" }
            ]
        }
        
        // ----------------------------------------------------
    ];

    const galleryContainer = document.querySelector('.container.mx-auto section#galeria-seccion');

    galleryItems.forEach(item => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('mb-12');

        const h3 = document.createElement('h3');
        h3.classList.add('text-3xl', 'font-bold', 'mb-6', 'text-blue-900', 'border-b-4', 'border-amber-500', 'pb-2'); 
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
