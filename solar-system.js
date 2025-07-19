// Solar System specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Planet selector functionality
    const planetButtons = document.querySelectorAll('.planet-select-btn');
    const planetDetails = document.querySelectorAll('.planet-detail');
    
    planetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planet = this.getAttribute('data-planet');
            
            // Update active button
            planetButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected planet details
            planetDetails.forEach(detail => detail.classList.remove('active'));
            document.getElementById(`${planet}-detail`).classList.add('active');
        });
    });
    
    // Add 3D rotation effect to planet visualizations
    const planets3D = document.querySelectorAll('.planet-3d');
    
    planets3D.forEach(planet => {
        // Random rotation speed for each planet
        const rotationSpeed = 0.1 + Math.random() * 0.2;
        let rotation = 0;
        
        function rotatePlanet() {
            rotation += rotationSpeed;
            planet.style.transform = `rotateY(${rotation}deg)`;
            requestAnimationFrame(rotatePlanet);
        }
        
        rotatePlanet();
    });
    
    // Reveal animations for content sections
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            const delay = element.getAttribute('data-delay') || 0;
            
            if (revealTop < windowHeight - revealPoint) {
                setTimeout(() => {
                    element.classList.add('revealed');
                }, delay * 200);
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    // Initial check
    checkReveal();
});
