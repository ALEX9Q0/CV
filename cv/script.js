// Script para alternar entre modo oscuro y claro
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

///
// Animar las barras de progreso al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    const skillsSection = document.getElementById('skills');
    
    function animateProgressBars() {
        const scrollTop = window.scrollY;
        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        
        if (scrollTop + window.innerHeight > sectionTop + sectionHeight / 4) {
            progressBars.forEach(bar => {
                const skillLevel = bar.dataset.skill;
                bar.style.width = skillLevel + '%';
            });
        }
    }
    
    window.addEventListener('scroll', animateProgressBars);
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('contact-menu');
    const contactForm = document.getElementById('contact-form');
    const form = document.getElementById('contact');
    const formMessage = document.getElementById('form-message');

    // Mostrar/ocultar formulario al hacer clic en el ícono
    menuIcon.addEventListener('click', () => {
        contactForm.classList.toggle('show');
    });

    // Validación del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Verificar cada campo
        if (!form.name.value) {
            formMessage.textContent = 'Por favor, ingrese su nombre.';
            valid = false;
        } else if (!form.email.value) {
            formMessage.textContent = 'Por favor, ingrese un correo electrónico válido.';
            valid = false;
        } else if (!form.message.value) {
            formMessage.textContent = 'Por favor, ingrese un mensaje.';
            valid = false;
        } 

        if (valid) {
            formMessage.textContent = 'Formulario enviado exitosamente.';
            form.reset();
        }
    });
});




// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = document.getElementById('contact-info');
    const text = "Correo electrónico: robertoalejandrodelao921@gmail.com\n" +
                 "Teléfono: 3320715451\n" +
                 "Dirección: Av San Mateo\n" +
                 "País: México, Jalisco";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            contactInfo.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Ajusta la velocidad aquí
        }
    }

    typeWriter();

    // Barra de menú para mostrar el formulario
    const contactMenu = document.getElementById('contact-menu');
    const contactForm = document.getElementById('contact-form');

    contactMenu.addEventListener('click', () => {
        contactForm.classList.toggle('active');
    });
});
