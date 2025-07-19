document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Add card animation delay
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.setProperty('--card-index', index);
    });
    
    // Interactive features tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to current button and content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Satellite orbit controls
    const altitudeSlider = document.getElementById('altitude-slider');
    const inclinationSlider = document.getElementById('inclination-slider');
    const speedSlider = document.getElementById('speed-slider');
    const orbitPath = document.querySelector('.orbit-path');
    const satellite = document.querySelector('.satellite');
    const altitudeValue = document.getElementById('altitude-value');
    const inclinationValue = document.getElementById('inclination-value');
    const speedValue = document.getElementById('speed-value');
    
    if (altitudeSlider && orbitPath && altitudeValue) {
        altitudeSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            const altitude = 200 + (value * 8); // Scale to 200-1000 km
            const size = 150 + value;
            
            orbitPath.style.width = size + 'px';
            orbitPath.style.height = size + 'px';
            altitudeValue.textContent = altitude;
        });
    }
    
    if (inclinationSlider && orbitPath && inclinationValue) {
        inclinationSlider.addEventListener('input', function() {
            const inclination = parseInt(this.value);
            orbitPath.style.transform = `translate(-50%, -50%) rotateX(${inclination}deg)`;
            inclinationValue.textContent = inclination;
        });
    }
    
    if (speedSlider && satellite && speedValue) {
        speedSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            const speed = 20 - value;
            satellite.style.animationDuration = speed + 's';
            
            let speedText = 'Medium';
            if (value < 7) speedText = 'Slow';
            else if (value > 13) speedText = 'Fast';
            
            speedValue.textContent = speedText;
        });
    }
    
    // Mars rover controls
    const roverControls = document.querySelectorAll('.rover-control');
    const rover = document.querySelector('.rover');
    
    if (roverControls.length > 0 && rover) {
        let roverX = 50;
        let roverY = 50;
        
        roverControls.forEach(control => {
            control.addEventListener('click', function() {
                const direction = this.getAttribute('data-direction');
                
                switch(direction) {
                    case 'up':
                        roverY = Math.max(0, roverY - 5);
                        break;
                    case 'down':
                        roverY = Math.min(100, roverY + 5);
                        break;
                    case 'left':
                        roverX = Math.max(0, roverX - 5);
                        break;
                    case 'right':
                        roverX = Math.min(100, roverX + 5);
                        break;
                }
                
                rover.style.left = roverX + '%';
                rover.style.top = roverY + '%';
                
                // Add dust effect
                const dust = document.createElement('div');
                dust.className = 'dust-particle';
                dust.style.left = roverX + '%';
                dust.style.top = roverY + '%';
                document.querySelector('.mars-dust').appendChild(dust);
                
                // Remove dust after animation
                setTimeout(() => {
                    dust.remove();
                }, 1000);
            });
        });
    }
    
    // ISS module navigation
    const issModules = document.querySelectorAll('.iss-module');
    const moduleButtons = document.querySelectorAll('.module-button');
    const moduleName = document.querySelector('.module-name');
    const moduleDescription = document.querySelector('.module-description');
    const moduleList = document.querySelector('.module-list');
    
    // Module connections data
    const moduleConnections = {
        'Unity (Node 1)': [
            { name: 'Zarya (FGB)', description: 'The first component of the ISS to be launched, providing electrical power, storage, propulsion, and guidance.' },
            { name: 'Tranquility (Node 3)', description: 'Houses life support systems, exercise equipment, and the Cupola observation module.' },
            { name: 'Destiny Laboratory', description: 'The primary research laboratory for U.S. payloads, supporting a wide variety of experiments.' }
        ],
        'Zarya (FGB)': [
            { name: 'Unity (Node 1)', description: 'The first U.S. module of the ISS, connecting the Russian and American segments.' },
            { name: 'Zvezda', description: 'The Russian Service Module that provides living quarters and life support systems.' },
            { name: 'Rassvet', description: 'A Russian module used primarily for cargo storage and as a docking port.' }
        ],
        'Destiny Laboratory': [
            { name: 'Unity (Node 1)', description: 'The first U.S. module of the ISS, connecting the Russian and American segments.' },
            { name: 'Harmony (Node 2)', description: 'Connects the European and Japanese laboratories to the rest of the station.' }
        ],
        'Tranquility (Node 3)': [
            { name: 'Unity (Node 1)', description: 'The first U.S. module of the ISS, connecting the Russian and American segments.' },
            { name: 'Cupola', description: 'A seven-windowed observatory module providing panoramic views of Earth and space.' }
        ],
        'Harmony (Node 2)': [
            { name: 'Destiny Laboratory', description: 'The primary research laboratory for U.S. payloads, supporting a wide variety of experiments.' }
        ],
        'Cupola': [
            { name: 'Tranquility (Node 3)', description: 'Houses life support systems, exercise equipment, and the Cupola observation module.' }
        ],
        'Zvezda': [
            { name: 'Zarya (FGB)', description: 'The first component of the ISS to be launched, providing electrical power, storage, propulsion, and guidance.' }
        ],
        'Rassvet': [
            { name: 'Zarya (FGB)', description: 'The first component of the ISS to be launched, providing electrical power, storage, propulsion, and guidance.' }
        ]
    };
    
    // Module descriptions
    const moduleDescriptions = {
        'Unity (Node 1)': 'The first U.S. module of the ISS, connecting the Russian and American segments.',
        'Zarya (FGB)': 'The first component of the ISS to be launched, providing electrical power, storage, propulsion, and guidance.',
        'Destiny Laboratory': 'The primary research laboratory for U.S. payloads, supporting a wide variety of experiments.',
        'Tranquility (Node 3)': 'Houses life support systems, exercise equipment, and the Cupola observation module.',
        'Harmony (Node 2)': 'Connects the European and Japanese laboratories to the rest of the station.',
        'Cupola': 'A seven-windowed observatory module providing panoramic views of Earth and space.',
        'Zvezda': 'The Russian Service Module that provides living quarters and life support systems.',
        'Rassvet': 'A Russian module used primarily for cargo storage and as a docking port.'
    };
    
    function updateModuleInfo(moduleName) {
        // Update module name and description
        document.querySelector('.module-name').textContent = moduleName;
        document.querySelector('.module-description').textContent = moduleDescriptions[moduleName];
        
        // Update active module in visualization
        issModules.forEach(module => {
            module.classList.remove('active');
            if (module.getAttribute('data-module') === moduleName) {
                module.classList.add('active');
            }
        });
        
        // Update connected modules list
        const connectedModules = moduleConnections[moduleName] || [];
        moduleList.innerHTML = '';
        
        connectedModules.forEach(module => {
            const btn = document.createElement('button');
            btn.className = 'module-button';
            btn.setAttribute('data-module', module.name);
            btn.setAttribute('data-description', module.description);
            btn.textContent = module.name;
            
            btn.addEventListener('click', function() {
                updateModuleInfo(module.name);
            });
            
            moduleList.appendChild(btn);
        });
    }
    
    // Initialize ISS module interaction
    if (issModules.length > 0) {
        issModules.forEach(module => {
            module.addEventListener('click', function() {
                const moduleName = this.getAttribute('data-module');
                updateModuleInfo(moduleName);
            });
        });
    }
    
    if (moduleButtons.length > 0) {
        moduleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const moduleName = this.getAttribute('data-module');
                updateModuleInfo(moduleName);
            });
        });
    }
    
    // Planet comparison
    const planetButtons = document.querySelectorAll('.planet-button');
    const comparisonButtons = document.querySelectorAll('.comparison-button');
    const comparisonResults = document.querySelector('.comparison-results');
    
    if (planetButtons.length > 0 && comparisonButtons.length > 0) {
        // Planet data
        const planetData = {
            mercury: {
                diameter: 4880,
                distance: 57.9,
                day: 58.6,
                year: 88,
                gravity: 0.38,
                temp: 167,
                moons: 0
            },
            venus: {
                diameter: 12104,
                distance: 108.2,
                day: 243,
                year: 225,
                gravity: 0.9,
                temp: 464,
                moons: 0
            },
            earth: {
                diameter: 12756,
                distance: 149.6,
                day: 1,
                year: 365.25,
                gravity: 1,
                temp: 15,
                moons: 1
            },
            mars: {
                diameter: 6792,
                distance: 227.9,
                day: 1.03,
                year: 687,
                gravity: 0.38,
                temp: -65,
                moons: 2
            },
            jupiter: {
                diameter: 142984,
                distance: 778.6,
                day: 0.41,
                year: 4333,
                gravity: 2.53,
                temp: -110,
                moons: 79
            },
            saturn: {
                diameter: 120536,
                distance: 1433.5,
                day: 0.45,
                year: 10759,
                gravity: 1.07,
                temp: -140,
                moons: 82
            },
            uranus: {
                diameter: 51118,
                distance: 2872.5,
                day: 0.72,
                year: 30687,
                gravity: 0.89,
                temp: -195,
                moons: 27
            },
            neptune: {
                diameter: 49528,
                distance: 4495.1,
                day: 0.67,
                year: 60190,
                gravity: 1.14,
                temp: -200,
                moons: 14
            }
        };
        
        let selectedPlanets = [];
        let currentComparison = 'diameter';
        
        // Planet selection
        planetButtons.forEach(button => {
            button.addEventListener('click', function() {
                const planet = this.getAttribute('data-planet');
                
                if (this.classList.contains('selected')) {
                    // Deselect planet
                    this.classList.remove('selected');
                    selectedPlanets = selectedPlanets.filter(p => p !== planet);
                } else {
                    // Select planet (max 3)
                    if (selectedPlanets.length < 3) {
                        this.classList.add('selected');
                        selectedPlanets.push(planet);
                    }
                }
                
                updateComparison();
            });
        });
        
        // Comparison type selection
        comparisonButtons.forEach(button => {
            button.addEventListener('click', function() {
                comparisonButtons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
                
                currentComparison = this.getAttribute('data-type');
                updateComparison();
            });
        });
        
        function updateComparison() {
            if (selectedPlanets.length === 0 || !comparisonResults) return;
            
            comparisonResults.innerHTML = '';
            
            // Get max value for scaling
            let maxValue = 0;
            selectedPlanets.forEach(planet => {
                const value = planetData[planet][currentComparison];
                if (value > maxValue) maxValue = value;
            });
            
            // Create comparison bars
            selectedPlanets.forEach(planet => {
            <response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>