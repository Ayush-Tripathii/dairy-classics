// assets/js/design1.js - Artisanal Strawberry & Cream Interactive Engine

let currentFlavor = window.DAIRY_PRODUCTS ? window.DAIRY_PRODUCTS['french-vanilla'] : {};

const flavorData = {
  'french-vanilla': {
    name: 'French Vanilla Royale',
    headline: 'Every Scoop.',
    desc: 'Single-origin Jersey farm cream, slow-churned in small batches with honest, all-natural ingredients.',
    price: '₹380',
    size: '500ml Pint',
    image: 'assets/images/products/french-vanilla-splash-tub.png',
    particles: [
      'assets/images/particles/particle-vanilla-orchid.png',
      'assets/images/particles/particle-cocoa-bean.png',
      'assets/images/particles/particle-vanilla-orchid.png'
    ],
    bg: 'radial-gradient(circle at 60% 40%, #FFFDF5 0%, #F5ECCB 100%)',
    halo: 'rgba(212, 175, 55, 0.35)',
    color: '#8E1C3D',
    tags: ['🍦 Bourbon Vanilla', '🥛 16% Butterfat', '🌿 Zero Gums']
  },
  'belgian-chocolate': {
    name: 'Belgian Chocolate Truffle',
    headline: 'Pure Decadence.',
    desc: 'Intense 72% dark Belgian cocoa ribbons folded into velvet chocolate gelato with crisp chocolate curls.',
    price: '₹420',
    size: '500ml Pint',
    image: 'assets/images/products/belgian-chocolate-splash-tub.png',
    particles: [
      'assets/images/particles/particle-cocoa-bean.png',
      'assets/images/particles/particle-chocolate-chunk.png',
      'assets/images/particles/particle-mint-leaf.png'
    ],
    bg: 'radial-gradient(circle at 60% 40%, #FAF0EB 0%, #E2CEBF 100%)',
    halo: 'rgba(160, 82, 45, 0.4)',
    color: '#54311C',
    tags: ['🍫 72% Cocoa', '☕ Roasted Espresso', '✨ Truffle Core']
  },
  'mint-pistachio': {
    name: 'Mint Pistachio Crunch',
    headline: 'Fresh Botanic.',
    desc: 'Fresh garden spearmint leaves steeped in pure Jersey milk with roasted Persian pistachios and dark chocolate shards.',
    price: '₹440',
    size: '500ml Pint',
    image: 'assets/images/products/mint-pistachio-splash-tub.png',
    particles: [
      'assets/images/particles/particle-pistachio.png',
      'assets/images/particles/particle-mint-leaf.png',
      'assets/images/particles/particle-pistachio.png'
    ],
    bg: 'radial-gradient(circle at 60% 40%, #F5FBF6 0%, #D2EBD7 100%)',
    halo: 'rgba(61, 115, 86, 0.35)',
    color: '#3D7356',
    tags: ['🌿 Garden Mint', '🌰 Roasted Pistachio', '🍫 Dark Choco']
  },
  'almond-crunch': {
    name: 'Almond Crunch Praline Bar',
    headline: 'Crackling Snap.',
    desc: 'Thick roasted California almond praline shell crackles open over dense, slow-churned pure milk ice cream.',
    price: '₹180',
    size: '90ml Bar',
    image: 'assets/images/products/almond-crunch-bar.png',
    particles: [
      'assets/images/particles/particle-almond.png',
      'assets/images/particles/particle-chocolate-chunk.png',
      'assets/images/particles/particle-almond.png'
    ],
    bg: 'radial-gradient(circle at 60% 40%, #FCF6EE 0%, #F1DEC9 100%)',
    halo: 'rgba(197, 125, 60, 0.4)',
    color: '#8C5627',
    tags: ['🌰 California Almonds', '🍫 Double Dipped', '🍦 Jersey Cream']
  },
  'celebration-cake': {
    name: 'Triple-Layer Gateau Cake',
    headline: 'Showstopper.',
    desc: 'Belgian chocolate, Madagascar vanilla, and Swiss mousse glazed in dark ganache drip, topped with fresh strawberries.',
    price: '₹1,250',
    size: '1.0 kg Gateau',
    image: 'assets/images/products/chocolate-celebration-cake.png',
    particles: [
      'assets/images/particles/particle-strawberry.png',
      'assets/images/particles/particle-chocolate-chunk.png',
      'assets/images/particles/particle-strawberry.png'
    ],
    bg: 'radial-gradient(circle at 60% 40%, #FFF5F7 0%, #FBD4DD 100%)',
    halo: 'rgba(219, 68, 85, 0.4)',
    color: '#B83248',
    tags: ['🎂 Handcrafted', '🍓 Fresh Berries', '🍫 Belgian Cocoa']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroFlavorSelector();
  initHeroParallax();
  initPintsSlider();
  initPintsCard3DTilt();
  initCatalogFilter();
  initFaqAccordions();
  initHeritageCone3D();
});

