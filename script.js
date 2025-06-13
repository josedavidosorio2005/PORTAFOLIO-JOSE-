// Inicialización cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initLoader();
    initCursor();
    initParticles();
    initNavigation();
    initAnimations();
    initSkillBars();
    initCounters();
    initCertificateModal();
    initContactForm();
    initScrollEffects();
});

// Loader animado
function initLoader() {
    const loader = document.querySelector('.loader-wrapper');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
                // Iniciar animaciones después del loader
                startHeroAnimations();
            }, 500);
        }, 2000);
    });
}

// Cursor personalizado
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Animación suave para el follower
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Efectos hover
    const hoverElements = document.querySelectorAll('a, button, .certificate-card, .project-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Partículas de fondo
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Navegación móvil
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navegación suave con efectos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cambiar color de navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
}

// Animaciones GSAP
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animaciones de entrada para secciones
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        gsap.fromTo(section, 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Animación de cards con efecto stagger
    const certificateCards = document.querySelectorAll('.certificate-card');
    gsap.fromTo(certificateCards,
        {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".certificates-grid",
                start: "top 80%"
            }
        }
    );
    
    // Animación de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    gsap.fromTo(projectCards,
        {
            opacity: 0,
            rotateY: 90
        },
        {
            opacity: 1,
            rotateY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".projects-grid",
                start: "top 80%"
            }
        }
    );
    
    // Animación de texto tipo máquina de escribir
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Animaciones del hero después del loader
function startHeroAnimations() {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo('.hero-description', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    )
    .fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    )
    .fromTo('.floating-card', 
        { opacity: 0, scale: 0.5, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }, "-=0.8"
    );
}

