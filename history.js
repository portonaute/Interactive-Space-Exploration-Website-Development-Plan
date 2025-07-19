// History specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Era selector functionality
    const eraButtons = document.querySelectorAll('.era-btn');
    const timelineEras = document.querySelectorAll('.timeline-era');
    
    eraButtons.forEach(button => {
        button.addEventListener('click', function() {
            const era = this.getAttribute('data-era');
            
            // Update active button
            eraButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected era timeline
            timelineEras.forEach(timelineEra => timelineEra.classList.remove('active'));
            document.getElementById(`${era}-era`).classList.add('active');
        });
    });
    
    // Animated timeline scroll effect
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    function animateTimelineOnScroll() {
        timelineEvents.forEach(event => {
            const eventPosition = event.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (eventPosition < screenPosition) {
                event.classList.add('animate');
            }
        });
    }
    
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
    
    window.addEventListener('scroll', () => {
        animateTimelineOnScroll();
        checkReveal();
    });
    
    // Initial check
    animateTimelineOnScroll();
    checkReveal();
    
    // Add floating animation to era icons
    const eraIcons = document.querySelectorAll('.era-icon');
    eraIcons.forEach(icon => {
        // Random floating speed and delay for each icon
        const floatSpeed = 2 + Math.random() * 2;
        const floatDelay = Math.random() * 2;
        
        icon.style.animationDuration = `${floatSpeed}s`;
        icon.style.animationDelay = `${floatDelay}s`;
    });
});
