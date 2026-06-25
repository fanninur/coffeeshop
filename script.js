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

    const initCoffeeSequence = () => {
        const sequence = document.querySelector('.hero-image.coffee-sequence');
        const canvas = document.querySelector('#coffeeSequence');
        const hero = sequence?.closest('.hero');
        if (!sequence || !canvas || !hero) return;

        const context = canvas.getContext('2d');
        const frameCount = 40;
        const frames = new Array(frameCount);
        const loaded = new Array(frameCount).fill(false);
        const queue = Array.from({ length: frameCount }, (_, index) => index);
        const mobile = window.matchMedia('(max-width: 768px)');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const maxConcurrentLoads = mobile.matches ? 2 : 4;
        let activeLoads = 0;
        let requestedFrame = 0;
        let canvasWidth = 0;
        let canvasHeight = 0;
        let animationFrame;
        let hasRendered = false;

        const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
        const easeOutCubic = (value) => 1 - ((1 - value) ** 3);

        const imagePaths = (index) => {
            const fileName = `ezgif-frame-${String(index + 1).padStart(3, '0')}.png`;
            return [`/coffee/${fileName}`, `public/coffee/${fileName}`];
        };

        const closestLoadedFrame = (index) => {
            if (loaded[index]) return index;
            for (let distance = 1; distance < frameCount; distance += 1) {
                if (loaded[index - distance]) return index - distance;
                if (loaded[index + distance]) return index + distance;
            }
            return -1;
        };

        const drawFrame = (index) => {
            const frameIndex = closestLoadedFrame(index);
            if (frameIndex < 0 || !canvasWidth || !canvasHeight) return;

            const image = frames[frameIndex];
            const scale = Math.min(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight);
            const drawWidth = image.naturalWidth * scale;
            const drawHeight = image.naturalHeight * scale;
            const drawX = (canvasWidth - drawWidth) / 2;
            const drawY = (canvasHeight - drawHeight) / 2;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
            hasRendered = true;
        };

        const resizeCanvas = () => {
            const bounds = sequence.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile.matches ? 1.5 : 2);
            canvasWidth = Math.max(1, Math.floor(bounds.width));
            canvasHeight = Math.max(1, Math.floor(bounds.height));
            canvas.width = Math.floor(canvasWidth * pixelRatio);
            canvas.height = Math.floor(canvasHeight * pixelRatio);
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            drawFrame(requestedFrame);
        };

        const loadNext = () => {
            while (activeLoads < maxConcurrentLoads && queue.length) {
                const index = queue.shift();
                const image = new Image();
                const sources = imagePaths(index);
                let sourceIndex = 0;
                activeLoads += 1;
                image.decoding = 'async';
                image.onload = () => {
                    frames[index] = image;
                    loaded[index] = true;
                    activeLoads -= 1;
                    drawFrame(requestedFrame);
                    loadNext();
                };
                image.onerror = () => {
                    sourceIndex += 1;
                    if (sourceIndex < sources.length) {
                        image.src = sources[sourceIndex];
                        return;
                    }
                    activeLoads -= 1;
                    loadNext();
                };
                image.src = sources[sourceIndex];
            }
        };

        const updateFrameFromScroll = () => {
            animationFrame = undefined;
            if (reduceMotion) return;
            const heroStart = hero.offsetTop;
            const transitionDistance = Math.max(hero.offsetHeight * 0.95, window.innerHeight * 0.72);
            const progress = clamp((window.scrollY - heroStart) / transitionDistance);
            const nextFrame = Math.round(progress * (frameCount - 1));
            const zoomProgress = easeOutCubic(progress) * progress;
            const maxZoom = mobile.matches ? 3.25 : 4.6;
            const zoom = 1 + (zoomProgress * (maxZoom - 1));
            const fade = 1 - (clamp((progress - 0.9) / 0.1) * 0.18);

            sequence.style.setProperty('--coffee-zoom', zoom.toFixed(3));
            sequence.style.setProperty('--coffee-opacity', fade.toFixed(3));

            if (nextFrame !== requestedFrame || !hasRendered) {
                requestedFrame = nextFrame;
                drawFrame(requestedFrame);
            }
        };

        const requestFrameUpdate = () => {
            if (animationFrame === undefined) animationFrame = window.requestAnimationFrame(updateFrameFromScroll);
        };

        resizeCanvas();
        loadNext();
        window.addEventListener('resize', resizeCanvas, { passive: true });
        window.addEventListener('scroll', requestFrameUpdate, { passive: true });
        requestFrameUpdate();
    };

    initCoffeeSequence();

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
