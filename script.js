// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 300);
  }, 500); // Reduced loading time
});

// Function to open certificate PDF files
function openCertificate(pdfPath) {
  window.open(pdfPath, '_blank');
}

// Set dark mode as default
document.documentElement.setAttribute("data-theme", "dark");

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// Smooth scroll to section
const navLinksAll = document.querySelectorAll(".nav-links a, .cta-buttons a");
navLinksAll.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Scroll reveal animation with Intersection Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill bars when skills section is visible
        if (entry.target.id === "skills") {
          setTimeout(() => {
            animateSkillBars();
          }, 500);
        }
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// Skill Bars Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width + "%";
    }, index * 200); // Stagger animation
  });
}

// Enhanced Portfolio Filters
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Hide all cards first
    portfolioCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "scale(0.8)";
    });

    // Show filtered cards with animation
    setTimeout(() => {
      portfolioCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 100);
        } else {
          card.style.display = "none";
        }
      });
    }, 300);
  });
});

// Experience Tabs Functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    const targetContent = document.getElementById(targetTab + "-content");
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Enhanced Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Remove previous error states
  clearFormErrors();

  let isValid = true;

  // Validate name
  if (!name) {
    showFieldError("name", "Nama wajib diisi");
    isValid = false;
  } else if (name.length < 2) {
    showFieldError("name", "Nama minimal 2 karakter");
    isValid = false;
  }

  // Validate email
  if (!email) {
    showFieldError("email", "Email wajib diisi");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showFieldError("email", "Format email tidak valid");
    isValid = false;
  }

  // Validate subject
  if (!subject) {
    showFieldError("subject", "Subjek wajib diisi");
    isValid = false;
  }

  // Validate message
  if (!message) {
    showFieldError("message", "Pesan wajib diisi");
    isValid = false;
  } else if (message.length < 10) {
    showFieldError("message", "Pesan minimal 10 karakter");
    isValid = false;
  }

  if (isValid) {
    // Show success message
    showSuccessMessage();
    form.reset();
  }
});

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.textContent = message;
  errorDiv.style.color = "#ef4444";
  errorDiv.style.fontSize = "0.85rem";
  errorDiv.style.marginTop = "0.3rem";

  field.style.borderColor = "#ef4444";
  field.parentNode.appendChild(errorDiv);
}

function clearFormErrors() {
  const fields = form.querySelectorAll("input, textarea");
  fields.forEach((field) => {
    field.style.borderColor = "";
    const errorDiv = field.parentNode.querySelector(".field-error");
    if (errorDiv) {
      errorDiv.remove();
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSuccessMessage() {
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.innerHTML = `
    <div style="
      background: #10b981;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      text-align: center;
      animation: slideIn 0.3s ease-out;
    ">
      <i class="fas fa-check-circle"></i>
      Terima kasih! Pesan Anda telah berhasil dikirim.
    </div>
  `;

  form.appendChild(successDiv);

  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// Optimized parallax effect for floating cards
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const floatingCards = document.querySelectorAll(".floating-card");

  floatingCards.forEach((card, index) => {
    const speed = 0.3 + index * 0.05; // Reduced intensity
    const yPos = -(scrolled * speed);
    card.style.transform = `translateY(${yPos}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Simplified typing effect for hero description (optional)
function typeWriter(element, text, speed = 30) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads (reduced delay)
window.addEventListener("load", () => {
  const heroDescription = document.querySelector(".hero-description");
  if (heroDescription && window.innerWidth > 768) {
    // Only on desktop
    const originalText = heroDescription.textContent;
    setTimeout(() => {
      typeWriter(heroDescription, originalText);
    }, 1000);
  }
});

// Skill badge hover effects
document.querySelectorAll(".skill-badge").forEach((badge) => {
  badge.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  badge.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Portfolio card hover effects
document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Timeline item hover effects
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const content = this.querySelector(".timeline-content");
    content.style.transform = "translateX(8px)";
  });

  item.addEventListener("mouseleave", function () {
    const content = this.querySelector(".timeline-content");
    content.style.transform = "translateX(5px)";
  });
});

// Certificate card hover effects
document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Soft skill card hover effects
document.querySelectorAll(".soft-skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    padding: 1rem;
    box-shadow: 0 5px 15px var(--shadow-medium);
    border-radius: 0 0 15px 15px;
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .portfolio-card {
    transition: all 0.3s ease;
  }
  
  .skill-badge {
    transition: all 0.3s ease;
  }
  
  .timeline-content {
    transition: all 0.3s ease;
  }
  
  .certificate-card {
    transition: all 0.3s ease;
  }
  
  .soft-skill-card {
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
`;
document.head.appendChild(style);

// Simplified interactions for better performance
function initSimpleInteractions() {
  // Simple hover effects for cards
  document
    .querySelectorAll(".portfolio-card, .skill-badge, .certificate-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "";
      });
    });
}

// Initialize simple interactions when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initSimpleInteractions, 500);
});
// ===== NEW FEATURES =====

// Smooth scroll with offset for fixed navbar
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Throttled scroll event for performance
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(updateActiveNav, 10);
});

