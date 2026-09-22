/**
 * Artisanal Ice Cream Scoop Custom Cursor System
 * Luxury interactive cursor with continuous repeating scooping cycles, dynamic flavor extraction,
 * micro-crumbs particle bursts, and randomized mouthwatering reaction badges on every scoop.
 */

(function () {
  'use strict';

  // Only initialize on desktop devices with fine pointer support
  if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024) {
    return;
  }

  // Pre-defined Artisanal Flavor Palette Map
  const FLAVOR_PALETTES = {
    vanilla: {
      name: 'French Vanilla Royale',
      defaultPill: 'BOURBON VANILLA! 🍨',
      stops: ['#FFFDF5', '#FDF6E2', '#EED8A1', '#C59B4B'],
      particleColors: ['#FFFDF5', '#FDF6E2', '#C59B4B', '#FFD700', '#FFFFFF']
    },
    chocolate: {
      name: 'Belgian Chocolate Truffle',
      defaultPill: 'BELGIAN CHOCOLATE! 🍫',
      stops: ['#8A5238', '#54311C', '#32180D', '#1A0B05'],
      particleColors: ['#54311C', '#8A5238', '#32180D', '#C59B4B', '#FF7043']
    },
    pistachio: {
      name: 'Mint Pistachio Crunch',
      defaultPill: 'MINT PISTACHIO! 🍃',
      stops: ['#E8F7EE', '#9EDBB7', '#4E9E71', '#2C6946'],
      particleColors: ['#9EDBB7', '#4E9E71', '#2C6946', '#54311C', '#FFF']
    },
    berry: {
      name: 'Berry Delight / Super Twist',
      defaultPill: 'FRESH BERRY! 🍓',
      stops: ['#FFE8EE', '#F06292', '#D81B60', '#880E4F'],
      particleColors: ['#F06292', '#D81B60', '#FFE8EE', '#FFD54F', '#FFF']
    },
    mango: {
      name: 'Golden Fantasy / Mango',
      defaultPill: 'GOLDEN MANGO! 🥭',
      stops: ['#FFF8E1', '#FFD54F', '#FFA000', '#E65100'],
      particleColors: ['#FFD54F', '#FFA000', '#FFF8E1', '#8E1C3D', '#FFF']
    },
    almond: {
      name: 'Almond Crunch / Hazelnut',
      defaultPill: 'ROASTED ALMOND! 🌰',
      stops: ['#F5EBE6', '#D7B49E', '#A47551', '#5D3A1A'],
      particleColors: ['#D7B49E', '#A47551', '#F5EBE6', '#5D3A1A', '#FFD700']
    },
    cake: {
      name: 'Celebration Cake',
      defaultPill: 'CELEBRATION! 🎂',
      stops: ['#FFF0F5', '#F8BBD0', '#EC407A', '#AD1457'],
      particleColors: ['#EC407A', '#F8BBD0', '#FFD700', '#00E676', '#00E5FF']
    },
    default: {
      name: 'Dairy Classic Single-Farm',
      defaultPill: 'FRESH SCOOP! 🍨',
      stops: ['#FFFDF5', '#FDF6E2', '#EED8A1', '#C59B4B'],
      particleColors: ['#C59B4B', '#FDF6E2', '#8E1C3D', '#FFD700', '#FFFFFF']
    }
  };

  // Rich set of mouthwatering reaction phrases shown randomly on every repeating scoop
  const DELICIOUS_REACTIONS = [
    'DELICIOUS! 😋',
    'SO TASTY! 🍦',
    'EXTRA CREAMY! 🥛',
    'YUMMY! 🍨',
    'PURE BLISS! ✨',
    'HEAVENLY SCOOP! 💫',
    'SUPER VELVETY! 🤤',
    '100% FARM MILK! ✦',
    'FRESH SCOOP! 🥄',
    'CRUNCHY DELIGHT! 🌰',
    'CHOCO HEAVEN! 🍫',
    'MELT IN MOUTH! 💖',
    'ARTISANAL CHURN! 🐮',
    'SWEET PERFECTION! 🍓',
    'IRRESISTIBLE! 🌟',
    'ONE MORE SCOOP! 🍨',
    'RICH & INTENSE! 🤎',
    'CRISP & SILKY! 🍃',
    'DOUBLE CREAM! 🥛',
    'PURE MAGIC! 🔮',
    'SO SMOOTH! 🍯',
    'FLAVOUR BURST! 💥'
  ];

  function buildCursorDOM() {
    if (document.getElementById('artisanal-scoop-cursor')) return;

    const container = document.createElement('div');
    container.className = 'artisanal-scoop-cursor';
    container.id = 'artisanal-scoop-cursor';
    container.setAttribute('aria-hidden', 'true');

    container.innerHTML = `
      <!-- Particle Emitter Canvas -->
      <div class="scoop-particles-canvas" id="scoop-particles-canvas"></div>

      <!-- Main Scoop Tool -->
      <div class="scoop-tool-wrapper" id="scoop-tool-wrapper">
        <!-- Floating Reaction Pill Badge -->
        <div class="scoop-reaction-pill" id="scoop-reaction-pill">
          <span class="pill-text" id="scoop-pill-text">DELICIOUS! 😋</span>
        </div>

        <!-- Precision Artisanal Scoop Spoon SVG -->
        <svg class="scoop-spoon-svg" viewBox="0 0 72 72" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Metallic Gold Gradients -->
            <linearGradient id="metalGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFF5D1" />
              <stop offset="35%" stop-color="#E5C378" />
              <stop offset="70%" stop-color="#C59B4B" />
              <stop offset="100%" stop-color="#8C631B" />
            </linearGradient>

            <linearGradient id="metalSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="40%" stop-color="#E2E8F0" />
              <stop offset="75%" stop-color="#94A3B8" />
              <stop offset="100%" stop-color="#475569" />
            </linearGradient>

            <!-- Dark Chocolate Handle -->
            <linearGradient id="handleChocoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#54311C" />
              <stop offset="45%" stop-color="#2E170E" />
              <stop offset="85%" stop-color="#1A0D08" />
              <stop offset="100%" stop-color="#3D2012" />
            </linearGradient>

            <!-- Dynamic Flavor Scoop Ball Radial Gradient -->
            <radialGradient id="flavorScoopGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#FFFDF5" id="flavor-stop-1" />
              <stop offset="45%" stop-color="#FDF6E2" id="flavor-stop-2" />
              <stop offset="85%" stop-color="#C59B4B" id="flavor-stop-3" />
              <stop offset="100%" stop-color="#8C631B" id="flavor-stop-4" />
            </radialGradient>

            <filter id="scoopShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="rgba(0,0,0,0.3)" />
            </filter>
          </defs>

          <!-- 1. Handle & Shaft Assembly -->
          <path d="M26 26 L52 52" stroke="url(#metalGoldGrad)" stroke-width="4.5" stroke-linecap="round" />
          <path d="M25 25 L51 51" stroke="url(#metalSilverGrad)" stroke-width="2.2" stroke-linecap="round" opacity="0.6" />

          <!-- Chocolate Grip Handle -->
          <rect x="36" y="36" width="26" height="7.5" rx="3.75" transform="rotate(45 36 36)" fill="url(#handleChocoGrad)" stroke="url(#metalGoldGrad)" stroke-width="1" />
          <circle cx="43" cy="43" r="4.5" fill="none" stroke="url(#metalGoldGrad)" stroke-width="1.2" />
          <circle cx="53" cy="53" r="4.5" fill="none" stroke="url(#metalGoldGrad)" stroke-width="1.2" />
          <circle cx="58" cy="58" r="3.2" fill="url(#metalGoldGrad)" />

          <!-- 2. Spring Release Lever Mechanism -->
          <path d="M24 28 C28 26 32 30 30 34" stroke="url(#metalGoldGrad)" stroke-width="2" fill="none" stroke-linecap="round" />
          <circle cx="28" cy="30" r="2" fill="#D4AF37" />

          <!-- 3. Hemispherical Scoop Bowl (Anchor at Hotspot: 16, 16) -->
          <circle cx="16" cy="16" r="13" fill="url(#metalSilverGrad)" stroke="url(#metalGoldGrad)" stroke-width="1.8" />
          <circle cx="16" cy="16" r="11" fill="#1C1E24" opacity="0.3" />
          <circle cx="15.5" cy="15.5" r="10.5" fill="url(#metalGoldGrad)" opacity="0.25" />
          <path d="M7 16 A9 9 0 0 1 25 16" stroke="url(#metalGoldGrad)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.75" />

          <!-- 4. Dynamic Loaded Ice Cream Ball -->
          <g class="scoop-ball-group" id="scoop-ball-group">
            <circle cx="16" cy="16" r="11.5" fill="url(#flavorScoopGrad)" filter="url(#scoopShadow)" />
            <path d="M10 14 C12 11 18 10 21 13 C19 16 14 17 11 15" fill="rgba(255,255,255,0.42)" />
            <path d="M13 18 C15 20 20 20 22 17" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" fill="none" stroke-linecap="round" />
            
            <!-- Colorful Mini Sprinkles -->
            <circle cx="13" cy="13" r="1" fill="#FF4081" />
            <circle cx="19" cy="14" r="0.9" fill="#FFD700" />
            <circle cx="15" cy="18" r="1.1" fill="#00E676" />
            <circle cx="18" cy="18" r="0.8" fill="#00E5FF" />
            <circle cx="12" cy="17" r="0.9" fill="#AB47BC" />
          </g>

          <!-- Specular Sparkle Highlight on Rim -->
          <path d="M7 11 A12 12 0 0 1 18 5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity="0.9" />
        </svg>
      </div>
    `;

    document.body.appendChild(container);
  }

  function initArtisanalScoopCursor() {
    buildCursorDOM();

    const cursorRoot = document.getElementById('artisanal-scoop-cursor');
    const scoopWrapper = document.getElementById('scoop-tool-wrapper');
    const reactionPill = document.getElementById('scoop-reaction-pill');
    const pillText = document.getElementById('scoop-pill-text');
    const particlesContainer = document.getElementById('scoop-particles-canvas');

    const stop1 = document.getElementById('flavor-stop-1');
    const stop2 = document.getElementById('flavor-stop-2');
    const stop3 = document.getElementById('flavor-stop-3');
    const stop4 = document.getElementById('flavor-stop-4');

    if (!cursorRoot || !scoopWrapper) return;

    let mouseX = -100, mouseY = -100;
    let isVisible = false;
    let isHoveringProduct = false;
    let scoopIntervalTimer = null;
    let currentPalette = FLAVOR_PALETTES.default;
    let activeHoveredCard = null;
    let lastPhraseIndex = -1;

    // 60FPS Continuous Smooth Tracking Loop
    function renderCursorPhysics() {
      if (isHoveringProduct) {
        // Spoon anchors immediately to mouse coordinate at bowl center (offset 16px, 16px)
        scoopWrapper.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
      }
      requestAnimationFrame(renderCursorPhysics);
    }
    requestAnimationFrame(renderCursorPhysics);

    // Mouse Move Listeners (Track position without enabling cursor globally)
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      stopContinuousScoop();
    });

    // Mouse Down Press Feedback on Product Cards
    window.addEventListener('mousedown', () => {
      if (isHoveringProduct) {
        cursorRoot.classList.add('is-clicking');
        if (activeHoveredCard) {
          executeSingleScoopCycle(true);
        }
      }
    });

    window.addEventListener('mouseup', () => {
      cursorRoot.classList.remove('is-clicking');
    });

    // -------------------------------------------------------------
    // DYNAMIC FLAVOR EXTRACTION
    // -------------------------------------------------------------

    function detectFlavorKey(element) {
      if (!element) return 'default';
      const text = (
        (element.getAttribute('data-product-id') || '') + ' ' +
        (element.getAttribute('data-flavor') || '') + ' ' +
        (element.getAttribute('data-category') || '') + ' ' +
        (element.innerText || '') + ' ' +
        (element.querySelector('img')?.alt || '') + ' ' +
        (element.querySelector('h2, h3, h4')?.innerText || '')
      ).toLowerCase();

      if (text.includes('choco') || text.includes('cocoa') || text.includes('belgian') || text.includes('truffle')) {
        return 'chocolate';
      }
      if (text.includes('mint') || text.includes('pistachio') || text.includes('sicily')) {
        return 'pistachio';
      }
      if (text.includes('berry') || text.includes('strawberr') || text.includes('twist') || text.includes('raspberr')) {
        return 'berry';
      }
      if (text.includes('mango') || text.includes('golden') || text.includes('fantasy') || text.includes('passion')) {
        return 'mango';
      }
      if (text.includes('almond') || text.includes('hazel') || text.includes('dice') || text.includes('crunch') || text.includes('nut')) {
        return 'almond';
      }
      if (text.includes('cake') || text.includes('gateau') || text.includes('celebration')) {
        return 'cake';
      }
      if (text.includes('vanilla') || text.includes('bourbon') || text.includes('royale') || text.includes('milk')) {
        return 'vanilla';
      }
      return 'default';
    }

    function applyFlavorPalette(flavorKey) {
      const palette = FLAVOR_PALETTES[flavorKey] || FLAVOR_PALETTES.default;
      currentPalette = palette;
      
      if (stop1 && stop2 && stop3 && stop4) {
        stop1.setAttribute('stop-color', palette.stops[0]);
        stop2.setAttribute('stop-color', palette.stops[1]);
        stop3.setAttribute('stop-color', palette.stops[2]);
        stop4.setAttribute('stop-color', palette.stops[3]);
      }

      return palette;
    }

    // Micro-crumbs Particle Spawner
    function spawnMicroCrumbs(x, y, palette) {
      if (!particlesContainer) return;
      const count = 5 + Math.floor(Math.random() * 4);
      const colors = palette.particleColors;

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'scoop-crumb-dot';
        
        const size = 3 + Math.random() * 4.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = 25 + Math.random() * 45;
        const targetX = Math.cos(angle) * speed;
        const targetY = Math.sin(angle) * speed + (Math.random() * 15 - 5);
        const rot = (Math.random() - 0.5) * 360;

        particle.style.cssText = `
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 6px ${color};
          --tx: ${targetX.toFixed(1)}px;
          --ty: ${targetY.toFixed(1)}px;
          --rot: ${rot.toFixed(1)}deg;
        `;

        particlesContainer.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 700);
      }
    }

    // Get a fresh, randomized mouthwatering phrase (guaranteed different on each new card hover)
    function getRandomReactionPhrase() {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * DELICIOUS_REACTIONS.length);
      } while (nextIndex === lastPhraseIndex && DELICIOUS_REACTIONS.length > 1);

      lastPhraseIndex = nextIndex;
      return DELICIOUS_REACTIONS[nextIndex];
    }

    // -------------------------------------------------------------
    // CONTINUOUS REPEATING SCOOPING SYSTEM
    // -------------------------------------------------------------

    function executeSingleScoopCycle(isExtraClick = false) {
      if (!isHoveringProduct && !isExtraClick) return;

      // 1. Restart scooping animation cycle on scoop spoon
      cursorRoot.classList.remove('is-scooping');
      void scoopWrapper.offsetWidth; // Force reflow to re-trigger keyframe
      cursorRoot.classList.add('is-scooping');

      // 2. Spawn micro-crumbs particle burst at cursor position
      spawnMicroCrumbs(mouseX, mouseY, currentPalette);
    }

    function startContinuousScoop(card) {
      activeHoveredCard = card;
      isHoveringProduct = true;
      cursorRoot.classList.add('cursor-active');

      // Detect flavor and apply matching palette
      const flavorKey = detectFlavorKey(card);
      applyFlavorPalette(flavorKey);

      // Pick a random mouthwatering message ONCE for this entire product hover session
      if (reactionPill && pillText) {
        pillText.textContent = getRandomReactionPhrase();
        reactionPill.classList.remove('is-visible', 'pill-pop');
        void reactionPill.offsetWidth;
        reactionPill.classList.add('is-visible', 'pill-pop');
      }

      // Immediately execute the first smooth scoop
      executeSingleScoopCycle();

      // Clear any existing timer
      if (scoopIntervalTimer) clearInterval(scoopIntervalTimer);

      // Continuously scoop repeatedly every 880ms as long as hovering
      scoopIntervalTimer = setInterval(() => {
        if (isHoveringProduct) {
          executeSingleScoopCycle();
        } else {
          stopContinuousScoop();
        }
      }, 880);
    }

    function stopContinuousScoop() {
      isHoveringProduct = false;
      activeHoveredCard = null;
      if (scoopIntervalTimer) {
        clearInterval(scoopIntervalTimer);
        scoopIntervalTimer = null;
      }
      cursorRoot.classList.remove('cursor-active', 'is-scooping', 'is-clicking', 'is-hovering-clickable');
      if (reactionPill) {
        reactionPill.classList.remove('is-visible', 'pill-pop');
      }
    }

    // Attach to all product containers across the site
    const productTargets = [
      '.pints-pop-card',
      '.catalog-card',
      '.cat-explore-card',
      '.cs-card',
      '.art-hero-stage',
      '.hero-showcase-visual',
      '#art-stage-img',
      '.art-tub-anchor',
      '.catalog-card-visual',
      '.card-tub-popout',
      '.indulgence-collage-item',
      '.heritage-cone-stage',
      '.heritage-cone-tilt-box',
      '#heritage-cone-img'
    ].join(', ');

    document.querySelectorAll(productTargets).forEach((card) => {
      card.addEventListener('mouseenter', () => {
        startContinuousScoop(card);
      });

      card.addEventListener('mouseleave', () => {
        stopContinuousScoop();
      });
    });

    // Delegation handler for dynamically filtered or newly loaded cards
    document.addEventListener('mouseover', (e) => {
      const card = e.target.closest(productTargets);
      if (card && card !== activeHoveredCard) {
        startContinuousScoop(card);
      }
    });

    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest(productTargets);
      if (card && !card.contains(e.relatedTarget)) {
        stopContinuousScoop();
      }
    });
  }

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArtisanalScoopCursor);
  } else {
    initArtisanalScoopCursor();
  }

  // Export helper
  window.ArtisanalScoopCursor = {
    init: initArtisanalScoopCursor
  };
})();