// ==========================================================
// 1. HERO FLAVOR SELECTOR WITH SMOOTH AUTO-CHANGE & ORBITING PARTICLES
// ==========================================================
function initHeroFlavorSelector() {
  const tabs = document.querySelectorAll('.art-tab-btn');
  const stageImg = document.getElementById('art-stage-img');
  const dynamicBg = document.getElementById('art-hero-bg');
  const headline = document.getElementById('art-title-highlight');
  const desc = document.getElementById('art-sub-desc');
  const pillName = document.getElementById('art-pill-name');
  const pillPrice = document.getElementById('art-pill-price');
  const halo = document.getElementById('art-glow-halo');
  const tagsContainer = document.getElementById('art-tags-row');
  const heroSection = document.getElementById('hero');

  const p1 = document.getElementById('orbit-particle-1');
  const p2 = document.getElementById('orbit-particle-2');
  const p3 = document.getElementById('orbit-particle-3');

  if (!tabs.length || !stageImg) return;

  const flavorKeys = Array.from(tabs).map(t => t.dataset.flavor).filter(Boolean);
  let currentIndex = 0;
  let autoTimer = null;

  function switchFlavor(index, isUserClick = false) {
    currentIndex = index % flavorKeys.length;
    const flavorKey = flavorKeys[currentIndex];
    const data = flavorData[flavorKey];
    if (!data) return;

    if (window.DAIRY_PRODUCTS && window.DAIRY_PRODUCTS[flavorKey]) {
      currentFlavor = window.DAIRY_PRODUCTS[flavorKey];
    } else {
      currentFlavor = data;
    }

    // Set globally and sync flight proxy and 3D showcase
    window.ACTIVE_HERO_FLAVOR = flavorKey;
    const flightProxy = document.getElementById('flight-proxy-img');
    if (flightProxy && data.image) flightProxy.src = data.image;
    if (window.syncShowcaseToFlavor) window.syncShowcaseToFlavor(flavorKey);
    if (window.syncCoverflowToFlavor) window.syncCoverflowToFlavor(flavorKey);

    // Update active tab button & safely scroll ONLY the inner strip container (no page shift)
    tabs.forEach(t => t.classList.remove('active'));
    if (tabs[currentIndex]) {
      const activeTab = tabs[currentIndex];
      activeTab.classList.add('active');
      const stripContainer = document.querySelector('.art-strip-buttons');
      if (stripContainer) {
        const containerWidth = stripContainer.clientWidth;
        const tabLeft = activeTab.offsetLeft;
        const tabWidth = activeTab.clientWidth;
        const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        stripContainer.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }

    // Smooth tub swap animation
    stageImg.style.transform = 'scale(0.88) translateY(12px)';
    stageImg.style.opacity = '0';

    // Fade orbiting particles smoothly during flavor change
    [p1, p2, p3].forEach(p => {
      if (p) p.style.opacity = '0.2';
    });

    setTimeout(() => {
      stageImg.src = data.image;
      stageImg.alt = data.name;
      stageImg.style.transform = 'scale(1) translateY(0)';
      stageImg.style.opacity = '1';

      // Swap particle images to match active flavor
      if (data.particles) {
        if (p1 && data.particles[0]) p1.src = data.particles[0];
        if (p2 && data.particles[1]) p2.src = data.particles[1];
        if (p3 && data.particles[2]) p3.src = data.particles[2];
      }

      [p1, p2, p3].forEach(p => {
        if (p) p.style.opacity = '1';
      });
    }, 180);

    if (dynamicBg) dynamicBg.style.background = data.bg;
    if (halo) halo.style.background = `radial-gradient(circle, ${data.halo} 0%, rgba(255, 255, 255, 0) 70%)`;
    if (headline) headline.textContent = data.headline;
    if (desc) desc.textContent = data.desc;
    if (pillName) pillName.textContent = data.name;
    if (pillPrice) pillPrice.textContent = data.price;
    if (tagsContainer && data.tags) {
      tagsContainer.innerHTML = data.tags.map(t => `<span class="art-tag">${t}</span>`).join('');
    }
  }

  function startAutoCycle() {
    stopAutoCycle();
    autoTimer = setInterval(() => {
      switchFlavor(currentIndex + 1);
    }, 3500);
  }

  function stopAutoCycle() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Click on tabs
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      switchFlavor(idx, true);
      startAutoCycle();
    });
  });

  // Drag-to-scroll support for touch & mouse on flavor strip
  const stripButtons = document.querySelector('.art-strip-buttons');
  if (stripButtons) {
    let isDown = false;
    let startX;
    let scrollLeft;

    stripButtons.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - stripButtons.offsetLeft;
      scrollLeft = stripButtons.scrollLeft;
    });
    stripButtons.addEventListener('mouseleave', () => { isDown = false; });
    stripButtons.addEventListener('mouseup', () => { isDown = false; });
    stripButtons.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - stripButtons.offsetLeft;
      const walk = (x - startX) * 1.5;
      stripButtons.scrollLeft = scrollLeft - walk;
    });
  }

  // Pause auto-cycle on mouse hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoCycle);
    heroSection.addEventListener('mouseleave', startAutoCycle);
    heroSection.addEventListener('touchstart', stopAutoCycle, { passive: true });
    heroSection.addEventListener('touchend', startAutoCycle);
  }

  // Kickoff auto-cycle immediately!
  startAutoCycle();
}

