/* Lightweight, accessible interactions for the one-page site. */
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const menuButton = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuClose = document.querySelector('.mobile-menu-close');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('[data-modal-close]');
    const coffeeRotation = document.querySelector('.coffee-rotation');
    const navLinks = [...document.querySelectorAll('.nav-links a, .mobile-nav-links a')];
    const sections = [...document.querySelectorAll('main section[id]')];
    let lastFocusedElement;

    const setActiveLink = (id) => navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 32);
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // Rotate the glass in proportion to page scroll, while its inner image keeps floating via CSS.
    if (coffeeRotation && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let rotationFrame;
        const updateCoffeeRotation = () => {
            rotationFrame = undefined;
            const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 1.25, 1), 1);
            coffeeRotation.style.setProperty('--coffee-scroll-rotation', `${progress * 360}deg`);
        };
        const requestCoffeeRotation = () => {
            if (rotationFrame === undefined) rotationFrame = window.requestAnimationFrame(updateCoffeeRotation);
        };
        updateCoffeeRotation();
        window.addEventListener('scroll', requestCoffeeRotation, { passive: true });
        window.addEventListener('resize', requestCoffeeRotation, { passive: true });
    }

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -32px' });
        document.querySelectorAll('.slide-up').forEach((element) => revealObserver.observe(element));

        const sectionObserver = new IntersectionObserver((entries) => {
            const current = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (current) setActiveLink(current.target.id);
        }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.15, 0.5] });
        sections.forEach((section) => sectionObserver.observe(section));
    } else {
        document.querySelectorAll('.slide-up').forEach((element) => element.classList.add('active'));
    }

    const closeMenu = () => {
        mobileMenu?.classList.remove('active');
        mobileMenu?.setAttribute('aria-hidden', 'true');
        menuOverlay?.classList.remove('active');
        menuButton?.classList.remove('active');
        menuButton?.setAttribute('aria-expanded', 'false');
        menuButton?.setAttribute('aria-label', 'Buka menu navigasi');
        body.classList.remove('mobile-menu-open');
    };
    const openMenu = () => {
        mobileMenu?.classList.add('active');
        mobileMenu?.setAttribute('aria-hidden', 'false');
        menuOverlay?.classList.add('active');
        menuButton?.classList.add('active');
        menuButton?.setAttribute('aria-expanded', 'true');
        menuButton?.setAttribute('aria-label', 'Tutup menu navigasi');
        body.classList.add('mobile-menu-open');
        menuClose?.focus();
    };
    menuButton?.addEventListener('click', () => mobileMenu?.classList.contains('active') ? closeMenu() : openMenu());
    menuClose?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-nav-links a').forEach((link) => link.addEventListener('click', closeMenu));

    const closeModal = () => {
        modal?.classList.remove('show');
        modal?.setAttribute('aria-hidden', 'true');
        body.classList.remove('modal-open');
        lastFocusedElement?.focus();
    };
    const openModal = () => {
        if (!modal) return;
        lastFocusedElement = document.activeElement;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        body.classList.add('modal-open');
        modalClose?.focus();
    };
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);
    window.setTimeout(openModal, 1000);

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        if (modal?.classList.contains('show')) closeModal();
        else if (mobileMenu?.classList.contains('active')) closeMenu();
    });
});
