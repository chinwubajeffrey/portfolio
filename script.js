// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Anime.js animated shapes



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
        span.textContent = item.value;
        span.style.animationDelay = `${charIndex * 0.05}s`;
        el.appendChild(span);
        charIndex++;
      } else if (item.type === 'br') {
        el.appendChild(document.createElement('br'));
      }
    });
  });
