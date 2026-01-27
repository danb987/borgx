// Main JavaScript functionality for AI Met Consulting website

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticleSystem();
    initTypedText();
    initScrollAnimations();
    initSplittingText();
    initContactForm();
});

// Particle system for hero background
function initParticleSystem() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
    // p5.js sketch
    new p5(function(p) {
        p.setup = function() {
            p.createCanvas(window.innerWidth, window.innerHeight, canvas);
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 6),
                    opacity: p.random(0.3, 0.8),
                    color: p.random(['#E67E22', '#FF6B35', '#F39C12'])
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Mouse interaction
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    particle.vx += dx * 0.0001;
                    particle.vy += dy * 0.0001;
                }
                
                // Draw particle
                p.fill(particle.color + Math.floor(particle.opacity * 255).toString(16));
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(other => {
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        const opacity = (150 - distance) / 150 * 0.3;
                        p.stroke('#E67E22' + Math.floor(opacity * 255).toString(16));
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                });
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
        
        p.mouseMoved = function() {
            mouseX = p.mouseX;
            mouseY = p.mouseY;
        };
    }, canvas);
}

// Typed text animation for tagline
function initTypedText() {
    const typedElement = document.getElementById('typed-tagline');
    if (!typedElement) return;
    
    new Typed('#typed-tagline', {
        strings: [
            'Human Expertise + Machine Intelligence = Industrial Impact',
            'Transforming Industry Through Artificial Intelligence',
            'From Traditional Processes to Intelligent Systems'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Initialize text splitting for animations
function initSplittingText() {
    if (typeof Splitting !== 'undefined') {
        Splitting();
    }
}

// Scroll animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Animate elements with stagger
    const cardElements = document.querySelectorAll('.card-hover');
    cardElements.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Contact modal functionality
function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Animate modal in
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        // Animate modal out
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInCubic',
            complete: () => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = '#27AE60';
                
                setTimeout(() => {
                    closeContactModal();
                    form.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 1500);
            }, 1000);
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeContactModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeContactModal();
        }
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/98');
        navbar.classList.remove('bg-white/95');
    } else {
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('bg-white/98');
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Add intersection observer for performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        }
    });
    observer.observe({ entryTypes: ['measure'] });
}

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Non-critical error:', e.message);
});

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'resources/hero-bg.jpg',
        'resources/team.jpg',
        'resources/ai-data-viz.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();