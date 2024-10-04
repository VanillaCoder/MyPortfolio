document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('about-left-column')) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
            if (entry.isIntersecting && entry.target.classList.contains('about-right-column')) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const aboutLeftColumn = document.querySelector('.about-left-column');
    if (aboutLeftColumn) {
        observer.observe(aboutLeftColumn);
    }
    const aboutRightColumn = document.querySelector('.about-right-column');
    if (aboutRightColumn) {
        observer.observe(aboutRightColumn);
    }

});


document.addEventListener('DOMContentLoaded', function() {
    fetch('particlesjs-config.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(config => {
            particlesJS('particles-js', config);
        })
        .catch(error => console.error('Error loading particles config:', error));
});