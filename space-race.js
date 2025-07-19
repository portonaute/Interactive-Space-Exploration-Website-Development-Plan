// Space Race specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animated timeline progress
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    function animateTimelineProgress() {
        const scrollPosition = window.scrollY;
        const timelineSection = document.querySelector('.timeline-section');
        const timelineSectionTop = timelineSection.offsetTop;
        const timelineSectionHeight = timelineSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate how far down the timeline section we've scrolled (0 to 1)
        let scrollPercentage = (scrollPosition - timelineSectionTop + windowHeight/2) / timelineSectionHeight;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);
        
        // Update the timeline progress bar
        timelineProgress.style.height = `${scrollPercentage * 100}%`;
    }
    
    // Rocket animation in hero section
    const rocket = document.querySelector('.rocket');
    
    function animateRocket() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
        
        // Move rocket based on scroll position
        if (scrollPosition <= heroHeight) {
            const rocketPosition = 50 + (scrollPosition / heroHeight * 30);
            rocket.style.bottom = `${rocketPosition}%`;
            
            // Rotate rocket slightly based on scroll
            const rocketRotation = scrollPosition / heroHeight * 10 - 5;
            rocket.style.transform = `rotate(${rocketRotation}deg)`;
        }
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
                }, delay * 100);
            }
        });
    }
    
    // Add floating animation to icons
    const floatingIcons = document.querySelectorAll('.floating');
    floatingIcons.forEach(icon => {
        // Random floating speed and delay for each icon
        const floatSpeed = 2 + Math.random() * 2;
        const floatDelay = Math.random() * 2;
        
        icon.style.animationDuration = `${floatSpeed}s`;
        icon.style.animationDelay = `${floatDelay}s`;
    });
    
    // Add pulse animation to event icons
    const pulseIcons = document.querySelectorAll('.pulse');
    pulseIcons.forEach(icon => {
        // Random pulse speed and delay for each icon
        const pulseSpeed = 2 + Math.random() * 3;
        const pulseDelay = Math.random() * 2;
        
        icon.style.animationDuration = `${pulseSpeed}s`;
        icon.style.animationDelay = `${pulseDelay}s`;
    });
    
    // Event listeners
    window.addEventListener('scroll', () => {
        animateTimelineProgress();
        animateRocket();
        checkReveal();
    });
    
    // Initial check
    animateTimelineProgress();
    animateRocket();
    checkReveal();
});
