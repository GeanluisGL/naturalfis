// Carrusel del Hero (fondo automático)
document.addEventListener('DOMContentLoaded', function() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentHeroSlide = 0;
    const totalHeroSlides = heroSlides.length;
    
    // Función para mostrar slide del hero
    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        
        heroSlides[index].classList.add('active');
        currentHeroSlide = index;
    }
    
    // Función para ir al siguiente slide del hero
    function nextHeroSlide() {
        const next = (currentHeroSlide + 1) % totalHeroSlides;
        showHeroSlide(next);
    }
    
    // Auto-play del carrusel del hero (cada 5 segundos)
    if (heroSlides.length > 0) {
        showHeroSlide(0); // Mostrar primer slide
        setInterval(nextHeroSlide, 5000); // Cambiar cada 5 segundos
    }
});

// Carrusel del profesional
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.professional-carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Función para mostrar slide específico
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (indicators[i]) {
                indicators[i].classList.remove('active');
            }
        });
        
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    // Función para ir al siguiente slide
    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }
    
    // Función para ir al slide anterior
    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }
    
    // Event listeners para botones
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play del carrusel (opcional)
    let autoPlayInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    
    // Pausar auto-play cuando el usuario interactúa
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Inicializar el primer slide
    showSlide(0);
});

// Carrusel de servicios
document.addEventListener('DOMContentLoaded', function() {
    const serviceCarousels = document.querySelectorAll('.service-carousel');
    
    serviceCarousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.service-slide');
        const indicators = carousel.querySelectorAll('.service-indicator');
        const prevBtn = carousel.querySelector('.service-carousel-btn.prev');
        const nextBtn = carousel.querySelector('.service-carousel-btn.next');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Función para mostrar slide específico
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'prev');
                if (indicators[i]) {
                    indicators[i].classList.remove('active');
                }
            });
            
            slides[index].classList.add('active');
            if (indicators[index]) {
                indicators[index].classList.add('active');
            }
            
            // Agregar clase prev al slide anterior
            const prevIndex = (index - 1 + totalSlides) % totalSlides;
            slides[prevIndex].classList.add('prev');
            
            currentSlide = index;
        }
        
        // Función para ir al siguiente slide
        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }
        
        // Función para ir al slide anterior
        function prevSlideFunc() {
            const prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
        }
        
        // Event listeners para botones
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlideFunc);
        }
        
        // Event listeners para indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => showSlide(index));
        });
        
        // Auto-play del carrusel (opcional)
        let autoPlayInterval = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
        
        // Pausar auto-play cuando el usuario interactúa
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(nextSlide, 4000);
        });
        
        // Inicializar el primer slide
        showSlide(0);
    });
});