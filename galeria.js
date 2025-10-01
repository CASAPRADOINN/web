document.addEventListener('DOMContentLoaded', () => {
    // RUTA ABSOLUTA CORRECTA: /web/fotos/
    const FOTOS_PATH = "/web/fotos/"; 

    // Función para limpiar el nombre de la habitación (eliminar espacios y acentos)
    // para que coincida con el nombre de archivo (ej. "LA CEJA" -> "laceja")
    const cleanName = (title) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, '') // Elimina espacios
            .replace(/[áéíóúüñ]/g, (match) => { // Reemplaza acentos
                switch (match) {
                    case 'á': return 'a';
                    case 'é': return 'e';
                    case 'í': return 'i';
                    case 'ó': return 'o';
                    case 'ú': return 'u';
                    default: return match;
                }
            });
    };

    const galleryItems = [
        // ----------------------------------------------------
        // TÍTULOS Y ARCHIVOS DE LAS 20 HABITACIONES
        // ----------------------------------------------------
        
        // 1. DABEIDA
        {
            title: "DABEIDA", 
            images: [
                { src: FOTOS_PATH + cleanName("DABEIDA") + "1.jpg", alt: "Habitación Dabeida vista A" },
                { src: FOTOS_PATH + cleanName("DABEIDA") + "2.jpg", alt: "Habitación Dabeida vista B" }
            ]
        },
        
        // 2. BARBOSA
        {
            title: "BARBOSA", 
            images: [
                { src: FOTOS_PATH + cleanName("BARBOSA") + "1.jpg", alt: "Habitación Barbosa vista A" },
                { src: FOTOS_PATH + cleanName("BARBOSA") + "2.jpg", alt: "Habitación Barbosa vista B" }
            ]
        },
        
        // 3. BELMIRA
        {
            title: "BELMIRA", 
            images: [
                { src: FOTOS_PATH + cleanName("BELMIRA") + "1.jpg", alt: "Habitación Belmira vista A" },
                { src: FOTOS_PATH + cleanName("BELMIRA") + "2.jpg", alt: "Habitación Belmira vista B" }
            ]
        },

        // 4. SANTA FE DE ANTIOQUIA
        {
            title: "SANTA FE DE ANTIOQUIA", 
            images: [
                { src: FOTOS_PATH + cleanName("SANTA FEDE ANTIOQUIA") + "1.jpg", alt: "Habitación Santa Fe de Antioquia vista A" },
                { src: FOTOS_PATH + cleanName("SANTA FEDE ANTIOQUIA") + "2.jpg", alt: "Habitación Santa Fe de Antioquia vista B" }
            ]
        },
        
        // 5. RIONEGRO
        {
            title: "RIONEGRO", 
            images: [
                { src: FOTOS_PATH + cleanName("RIONEGRO") + "1.jpg", alt: "Habitación Rionegro vista A" },
                { src: FOTOS_PATH + cleanName("RIONEGRO") + "2.jpg", alt: "Habitación Rionegro vista B" }
            ]
        },

        // 6. MARINILLA
        {
            title: "MARINILLA", 
            images: [
                { src: FOTOS_PATH + cleanName("MARINILLA") + "1.jpg", alt: "Habitación Marinilla vista A" },
                { src: FOTOS_PATH + cleanName("MARINILLA") + "2.jpg", alt: "Habitación Marinilla vista B" }
            ]
        },
        
        // 7. LA CEJA
        {
            title: "LA CEJA", 
            images: [
                { src: FOTOS_PATH + cleanName("LA CEJA") + "1.jpg", alt: "Habitación La Ceja vista A" },
                { src: FOTOS_PATH + cleanName("LA CEJA") + "2.jpg", alt: "Habitación La Ceja vista B" }
            ]
        },
        
        // 8. SAN CARLOS
        {
            title: "SAN CARLOS", 
            images: [
                { src: FOTOS_PATH + cleanName("SAN CARLOS") + "1.jpg", alt: "Habitación San Carlos vista A" },
                { src: FOTOS_PATH + cleanName("SAN CARLOS") + "2.jpg", alt: "Habitación San Carlos vista B" }
            ]
        },
        
        // 9. URRAO
        {
            title: "URRAO", 
            images: [
                { src: FOTOS_PATH + cleanName("URRAO") + "1.jpg", alt: "Habitación Urrao vista A" },
                { src: FOTOS_PATH + cleanName("URRAO") + "2.jpg", alt: "Habitación Urrao vista B" }
            ]
        },
        
        // 10. GUARNE
        {
            title: "GUARNE", 
            images: [
                { src: FOTOS_PATH + cleanName("GUARNE") + "1.jpg", alt: "Habitación Guarne vista A" },
                { src: FOTOS_PATH + cleanName("GUARNE") + "2.jpg", alt: "Habitación Guarne vista B" }
            ]
        },
        
        // 11. SOPETRAN
        {
            title: "SOPETRAN", 
            images: [
                { src: FOTOS_PATH + cleanName("SOPETRAN") + "1.jpg", alt: "Habitación Sopetran vista A" },
                { src: FOTOS_PATH + cleanName("SOPETRAN") + "2.jpg", alt: "Habitación Sopetran vista B" }
            ]
        },
        
        // 12. LA PINTADA
        {
            title: "LA PINTADA", 
            images: [
                { src: FOTOS_PATH + cleanName("LA PINTADA") + "1.jpg", alt: "Habitación La Pintada vista A" },
                { src: FOTOS_PATH + cleanName("LA PINTADA") + "2.jpg", alt: "Habitación La Pintada vista B" }
            ]
        },
        
        // 13. SAN PEDRO DE LOS MILAGROS
        {
            title: "SAN PEDRO DE LOS MILAGROS", 
            images: [
                { src: FOTOS_PATH + cleanName("SAN PEDRODELOSMILAGROS") + "1.jpg", alt: "Habitación San Pedro vista A" },
                { src: FOTOS_PATH + cleanName("SAN PEDRODELOSMILAGROS") + "2.jpg", alt: "Habitación San Pedro vista B" }
            ]
        },
        
        // 14. ENVIGADO
        {
            title: "ENVIGADO", 
            images: [
                { src: FOTOS_PATH + cleanName("ENVIGADO") + "1.jpg", alt: "Habitación Envigado vista A" },
                { src: FOTOS_PATH + cleanName("ENVIGADO") + "2.jpg", alt: "Habitación Envigado vista B" }
            ]
        },
        
        // 15. COPACABANA
        {
            title: "COPACABANA", 
            images: [
                { src: FOTOS_PATH + cleanName("COPACABANA") + "1.jpg", alt: "Habitación Copacabana vista A" },
                { src: FOTOS_PATH + cleanName("COPACABANA") + "2.jpg", alt: "Habitación Copacabana vista B" }
            ]
        },

        // 16. ITAGUI
        {
            title: "ITAGUI", 
            images: [
                { src: FOTOS_PATH + cleanName("ITAGUI") + "1.jpg", alt: "Habitación Itagui vista A" },
                { src: FOTOS_PATH + cleanName("ITAGUI") + "2.jpg", alt: "Habitación Itagui vista B" }
            ]
        },
        
        // 17. CANDELARIA
        {
            title: "CANDELARIA", 
            images: [
                { src: FOTOS_PATH + cleanName("CANDELARIA") + "1.jpg", alt: "Habitación Candelaria vista A" },
                { src: FOTOS_PATH + cleanName("CANDELARIA") + "2.jpg", alt: "Habitación Candelaria vista B" }
            ]
        },
        
        // 18. EL POBLADO
        {
            title: "EL POBLADO", 
            images: [
                { src: FOTOS_PATH + cleanName("EL POBLADO") + "1.jpg", alt: "Habitación El Poblado vista A" },
                { src: FOTOS_PATH + cleanName("EL POBLADO") + "2.jpg", alt: "Habitación El Poblado vista B" }
            ]
        },
        
        // 19. CARMEN DE VIBORAL
        {
            title: "CARMEN DE VIBORAL", 
            images: [
                { src: FOTOS_PATH + cleanName("CARMEN DEVIBORAL") + "1.jpg", alt: "Habitación Carmen de Viboral vista A" },
                { src: FOTOS_PATH + cleanName("CARMEN DEVIBORAL") + "2.jpg", alt: "Habitación Carmen de Viboral vista B" }
            ]
        },
        
        // 20. LAURELES
        {
            title: "LAURELES", 
            images: [
                { src: FOTOS_PATH + cleanName("LAURELES") + "1.jpg", alt: "Habitación Laureles vista A" },
                { src: FOTOS_PATH + cleanName("LAURELES") + "2.jpg", alt: "Habitación Laureles vista B" }
            ]
        }
        
        // ----------------------------------------------------
        // FIN DE LA LISTA
        // ----------------------------------------------------
    ];

    const galleryContainer = document.querySelector('.container.mx-auto section#galeria-seccion');

    galleryItems.forEach(item => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('mb-12');

        const h3 = document.createElement('h3');
        // Estilo para el título de la habitación
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
    });
});
