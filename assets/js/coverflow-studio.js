// assets/js/coverflow-studio.js - Enhanced 3D Interactive Product Studio & Dynamic Flavor Orbit Engine

document.addEventListener('DOMContentLoaded', () => {
  initCoverflowStudio();
});

function initCoverflowStudio() {
  const PRODUCTS = [
    {
      id: 'french-vanilla',
      num: '01',
      category: '01 // ARTISANAL PINT',
      name: 'French Vanilla Royale',
      composition: 'Madagascar Bourbon Vanilla • 16% Jersey Cream • Zero Gums',
      price: '₹380',
      size: '/ 500ml Pint',
      badge: 'SIGNATURE BLEND',
      image: 'assets/images/products/french-vanilla-splash-tub.png',
      particles: [
        'assets/images/particles/particle-vanilla-orchid.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-vanilla-orchid.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-almond.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(229, 195, 120, 0.55) 0%, rgba(142, 28, 61, 0.25) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(229, 195, 120, 0.75) 0%, rgba(229, 195, 120, 0.15) 50%, transparent 75%)',
      chips: ['🌿 Bourbon Vanilla', '🥛 16% Jersey Butterfat', '🍦 Slow Churned', '✨ Golden Cream']
    },
    {
      id: 'belgian-chocolate',
      num: '02',
      category: '02 // GOURMET PINT',
      name: 'Belgian Chocolate Truffle',
      composition: '72% Callebaut Cocoa • Cocoa Nib Ribbons • Dark Ganache Core',
      price: '₹420',
      size: '/ 500ml Pint',
      badge: 'CHEF\'S RESERVE',
      image: 'assets/images/products/belgian-chocolate-splash-tub.png',
      particles: [
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-chocolate-chunk.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(160, 82, 45, 0.6) 0%, rgba(74, 37, 24, 0.4) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(160, 82, 45, 0.8) 0%, rgba(160, 82, 45, 0.2) 50%, transparent 75%)',
      chips: ['🍫 72% Dark Cocoa', '☕ Roasted Espresso Note', '✨ Truffle Core', '🍫 Pure Chocolate Shards']
    },
    {
      id: 'mint-pistachio',
      num: '03',
      category: '03 // BOTANICAL PINT',
      name: 'Mint Pistachio Crunch',
      composition: 'Garden Spearmint • Persian Roasted Pistachios • Choco Shards',
      price: '₹440',
      size: '/ 500ml Pint',
      badge: 'BOTANICAL SPECIAL',
      image: 'assets/images/products/mint-pistachio-splash-tub.png',
      particles: [
        'assets/images/particles/particle-pistachio.png',
        'assets/images/particles/particle-mint-leaf.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-pistachio.png',
        'assets/images/particles/particle-mint-leaf.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(61, 115, 86, 0.6) 0%, rgba(26, 77, 46, 0.35) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(61, 115, 86, 0.8) 0%, rgba(61, 115, 86, 0.2) 50%, transparent 75%)',
      chips: ['🌿 Fresh Spearmint', '🌰 Roasted Pistachio', '🍫 Dark Choco Shards', '🍃 Botanic Fresh']
    },
    {
      id: 'golden-fantasy',
      num: '04',
      category: '04 // WAFFLE CONE',
      name: 'Golden Fantasy Swirl',
      composition: 'Double Chocolate Swirl • Roasted Peanuts • Crisp Waffle Cone',
      price: '₹120',
      size: '/ 120ml Cone',
      badge: 'ICONIC CLASSIC',
      image: 'assets/images/products/golden-fantasy.png',
      particles: [
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-almond.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-almond.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(217, 119, 6, 0.6) 0%, rgba(142, 28, 61, 0.3) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.8) 0%, rgba(217, 119, 6, 0.2) 50%, transparent 75%)',
      chips: ['🥜 Crunchy Peanuts', '🍦 Dual Swirl', '🧇 Crispy Waffle', '🍫 Rich Chocolate Drip']
    },
    {
      id: 'almond-crunch',
      num: '05',
      category: '05 // ARTISANAL BAR',
      name: 'Almond Crunch Praline Bar',
      composition: 'California Almond Praline Shell • Velvet Milk Core • Zero Palm Oil',
      price: '₹180',
      size: '/ 90ml Bar',
      badge: 'HANDHELD LUXURY',
      image: 'assets/images/products/almond-crunch-bar.png',
      particles: [
        'assets/images/particles/particle-almond.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-almond.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-chocolate-chunk.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(184, 115, 51, 0.6) 0%, rgba(84, 49, 28, 0.35) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(184, 115, 51, 0.8) 0%, rgba(184, 115, 51, 0.2) 50%, transparent 75%)',
      chips: ['🌰 California Almonds', '🍫 Double Dipped', '🥛 Real Jersey Milk', '✨ Crackling Praline']
    },
    {
      id: 'celebration-cake',
      num: '06',
      category: '06 // GATEAU CAKE',
      name: 'Triple-Layer Gateau Cake',
      composition: 'Belgian Dark Ganache • Vanilla Mousse • Fresh Strawberries',
      price: '₹1,250',
      size: '/ 1.0 kg Gateau',
      badge: 'PARTY SHOWSTOPPER',
      image: 'assets/images/products/chocolate-celebration-cake.png',
      particles: [
        'assets/images/particles/particle-strawberry.png',
        'assets/images/particles/particle-chocolate-chunk.png',
        'assets/images/particles/particle-strawberry.png',
        'assets/images/particles/particle-cocoa-bean.png',
        'assets/images/particles/particle-chocolate-chunk.png'
      ],
      glowColor: 'radial-gradient(circle, rgba(184, 50, 72, 0.6) 0%, rgba(142, 28, 61, 0.35) 50%, transparent 70%)',
      pedestalColor: 'radial-gradient(ellipse at center, rgba(184, 50, 72, 0.8) 0%, rgba(184, 50, 72, 0.2) 50%, transparent 75%)',
      chips: ['🎂 3-Layer Gelato', '🍓 Fresh Strawberries', '🍫 Dark Ganache Drip', '🍰 Signature Gateau']
    }
  ];

  let currentIndex = 0;
  const totalCount = PRODUCTS.length;

  const studioSec = document.getElementById('product-studio-3d');
  if (!studioSec) return;

  // DOM Elements
  const ambientGlow = document.getElementById('dynamic-ambient-glow');
  const badgeText = document.getElementById('studio-badge-text');
  const currentSlideNum = document.getElementById('current-slide-num');
  const totalSlidesNum = document.getElementById('total-slides-num');

  // Cards
  const leftCard = document.getElementById('card-left-preview');
  const leftImg = document.getElementById('card-left-img');
  const leftTitle = document.getElementById('card-left-title');

  const heroImg = document.getElementById('card-hero-img');
  const orbitIcon1 = document.getElementById('orbit-icon-1');
  const orbitIcon2 = document.getElementById('orbit-icon-2');
  const orbitIcon3 = document.getElementById('orbit-icon-3');
  const orbitIcon4 = document.getElementById('orbit-icon-4');
  const orbitIcon5 = document.getElementById('orbit-icon-5');
  const pedestalGlow = document.getElementById('pedestal-glow');

  const rightCard = document.getElementById('card-right-preview');
  const rightImg = document.getElementById('card-right-img');
  const rightTitle = document.getElementById('card-right-title');

  // Detail Area
  const detailCategory = document.getElementById('detail-category-tag');
  const detailComposition = document.getElementById('detail-composition');
  const detailTitle = document.getElementById('detail-title');
  const detailNotes = document.getElementById('detail-notes-chips');
  const detailPrice = document.getElementById('detail-price');
  const detailSize = document.getElementById('detail-size');
  const detailsFlare = document.getElementById('details-flare');

  // Buttons
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  const btnAddToCart = document.getElementById('btn-add-to-cart');

  if (totalSlidesNum) totalSlidesNum.textContent = String(totalCount).padStart(2, '0');

  function getIndex(offset) {
    return (currentIndex + offset + totalCount) % totalCount;
  }

  function renderSlide(index) {
    currentIndex = (index + totalCount) % totalCount;

    const current = PRODUCTS[currentIndex];
    const prev = PRODUCTS[getIndex(-1)];
    const next = PRODUCTS[getIndex(1)];

    if (currentSlideNum) currentSlideNum.textContent = current.num;
    if (badgeText) badgeText.textContent = current.badge;

    if (ambientGlow) ambientGlow.style.background = current.glowColor;
    if (pedestalGlow) pedestalGlow.style.background = current.pedestalColor;
    if (detailsFlare) detailsFlare.style.background = current.glowColor;

    if (leftImg) leftImg.src = prev.image;
    if (leftTitle) leftTitle.textContent = prev.name;

    if (heroImg) {
      heroImg.style.opacity = '0';
      heroImg.style.transform = 'scale(0.8) translateY(16px) rotateZ(-3deg)';
      
      setTimeout(() => {
        heroImg.src = current.image;
        heroImg.alt = current.name;
        heroImg.style.transition = 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
        heroImg.style.opacity = '1';
        heroImg.style.transform = 'scale(1) translateY(0px) rotateZ(0deg)';
      }, 120);
    }

    // Dynamic 5-Particle Orbit Swarm Update
    if (orbitIcon1 && current.particles[0]) orbitIcon1.src = current.particles[0];
    if (orbitIcon2 && current.particles[1]) orbitIcon2.src = current.particles[1];
    if (orbitIcon3 && current.particles[2]) orbitIcon3.src = current.particles[2];
    if (orbitIcon4 && current.particles[3]) orbitIcon4.src = current.particles[3];
    if (orbitIcon5 && current.particles[4]) orbitIcon5.src = current.particles[4];

    if (rightImg) rightImg.src = next.image;
    if (rightTitle) rightTitle.textContent = next.name;

    if (detailCategory) detailCategory.textContent = current.category;
    if (detailComposition) detailComposition.textContent = current.composition;
    if (detailTitle) detailTitle.textContent = current.name;
    if (detailPrice) detailPrice.textContent = current.price;
    if (detailSize) detailSize.textContent = current.size;

    if (detailNotes) {
      detailNotes.innerHTML = current.chips.map(chip => 
        `<span class="cs-chip">${chip}</span>`
      ).join('');
    }
    // Update current index for auto-play tracking
  }

  // Global helper to sync coverflow studio to a specific flavor
  window.syncCoverflowToFlavor = function(flavorKey) {
    const foundIdx = PRODUCTS.findIndex(p => p.id === flavorKey);
    if (foundIdx !== -1 && foundIdx !== currentIndex) {
      renderSlide(foundIdx);
      if (typeof resetAutoPlay === 'function') resetAutoPlay();
    }
  };

  // Auto-play interval (every 3.5 seconds)
  const AUTO_PLAY_INTERVAL = 3500;
  let autoPlayTimer = null;
  let isHovered = false;

  function startAutoPlay() {
    stopAutoPlay();
    if (!isHovered) {
      autoPlayTimer = setInterval(() => {
        renderSlide(currentIndex + 1);
      }, AUTO_PLAY_INTERVAL);
    }
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  if (btnPrev) btnPrev.addEventListener('click', () => { renderSlide(currentIndex - 1); resetAutoPlay(); });
  if (btnNext) btnNext.addEventListener('click', () => { renderSlide(currentIndex + 1); resetAutoPlay(); });
  if (leftCard) leftCard.addEventListener('click', () => { renderSlide(currentIndex - 1); resetAutoPlay(); });
  if (rightCard) rightCard.addEventListener('click', () => { renderSlide(currentIndex + 1); resetAutoPlay(); });

  // Advanced 3D Mouse Gyroscope / Parallax Tilt Follower on Center Stage
  const interactiveZone = document.getElementById('coverflow-interactive-zone');
  const tiltBox = document.getElementById('tilt-product-box');
  const heroOrbitWrap = document.getElementById('hero-orbit-wrap');
  const coverflowSection = document.getElementById('product-studio-3d');

  let mouseX = 0, mouseY = 0;
  let targetTiltX = 0, targetTiltY = 0;
  let currentTiltX = 0, currentTiltY = 0;
  let rafId = null;

  function updateTiltPhysics() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.1;
    currentTiltY += (targetTiltY - currentTiltY) * 0.1;

    if (tiltBox) {
      tiltBox.style.transform = `perspective(1400px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg) translateZ(40px) scale3d(1.05, 1.05, 1.05)`;
    }
    if (heroOrbitWrap) {
      heroOrbitWrap.style.transform = `translate3d(${(currentTiltY * 2.5).toFixed(2)}px, ${(-currentTiltX * 2.5).toFixed(2)}px, 20px)`;
    }

    if (Math.abs(targetTiltX - currentTiltX) > 0.05 || Math.abs(targetTiltY - currentTiltY) > 0.05) {
      rafId = requestAnimationFrame(updateTiltPhysics);
    } else {
      rafId = null;
    }
  }

  if (interactiveZone && tiltBox) {
    interactiveZone.addEventListener('mouseenter', () => {
      isHovered = true;
      stopAutoPlay();
    });

    interactiveZone.addEventListener('mousemove', (e) => {
      const rect = interactiveZone.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      targetTiltX = -(y / (rect.height / 2)) * 16;
      targetTiltY = (x / (rect.width / 2)) * 20;

      if (!rafId) {
        rafId = requestAnimationFrame(updateTiltPhysics);
      }
    });

    interactiveZone.addEventListener('mouseleave', () => {
      isHovered = false;
      targetTiltX = 0;
      targetTiltY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(updateTiltPhysics);
      }
      startAutoPlay();
    });
  }

  // Mobile Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;

  if (interactiveZone) {
    interactiveZone.addEventListener('touchstart', (e) => {
      stopAutoPlay();
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    interactiveZone.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) renderSlide(currentIndex + 1);
        else renderSlide(currentIndex - 1);
      }
      startAutoPlay();
    }, { passive: true });
  }

  // Page visibility awareness
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Add to Cart Feedback
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', function() {
      const originalHTML = this.innerHTML;
      this.innerHTML = `
        <svg style="width:20px;height:20px;margin-right:6px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>Added to Bag!</span>
      `;
      setTimeout(() => {
        this.innerHTML = originalHTML;
      }, 1800);
    });
  }

  renderSlide(0);
  startAutoPlay();
}
