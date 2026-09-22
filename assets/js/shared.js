// assets/js/shared.js - Global Interactions, Modals, Cart & Store Filter

let cartCount = 0;

// Open Quick View Modal
function openQuickView(productId) {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  if (!modalBackdrop || !window.DAIRY_PRODUCTS || !window.DAIRY_PRODUCTS[productId]) return;

  const p = window.DAIRY_PRODUCTS[productId];
  
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const qvImg = document.getElementById('qv-img');
  if (qvImg) { qvImg.src = p.image; qvImg.alt = p.name; }
  setTxt('qv-badge', p.badge || 'Artisanal Reserve');
  setTxt('qv-title', p.name);
  setTxt('qv-price', p.price || '');
  setTxt('qv-size', `(${p.size})`);
  setTxt('qv-desc', p.description);
  setTxt('qv-cal', p.calories);
  setTxt('qv-fat', p.fat);
  setTxt('qv-sugar', p.sugar);
  setTxt('qv-prot', p.protein);
  
  const notesContainer = document.getElementById('qv-notes');
  if (notesContainer && p.tasting_notes) {
    notesContainer.innerHTML = p.tasting_notes.map(n => `<span class="tasting-tag">${n}</span>`).join('');
  }

  const addBtn = document.getElementById('qv-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(p.name);
      closeQuickView();
    };
  }

  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// Add to Cart with Toast
function addToCart(productName) {
  cartCount++;
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = cartCount;
    b.style.display = 'inline-flex';
    b.classList.add('pulse');
    setTimeout(() => b.classList.remove('pulse'), 400);
  });

  showToast(`Added ${productName} to your cart! 🍦`);
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Store Locator City Filter
function initStoreLocator() {
  const cityTabs = document.querySelectorAll('.city-tab-btn');
  const storeCards = document.querySelectorAll('.store-card-item');

  if (!cityTabs.length) return;

  cityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      cityTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCity = tab.dataset.city;

      storeCards.forEach(card => {
        if (selectedCity === 'all' || card.dataset.city === selectedCity) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Keyboard ESC to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeQuickView();
  }
});

