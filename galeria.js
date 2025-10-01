document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los datos del JSON
    fetch('habitaciones.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const galleryContainer = document.querySelector('.grid-gallery');
            if (!galleryContainer) {
                console.error("Contenedor de galería no encontrado. Asegúrate de que tu HTML tenga un elemento con la clase '.grid-gallery'.");
                return;
            }

            // 2. Iterar sobre cada habitación
            data.habitaciones.forEach(habitacion => {
                // ELIMINAR EL CERO INICIAL (si existe) para que coincida con tus carpetas de GitHub (1 DABEIBA, no 01 DABEIBA)
                // y asegurar que se usen MAYÚSCULAS para coincidir con el case de GitHub.
                const carpeta = habitacion.carpeta.replace(/^0(\d)/, '$1').toUpperCase();

                // 3. Iterar sobre las fotos de esa habitación
                habitacion.fotos.forEach((fotoNombre, index) => {
                    // Crea el elemento <img>
                    const img = document.createElement('img');
                    
                    // Concatena la ruta: Carpeta/nombre_del_archivo.jpg
                    img.src = `${carpeta}/${fotoNombre}`;
                    
                    // Crea un texto alternativo
                    img.alt = `${habitacion.nombre} ${index + 1}`;
                    
                    // Añade la imagen al contenedor
                    galleryContainer.appendChild(img);
                });
            });

            // 4. ELIMINAR EL CONTENIDO HTML MANUAL
            // Ya que el script genera la galería, borra todas las etiquetas <img>
            // que tienes escritas a mano en galeria.html.
        })
        .catch(error => {
            console.error("Error al cargar o parsear habitaciones.json:", error);
        });
});
Paso 2: Limpiar galeria.html (Quitar el código manual)
Tu script galeria.js ahora es el encargado de generar las imágenes. Debes borrar todas las etiquetas <img src="..."> que escribiste manualmente en galeria.html.

Instrucción para galeria.html:

Abre tu archivo galeria.html y elimina todo lo que está entre las etiquetas <div class="grid-gallery">...</div>.

Tu galeria.html DEBE quedar así (casi vacío en la sección de la galería):

HTML

<div class="container mx-auto p-4 max-w-5xl">
        <section id="galeria-seccion" class="mt-12 mb-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-blue-900">Galería de Habitaciones </h2>
            
            <div class="grid-gallery">
                </div>
            
        </section>
    </div>

    <script src="galeria.js"></script> 

</body>
</html>