// Copy email to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Show success message
    const message = document.createElement("div");
    message.textContent = "Email copied to clipboard!";
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--success-color);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
    `;
    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  });
}

// Add click event to email contact method
document.addEventListener("DOMContentLoaded", () => {
  const emailMethod = document.querySelector(".contact-method:first-child");
  if (emailMethod) {
    emailMethod.style.cursor = "pointer";
    emailMethod.addEventListener("click", () => {
      copyToClipboard("dimas.rahmanda@email.com");
    });
  }
});

// Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages);

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const navLinks = document.querySelector(".nav-links");
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileToggle.classList.remove("active");
    }
  }
});

// Performance monitoring
function measurePerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log(
          `Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`
        );
      }, 0);
    });
  }
}

// Initialize performance monitoring in development
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  measurePerformance();
}

// Add CSS for new animations
const newStyles = document.createElement("style");
newStyles.textContent = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .nav-links a.active {
    color: var(--accent-color);
  }
  
  .nav-links a.active::after {
    width: 100%;
  }
  
  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .lazy.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(newStyles);
// ===== ENHANCED DESIGN FEATURES =====

// Create animated particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random positioning and animation delay
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";

    // Random size
    const size = 2 + Math.random() * 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Random opacity
    particle.style.opacity = 0.3 + Math.random() * 0.5;

    particlesContainer.appendChild(particle);
  }
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Enhanced scroll reveal with stagger effect
function initEnhancedScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100); // Stagger effect
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  // Observe cards for stagger effect
  document
    .querySelectorAll(".portfolio-card, .skill-badge, .certificate-card")
    .forEach((el, index) => {
      el.style.animationDelay = index * 0.1 + "s";
    });
}

// Enhanced typing effect with cursor
function enhancedTypeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  // Add cursor
  const cursor = document.createElement("span");
  cursor.className = "typing-cursor";
  cursor.textContent = "|";
  cursor.style.cssText = `
    animation: blink 1s infinite;
    color: var(--accent-color);
    font-weight: bold;
  `;

  function type() {
    if (i < text.length) {
      element.textContent = text.slice(0, i + 1);
      element.appendChild(cursor);
      i++;
      setTimeout(type, speed);
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        if (cursor.parentNode) {
          cursor.remove();
        }
      }, 2000);
    }
  }

  type();
}

// Parallax effect for hero elements
function initParallaxEffect() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(
      ".floating-card, .floating-icon"
    );

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Interactive hover effects for cards
function initInteractiveCards() {
  const cards = document.querySelectorAll(
    ".portfolio-card, .skill-item, .certificate-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
        pointer-events: none;
      `;

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Enhanced form interactions
function initEnhancedForm() {
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea"
  );

  formInputs.forEach((input) => {
    // Floating label effect
    input.addEventListener("focus", function () {
      this.parentNode.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentNode.classList.remove("focused");
      }
    });

    // Real-time validation feedback
    input.addEventListener("input", function () {
      if (this.checkValidity()) {
        this.style.borderColor = "var(--success-color)";
      } else {
        this.style.borderColor = "var(--error-color)";
      }
    });
  });
}

