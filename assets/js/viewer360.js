// assets/js/viewer360.js - True 3D Showcase Slider & Interactive Rotator Engine

(function() {
  'use strict';

  let currentAngle = 0;
  let isDragging = false;
  let startX = 0;
  let startAngle = 0;
  let autoSpinActive = true;
  let autoSpinSpeed = 0.5; // degrees per frame
  let animFrameId = null;

  // 6 Signature Showcase Creations (From dairyclassics.com)
  const SHOWCASE_PRODUCTS = [
    {
      id: 'french-vanilla',
      name: 'French Vanilla Royale',
      category: 'Gourmet Pint',
      badge: 'Pure Madagascar',
      size: '/ 500ml Gourmet Pint',
      desc: 'Double-creamed farm milk steeped with aromatic Madagascar Bourbon vanilla beans and roasted bean specks, finished with whipped velvet cream.',
      chips: ['Bourbon Vanilla', '16% Jersey Butterfat', 'Zero Artificial Gums'],
      glow: 'rgba(212, 175, 55, 0.45)',
      image: 'assets/images/products/french-vanilla-tub.png'
    },
    {
      id: 'belgian-chocolate',
      name: 'Belgian Chocolate Truffle',
      category: 'Artisanal Pint',
      badge: 'Chef\'s Decadence',
      size: '/ 500ml Gourmet Pint',
      desc: 'Single-origin 72% dark cocoa ribbons folded into velvet gelato, finished with handmade chocolate truffles and rich cocoa dust.',
      chips: ['72% Belgian Couverture', 'Jersey Butterfat', 'Dark Cocoa Truffles'],
      glow: 'rgba(160, 82, 45, 0.45)',
      image: 'assets/images/products/belgian-chocolate-tub.png',
      angles: {
        front: 'assets/images/products/belgian-chocolate-tub.png',
        angle45: 'assets/images/products/belgian-chocolate-3d-45.png',
        back: 'assets/images/products/belgian-chocolate-3d-180.png'
      }
    },
    {
      id: 'mint-pistachio',
      name: 'Mint Pistachio Crunch',
      category: 'Gourmet Pint',
      badge: 'Botanical Garden',
      size: '/ 500ml Gourmet Pint',
      desc: 'Fresh garden spearmint leaves steeped in pure Jersey milk with roasted Persian pistachios and dark chocolate shards.',
      chips: ['Garden Spearmint', 'Roasted Pistachio', 'Dark Choco Shards'],
      glow: 'rgba(61, 115, 86, 0.45)',
      image: 'assets/images/products/mint-pistachio-tub.png'
    },
    {
      id: 'alphonso-mango',
      name: 'Alphonso Gold Reserve',
      category: 'Artisanal Pint',
      badge: 'Ratnagiri Heritage',
      size: '/ 500ml Gourmet Pint',
      desc: 'Sun-ripened Ratnagiri Alphonso mango pulp hand-churned with rich double cream and sun-kissed mango swirls.',
      chips: ['100% Ratnagiri Mango', 'Pure Farm Milk', 'Zero Artificial Essence'],
      glow: 'rgba(235, 140, 20, 0.45)',
      image: 'assets/images/products/alphonso-mango-tub.jpg'
    },
    {
      id: 'golden-fantasy',
      name: 'Golden Fantasy Swirl Cone',
      category: 'Gourmet Cone',
      badge: 'Iconic Classic',
      size: '/ 120ml Waffle Cone',
      desc: 'Iconic dual vanilla and chocolate ice cream crowned with crispy roasted peanuts and filled in chocolate-lined crunchy wafer cone.',
      chips: ['Dual Vanilla & Chocolate', 'Roasted Peanuts', 'Crunchy Waffle'],
      glow: 'rgba(212, 139, 56, 0.45)',
      image: 'assets/images/products/golden-fantasy.png'
    },
    {
      id: 'choco-boom',
      name: 'Choco Boom Cone',
      category: 'Gourmet Cone',
      badge: 'Choco Lover Choice',
      size: '/ 120ml Waffle Cone',
      desc: 'Chocolate ice cream filled in crunchy wafer coated with chocolate along with crispy roasted peanuts that give distinctive taste to your pleasure.',
      chips: ['Dense Chocolate Gelato', 'Choco-Dipped Tip', 'Golden Peanuts'],
      glow: 'rgba(74, 37, 24, 0.45)',
      image: 'assets/images/products/choco-boom.png'
    },
    {
      id: 'super-twist',
      name: 'Super Twist Raspberry Cone',
      category: 'Gourmet Cone',
      badge: 'Berry Delight',
      size: '/ 120ml Waffle Cone',
      desc: 'Vanilla Ice cream centered Raspberry sauce filled in crunchy wafer coated chocolate, winning the soul and taste buds of ice cream lovers.',
      chips: ['Real Raspberry Coulis', 'Velvet Vanilla Cream', 'Chocolate Shell'],
      glow: 'rgba(155, 27, 64, 0.45)',
      image: 'assets/images/products/super-twist.png'
    },
    {
      id: 'almond-crunch',
      name: 'Almond Crunch Praline Bar',
      category: 'Artisanal Bar',
      badge: 'Handheld Luxury',
      size: '/ 90ml Artisanal Bar',
      desc: 'Artisanal hand-dipped ice cream bar enrobed in single-origin chocolate shell studded with roasted California almond praline.',
      chips: ['California Almonds', 'Belgian Chocolate Shell', 'Farm Jersey Milk'],
      glow: 'rgba(140, 86, 39, 0.45)',
      image: 'assets/images/products/almond-crunch-bar.png'
    },
    {
      id: 'celebration-cake',
      name: 'Triple-Layer Gateau Cake',
      category: 'Ice Cream Cake',
      badge: 'Party Showstopper',
      size: '/ 1.0kg Gateau Cake',
      desc: 'Architectural trio of Belgian dark chocolate, white vanilla cream, and milk chocolate sponge, glazed in dark ganache drip and fresh berries.',
      chips: ['Glossy Dark Ganache', 'Farm Fresh Strawberry', 'Trio Gelato Layers'],
      glow: 'rgba(184, 50, 72, 0.45)',
      image: 'assets/images/products/chocolate-celebration-cake.png'
    }
  ];

  let currentSlideIndex = 0;

  function init() {
    const stage = document.getElementById('stage-360');
    if (stage) {
      init3DStageRotator(stage);
    }

    // Initialize Scroll-Driven Flight Animation (Hero -> The Flavour Universe / Coverflow Stage)
    initHeroTo3dFlightAnimation();
  }

  function init3DStageRotator(stage) {
    const rotatorWrap = document.getElementById('rotator-3d-wrap');
    const productImg = document.getElementById('product-360-img');
    const specularGlow = document.getElementById('specular-glow');
    const cursorTracker = document.getElementById('choco-cursor-tracker');

    // Showcase Elements
    const counterText = document.getElementById('showcase-counter-text');
    const catBadge = document.getElementById('showcase-cat-badge');
    const prodTitle = document.getElementById('showcase-title');
    const prodDesc = document.getElementById('showcase-desc');
    const chipsWrap = document.getElementById('showcase-chips');
    const priceVal = document.getElementById('showcase-price');
    const priceSize = document.getElementById('showcase-size');
    const ambientGlow = document.getElementById('showcase-glow');
    const prevBtn = document.getElementById('showcase-prev-btn');
    const nextBtn = document.getElementById('showcase-next-btn');
    const dotBtns = document.querySelectorAll('#showcase-dots-bar .showcase-dot-btn');

    // Update 3D Perspective, Frame Angle & Lighting
    function updateRotation(angle) {
      currentAngle = ((angle % 360) + 360) % 360;
      const prod = SHOWCASE_PRODUCTS[currentSlideIndex];

      // Multi-Angle Frame Selection for Products that have multiple angle renders
      if (prod && prod.angles && productImg) {
        if (currentAngle >= 325 || currentAngle < 35) {
          productImg.src = prod.angles.front;
          productImg.style.transform = 'scaleX(1)';
        } else if (currentAngle >= 35 && currentAngle < 135) {
          productImg.src = prod.angles.angle45;
          productImg.style.transform = 'scaleX(1)';
        } else if (currentAngle >= 135 && currentAngle < 225) {
          productImg.src = prod.angles.back;
          productImg.style.transform = 'scaleX(1)';
        } else {
          productImg.src = prod.angles.angle45;
          productImg.style.transform = 'scaleX(-1)';
        }
      }

      if (rotatorWrap) {
        // Perspective 3D Rotational Depth (Cylindrical sway)
        const swayY = (Math.sin((currentAngle * Math.PI) / 180) * 14).toFixed(1);
        const tiltX = (Math.cos((currentAngle * Math.PI) / 180) * 5).toFixed(1);
        const scaleZ = 0.96 + Math.cos((currentAngle * Math.PI) / 180) * 0.04;
        rotatorWrap.style.transform = `perspective(1000px) rotateY(${swayY}deg) rotateX(${tiltX}deg) scale(${scaleZ})`;
      }

      // Specular highlight glints across the 3D surface
      if (specularGlow) {
        const glowX = 35 + Math.sin((currentAngle * Math.PI) / 180) * 35;
        const glowOpacity = 0.35 + Math.cos((currentAngle * Math.PI) / 180) * 0.25;
        specularGlow.style.background = `radial-gradient(circle at ${glowX}% 38%, rgba(229,195,120,${glowOpacity}) 0%, transparent 60%)`;
      }
    }

    // Go to Specific Slide
    function goToSlide(index, immediate = false) {
      if (index < 0) index = SHOWCASE_PRODUCTS.length - 1;
      if (index >= SHOWCASE_PRODUCTS.length) index = 0;
      currentSlideIndex = index;

      const p = SHOWCASE_PRODUCTS[index];
      if (!p) return;

      // Update Text with smooth transition
      if (counterText) {
        counterText.textContent = `0${index + 1} / 0${SHOWCASE_PRODUCTS.length}`;
      }

      if (catBadge) catBadge.textContent = p.category;
      if (prodTitle) prodTitle.textContent = p.name;
      if (prodDesc) prodDesc.textContent = p.desc;
      if (priceVal) priceVal.textContent = p.price || '';
      if (priceSize) priceSize.textContent = p.size;

      // Update Chips
      if (chipsWrap) {
        chipsWrap.innerHTML = '';
        p.chips.forEach(chip => {
          const span = document.createElement('span');
          span.className = 'showcase-chip';
          span.textContent = chip;
          chipsWrap.appendChild(span);
        });
      }

      // Update Ambient Glow
      if (ambientGlow) {
        ambientGlow.style.background = `radial-gradient(circle, ${p.glow} 0%, rgba(0,0,0,0) 70%)`;
      }

      // Update Active Dots
      if (dotBtns && dotBtns.length > 0) {
        dotBtns.forEach((btn, idx) => {
          if (idx === index) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }

      // Update 3D Stage Image
      if (productImg) {
        if (immediate) {
          productImg.src = p.angles ? p.angles.front : p.image;
          productImg.alt = p.name;
          productImg.style.opacity = '1';
          productImg.style.transform = 'scale(1)';
          updateRotation(currentAngle);
        } else {
          productImg.style.opacity = '0';
          productImg.style.transform = 'scale(0.85)';
          setTimeout(() => {
            productImg.src = p.angles ? p.angles.front : p.image;
            productImg.alt = p.name;
            productImg.style.opacity = '1';
            productImg.style.transform = 'scale(1)';
            updateRotation(currentAngle);
          }, 180);
        }
      }
    }

    // Expose global flavor sync so Hero tabs immediately update 3D Showcase
    window.syncShowcaseToFlavor = function(flavorId) {
      if (!flavorId) return;
      const idx = SHOWCASE_PRODUCTS.findIndex(p => p.id === flavorId);
      if (idx !== -1) {
        if (idx !== currentSlideIndex) {
          goToSlide(idx, true);
        }
      }
    };

    // Event Listeners for Slider Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToSlide(currentSlideIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goToSlide(currentSlideIndex + 1);
      });
    }

    if (dotBtns && dotBtns.length > 0) {
      dotBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetIndex = parseInt(btn.getAttribute('data-index'), 10);
          if (!isNaN(targetIndex)) {
            goToSlide(targetIndex);
          }
        });
      });
    }

    // ========================================================
    // CUSTOM ANIMATED MOUSE POINTER TRACKER & INTERACTION
    // ========================================================
    let lastMouseX = null;

    if (cursorTracker && stage) {
      stage.addEventListener('mouseenter', () => {
        cursorTracker.classList.add('is-active');
      });

      stage.addEventListener('mouseleave', () => {
        cursorTracker.classList.remove('is-active');
        cursorTracker.classList.remove('is-dragging');
        lastMouseX = null;
      });

      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Smooth custom cursor position
        cursorTracker.style.left = `${x}px`;
        cursorTracker.style.top = `${y}px`;

        // Dynamic specular light reflection glints with cursor movement
        if (specularGlow) {
          const glowPctX = ((x / rect.width) * 100).toFixed(1);
          const glowPctY = ((y / rect.height) * 100).toFixed(1);
          specularGlow.style.background = `radial-gradient(circle at ${glowPctX}% ${glowPctY}%, rgba(229,195,120,0.38) 0%, transparent 65%)`;
        }

        // Responsive hover spin: moving mouse across stage spins 3D product
        if (!isDragging) {
          if (lastMouseX !== null) {
            const delta = e.clientX - lastMouseX;
            if (Math.abs(delta) < 50) {
              updateRotation(currentAngle + delta * 0.85);
            }
          }
          lastMouseX = e.clientX;
        }
      });

      stage.addEventListener('mousedown', () => {
        cursorTracker.classList.add('is-dragging');
      });

      window.addEventListener('mouseup', () => {
        cursorTracker.classList.remove('is-dragging');
        lastMouseX = null;
      });
    }

    // Drag / Touch Events on Stage
    function onPointerDown(e) {
      isDragging = true;
      autoSpinActive = false;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      startAngle = currentAngle;
      stage.classList.add('is-grabbing');
      stage.style.cursor = 'grabbing';
      if (cursorTracker) cursorTracker.classList.add('is-dragging');
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const deltaX = clientX - startX;
      updateRotation(startAngle + deltaX * 0.85);
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      stage.classList.remove('is-grabbing');
      stage.style.cursor = '';
      if (cursorTracker) cursorTracker.classList.remove('is-dragging');
      setTimeout(() => { autoSpinActive = true; }, 1800);
    }

    stage.addEventListener('mousemove', onPointerMove);
    stage.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);

    stage.addEventListener('mouseleave', () => {
      if (cursorTracker) cursorTracker.classList.remove('is-active');
    });

    stage.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Auto-Spin Loop for 3D wow factor
    function runAutoSpinLoop() {
      if (autoSpinActive && !isDragging) {
        updateRotation(currentAngle + autoSpinSpeed);
      }
      animFrameId = requestAnimationFrame(runAutoSpinLoop);
    }

    runAutoSpinLoop();

    // Sync to active Hero product immediately
    const initialHeroTab = document.querySelector('.art-tab-btn.active, .strip-btn.active');
    const initialFlavorKey = initialHeroTab ? initialHeroTab.dataset.flavor : (window.ACTIVE_HERO_FLAVOR || 'french-vanilla');
    const initialIdx = SHOWCASE_PRODUCTS.findIndex(p => p.id === initialFlavorKey);
    goToSlide(initialIdx !== -1 ? initialIdx : 0);
  }

  // ==========================================================
  // SCROLL-DRIVEN FLIGHT ANIMATION (HERO -> THE FLAVOUR UNIVERSE)
  // ==========================================================
  function initHeroTo3dFlightAnimation() {
    const proxy = document.getElementById('flight-proxy-tub');
    const proxyImg = document.getElementById('flight-proxy-img');
    const heroTub = document.getElementById('art-stage-img') || document.getElementById('stage-tub-img');
    const targetWrap = document.getElementById('tilt-product-box') || document.getElementById('card-center-hero');
    const targetImg = document.getElementById('card-hero-img');
    const stagePane = document.getElementById('coverflow-interactive-zone') || document.getElementById('product-studio-3d');

    if (!proxy || !proxyImg || !heroTub || !targetWrap || !targetImg || !stagePane) return;

    let hasDocked = false;
    let isTicking = false;
    let lastScrollY = window.scrollY || window.pageYOffset;
    let isFlightArmed = (window.scrollY || window.pageYOffset) < 120;

    function getActiveHeroFlavorKey() {
      const activeTab = document.querySelector('.art-tab-btn.active, .strip-btn.active');
      return (activeTab && activeTab.dataset.flavor) || window.ACTIVE_HERO_FLAVOR || 'french-vanilla';
    }

    // Sync proxy image with active hero product
    function syncHeroImage() {
      if (heroTub.src && proxyImg.src !== heroTub.src) {
        proxyImg.src = heroTub.src;
      }
    }

    // Observe hero tub src changes when flavor tabs change
    const observer = new MutationObserver(syncHeroImage);
    observer.observe(heroTub, { attributes: true, attributeFilter: ['src'] });
    syncHeroImage();

    function createDockingSparkles() {
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        p.className = 'docking-sparkle-star';
        p.textContent = ['✦', '✨', '•', '★'][i % 4];
        p.style.left = `${45 + (Math.random() * 20 - 10)}%`;
        p.style.top = `${45 + (Math.random() * 20 - 10)}%`;
        p.style.setProperty('--dx', `${(Math.random() * 200 - 100)}px`);
        p.style.setProperty('--dy', `${(Math.random() * 200 - 100)}px`);
        stagePane.appendChild(p);
        setTimeout(() => p.remove(), 1200);
      }
    }

    function updateFlight() {
      isTicking = false;
      syncHeroImage();

      const scrollY = window.scrollY || window.pageYOffset;
      const scrollDiff = scrollY - lastScrollY;
      const isScrollingDown = scrollDiff > 0;
      const isScrollingUp = scrollDiff < 0;
      lastScrollY = scrollY;

      // 1. If user is at or returns to top (Hero section), reset & arm flight
      if (scrollY <= 60) {
        isFlightArmed = true;
        hasDocked = false;
        proxy.style.opacity = '0';
        proxy.style.visibility = 'hidden';
        heroTub.style.opacity = '1';
        targetImg.style.opacity = '1';
        return;
      }

      // 2. STRICT RULE: When scrolling UP, NEVER play reverse flight!
      if (isScrollingUp) {
        proxy.style.opacity = '0';
        proxy.style.visibility = 'hidden';
        heroTub.style.opacity = '1';
        targetImg.style.opacity = '1';
        return;
      }

      // Calculate travel bounds
      const heroRect = heroTub.getBoundingClientRect();
      const targetRect = targetWrap.getBoundingClientRect();

      const targetTopDoc = targetRect.top + scrollY;
      const startY = 30;
      // Landing trigger scroll position
      const endY = targetTopDoc - (window.innerHeight * 0.35);

      if (endY <= startY) return;

      const progress = Math.max(0, Math.min(1, (scrollY - startY) / (endY - startY)));

      // 3. Downward Flight Zone: ONLY active when scrolling DOWN from top
      if (isFlightArmed && progress > 0.03 && progress < 0.94) {
        hasDocked = false;
        proxy.style.visibility = 'visible';
        proxy.style.opacity = '1';

        // Smoothly fade hero tub out as proxy takes flight
        heroTub.style.opacity = Math.max(0, 1 - progress * 1.8).toFixed(2);
        // Stage image begins emerging as proxy arrives
        targetImg.style.opacity = Math.max(0, (progress - 0.45) * 2).toFixed(2);

        // Pre-sync The Flavour Universe matching flavor!
        const activeKey = getActiveHeroFlavorKey();
        if (window.syncCoverflowToFlavor && activeKey) {
          window.syncCoverflowToFlavor(activeKey);
        }

        // Centers for smooth flight trajectory
        const heroCenterX = heroRect.left + heroRect.width / 2;
        const heroCenterY = heroRect.top + heroRect.height / 2;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        const proxyW = proxy.offsetWidth || 340;
        const proxyH = proxy.offsetHeight || 340;

        // Smooth cubic ease curve
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
        const curCenterX = heroCenterX + (targetCenterX - heroCenterX) * ease;
        const curCenterY = heroCenterY + (targetCenterY - heroCenterY) * ease;

        const posX = curCenterX - proxyW / 2;
        const posY = curCenterY - proxyH / 2;

        // Dynamic scale & aerodynamic tilt as it descends
        const currentScale = 1 + Math.sin(progress * Math.PI) * 0.14;
        const currentRotate = Math.sin(progress * Math.PI) * 16;

        proxy.style.transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, 0) scale(${currentScale.toFixed(3)}) rotate(${currentRotate.toFixed(1)}deg)`;
      } else if (progress >= 0.94) {
        // Docked into The Flavour Universe Stage!
        isFlightArmed = false; // Disarm once landed
        proxy.style.opacity = '0';
        proxy.style.visibility = 'hidden';
        targetImg.style.opacity = '1';
        heroTub.style.opacity = '0';

        // Ensure Flavour Universe shows the EXACT matching flavor and all its details!
        const activeKey = getActiveHeroFlavorKey();
        if (window.syncCoverflowToFlavor && activeKey) {
          window.syncCoverflowToFlavor(activeKey);
        }

        if (!hasDocked) {
          hasDocked = true;
          stagePane.classList.remove('stage-docked-arrival');
          void stagePane.offsetWidth; // Force reflow
          stagePane.classList.add('stage-docked-arrival');
          createDockingSparkles();
          setTimeout(() => stagePane.classList.remove('stage-docked-arrival'), 1400);
        }
      } else if (progress <= 0.03) {
        proxy.style.opacity = '0';
        proxy.style.visibility = 'hidden';
        heroTub.style.opacity = '1';
        targetImg.style.opacity = '1';
      }
    }

    function onScroll() {
      if (!isTicking) {
        requestAnimationFrame(updateFlight);
        isTicking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateFlight();
  }

  // Global helper for Video Controls
  window.toggleCraftVideo = function() {
    const video = document.getElementById('craft-hero-video');
    const icon = document.getElementById('video-play-icon');
    if (!video) return;

    if (video.paused) {
      video.play();
      if (icon) icon.textContent = '⏸';
    } else {
      video.pause();
      if (icon) icon.textContent = '▶';
    }
  };

  window.toggleCraftAudio = function() {
    const video = document.getElementById('craft-hero-video');
    const icon = document.getElementById('video-sound-icon');
    if (!video) return;

    video.muted = !video.muted;
    if (icon) {
      icon.textContent = video.muted ? '🔇' : '🔊';
    }
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
