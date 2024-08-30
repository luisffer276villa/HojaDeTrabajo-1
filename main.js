let nombres = ["Luis", "Felipe", "Fernando", "Diego", "Walter", "Lucas", "Gabriel", "Gustavo", "Juan", "Victor"];
let comentarios = [
    "Muy buen lugar para visitar.",
    "La pase fatal con el clima, verificar antes de ir.",
    "Increible la comida y las vistas.",
    "Quisiera poder pasar más días en Cartagena, visiten Getsemaní.",
    "Les recomiendo visitar Boca Grande y su playa.",
    "Pueden visitar la ciudad amurallada si pasan por Getsemaní.",
    "Un viaje largo desde España, pero fue un buen lugar.",
    "Pasar la final de la Copa América en Colombia fue fantástico.",
    "Colombia, nos volveremos a ver pronto.",
    "Las actividades fueron muy buenas, saqué fotos increíbles."
];

function mostrarComentarios(inicial = false) {
    let resultado = "";
    let nombresCopia = [...nombres];
    let comentariosCopia = [...comentarios];
    
    for (let i = 0; i < 3; i++) {
        let indiceNombre, indiceComentario;

        if (inicial) {
            // Para la carga inicial, mostrar los primeros tres comentarios
            indiceNombre = i;
            indiceComentario = i;
        } else {
            // Generar índices aleatorios para la visualización con el botón
            indiceNombre = Math.floor(Math.random() * nombresCopia.length);
            indiceComentario = Math.floor(Math.random() * comentariosCopia.length);
        }

        // Concatenar nombre y comentario en una card de Bootstrap
        resultado += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${nombresCopia[indiceNombre]}</h5>
                    <p class="card-text">${comentariosCopia[indiceComentario]}</p>
                </div>
            </div>
        `;

        // Eliminar el nombre y el comentario ya utilizados para evitar repeticiones
        nombresCopia.splice(indiceNombre, 1);
        comentariosCopia.splice(indiceComentario, 1);
    }

    // Mostrar resultado en el div
    document.getElementById('resultado').innerHTML = resultado;
}

// Mostrar los primeros tres comentarios al cargar la página
window.onload = function() {
    mostrarComentarios(true);
};


// Mostrar tres comentarios aleatorios al presionar el botón
document.getElementById('mostrarComentario').addEventListener('click', function() {
    mostrarComentarios();
});