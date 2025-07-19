// Inisialisasi particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
      "repulse": { "distance": 200, "duration": 0.4 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(138, 126, 229, 0.98)';
      navbar.style.backdropFilter = 'blur(15px)';
    } else {
      navbar.style.background = 'rgba(138, 126, 229, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScrollTop = scrollTop;
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.about-box, .project-card, .certificate-card, .contact-item');
  animateElements.forEach(el => {
    el.classList.add('loading');
    observer.observe(el);
  });

  // Typing effect for home section
  const typingText = document.querySelector('#home h1');
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    typingText.style.borderRight = '2px solid #fff';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          typingText.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }

  // Parallax effect for home section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Social media icons animation
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
    icon.classList.add('animate__animated', 'animate__fadeInUp');
  });

  // Contact form validation (if you add a form later)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Pesan berhasil dikirim!');
    });
  }

  // Add loading animation
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on page load
    const homeElements = document.querySelectorAll('#home h1, #home h2, #home p, #home .btn, #home img');
    homeElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });

  // Mobile menu toggle animation
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Add scroll to top functionality
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  `;
  
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add hover effect to scroll to top button
  scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Add CSS for scroll to top button
const style = document.createElement('style');
style.textContent = `
  .scroll-to-top:hover {
    transform: scale(1.1) !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) !important;
  }
  
  .animate__animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  
  .animate__fadeInUp {
    animation-name: fadeInUp;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
document.head.appendChild(style);