// Barras de habilidades animadas
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                gsap.to(entry.target, {
                    width: width + '%',
                    duration: 2,
                    ease: "power2.out",
                    delay: 0.5
                });
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Contador animado para estadísticas
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Modal para certificados
function initCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-certificate');
    const closeBtn = document.querySelector('.close');
    const viewButtons = document.querySelectorAll('.btn-view');
    const downloadButtons = document.querySelectorAll('.btn-download');
      // Mapeo de certificados con información real
    const certificateData = {
        'ciberseguridad-personal': {
            title: 'Ciberseguridad Personal',
            description: 'Fundamentos de seguridad digital para protección personal',
            image: 'https://via.placeholder.com/800x600/00d9ff/ffffff?text=🔐+CERTIFICADO+DE+FINALIZACIÓN%0A%0ACIBERSEGURIDAD+PERSONAL%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'ciberseguridad-whatsapp': {
            title: 'Ciberseguridad en WhatsApp',
            description: 'Mejores prácticas de seguridad en aplicaciones de mensajería',
            image: 'https://via.placeholder.com/800x600/25d366/ffffff?text=💬+CERTIFICADO+DE+FINALIZACIÓN%0A%0ACIBERSEGURIDAD+EN+WHATSAPP%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'computacion-basica': {
            title: 'Computación Básica',
            description: 'Fundamentos de informática y sistemas computacionales',
            image: 'https://via.placeholder.com/800x600/98ca3f/ffffff?text=💻+CERTIFICADO+DE+FINALIZACIÓN%0A%0ACOMPUTACIÓN+BÁSICA%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'dbsql': {
            title: 'Bases de Datos y SQL',
            description: 'Gestión de bases de datos y consultas SQL',
            image: 'https://via.placeholder.com/800x600/ff6b6b/ffffff?text=🗄️+CERTIFICADO+DE+FINALIZACIÓN%0A%0ABASES+DE+DATOS+Y+SQL%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'estrategias-ingles': {
            title: 'Estrategias para Aprender Inglés',
            description: 'Metodologías efectivas para el aprendizaje del idioma inglés',
            image: 'https://via.placeholder.com/800x600/4ecdc4/ffffff?text=🌍+CERTIFICADO+DE+FINALIZACIÓN%0A%0AESTRATEGIAS+PARA+APRENDER+INGLÉS%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'seguridad-informatica': {
            title: 'Guía de Seguridad Informática',
            description: 'Principios fundamentales de ciberseguridad',
            image: 'https://via.placeholder.com/800x600/fd79a8/ffffff?text=🛡️+CERTIFICADO+DE+FINALIZACIÓN%0A%0AGUÍA+DE+SEGURIDAD+INFORMÁTICA%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'ingenieria2017': {
            title: 'Carrera de Ingeniería 2017',
            description: 'Fundamentos de ingeniería y desarrollo de software',
            image: 'https://via.placeholder.com/800x600/6c5ce7/ffffff?text=⚙️+CERTIFICADO+DE+FINALIZACIÓN%0A%0ACARRERA+DE+INGENIERÍA+2017%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2017'
        },
        'ingenieria-social': {
            title: 'Ingeniería Social',
            description: 'Técnicas de hacking ético y concienciación sobre seguridad',
            image: 'https://via.placeholder.com/800x600/e17055/ffffff?text=🎭+CERTIFICADO+DE+FINALIZACIÓN%0A%0AINGENIERÍA+SOCIAL%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'ingles-a1': {
            title: 'Inglés A1 - Principiantes',
            description: 'Nivel básico de inglés según el Marco Común Europeo',
            image: 'https://via.placeholder.com/800x600/0984e3/ffffff?text=🇺🇸+CERTIFICADO+DE+FINALIZACIÓN%0A%0AINGLÉS+A1+-+PRINCIPIANTES%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'intro-ciberseguridad-empresas': {
            title: 'Introducción a Ciberseguridad para Empresas',
            description: 'Fundamentos de seguridad informática en entornos corporativos',
            image: 'https://via.placeholder.com/800x600/74b9ff/ffffff?text=🏢+CERTIFICADO+DE+FINALIZACIÓN%0A%0AINTRO+CIBERSEGURIDAD+EMPRESAS%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'java-basico': {
            title: 'Java Básico',
            description: 'Fundamentos de programación en Java',
            image: 'https://via.placeholder.com/800x600/f39c12/ffffff?text=☕+CERTIFICADO+DE+FINALIZACIÓN%0A%0AJAVA+BÁSICO%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'pensamiento-logico-estructuras': {
            title: 'Pensamiento Lógico: Estructuras de Datos',
            description: 'Fundamentos de estructuras de datos y algoritmos',
            image: 'https://via.placeholder.com/800x600/9b59b6/ffffff?text=🧠+CERTIFICADO+DE+FINALIZACIÓN%0A%0APENSAMIENTO+LÓGICO+ESTRUCTURAS%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'pensamiento-logico-lenguajes': {
            title: 'Pensamiento Lógico: Lenguajes de Programación',
            description: 'Fundamentos de programación y lógica computacional',
            image: 'https://via.placeholder.com/800x600/2d3436/ffffff?text=💭+CERTIFICADO+DE+FINALIZACIÓN%0A%0APENSAMIENTO+LÓGICO+LENGUAJES%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'python': {
            title: 'Python',
            description: 'Programación en Python para desarrollo de aplicaciones',
            image: 'https://via.placeholder.com/800x600/3776ab/ffffff?text=🐍+CERTIFICADO+DE+FINALIZACIÓN%0A%0APYTHON%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'python-fundamentos': {
            title: 'Fundamentos de Python',
            description: 'Bases sólidas de programación en Python',
            image: 'https://via.placeholder.com/800x600/ffd43b/333333?text=🔧+CERTIFICADO+DE+FINALIZACIÓN%0A%0AFUNDAMENTOS+DE+PYTHON%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        },
        'taller-ciberseguridad': {
            title: 'Taller de Ciberseguridad',
            description: 'Taller práctico de implementación de medidas de seguridad',
            image: 'https://via.placeholder.com/800x600/e84393/ffffff?text=🔬+CERTIFICADO+DE+FINALIZACIÓN%0A%0ATALLER+DE+CIBERSEGURIDAD%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0AHa+completado+exitosamente+el+curso%0A%0APLATZI+-+2024'
        }
    };
    
    viewButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const certificateCard = this.closest('.certificate-card');
            const certificateType = certificateCard.getAttribute('data-certificate');
            const certData = certificateData[certificateType];
            
            if (certData) {
                modal.style.display = 'block';
                modalImg.src = certData.image;
                modalImg.alt = certData.title;
                
                // Animación de entrada del modal
                gsap.fromTo(modal, 
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3 }
                );
                gsap.fromTo('.modal-content', 
                    { scale: 0.5, rotation: 180 },
                    { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" }
                );
                
                // Mostrar notificación con información del certificado
                showNotification(`Visualizando: ${certData.title}`, 'info');
            }
        });
    });
    
    // Manejo de descargas de certificados
    downloadButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const pdfFile = this.getAttribute('data-pdf');
            const certificateCard = this.closest('.certificate-card');
            const certificateType = certificateCard.getAttribute('data-certificate');
            const certData = certificateData[certificateType];
            
            // Animación de click
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            // Mostrar notificación de descarga
            showNotification(`Preparando descarga: ${certData.title}...`, 'info');
            
            // Simular descarga con progreso
            setTimeout(() => {
                showNotification(`✅ ${certData.title} - Certificado listo para descarga`, 'success');
                
                // Aquí puedes agregar la lógica real de descarga
                // Por ejemplo, abrir el PDF en una nueva ventana:
                // window.open(`certificados/${pdfFile}`, '_blank');
                
                // O crear un enlace de descarga temporal:
                const link = document.createElement('a');
                link.href = `#${pdfFile}`; // Reemplazar con la ruta real del PDF
                link.download = pdfFile;
                link.textContent = `Descargar ${certData.title}`;
                
                // Mostrar enlace temporal en notificación personalizada
                showDownloadNotification(certData.title, pdfFile);
                
            }, 1500);
        });
    });
    
    closeBtn.addEventListener('click', function() {
        gsap.to(modal, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modal.style.display = 'none';
            }
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            gsap.to(modal, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        }
    });
}

