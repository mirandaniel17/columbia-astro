---
title: 'Cursos y Carrera'
description: 'Ven y aprovecha los descuentos en Diseño Gráfico y mucho más.'
pubDate: 'Jun 19 2024'
heroImage: '/descuento.jpg'
---

<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="/word.jpg" class="d-block w-100" alt="Word Image" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal(this, 'Esta es la biografía para la imagen de Word.')">
        </div>
        <div class="carousel-item">
            <img src="/contaduria.jpg" class="d-block w-100" alt="Contaduria Image" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal(this, 'Esta es la biografía para la imagen de Contaduría.')">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

<!-- Modal -->
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body text-center"> <!-- Centramos el texto -->
                <img id="modalImage" src="" class="img-fluid" alt="Modal Image">
                <p id="modalBio" class="mt-3"></p> <!-- Aquí se mostrará la biografía -->
            </div>
        </div>
    </div>
</div>

<style>
.carousel {
    max-width: 600px; /* Ancho máximo para el carrusel */
    margin: 20px auto; /* Centrar el carrusel */
}

.carousel-item img {
    object-fit: cover; /* Asegura que la imagen se ajuste sin distorsionarse */
    border-radius: 5px; /* Bordes redondeados */
}

.modal-body {
    display: flex;
    flex-direction: column; /* Disposición en columna */
    align-items: center; /* Centrar horizontalmente */
    justify-content: center; /* Centrar verticalmente */
}

.modal-body img {
    max-width: 100%; /* Asegura que la imagen no exceda el ancho del modal */
    height: auto; /* Mantiene la proporción de la imagen */
}
</style>

<!-- Asegúrate de incluir Bootstrap CSS y JS en tu proyecto -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
function openModal(image, bio) {
    const modalImage = document.getElementById('modalImage');
    const modalBio = document.getElementById('modalBio');
    modalImage.src = image.src; // Establece la fuente de la imagen del modal a la de la imagen clicada
    modalBio.textContent = bio; // Establece el texto de la biografía
}
</script>
