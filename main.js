// ===== TYPEWRITER =====
(function typewriter() {
    const el = document.getElementById('header-name');
    const text = 'Trong Ly';
    el.textContent = '';
    let i = 0;
    const speed = 110;
    function type() {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(type, speed);
        } else {
            el.classList.add('typing-done');
        }
    }
    setTimeout(type, 300);
})();

// ===== PARTICLES =====
(function spawnParticles() {
    const container = document.getElementById('particles');
    const count = 28;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.cssText = [
            `width:${size}px`,
            `height:${size}px`,
            `left:${Math.random() * 100}%`,
            `animation-duration:${Math.random() * 14 + 10}s`,
            `animation-delay:${Math.random() * 12}s`,
            `opacity:${Math.random() * 0.5 + 0.2}`,
        ].join(';');
        container.appendChild(p);
    }
})();

// ===== SECTION SWITCHER =====
function showSection(id, btn) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });

    // Deactivate all buttons
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active-btn'));

    // Show target section
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
        // Micro-delay so CSS transition fires
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                target.classList.add('active');
            });
        });
    }

    // Mark active button
    if (btn) btn.classList.add('active-btn');

    // Animate skill bars when skills section is shown
    if (id === 'skills') animateSkillBars();

    // Stagger tag animation
    if (target) staggerTags(target);
}

// ===== SKILL BARS =====
function animateSkillBars() {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = '0';
        const target = bar.dataset.width + '%';
        setTimeout(() => { bar.style.width = target; }, 80);
    });
}

// ===== STAGGER TAG ANIMATIONS =====
function staggerTags(section) {
    const tags = section.querySelectorAll('.tag');
    tags.forEach((tag, i) => {
        tag.style.animationDelay = `${i * 0.04}s`;
    });
}

// ===== INIT =====
// Activate summary on load and run its stagger
window.addEventListener('DOMContentLoaded', () => {
    const summary = document.getElementById('summary');
    if (summary) {
        summary.style.display = 'block';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                summary.classList.add('active');
                staggerTags(summary);
            });
        });
    }
});