// ==========================================================
// 2. HERO PARALLAX
// ==========================================================
function initHeroParallax() {
  const stage = document.getElementById('art-hero-stage');
  const tub = document.getElementById('art-stage-img');
  const particles = document.querySelectorAll('.art-particle');

  if (!stage || !tub) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / rect.height) * 10;
    const rotY = (x / rect.width) * 10;

    tub.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;

    particles.forEach(p => {
      const depth = parseFloat(p.dataset.depth) || 15;
      p.style.transform = `translate3d(${(x / rect.width) * depth}px, ${(y / rect.height) * depth}px, 0)`;
    });
  });

  stage.addEventListener('mouseleave', () => {
    tub.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    particles.forEach(p => p.style.transform = 'translate3d(0, 0, 0)');
  });
}

// ==========================================================
// 3. LUXURY 3-CARD CAROUSEL SLIDER (Arrows + Dots + Auto-Slide)
// ==========================================================
let pintsAutoTimer = null;
let currentPintsIndex = 0;

function initPintsSlider() {
  const viewport = document.getElementById('pints-viewport');
  const track = document.getElementById('pints-track');
  const prevBtn = document.getElementById('pints-arrow-prev');
  const nextBtn = document.getElementById('pints-arrow-next');
  const dotsContainer = document.getElementById('pints-dots-bar');

  if (!viewport || !track) return;
  const cards = track.querySelectorAll('.pints-pop-card');
  if (!cards.length) return;

  function getCardsPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    const perView = getCardsPerView();
    return Math.max(0, cards.length - perView);
  }

  function updateSlider(animate = true) {
    const card = cards[0];
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const computedGap = parseFloat(window.getComputedStyle(track).gap) || 28;
    const isMobile = window.innerWidth <= 640;
    const perView = getCardsPerView();
    const maxIdx = getMaxIndex();

    if (currentPintsIndex > maxIdx) currentPintsIndex = maxIdx;
    if (currentPintsIndex < 0) currentPintsIndex = 0;

    const shiftX = currentPintsIndex * (cardWidth + computedGap);
    track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
    track.style.transform = `translateX(-${shiftX}px)`;

    // Update pagination dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.pints-dot-btn');
      const activeDotIndex = isMobile ? currentPintsIndex : Math.min(Math.floor(currentPintsIndex / perView), dots.length - 1);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeDotIndex);
      });
    }

    if (prevBtn) {
      prevBtn.style.opacity = currentPintsIndex === 0 ? '0.6' : '1';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentPintsIndex >= maxIdx ? '0.6' : '1';
    }
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const isMobile = window.innerWidth <= 640;
    const perView = getCardsPerView();
    const totalPages = isMobile ? cards.length : Math.ceil(cards.length / perView);

    if (totalPages <= 1) return;

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'pints-dot-btn' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        currentPintsIndex = isMobile ? i : Math.min(i * perView, getMaxIndex());
        updateSlider();
        restartPintsAuto();
      });
      dotsContainer.appendChild(dot);
    }
  }

  window.scrollPintsSlider = function(direction) {
    const isMobile = window.innerWidth <= 640;
    const perView = getCardsPerView();
    const maxIdx = getMaxIndex();

    if (isMobile) {
      if (direction > 0) {
        currentPintsIndex = (currentPintsIndex + 1 > maxIdx) ? 0 : currentPintsIndex + 1;
      } else {
        currentPintsIndex = (currentPintsIndex - 1 < 0) ? maxIdx : currentPintsIndex - 1;
      }
    } else {
      if (direction > 0) {
        currentPintsIndex = (currentPintsIndex >= maxIdx) ? 0 : Math.min(currentPintsIndex + perView, maxIdx);
      } else {
        currentPintsIndex = (currentPintsIndex <= 0) ? maxIdx : Math.max(currentPintsIndex - perView, 0);
      }
    }
    updateSlider(true);
    restartPintsAuto();
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollPintsSlider(1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollPintsSlider(-1);
    });
  }

  // Touch Swipe Gesture Support
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopPintsAuto();
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        window.scrollPintsSlider(1);
      } else {
        window.scrollPintsSlider(-1);
      }
    }
    startPintsAuto();
  });

  viewport.addEventListener('mouseenter', stopPintsAuto);
  viewport.addEventListener('mouseleave', startPintsAuto);

  window.addEventListener('resize', () => {
    createDots();
    updateSlider(false);
  });

  createDots();
  updateSlider(false);
  startPintsAuto();
}

