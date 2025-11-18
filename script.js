// Smooth scroll to timeline section when CTA button is clicked
document.getElementById('viewTimeline').addEventListener('click', function() {
    const timelineSection = document.getElementById('timeline');
    timelineSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    console.log('Smooth scroll initiated to timeline section');
});

// Timeline item click interaction - toggle detail visibility
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        const phase = this.getAttribute('data-phase');
        const detailElement = document.getElementById(`detail-${phase}`);
        
        // Toggle visibility
        if (detailElement.style.display === 'none' || detailElement.style.display === '') {
            detailElement.style.display = 'block';
            console.log(`Timeline phase ${phase} expanded`);
        } else {
            detailElement.style.display = 'none';
            console.log(`Timeline phase ${phase} collapsed`);
        }
        
        // Add temporary highlight effect
        this.querySelector('.timeline-content').style.borderColor = '#ec4899';
        setTimeout(() => {
            this.querySelector('.timeline-content').style.borderColor = '#a855f7';
        }, 300);
    });
});

// Add hover effect logging for learning purposes
const profileCards = document.querySelectorAll('.profile-card');
profileCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        console.log(`Profile card ${index + 1} hovered`);
    });
});

const artifactCards = document.querySelectorAll('.artifact-card');
artifactCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        console.log(`Artifact card ${index + 1} hovered`);
    });
});

// Simple parallax effect on hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Console welcome message
console.log('%c⚡ ECHO STRIKE OPERATION PORTAL ⚡', 'color: #a855f7; font-size: 20px; font-weight: bold;');
console.log('%cAll data on this site is fictional and for educational purposes only.', 'color: #06b6d4; font-size: 12px;');
console.log('%cHover and click events are being logged for learning purposes.','color: #84cc16; font-size: 12px;');

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Press 'T' to scroll to timeline
    if (e.key === 't' || e.key === 'T') {
        const timelineSection = document.getElementById('timeline');
        timelineSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        console.log('Keyboard shortcut: Timeline accessed via "T" key');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            console.log(`Element ${entry.target.className} animated into view`);
        }
    });
}, observerOptions);

// Observe all cards for scroll animations
const animatedElements = document.querySelectorAll('.profile-card, .artifact-card, .timeline-item, .countermeasure-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Track user engagement time
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    console.log(`User spent ${timeSpent} seconds on the site`);
});