// Smooth page transitions
function initPageTransitions() {
  // Add page transition overlay
  const overlay = document.createElement("div");
  overlay.id = "page-transition";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    pointer-events: none;
  `;
  document.body.appendChild(overlay);

  // Animate page load
  window.addEventListener("load", () => {
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  });
}

// Initialize all enhanced features
document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  initNavbarScroll();
  initEnhancedScrollReveal();
  initParallaxEffect();
  initInteractiveCards();
  initEnhancedForm();
  initPageTransitions();

  // Enhanced typing effect for hero
  setTimeout(() => {
    const heroDescription = document.querySelector(".hero-description");
    if (heroDescription && window.innerWidth > 768) {
      const originalText = heroDescription.textContent;
      enhancedTypeWriter(heroDescription, originalText, 30);
    }
  }, 1500);
});

// Add enhanced CSS animations
const enhancedStyles = document.createElement("style");
enhancedStyles.textContent = `
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .form-group.focused label {
    transform: translateY(-25px) scale(0.8);
    color: var(--accent-color);
  }
  
  .form-group label {
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.3s ease;
    pointer-events: none;
    background: var(--bg-secondary);
    padding: 0 5px;
  }
  
  .form-group {
    position: relative;
    margin-bottom: 2rem;
  }
  
  /* Enhanced mobile responsiveness */
  @media (max-width: 768px) {
    .particles {
      display: none;
    }
    
    .floating-icons {
      opacity: 0.3;
    }
    
    .hero-text h1 {
      font-size: 2.5rem !important;
    }
    
    .btn {
      padding: 0.8rem 1.5rem !important;
      font-size: 1rem !important;
    }
  }
  
  /* Enhanced accessibility */
  @media (prefers-reduced-motion: reduce) {
    .particles,
    .floating-icons,
    .floating-card {
      animation: none !important;
    }
    
    * {
      transition-duration: 0.01ms !important;
    }
  }
`;
document.head.appendChild(enhancedStyles);
// Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  });
}

// Initialize scroll progress
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
});
// ===== ENHANCED SKILL BADGE ANIMATIONS =====

// Special animations for JavaScript and React badges
function initSpecialSkillAnimations() {
  const jsBadge = document.querySelector(".skill-badge.js");
  const reactBadge = document.querySelector(".skill-badge.react");

  if (jsBadge) {
    // Add pulsing effect to JavaScript badge
    setInterval(() => {
      jsBadge.style.transform = "scale(1.05)";
      setTimeout(() => {
        jsBadge.style.transform = "scale(1)";
      }, 200);
    }, 3000);

    // Add click effect
    jsBadge.addEventListener("click", () => {
      jsBadge.style.animation = "none";
      setTimeout(() => {
        jsBadge.style.animation = "";
      }, 100);
    });
  }

  if (reactBadge) {
    // Add special hover effect to React badge
    reactBadge.addEventListener("mouseenter", () => {
      const icon = reactBadge.querySelector("i");
      if (icon) {
        icon.style.animationDuration = "0.5s";
      }
    });

    reactBadge.addEventListener("mouseleave", () => {
      const icon = reactBadge.querySelector("i");
      if (icon) {
        icon.style.animationDuration = "3s";
      }
    });
  }
}

// Enhanced portfolio filter animations
function enhancePortfolioFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Enhanced animation for filtering
      portfolioCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8) translateY(20px)";
      });

      // Show filtered cards with staggered animation
      setTimeout(() => {
        let visibleIndex = 0;
        portfolioCards.forEach((card) => {
          const category = card.getAttribute("data-category");

          if (filter === "all" || category === filter) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1) translateY(0)";
            }, visibleIndex * 100);
            visibleIndex++;
          } else {
            card.style.display = "none";
          }
        });
      }, 300);
    });
  });
}

// Initialize all enhanced features
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initSpecialSkillAnimations();
    enhancePortfolioFilters();
  }, 1000);
});

// Add enhanced CSS for better animations
const enhancedAnimationStyles = document.createElement("style");
enhancedAnimationStyles.textContent = `
  /* Enhanced portfolio card transitions */
  .portfolio-card {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  }
  
  /* Enhanced skill badge transitions */
  .skill-badge {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
  }
  
  /* Better mobile menu animation */
  @media (max-width: 768px) {
    .nav-links.active {
      animation: slideInFromTop 0.4s ease-out !important;
    }
  }
  
  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Enhanced button hover effects */
  .btn:hover {
    animation: buttonBounce 0.4s ease-out !important;
  }
  
  @keyframes buttonBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1.02); }
  }
`;
document.head.appendChild(enhancedAnimationStyles);