function startPintsAuto() {
  stopPintsAuto();
  pintsAutoTimer = setInterval(() => {
    window.scrollPintsSlider(1);
  }, 3800);
}

function stopPintsAuto() {
  if (pintsAutoTimer) {
    clearInterval(pintsAutoTimer);
    pintsAutoTimer = null;
  }
}

function restartPintsAuto() {
  stopPintsAuto();
  startPintsAuto();
}

// ==========================================================
// 3B. LUXURY 3D INTERACTIVE TILT & SCROLL REVEAL STAGGER
// ==========================================================
function initPintsCard3DTilt() {
  const cards = document.querySelectorAll('.pints-pop-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    let targetRotX = 0, targetRotY = 0, targetRotZ = 0;
    let currentRotX = 0, currentRotY = 0, currentRotZ = 0;
    let targetScaleX = 1, targetScaleY = 1;
    let currentScaleX = 1, currentScaleY = 1;
    let targetZ = 0, currentZ = 0;
    let targetShadowX = 0, targetShadowY = 15, targetShadowBlur = 30;
    let currentShadowX = 0, currentShadowY = 15, currentShadowBlur = 30;
    let isHovering = false;
    let animId = null;

    // Specular glare layer for luxury 360 sheen
    let glare = card.querySelector('.card-3d-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-3d-glare';
      glare.style.cssText = `
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(circle 320px at 50% 50%, rgba(255,255,255,0.32) 0%, rgba(255,245,235,0.1) 50%, transparent 80%);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 10;
        mix-blend-mode: overlay;
      `;
      card.appendChild(glare);
    }

    const tubPopout = card.querySelector('.card-tub-popout');
    const tubImg = card.querySelector('.card-tub-popout img');
    const badge = card.querySelector('.card-pop-top-row');
    const title = card.querySelector('.card-pop-title');

    function renderTilt() {
      // 60FPS Lerp Interpolation
      const ease = 0.12;
      currentRotX += (targetRotX - currentRotX) * ease;
      currentRotY += (targetRotY - currentRotY) * ease;
      currentRotZ += (targetRotZ - currentRotZ) * ease;
      currentScaleX += (targetScaleX - currentScaleX) * ease;
      currentScaleY += (targetScaleY - currentScaleY) * ease;
      currentZ += (targetZ - currentZ) * ease;
      currentShadowX += (targetShadowX - currentShadowX) * ease;
      currentShadowY += (targetShadowY - currentShadowY) * ease;
      currentShadowBlur += (targetShadowBlur - currentShadowBlur) * ease;

      if (isHovering) {
        card.style.transform = `perspective(1100px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg) translateZ(${currentZ.toFixed(1)}px) scale3d(${currentScaleX.toFixed(3)}, ${currentScaleY.toFixed(3)}, 1.04) translateY(-10px)`;
        card.style.boxShadow = `${currentShadowX.toFixed(1)}px ${currentShadowY.toFixed(1)}px ${currentShadowBlur.toFixed(1)}px rgba(45, 20, 15, 0.18), 0 0 0 1px rgba(229, 195, 120, 0.42), 0 14px 28px rgba(225, 29, 72, 0.08)`;
      } else {
        card.style.transform = `perspective(1100px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(0deg) translateZ(${currentZ.toFixed(1)}px) scale3d(1, 1, 1) translateY(0px)`;
        card.style.boxShadow = '';
      }

      // Parallax shifts + Dynamic 3D Pop Out & Stretch on Product
      if (tubPopout) {
        if (isHovering) {
          const tubStretchX = 1.15 + Math.abs(currentRotY) * 0.006;
          const tubStretchY = 1.15 + Math.abs(currentRotX) * 0.006;
          tubPopout.style.transform = `translateZ(65px) translateY(-14px) translateX(${(currentRotY * 0.55).toFixed(1)}px) scale3d(${tubStretchX.toFixed(3)}, ${tubStretchY.toFixed(3)}, 1.15)`;
        } else {
          tubPopout.style.transform = '';
        }
      }

      if (badge && isHovering) {
        badge.style.transform = `translateZ(30px) translateX(${(currentRotY * 0.3).toFixed(1)}px)`;
      } else if (badge) {
        badge.style.transform = '';
      }

      if (title && isHovering) {
        title.style.transform = `translateZ(24px) translateX(${(currentRotY * 0.25).toFixed(1)}px)`;
      } else if (title) {
        title.style.transform = '';
      }

      if (isHovering || Math.abs(currentRotX) > 0.03 || Math.abs(currentRotY) > 0.03 || Math.abs(currentScaleX - 1) > 0.005) {
        animId = requestAnimationFrame(renderTilt);
      } else {
        card.style.transform = '';
        card.style.boxShadow = '';
        animId = null;
      }
    }

    card.addEventListener('mouseenter', () => {
      isHovering = true;
      if (glare) glare.style.opacity = '1';
      if (tubImg) tubImg.style.animationPlayState = 'paused';
      if (typeof stopPintsAuto === 'function') stopPintsAuto();
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 360-degree normalized vectors (-1 to +1)
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;
      const dist = Math.min(Math.hypot(normX, normY), 1.4);
      const angle = Math.atan2(normY, normX);

      // 360-degree 3D rotational tilt
      targetRotX = -normY * 12; // tilt along X axis
      targetRotY = normX * 12;  // tilt along Y axis
      targetRotZ = -Math.sin(angle * 2) * 2; // subtle realistic 360 corner roll

      // 360-degree directional card stretch & zoom
      targetScaleX = 1.035 + Math.abs(normX) * 0.035;
      targetScaleY = 1.035 + Math.abs(normY) * 0.035;
      targetZ = 28 + dist * 12;

      // Dynamic opposite-direction light shadow projection
      targetShadowX = -normX * 22;
      targetShadowY = -normY * 22 + 28;
      targetShadowBlur = 38 + dist * 22;

      // Specular spotlight glare tracking cursor in 360 space
      if (glare) {
        glare.style.background = `radial-gradient(circle 340px at ${x}px ${y}px, rgba(255,255,255,0.38) 0%, rgba(255,245,230,0.12) 48%, transparent 75%)`;
      }

      if (!animId) {
        animId = requestAnimationFrame(renderTilt);
      }
    });

    card.addEventListener('mouseleave', () => {
      isHovering = false;
      targetRotX = 0;
      targetRotY = 0;
      targetRotZ = 0;
      targetScaleX = 1;
      targetScaleY = 1;
      targetZ = 0;
      targetShadowX = 0;
      targetShadowY = 10;
      targetShadowBlur = 25;
      if (glare) glare.style.opacity = '0';
      if (tubImg) tubImg.style.animationPlayState = 'running';
      if (!animId) {
        animId = requestAnimationFrame(renderTilt);
      }
      if (typeof startPintsAuto === 'function') startPintsAuto();
    });
  });
}

