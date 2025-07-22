// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1000);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

darkModeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = darkModeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

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

// Parallax effect for floating cards
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const floatingCards = document.querySelectorAll(".floating-card");

  floatingCards.forEach((card, index) => {
    const speed = 0.5 + index * 0.1;
    const yPos = -(scrolled * speed);
    card.style.transform = `translateY(${yPos}px)`;
  });
});

// Typing effect for hero description
function typeWriter(element, text, speed = 50) {
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

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroDescription = document.querySelector(".hero-description");
  if (heroDescription) {
    const originalText = heroDescription.textContent;
    setTimeout(() => {
      typeWriter(heroDescription, originalText);
    }, 2000);
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

// Space Scene Interactions
function initSpaceScene() {
  const planets = document.querySelectorAll(".planet");
  const planetRockets = document.querySelectorAll(".planet-rocket");

  // Planet rocket hover effects
  planetRockets.forEach((rocket, index) => {
    rocket.addEventListener("mouseenter", () => {
      rocket.style.transform = "scale(1.3)";
      rocket.style.filter = "brightness(1.5)";

      // Create trail effect
      const trail = document.createElement("div");
      trail.className = "dynamic-trail";
      trail.style.cssText = `
        position: absolute;
        width: 15px;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${
          getComputedStyle(rocket).color
        }, transparent);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.8;
        animation: trailFade 0.5s ease-out;
      `;
      rocket.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.remove();
        }
      }, 500);
    });

    rocket.addEventListener("mouseleave", () => {
      rocket.style.transform = "";
      rocket.style.filter = "";
    });
  });

  // Planet hover effects
  planets.forEach((planet, index) => {
    planet.addEventListener("mouseenter", () => {
      planet.style.transform = "scale(1.2)";
      planet.style.zIndex = "50";

      // Create planet info tooltip
      const planetNames = [
        "Planet Biru",
        "Planet Merah",
        "Planet Ungu",
        "Planet Hijau",
        "Planet Merah Muda",
      ];
      const tooltip = document.createElement("div");
      tooltip.className = "planet-tooltip";
      tooltip.innerHTML = `
        <h4>${planetNames[index] || `Planet ${index + 1}`}</h4>
        <p>Beautiful cosmic body</p>
      `;
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px;
        border-radius: 6px;
        font-size: 11px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      `;

      document.body.appendChild(tooltip);

      // Position tooltip
      const rect = planet.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + "px";
      tooltip.style.top = rect.top - 50 + "px";
      tooltip.style.transform = "translateX(-50%)";
    });

    planet.addEventListener("mouseleave", () => {
      planet.style.transform = "";
      planet.style.zIndex = "";

      // Remove tooltip
      const tooltip = document.querySelector(".planet-tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    });
  });

  // Star click effects
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      star.style.animation = "starExplode 0.5s ease-out";
      setTimeout(() => {
        star.style.animation = "twinkle 2s ease-in-out infinite";
      }, 500);
    });
  });

  // Particle system interactions (Both themes)
  const particles = document.querySelectorAll(".particle");
  particles.forEach((particle, index) => {
    particle.addEventListener("mouseenter", () => {
      const theme = document.documentElement.getAttribute("data-theme");
      if (theme === "dark") {
        particle.style.transform = "scale(2)";
        particle.style.filter = "drop-shadow(0 0 8px var(--accent-color))";
        particle.style.zIndex = "50";
      } else if (theme === "light") {
        particle.style.transform = "scale(2)";
        particle.style.filter = "drop-shadow(0 0 8px #ff6b6b)";
        particle.style.zIndex = "50";
      }
      particle.style.animationPlayState = "paused";
    });

    particle.addEventListener("mouseleave", () => {
      particle.style.transform = "";
      particle.style.filter = "";
      particle.style.zIndex = "";
      particle.style.animationPlayState = "running";
    });

    // Create particle trail effect
    setInterval(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      const trailColor = theme === "dark" ? "var(--accent-color)" : "#ff6b6b";

      const trail = document.createElement("div");
      trail.style.position = "absolute";
      trail.style.width = "2px";
      trail.style.height = "2px";
      trail.style.background = trailColor;
      trail.style.borderRadius = "50%";
      trail.style.opacity = "0.4";
      trail.style.pointerEvents = "none";
      trail.style.animation = "particleTrail 1s ease-out forwards";

      const rect = particle.getBoundingClientRect();
      trail.style.left = rect.left + rect.width / 2 + "px";
      trail.style.top = rect.top + rect.height / 2 + "px";

      document.body.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 1000);
    }, 2000 + index * 300);
  });

  // Space dust interactions (Dark theme only)
  const dustParticles = document.querySelectorAll(".dust");
  dustParticles.forEach((dust, index) => {
    dust.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        dust.style.transform = "scale(3)";
        dust.style.background = "rgba(255, 255, 255, 1)";
        dust.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
        dust.style.zIndex = "40";
      }
    });

    dust.addEventListener("mouseleave", () => {
      dust.style.transform = "";
      dust.style.background = "rgba(255, 255, 255, 0.6)";
      dust.style.boxShadow = "";
      dust.style.zIndex = "";
    });
  });

  // Cosmic rays interactions (Dark theme only)
  const rays = document.querySelectorAll(".ray");
  rays.forEach((ray, index) => {
    ray.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        ray.style.opacity = "1";
        ray.style.background =
          "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.8), transparent)";
        ray.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0.5)";
        ray.style.zIndex = "30";
      }
    });

    ray.addEventListener("mouseleave", () => {
      ray.style.opacity = "";
      ray.style.background =
        "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)";
      ray.style.boxShadow = "";
      ray.style.zIndex = "";
    });
  });

  // Nebula interactions (Dark theme only)
  const nebulas = document.querySelectorAll(".nebula");
  nebulas.forEach((nebula, index) => {
    nebula.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        nebula.style.opacity = "0.4";
        nebula.style.transform = "scale(1.3)";
        nebula.style.zIndex = "20";
        nebula.style.filter = "blur(0px)";
      }
    });

    nebula.addEventListener("mouseleave", () => {
      nebula.style.opacity = "0.1";
      nebula.style.transform = "";
      nebula.style.zIndex = "";
      nebula.style.filter = "";
    });
  });

  // Festival Lights interactions (Light theme only)
  const lanterns = document.querySelectorAll(".lantern");
  lanterns.forEach((lantern, index) => {
    lantern.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        lantern.style.transform = "scale(1.2)";
        lantern.style.filter = "drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))";
        lantern.style.zIndex = "60";
        lantern.style.animationPlayState = "paused";
      }
    });

    lantern.addEventListener("mouseleave", () => {
      lantern.style.transform = "";
      lantern.style.filter = "";
      lantern.style.zIndex = "";
      lantern.style.animationPlayState = "running";
    });
  });

  const lightBulbs = document.querySelectorAll(".light-bulb");
  lightBulbs.forEach((bulb, index) => {
    bulb.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        bulb.style.transform = "scale(1.5)";
        bulb.style.boxShadow = `0 0 25px ${
          getComputedStyle(bulb).backgroundColor
        }`;
        bulb.style.zIndex = "50";
      }
    });

    bulb.addEventListener("mouseleave", () => {
      bulb.style.transform = "";
      bulb.style.boxShadow = "";
      bulb.style.zIndex = "";
    });
  });

  const flags = document.querySelectorAll(".flag");
  flags.forEach((flag, index) => {
    flag.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        flag.style.transform = "scale(1.3) rotate(15deg)";
        flag.style.zIndex = "40";
        flag.style.animationPlayState = "paused";
      }
    });

    flag.addEventListener("mouseleave", () => {
      flag.style.transform = "";
      flag.style.zIndex = "";
      flag.style.animationPlayState = "running";
    });
  });

  const confetti = document.querySelectorAll(".confetti");
  confetti.forEach((piece, index) => {
    piece.addEventListener("mouseenter", () => {
      if (document.documentElement.getAttribute("data-theme") === "light") {
        piece.style.transform = "scale(2) rotate(180deg)";
        piece.style.zIndex = "30";
        piece.style.animationPlayState = "paused";
      }
    });

    piece.addEventListener("mouseleave", () => {
      piece.style.transform = "";
      piece.style.zIndex = "";
      piece.style.animationPlayState = "running";
    });
  });
}

// Initialize space scene when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initSpaceScene, 1000);
});

// Add CSS for star explosion animation
const spaceStyle = document.createElement("style");
spaceStyle.textContent = `
  @keyframes starExplode {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes particleTrail {
    0% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.2;
      transform: scale(0.5);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
`;
document.head.appendChild(spaceStyle);

function generateStars() {
  document.querySelectorAll(".stars-bg").forEach((bg) => {
    bg.innerHTML = "";
    const starCount = 50 + Math.floor(Math.random() * 21); // 50-70 bintang
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      const size = 1.5 + Math.random() * 2.5;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.opacity = 0.5 + Math.random() * 0.5;
      star.style.animationDelay = Math.random() * 2.5 + "s";
      bg.appendChild(star);
    }
  });
}
window.addEventListener("DOMContentLoaded", generateStars);
