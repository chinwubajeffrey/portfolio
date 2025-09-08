// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const hamburgIcon = document.querySelector('.hamburg-icon');
const navLinks = document.querySelector('.nav-links');

hamburgIcon.addEventListener('click', () => {
    hamburgIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgIcon.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
window.addEventListener('click', (e) => {
    if (!hamburgIcon.contains(e.target) && !navLinks.contains(e.target)) {
        hamburgIcon.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Animate service cards on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});





  window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('animated-text');
    const nodes = [];

    // Extract child nodes so <br> is preserved
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split('').forEach(char => {
          nodes.push({ type: 'char', value: char });
        });
      } else if (node.nodeName === 'BR') {
        nodes.push({ type: 'br' });
      }
    });

    el.innerHTML = '';
    let charIndex = 0;
    nodes.forEach(item => {
      if (item.type === 'char') {
        const span = document.createElement('span');
        if (item.value === ' ') {
          // Preserve spaces by using non-breaking space or adding a class
          span.innerHTML = '&nbsp;';
          span.className = 'space-char';
        } else {
          span.textContent = item.value;
        }
        span.style.animationDelay = `${charIndex * 0.05}s`;
        el.appendChild(span);
        charIndex++;
      } else if (item.type === 'br') {
        el.appendChild(document.createElement('br'));
      }
    });
  });