// ==========================================================
// 4. CATALOG PORTFOLIO FILTER TABS (5 items max per load + View More)
// ==========================================================
function initCatalogFilter() {
  const filterBtns = document.querySelectorAll('.catalog-tab-btn');
  const cards = document.querySelectorAll('.catalog-card');
  const catExploreCards = document.querySelectorAll('.cat-explore-card[data-category-target]');
  const loadMoreWrap = document.getElementById('catalog-load-more-wrap');
  const loadMoreBtn = document.getElementById('btn-catalog-load-more');
  const loadMoreText = document.querySelector('.btn-catalog-load-more-text');

  if (!filterBtns.length || !cards.length) return;

  const PAGE_SIZE = 5;
  let activeCategory = 'all';
  let visibleCount = PAGE_SIZE;

  function updateCatalogVisibility(animateNew = false) {
    const matchingCards = [];
    const nonMatchingCards = [];

    cards.forEach(card => {
      const cardCat = card.dataset.category;
      if (activeCategory === 'all' || cardCat === activeCategory) {
        matchingCards.push(card);
      } else {
        nonMatchingCards.push(card);
      }
    });

    // Hide non-matching cards immediately
    nonMatchingCards.forEach(card => {
      card.classList.add('hidden');
      card.style.display = 'none';
    });

    // Display matching cards up to visibleCount
    matchingCards.forEach((card, index) => {
      if (index < visibleCount) {
        const wasHidden = card.classList.contains('hidden') || card.style.display === 'none';
        card.classList.remove('hidden');
        card.style.display = 'flex';

        if (animateNew && wasHidden) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '1';
          card.style.transform = '';
          card.style.transition = '';
        }
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    // Handle "View More" button visibility & text
    if (loadMoreWrap && loadMoreBtn) {
      const remaining = matchingCards.length - visibleCount;
      if (remaining > 0) {
        loadMoreWrap.style.display = 'flex';
        if (loadMoreText) {
          loadMoreText.textContent = 'View More';
        }
      } else {
        loadMoreWrap.style.display = 'none';
      }
    }
  }

  window.filterCatalogCategory = function(category, shouldScroll = false) {
    activeCategory = category || 'all';
    visibleCount = PAGE_SIZE; // Reset to first 5 products for this tab

    filterBtns.forEach(b => {
      if (b.dataset.filter === activeCategory) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    updateCatalogVisibility(false);

    if (shouldScroll) {
      const showcaseSection = document.getElementById('catalog-showcase');
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // View More Button Click
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      visibleCount += PAGE_SIZE;
      updateCatalogVisibility(true);
    });
  }

  const filterBar = document.querySelector('.catalog-filter-bar');
  if (filterBar) {
    let isDown = false;
    let startX;
    let scrollLeft;

    filterBar.addEventListener('mousedown', (e) => {
      isDown = true;
      filterBar.classList.add('grabbing');
      startX = e.pageX - filterBar.offsetLeft;
      scrollLeft = filterBar.scrollLeft;
    });

    filterBar.addEventListener('mouseleave', () => {
      isDown = false;
      filterBar.classList.remove('grabbing');
    });

    filterBar.addEventListener('mouseup', () => {
      isDown = false;
      filterBar.classList.remove('grabbing');
    });

    filterBar.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - filterBar.offsetLeft;
      const walk = (x - startX) * 1.5;
      filterBar.scrollLeft = scrollLeft - walk;
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      window.filterCatalogCategory(filter, false);

      if (filterBar) {
        const containerWidth = filterBar.clientWidth;
        const tabLeft = btn.offsetLeft;
        const tabWidth = btn.clientWidth;
        const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        filterBar.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    });
  });

  // External Category Explore Cards Click
  catExploreCards.forEach(c => {
    c.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = c.dataset.categoryTarget;
      if (targetCat) {
        window.filterCatalogCategory(targetCat, true);
      }
    });
  });

  // Initialize initial 5 items on page ready
  updateCatalogVisibility(false);
}

