document.addEventListener('DOMContentLoaded', () => {
    const listaHabitaciones = document.getElementById('lista-habitaciones');
    const galeriaFotos = document.getElementById('galeria-fotos');

    const mostrarFotos = (habitacion) => {
        galeriaFotos.innerHTML = '';
        habitacion.fotos.forEach(foto => {
            const img = document.createElement('img');
            img.src = `${habitacion.carpeta}/${foto}`;
            img.alt = `Foto de ${habitacion.nombre}`;
            img.style.width = '100%';
            galeriaFotos.appendChild(img);
        });
    };

    fetch('habitaciones.json')
        .then(response => response.json())
        .then(data => {
            data.habitaciones.forEach(habitacion => {
                const botonHabitacion = document.createElement('button');
                botonHabitacion.textContent = habitacion.nombre;
                botonHabitacion.addEventListener('click', () => {
                    mostrarFotos(habitacion);
                });
                listaHabitaciones.appendChild(botonHabitacion);
            });
        })
        .catch(error => {
            console.error('Error al cargar las habitaciones:', error);
            listaHabitaciones.innerHTML = '<p>Lo sentimos, no pudimos cargar las habitaciones.</p>';
        });
});
