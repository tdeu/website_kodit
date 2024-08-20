// Sélectionnez les éléments HTML à animer
const header = document.querySelector('header');
const sections = document.querySelectorAll('.content');

// Fonction pour mettre à jour la position de l'arrière-plan en fonction du défilement
function updateParallax() {
    const scrollPosition = window.scrollY;

    // Appliquer le déplacement parallaxe à l'en-tête
    header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';

    // Appliquer le déplacement parallaxe aux sections
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        const distanceFromTop = offsetTop - scrollPosition;
        const parallaxAmount = distanceFromTop * 0.2; // Ajustez le facteur de parallaxe selon votre préférence
        section.style.backgroundPositionY = parallaxAmount + 'px';
    });
}

// Écouter l'événement de défilement de la fenêtre et appeler la fonction de mise à jour
window.addEventListener('scroll', updateParallax);