// Quick View Tasting Notes Modal Function
window.openCatalogItemQuickView = function(name, cat, size, img, desc, badge) {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  const qvImg = document.getElementById('qv-img');
  const qvBadge = document.getElementById('qv-badge');
  const qvTitle = document.getElementById('qv-title');
  const qvSize = document.getElementById('qv-size');
  const qvDesc = document.getElementById('qv-desc');

  if (qvImg) qvImg.src = img;
  if (qvBadge) qvBadge.textContent = badge || '100% Real Farm Milk';
  if (qvTitle) qvTitle.textContent = name;
  if (qvSize) qvSize.textContent = `${cat} • ${size}`;
  if (qvDesc) qvDesc.textContent = desc;

  const qvCal = document.getElementById('qv-cal');
  const qvFat = document.getElementById('qv-fat');
  const qvSugar = document.getElementById('qv-sugar');
  const qvProt = document.getElementById('qv-prot');

  if (qvCal) qvCal.textContent = '240 kcal';
  if (qvFat) qvFat.textContent = '14g';
  if (qvSugar) qvSugar.textContent = '18g';
  if (qvProt) qvProt.textContent = '5.2g';

  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
  }
};

window.closeQuickView = function() {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
};

// ==========================================================
// 5. FAQ CATEGORY SWITCHER & ACCORDION EXPANSION
// ==========================================================
function initFaqAccordions() {
  const faqTabBtns = document.querySelectorAll('.faq-tab-btn');
  const faqGroups = document.querySelectorAll('.faq-accordion-group');
  const faqItems = document.querySelectorAll('.faq-item');
  const faqNav = document.querySelector('.faq-category-nav');

  if (!faqTabBtns.length) return;

  // Touch swipe and Drag-to-Scroll support for FAQ categories
  if (faqNav) {
    let isDown = false;
    let startX;
    let scrollLeft;

    faqNav.addEventListener('mousedown', (e) => {
      isDown = true;
      faqNav.classList.add('grabbing');
      startX = e.pageX - faqNav.offsetLeft;
      scrollLeft = faqNav.scrollLeft;
    });

    faqNav.addEventListener('mouseleave', () => {
      isDown = false;
      faqNav.classList.remove('grabbing');
    });

    faqNav.addEventListener('mouseup', () => {
      isDown = false;
      faqNav.classList.remove('grabbing');
    });

    faqNav.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - faqNav.offsetLeft;
      const walk = (x - startX) * 1.5;
      faqNav.scrollLeft = scrollLeft - walk;
    });
  }

  faqTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const catKey = btn.dataset.faqCat;
      faqTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Smooth auto-centering on tap / click
      if (faqNav) {
        const containerWidth = faqNav.clientWidth;
        const tabLeft = btn.offsetLeft;
        const tabWidth = btn.clientWidth;
        const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        faqNav.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      }

      faqGroups.forEach(group => {
        if (group.id === `faq-group-${catKey}`) {
          group.classList.add('active');
        } else {
          group.classList.remove('active');
        }
      });
    });
  });

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      const parentGroup = item.closest('.faq-accordion-group');

      if (parentGroup) {
        parentGroup.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('open');
          const btn = other.querySelector('.faq-question-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ==========================================================
// 6. CONTACT INQUIRY FORM SUBMISSION
// ==========================================================
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const form = document.getElementById('live-contact-form');
  const toast = document.getElementById('form-toast-msg');
  const submitBtn = document.getElementById('btn-submit-inquiry');

  if (submitBtn) {
    submitBtn.innerHTML = '<span>Sending... ⏳</span>';
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (toast) {
      toast.style.display = 'block';
    }
    if (submitBtn) {
      submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
      submitBtn.style.background = '#059669';
    }
    if (form) {
      form.reset();
    }
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Send Message</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }
    }, 4000);
  }, 900);
};

// ==========================================================
// 7. HERITAGE 3D CONE INTERACTIVE PARALLAX TILT
// ==========================================================
function initHeritageCone3D() {
  const stage = document.getElementById('heritage-cone-stage');
  const tiltBox = document.getElementById('heritage-cone-tilt');

  if (!stage || !tiltBox) return;

  let isHovered = false;

  stage.addEventListener('mouseenter', () => {
    isHovered = true;
    tiltBox.style.transition = 'transform 0.12s ease-out';
  });

  stage.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 16;

    tiltBox.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.06, 1.06, 1.06)`;
  });

  stage.addEventListener('mouseleave', () => {
    isHovered = false;
    tiltBox.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    tiltBox.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}