// Formulario de contacto
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animación del botón
        const submitBtn = form.querySelector('.btn-send');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular envío
        setTimeout(() => {
            submitBtn.textContent = '¡Enviado!';
            showNotification('Mensaje enviado exitosamente!', 'success');
            
            // Resetear formulario
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 2000);
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    
    if (!value) {
        field.style.borderColor = '#ef4444';
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        field.style.borderColor = '#ef4444';
        return false;
    }
    
    field.style.borderColor = '#10b981';
    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Efectos de scroll
function initScrollEffects() {
    // Parallax para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const floatingCard = document.querySelector('.floating-card');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (floatingCard) {
            floatingCard.style.transform = `translateY(${scrolled * 0.3}px) rotateY(${scrolled * 0.1}deg)`;
        }
    });
    
    // Revelar elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.certificate-card, .project-card, .contact-item');
    revealElements.forEach(el => observer.observe(el));
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10001',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
    }
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función especial para notificaciones de descarga
function showDownloadNotification(certificateTitle, pdfFile) {
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    
    notification.innerHTML = `
        <div class="download-content">
            <div class="download-icon">
                <i class="fas fa-certificate"></i>
            </div>
            <div class="download-text">
                <h4>Certificado Disponible</h4>
                <p>${certificateTitle}</p>
                <small>José David Osorio Gallego - Platzi</small>
            </div>
            <div class="download-actions">
                <button class="btn-download-real" onclick="downloadCertificate('${pdfFile}')">
                    <i class="fas fa-download"></i> Descargar
                </button>
                <button class="btn-close-notification" onclick="closeDownloadNotification(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    // Estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '350px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '15px',
        padding: '1rem',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        zIndex: '10002',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        fontFamily: 'var(--font-family)'
    });
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 10 segundos
    setTimeout(() => {
        closeDownloadNotification(notification.querySelector('.btn-close-notification'));
    }, 10000);
}

// Función para cerrar notificación de descarga
function closeDownloadNotification(button) {
    const notification = button.closest('.download-notification');
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 300);
}

// Función para simular descarga real
function downloadCertificate(pdfFile) {
    showNotification(`📄 Preparando descarga de ${pdfFile}...`, 'info');
    
    // Crear enlace de descarga temporal
    const link = document.createElement('a');
    link.href = `certificados/${pdfFile}`;
    link.download = pdfFile;
    link.style.display = 'none';
    
    // Agregar al DOM temporalmente
    document.body.appendChild(link);
    
    // Simular click para descargar
    setTimeout(() => {
        try {
            link.click();
            showNotification(`✅ Descarga iniciada: ${pdfFile}`, 'success');
        } catch (error) {
            showNotification(`❌ Error al descargar. El archivo debe estar en la carpeta certificados/`, 'error');
            console.log('Para descargas reales, asegúrate de que los PDFs estén en la carpeta certificados/');
        }
        
        // Remover enlace temporal
        document.body.removeChild(link);
    }, 1000);
}

// Efectos de hover mejorados
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de ondas en botones
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-send');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Añadir estilos de animación para ondas
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .reveal {
        animation: revealAnimation 0.8s ease-out;
    }
    
    @keyframes revealAnimation {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Preloader para imágenes
function preloadImages() {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    console.log('Todas las imágenes cargadas');
                }
            });
        }
    });
}

// Inicializar preloader
preloadImages();

// Smooth scroll mejorado
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const start = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 80; // Offset para navbar
    const distance = targetPosition - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Intersection Observer para animaciones mejoradas
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.section-title, .about-description, .skill-category, .contact-item').forEach(el => {
    animationObserver.observe(el);
});

console.log('🚀 Portfolio cargado exitosamente!');