// ========================================================
// CATEGORY SECTION: "BARISH OF PRODUCTS" & SKY-DROP ENGINE
// ========================================================
function initCategoryProductRain() {
  const section = document.getElementById('categories');
  if (!section) return;

  const rainLayer = document.getElementById('category-product-rain');
  const cards = section.querySelectorAll('.cat-explore-card');
  if (!cards.length) return;

  let rainInterval = null;

  // Rain particle items catalog (products & ingredients)
  const RAIN_ITEMS = [
    { src: 'assets/images/products/golden-fantasy.png', size: 36 },
    { src: 'assets/images/products/almond-crunch-bar.png', size: 34 },
    { src: 'assets/images/products/belgian-chocolate-tub.png', size: 38 },
    { src: 'assets/images/products/chocolate-celebration-cake.png', size: 36 },
    { src: 'assets/images/products/choco-boom.png', size: 34 },
    { src: 'assets/images/products/super-twist.png', size: 34 },
    { src: 'assets/images/particles/particle-strawberry.png', size: 28 },
    { src: 'assets/images/particles/particle-chocolate-chunk.png', size: 24 },
    { src: 'assets/images/particles/particle-vanilla-orchid.png', size: 30 },
    { src: 'assets/images/particles/particle-cocoa-bean.png', size: 22 },
    { src: 'assets/images/particles/particle-almond.png', size: 22 },
    { src: 'assets/images/particles/particle-pistachio.png', size: 20 }
  ];

  function spawnRainDrop() {
    if (!rainLayer || !section.classList.contains('is-raining-active')) return;
    const item = RAIN_ITEMS[Math.floor(Math.random() * RAIN_ITEMS.length)];
    const drop = document.createElement('div');
    drop.className = 'falling-product-raindrop';

    const startLeft = Math.random() * 92 + 4; // 4% to 96%
    const duration = (Math.random() * 2.2 + 2.5).toFixed(2); // 2.5s to 4.7s
    const startRotate = Math.floor(Math.random() * 70 - 35);
    const endRotate = startRotate + (Math.random() > 0.5 ? 200 : -200);
    const driftX = Math.floor(Math.random() * 60 - 30);
    const opacity = (Math.random() * 0.45 + 0.45).toFixed(2); // 0.45 to 0.90
    const size = Math.round(item.size * (Math.random() * 0.4 + 0.85));

    drop.style.left = `${startLeft}%`;
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.setProperty('--duration', `${duration}s`);
    drop.style.setProperty('--start-rot', `${startRotate}deg`);
    drop.style.setProperty('--end-rot', `${endRotate}deg`);
    drop.style.setProperty('--drift-x', `${driftX}px`);
    drop.style.setProperty('--peak-opacity', opacity);

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = 'Rain Treat';
    img.draggable = false;
    drop.appendChild(img);

    rainLayer.appendChild(drop);

    setTimeout(() => {
      drop.remove();
    }, parseFloat(duration) * 1000 + 200);
  }

  function startProductRain() {
    if (rainInterval) clearInterval(rainInterval);
    // Initial burst of 8 raindrops across the sky
    for (let i = 0; i < 8; i++) {
      setTimeout(spawnRainDrop, i * 160);
    }
    // Continuous rain stream
    rainInterval = setInterval(spawnRainDrop, 320);
  }

  function stopProductRain() {
    if (rainInterval) {
      clearInterval(rainInterval);
      rainInterval = null;
    }
  }

  function triggerDropAnimation() {
    section.classList.remove('is-raining-active');
    void section.offsetWidth; // Force reflow
    section.classList.add('is-raining-active');

    // Start background rain
    startProductRain();

    // Trigger card sparkles upon touchdown
    cards.forEach((card, idx) => {
      const delay = (idx * 0.18 + 0.75) * 1000;
      setTimeout(() => {
        createCardTouchdownSparkles(card);
      }, delay);
    });
  }

  function createCardTouchdownSparkles(card) {
    const wrap = card.querySelector('.cat-explore-img-wrap') || card;
    for (let i = 0; i < 6; i++) {
      const sp = document.createElement('span');
      sp.className = 'card-touchdown-sparkle';
      sp.textContent = ['✨', '✦', '★', '•'][i % 4];
      sp.style.left = `${40 + (Math.random() * 20 - 10)}%`;
      sp.style.top = `${65 + (Math.random() * 20 - 10)}%`;
      sp.style.setProperty('--sp-dx', `${(Math.random() * 90 - 45)}px`);
      sp.style.setProperty('--sp-dy', `${-(Math.random() * 55 + 20)}px`);
      wrap.appendChild(sp);
      setTimeout(() => sp.remove(), 900);
    }
  }

  // Use IntersectionObserver to trigger when section is scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerDropAnimation();
      } else {
        stopProductRain();
        if (rainLayer) rainLayer.innerHTML = '';
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  observer.observe(section);
}

  // Mobile Drawer Menu (Global helpers)
  window.openMobileMenu = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const btn = document.getElementById('mobile-menu-toggle');
    if (drawer) {
      drawer.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
      backdrop.classList.add('active');
      backdrop.setAttribute('aria-hidden', 'false');
    }
    if (btn) {
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('is-active');
    }
    document.body.classList.add('mobile-drawer-open');
    document.body.style.overflow = 'hidden';
  };

  window.closeMobileMenu = function(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const btn = document.getElementById('mobile-menu-toggle');
    if (drawer) {
      drawer.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
      backdrop.classList.remove('active');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('is-active');
    }
    document.body.classList.remove('mobile-drawer-open');
    document.body.style.overflow = '';
  };

  window.toggleMobileMenu = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer && (drawer.classList.contains('active') || document.body.classList.contains('mobile-drawer-open'))) {
      window.closeMobileMenu(e);
    } else {
      window.openMobileMenu(e);
    }
  };

  function initMobileNavDrawer() {
    // Keyboard accessibility & screen resizing
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.closeMobileMenu(e);
        if (typeof closeQuickView === 'function') closeQuickView();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        window.closeMobileMenu();
      }
    });
  }

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initStoreLocator();
  initCategoryProductRain();
  initMobileNavDrawer();
  
  // Close modal when clicking backdrop
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeQuickView();
      }
    });
  }
});

