<?php
// views/design1.php - Artisanal Gelateria (Warm Strawberry & Cream Palette)
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dairy Classic | Pure Artisanal Joy Since 1996</title>
  <meta name="description" content="100% single-origin farm milk, slow-churned artisanal ice cream in Uzbekistan since 1996. Discover Dairy Classic cones, sticks, cups, biscuits, cassattas and tubs.">
  <link rel="stylesheet" href="assets/css/shared.css">
  <link rel="stylesheet" href="assets/css/design1.css">
</head>
<body class="theme-artisanal">

<?php include 'includes/header.php'; ?>

<main id="main-content">
  <!-- ========================================================
       SECTION 1: HERO (Artisanal 3D Floating Stage)
       ======================================================== -->
  <section class="art-hero" id="hero">
    <div class="art-hero-bg" id="art-hero-bg"></div>

    <div class="container art-hero-layout">
      <!-- Minimal Headline & Copy -->
      <div class="art-hero-text">
        <div class="art-badge-pill">
          <span class="pill-spark">✦</span>
          <span>100% SINGLE-FARM JERSEY MILK</span>
        </div>

        <h1 class="art-headline">
          Pure Joy in <br>
          <span class="art-berry-title" id="art-title-highlight">Every Scoop.</span>
        </h1>

        <p class="art-subtitle" id="art-sub-desc">
          Single-origin farm milk, slow-churned in small batches with honest, all-natural European ingredients.
        </p>

        <div class="art-cta-row">
          <a href="#catalog-showcase" class="btn-art-primary" id="art-order-cta">
            <span>Explore All Treats</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact-us" class="btn-art-secondary">
            <span>Contact Us</span>
          </a>
        </div>

        <div class="art-tags-row" id="art-tags-row">
          <span class="art-tag">✦ Bourbon Vanilla</span>
          <span class="art-tag">✦ 16% Butterfat</span>
          <span class="art-tag">✦ Zero Artificial Gums</span>
        </div>
      </div>

      <!-- Center 3D Floating Product Stage -->
      <div class="art-hero-stage" id="art-hero-stage">
        <div class="art-glow-halo" id="art-glow-halo"></div>

        <!-- 3D Planetary Orbiting Particles System (Earth-like Orbits) -->
        <div class="orbit-system-wrap" id="orbit-system-wrap">
          <!-- Orbital Cosmic Ring -->
          <svg class="orbit-ring-svg" viewBox="0 0 580 580">
            <ellipse cx="290" cy="290" rx="250" ry="120" class="orbit-ellipse-path"/>
          </svg>

          <!-- Track 1: Outer Orbit -->
          <div class="orbit-track orbit-track-1">
            <div class="orbit-item orbit-item-1">
              <img id="orbit-particle-1" src="assets/images/particles/particle-vanilla-orchid.png" alt="Orbiting Ingredient 1">
            </div>
          </div>

          <!-- Track 2: Wider Elliptical Orbit -->
          <div class="orbit-track orbit-track-2">
            <div class="orbit-item orbit-item-2">
              <img id="orbit-particle-2" src="assets/images/particles/particle-cocoa-bean.png" alt="Orbiting Ingredient 2">
            </div>
          </div>

          <!-- Track 3: Fast Inner Orbit -->
          <div class="orbit-track orbit-track-3">
            <div class="orbit-item orbit-item-3">
              <img id="orbit-particle-3" src="assets/images/particles/particle-mint-leaf.png" alt="Orbiting Ingredient 3">
            </div>
          </div>
        </div>

        <!-- Center 3D Transparent Product Tub -->
        <div class="art-tub-anchor" id="art-tub-anchor">
          <img id="art-stage-img" src="assets/images/products/french-vanilla-splash-tub.png" alt="French Vanilla Royale" class="art-stage-tub hero-splash-active-tub">
          <div class="art-tub-shadow"></div>
        </div>

        <!-- Dynamic Flavor Capsule (Pure Brand Portfolio - No Price) -->
        <div class="art-price-pill" id="art-price-pill">
          <div>
            <span class="art-pill-name" id="art-pill-name">French Vanilla Royale</span>
            <span class="art-pill-size">500ml Gourmet Pint &bull; 100% Real Milk</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Minimal Flavor Selector Strip -->
    <div class="art-flavor-strip">
      <div class="container art-strip-inner">
        <span class="art-strip-title">Select Flavor:</span>
        <div class="art-strip-buttons">
          <button class="art-tab-btn active" data-flavor="french-vanilla">
            <span class="swatch" style="background:#C59B4B;"></span>
            <span>French Vanilla</span>
          </button>
          <button class="art-tab-btn" data-flavor="belgian-chocolate">
            <span class="swatch" style="background:#54311C;"></span>
            <span>Belgian Chocolate</span>
          </button>
          <button class="art-tab-btn" data-flavor="mint-pistachio">
            <span class="swatch" style="background:#3D7356;"></span>
            <span>Mint Pistachio</span>
          </button>
          <button class="art-tab-btn" data-flavor="almond-crunch">
            <span class="swatch" style="background:#8C5627;"></span>
            <span>Almond Crunch Bar</span>
          </button>
          <button class="art-tab-btn" data-flavor="celebration-cake">
            <span class="swatch" style="background:#B83248;"></span>
            <span>Gateau Cake</span>
          </button>
        </div>
      </div>
    </div>
  </section>



  <!-- ========================================================
       SECTION: 3D INTERACTIVE PRODUCT STUDIO / COVERFLOW
       ======================================================== -->
  <section class="section-coverflow-studio" id="product-studio-3d">
    <!-- Ambient Background Spotlight -->
    <div class="cs-ambient-spotlight" id="dynamic-ambient-glow" style="background: radial-gradient(circle, rgba(229, 195, 120, 0.45) 0%, rgba(142, 28, 61, 0.25) 50%, transparent 70%);"></div>

    <div class="container" style="position: relative; z-index: 10;">
      <!-- Top Header Bar -->
      <div class="cs-header-row">
        <div>
          <span class="cs-kicker">✦ INTERACTIVE TASTING ROOM</span>
          <h2 class="cs-main-title">The Flavour Universe</h2>
        </div>
        <div class="cs-header-badges">
          <div class="cs-glass-badge">
            <span class="cs-pulse-dot"></span>
            <span id="studio-badge-text">SIGNATURE BLEND</span>
          </div>
          <div class="cs-counter-pill">
            <strong id="current-slide-num">01</strong> / <span id="total-slides-num">06</span>
          </div>
        </div>
      </div>

      <!-- 3D Coverflow Stage -->
      <div class="cs-3d-stage-zone" id="coverflow-interactive-zone">
        <button class="cs-nav-btn cs-btn-prev" id="btn-prev-slide" aria-label="Previous Creation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="cs-nav-btn cs-btn-next" id="btn-next-slide" aria-label="Next Creation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7"/></svg>
        </button>

        <div class="cs-cards-viewport" id="coverflow-stage-viewport">
          <!-- Left Preview Card -->
          <div class="cs-card cs-card-preview-left" id="card-left-preview">
            <div class="cs-preview-img-box">
              <img id="card-left-img" src="assets/images/products/chocolate-celebration-cake.png" alt="Previous Creation">
            </div>
          </div>

          <!-- Center Hero Active Card -->
          <div class="cs-card cs-card-hero-center" id="card-center-hero">
            <!-- 3D Multi-Layer Orbit System (Glitch-Free 3D Planes) -->
            <div class="cs-orbit-wrap" id="hero-orbit-wrap">
              <div class="cs-particle-1">
                <img id="orbit-icon-1" src="assets/images/particles/particle-vanilla-orchid.png" alt="Revolving Ingredient 1">
              </div>
              <div class="cs-particle-2">
                <img id="orbit-icon-2" src="assets/images/particles/particle-cocoa-bean.png" alt="Revolving Ingredient 2">
              </div>
              <div class="cs-particle-3">
                <img id="orbit-icon-3" src="assets/images/particles/particle-vanilla-orchid.png" alt="Revolving Ingredient 3">
              </div>
              <div class="cs-particle-4">
                <img id="orbit-icon-4" src="assets/images/particles/particle-chocolate-chunk.png" alt="Revolving Ingredient 4">
              </div>
              <div class="cs-particle-5">
                <img id="orbit-icon-5" src="assets/images/particles/particle-almond.png" alt="Revolving Ingredient 5">
              </div>
            </div>

            <!-- Product Box with Mouse Parallax -->
            <div class="cs-tilt-box" id="tilt-product-box">
              <img class="cs-hero-img" id="card-hero-img" src="assets/images/products/french-vanilla-splash-tub.png" alt="French Vanilla Royale" draggable="false">
            </div>

            <!-- Pedestal Ground Lighting -->
            <div class="cs-pedestal-ground">
              <div class="cs-pedestal-glow" id="pedestal-glow" style="background: radial-gradient(ellipse at center, rgba(229, 195, 120, 0.75) 0%, rgba(229, 195, 120, 0.15) 50%, transparent 75%);"></div>
            </div>
          </div>

          <!-- Right Preview Card -->
          <div class="cs-card cs-card-preview-right" id="card-right-preview">
            <div class="cs-preview-img-box">
              <img id="card-right-img" src="assets/images/products/belgian-chocolate-splash-tub.png" alt="Next Creation">
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Product Details Area -->
      <div class="cs-details-box">
        <div class="cs-details-info">
          <div class="cs-meta-top">
            <span class="cs-category-tag" id="detail-category-tag">01 // ARTISANAL PINT</span>
            <span style="opacity: 0.4;">•</span>
            <span class="cs-composition" id="detail-composition">Madagascar Bourbon Vanilla • 16% Jersey Cream • Zero Gums</span>
          </div>
          <h3 class="cs-prod-name" id="detail-title">French Vanilla Royale</h3>
          <div class="cs-chips-row" id="detail-notes-chips">
            <span class="cs-chip">🌿 Bourbon Vanilla</span>
            <span class="cs-chip">🥛 16% Jersey Butterfat</span>
            <span class="cs-chip">🍦 Slow Batch Churned</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 3: FRESH CHURNED PINTS & CONES (Clean Static Cards)
       ======================================================== -->
  <section class="section-pints-slider" id="flavors">
    <div class="container">
      <div class="pints-slider-head">
        <div>
          <span class="pill-kicker-pink">SMALL-BATCH LINEUP</span>
          <h2 class="pints-slider-title">Fresh Churned Treats</h2>
        </div>
        <div class="slider-arrows-wrap">
          <button class="slider-arrow-btn prev-arrow" id="pints-arrow-prev" onclick="if(window.scrollPintsSlider) window.scrollPintsSlider(-1);" aria-label="Previous Creations">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="slider-arrow-btn next-arrow" id="pints-arrow-next" onclick="if(window.scrollPintsSlider) window.scrollPintsSlider(1);" aria-label="Next Creations">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div class="pints-track-viewport" id="pints-viewport">
        <div class="pints-cards-track" id="pints-track">
          <?php 
          $card_idx = 1;
          foreach ($products as $id => $p): 
          ?>
            <div class="pints-pop-card" data-product-id="<?= $id ?>">
              <!-- Card Top Header -->
              <div class="card-pop-top-row">
                <span class="card-pop-pill-tag" style="<?= $p['badge_style'] ?? 'background: #FDF6E2; color: #A67C1E;' ?>">
                  <?= $p['badge'] ?? 'SIGNATURE RESERVE' ?>
                </span>
                <span class="card-pop-num"><?= sprintf('%02d', $card_idx) ?></span>
              </div>

              <!-- Centered Product Visual -->
              <div class="card-tub-popout">
                <img src="<?= $p['image'] ?>" alt="<?= $p['name'] ?>" loading="eager" decoding="async">
              </div>

              <!-- Origin / Category Kicker -->
              <span class="card-meta-origin"><?= $p['origin_kicker'] ?? ($p['category'] . ' • ' . $p['size']) ?></span>

              <!-- Elegant Serif Title -->
              <h3 class="card-pop-title"><?= $p['name'] ?></h3>

              <!-- Description Section (Replaces the price section) -->
              <p class="card-pop-desc"><?= htmlspecialchars($p['description']) ?></p>
            </div>
          <?php 
          $card_idx++;
          endforeach; 
          ?>
        </div>
      </div>

      <!-- Pagination Dots Bar -->
      <div class="pints-dots-bar" id="pints-dots-bar"></div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 4: EXPLORE BY CATEGORY (Live Dairy Classics Content)
       ======================================================== -->
  <section class="section-categories" id="categories">
    <!-- Atmospheric Rain of Products Container -->
    <div class="category-product-rain-container" id="category-product-rain" aria-hidden="true"></div>

    <div class="container" style="position: relative; z-index: 2;">
      <div class="art-section-head text-center">
        <span class="art-kicker">CURATED RANGE</span>
        <h2 class="art-title">Explore by Category</h2>
        <p class="art-desc" style="max-width: 600px; margin: 10px auto 0;">Discover the full portfolio of Dairy Classic crafted in Uzbekistan since 1996.</p>
      </div>

      <div class="categories-grid">
        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="cones">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/live/golden-f.webp" alt="Gourmet Cones" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Gourmet Cones</h3>
          <span class="cat-explore-sub">Golden Fantasy, Choco Boom & Super Twist</span>
        </a>

        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="sticks">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/live/bera-n.webp" alt="Sticks & Bars" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Sticks & Bars</h3>
          <span class="cat-explore-sub">Vega, Super Choc & Classic Vega</span>
        </a>

        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="cups">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/live/Layer-1.webp" alt="Cups & Creamica" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Cups & Creamica</h3>
          <span class="cat-explore-sub">Creamica Cheese Cake & Ambroziya Mini Cups</span>
        </a>

        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="biscuit">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/live/sandwich.webp" alt="Biscuit Sandwiches" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Biscuit Sandwiches</h3>
          <span class="cat-explore-sub">Sandwich, Bricket, Olino & Round Pie</span>
        </a>

        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="cassatta">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/live/Classic-Cassata.png" alt="Cassatta & Cakes" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Cassatta & Cakes</h3>
          <span class="cat-explore-sub">1 LTR Classic Cassatta & Galaxy Cassatta</span>
        </a>

        <a href="#catalog-showcase" class="cat-explore-card" data-category-target="tubs">
          <div class="cat-explore-img-wrap">
            <img src="assets/images/products/belgian-chocolate-tub.png" alt="Artisanal Tubs" class="cat-explore-img">
            <div class="card-landing-ripple"></div>
            <div class="card-drop-shadow"></div>
          </div>
          <h3 class="cat-explore-title">Artisanal Tubs</h3>
          <span class="cat-explore-sub">500ml Churned Gourmet Pints</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ========================================================
       NEW SECTION: COMPLETE INTERACTIVE PRODUCT PORTFOLIO (dairyclassics.com)
       ======================================================== -->
  <section class="section-catalog-portfolio" id="catalog-showcase">
    <div class="container">
      <div class="art-section-head text-center">
        <span class="art-kicker">ALL CREATIONS &bull; SINCE 1996</span>
        <h2 class="art-title">Full Dairy Classic Portfolio</h2>
        <p class="art-desc" style="max-width: 680px; margin: 10px auto 0;">
          Select a category below to explore all handcrafted frozen delights from Uzbekistan's #1 ice cream maker.
        </p>
      </div>

      <!-- Filter Tabs Navigation -->
      <div class="catalog-filter-bar">
        <button class="catalog-tab-btn active" data-filter="all">
          <span>All Products</span>
        </button>
        <button class="catalog-tab-btn" data-filter="cones">
          <span>Cones (7)</span>
        </button>
        <button class="catalog-tab-btn" data-filter="sticks">
          <span>Sticks (10)</span>
        </button>
        <button class="catalog-tab-btn" data-filter="cups">
          <span>Cups (7)</span>
        </button>
        <button class="catalog-tab-btn" data-filter="biscuit">
          <span>Biscuit (4)</span>
        </button>
        <button class="catalog-tab-btn" data-filter="cassatta">
          <span>Cassatta (3)</span>
        </button>
        <button class="catalog-tab-btn" data-filter="tubs">
          <span>Pints &amp; Tubs (3)</span>
        </button>
      </div>

      <!-- Dynamic Filterable Products Grid -->
      <div class="catalog-grid" id="catalog-products-grid">
        <?php foreach ($catalog_by_category as $catKey => $catData): ?>
          <?php foreach ($catData['items'] as $item): ?>
            <div class="catalog-card" data-category="<?= $catKey ?>">
              <div class="catalog-card-badge"><?= $item['badge'] ?></div>
              <div class="catalog-card-visual">
                <img src="<?= $item['image'] ?>" alt="<?= $item['name'] ?>" loading="lazy">
                <div class="catalog-card-glow"></div>
              </div>
              <div class="catalog-card-body">
                <span class="catalog-card-meta"><?= $catData['category_name'] ?> &bull; <?= $item['size'] ?></span>
                <h3 class="catalog-card-title"><?= $item['name'] ?></h3>
                <p class="catalog-card-desc"><?= htmlspecialchars($item['description']) ?></p>
                
                <div class="catalog-card-foot">
                  <span class="catalog-hallmark">100% Real Farm Milk</span>
                  <button class="catalog-quickview-btn" 
                          onclick="openCatalogItemQuickView('<?= addslashes($item['name']) ?>', '<?= addslashes($catData['category_name']) ?>', '<?= addslashes($item['size']) ?>', '<?= addslashes($item['image']) ?>', '<?= addslashes($item['description']) ?>', '<?= addslashes($item['badge']) ?>')"
                          aria-label="View Details for <?= $item['name'] ?>">
                    <span>Details ↗</span>
                  </button>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        <?php endforeach; ?>
      </div>

      <!-- View More Treats Button -->
      <div class="catalog-load-more-wrap" id="catalog-load-more-wrap">
        <button type="button" class="btn-catalog-load-more" id="btn-catalog-load-more" aria-label="View more products">
          <span class="btn-catalog-load-more-text">View More</span>
          <span class="btn-catalog-load-more-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 5: THE DELICIOUS DIFFERENCE / OUR STORY (oklch(25% .075 40))
       ======================================================== -->
  <section class="section-story-delicious" id="about">
    <div class="container">
      <div class="story-delicious-card">
        <!-- Left Visual Side with Floating Badge -->
        <div class="story-delicious-visual">
          <img src="assets/images/story-chocolate-churn.jpg" alt="Good things take time. Great ice cream does too." loading="lazy">
          <div class="story-floating-badge">
            <span class="story-badge-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l2 5v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l2-5z"/><line x1="6" y1="12" x2="18" y2="12"/></svg>
            </span>
            <div>
              <strong class="story-badge-title">Farm-fresh milk</strong>
              <span class="story-badge-sub">Churned within 24 hours</span>
            </div>
          </div>
        </div>

        <!-- Right Content Side with oklch(25% 0.075 40) Background -->
        <div class="story-delicious-content">
          <span class="story-kicker-gold">THE DELICIOUS DIFFERENCE</span>
          <h2 class="story-main-heading">Good things take time. Great ice cream does too.</h2>
          <p class="story-body-text">
            We begin with milk from trusted local farms, then fold in ingredients chosen at their flavorful peak. Slow churning creates our signature velvety texture — no shortcuts, just honest craft.
          </p>

          <div class="story-features-grid">
            <div class="story-feature-item">
              <span class="story-feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C59B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </span>
              <div>
                <h4 class="story-feature-title">Thoughtfully sourced</h4>
                <p class="story-feature-desc">Better ingredients, naturally.</p>
              </div>
            </div>
            <div class="story-feature-item">
              <span class="story-feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#C59B4B"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
              </span>
              <div>
                <h4 class="story-feature-title">Slow churned</h4>
                <p class="story-feature-desc">For that velvet finish.</p>
              </div>
            </div>
          </div>

          <div class="story-actions-row">
            <a href="#about-heritage" class="btn-story-white">
              <span>Our Full Story</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       NEW SECTION: ABOUT US & FOUNDER'S VISION & DEVELOPMENTS (dairyclassics.com)
       ======================================================== -->
  <section class="section-about-deep-heritage" id="about-heritage">
    <div class="container">
      <!-- Section Header -->
      <div class="art-section-head text-center">
        <span class="art-kicker">A LEGACY OF EXCELLENCE SINCE 1996</span>
        <h2 class="art-title">We at Foreign Company Singapore Samarkand</h2>
        <p class="art-desc" style="max-width: 720px; margin: 10px auto 0;">
          Under the brand Dairy Classic, we have been delighting taste buds for over 30 years with our core motto: <strong>"Healthy Living"</strong> from the very beginning!
        </p>
      </div>

      <!-- Core Highlights Banner -->
      <div class="about-pillars-banner">
        <div class="about-pillar-card">
          <div class="pillar-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </div>
          <h4>Our Motto</h4>
          <p>"Healthy Living" from the very beginning!</p>
        </div>
        <div class="about-pillar-card">
          <div class="pillar-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#8E1C3D"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <h4>Our Drive</h4>
          <p>Quality, passion, and the joy of ice cream.</p>
        </div>
        <div class="about-pillar-card">
          <div class="pillar-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h4>Our Reach</h4>
          <p>A leading ice cream brand, bringing happiness to millions.</p>
        </div>
      </div>

      <!-- Founder's Vision Split Card -->
      <div class="heritage-split-story-card">
        <div class="heritage-img-column">
          <img src="assets/images/live/founder.webp" alt="Dairy Classic Founder's Vision" loading="lazy">
          <div class="heritage-img-caption">
            <span>Founder &amp; President &bull; Dairy Classic</span>
          </div>
        </div>
        <div class="heritage-text-column">
          <span class="kicker-pink">LEADERSHIP &amp; PURPOSE</span>
          <h3 class="heritage-story-title">Founder's Vision</h3>
          <p class="heritage-story-lead">
            Under the visionary leadership and expertise of our Founder &amp; President, Dairy Classic has built a trusted reputation over the last three decades.
          </p>
          <div class="founder-points-list">
            <div class="founder-point-item">
              <div class="point-num">01</div>
              <div>
                <strong>Integrity &amp; Quality</strong>
                <p>We are known for premium, trustworthy products crafted from 100% natural ingredients.</p>
              </div>
            </div>
            <div class="founder-point-item">
              <div class="point-num">02</div>
              <div>
                <strong>Innovation &amp; Growth</strong>
                <p>Investing in cutting-edge European technology &amp; high-precision manufacturing machinery.</p>
              </div>
            </div>
            <div class="founder-point-item">
              <div class="point-num">03</div>
              <div>
                <strong>Strong Presence</strong>
                <p>Present in leading supermarkets, parlours, and convenience stores across Uzbekistan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Developments Split Card -->
      <div class="heritage-split-story-card reverse-layout">
        <div class="heritage-img-column">
          <img src="assets/images/live/developments.webp" alt="Dairy Classic Recent Developments Plant" loading="lazy">
        </div>
        <div class="heritage-text-column">
          <span class="kicker-pink">MODERNIZATION &amp; GROWTH</span>
          <h3 class="heritage-story-title">Recent Developments</h3>
          <p class="heritage-story-lead">
            Our 80,000-litre daily production capacity ensures we deliver nothing but the finest, most flavorful ice cream to our loyal customers across Uzbekistan and beyond.
          </p>
          <ul class="developments-bullets">
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Modernization of our ice cream plant</strong> with state-of-the-art European hygiene standards.</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Advanced technology</strong> for world class, ultra-creamy, slow-churned production.</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Awarded #1 choice</strong> by our passionate ice cream consumers across the nation.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mission & Vision Dual Cards -->
      <div class="mission-vision-grid">
        <div class="mv-card mission-card">
          <div class="mv-head">
            <span class="mv-tag">OUR PURPOSE</span>
            <h3 class="mv-title">Our Mission</h3>
          </div>
          <ul class="mv-list">
            <li><span class="mv-ico">✦</span> Spreading the love for ice cream.</li>
            <li><span class="mv-ico">✦</span> Bringing joy with every scoop.</li>
            <li><span class="mv-ico">✦</span> Promoting healthy living through quality and innovation.</li>
          </ul>
        </div>

        <div class="mv-card vision-card">
          <div class="mv-head">
            <span class="mv-tag">OUR AMBITION</span>
            <h3 class="mv-title">Our Vision</h3>
          </div>
          <ul class="mv-list">
            <li><span class="mv-ico">✦</span> Deliver world class flavors &amp; quality to our consumers.</li>
            <li><span class="mv-ico">✦</span> Use cutting edge manufacturing &amp; technology.</li>
            <li><span class="mv-ico">✦</span> Create value for customers, employees &amp; society. Achieve sustainable growth across all markets.</li>
          </ul>
        </div>
      </div>

      <!-- Sweet Moments Distribution Banner -->
      <div class="sweet-moments-banner">
        <div class="smb-content">
          <span class="smb-kicker">NATIONWIDE NETWORK</span>
          <h3 class="smb-title">Bringing Sweet Moments Closer</h3>
          <p class="smb-desc">Find us across Uzbekistan and beyond — in leading stores, parlors, and cafes! Retail &amp; Wholesale Availability partnering with Top Food Chains.</p>
        </div>
        <div class="smb-action">
          <a href="#contact-us" class="btn-smb-cta">Partner With Us ↗</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 6: 3D VIDEO CRAFT SHOWCASE (Live Churn Experience)
       ======================================================== -->
  <section class="section-video-craft" id="video-craft">
    <div class="container">
      <div class="video-craft-grid">
        <div class="video-craft-text">
          <div class="video-badge-pill">
            <span class="v-dot"></span>
            <span>SINCE 1996 • ARTISANAL CHURNING</span>
          </div>
          <h2 class="video-craft-heading">
            Pure Cream in Motion. <br>
            <span>Slow-Churned Artisanal Craft.</span>
          </h2>
          <p class="video-craft-desc">
            Experience the authentic swirl of Dairy Classic. We cold-churn single-origin farm milk with zero artificial overrun, capturing rich density that melts luxuriously on the tongue.
          </p>

          <div class="video-craft-metrics">
            <div class="v-metric-item">
              <span class="v-metric-val">16%</span>
              <span class="v-metric-lbl">Jersey Butterfat</span>
            </div>
            <div class="v-metric-item">
              <span class="v-metric-val">40L</span>
              <span class="v-metric-lbl">Micro Batches</span>
            </div>
            <div class="v-metric-item">
              <span class="v-metric-val">-18°C</span>
              <span class="v-metric-lbl">Cold Preserved</span>
            </div>
          </div>

          <div class="v-action-row">
            <a href="#spin360" class="btn-video-explore">
              <span>Explore Signature Treats</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div class="video-player-wrap">
          <div class="video-screen-glow"></div>
          <div class="video-frame">
            <video id="craft-hero-video" class="craft-video-element" autoplay loop muted playsinline poster="assets/images/3d-elements/milk-chocolate-splash.jpg">
              <source src="assets/videos/hero-bricket.mp4" type="video/mp4">
              <source src="https://dairyclassics.com/wp-content/uploads/2025/05/Final-Bricket.mp4" type="video/mp4">
            </video>
            
            <div class="video-overlay-badge">
              <span class="v-pulse-dot"></span>
              <span>Watch Our Craft in Action</span>
            </div>

            <div class="video-player-controls">
              <button class="btn-v-ctrl" id="btn-video-toggle" onclick="toggleCraftVideo()" aria-label="Play or Pause Video">
                <span id="video-play-icon">⏸</span>
              </button>
              <button class="btn-v-ctrl" id="btn-video-sound" onclick="toggleCraftAudio()" aria-label="Mute or Unmute Video">
                <span id="video-sound-icon">🔇</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 7: PURE INDULGENCE WITH EVERY SCOOP (Live Website Section)
       ======================================================== -->
  <section class="section-pure-indulgence" id="indulgence">
    <!-- Floating 3D Elements (Top-Right Choco Scoop & Bottom-Left Mint Scoop) -->
    <div class="floating-3d-decor decor-top-right decor-scoop" aria-hidden="true">
      <img src="assets/images/3d-elements/choco-splash-float.png" alt="3D Floating Chocolate Splash Scoop" class="float-3d-img">
      <div class="float-3d-shadow"></div>
    </div>
    <div class="floating-3d-decor decor-bottom-left decor-scoop" aria-hidden="true">
      <img src="assets/images/3d-elements/mint-scoop-float.png" alt="3D Floating Mint Scoop" class="float-3d-img">
      <div class="float-3d-shadow"></div>
    </div>

    <div class="container">
      <div class="indulgence-split-card">
        <div class="indulgence-text-col">
          <span class="heritage-badge">FINEST INGREDIENTS</span>
          <h2 class="heritage-main-title">Pure Indulgence With Every Scoop</h2>
          <p class="heritage-desc">
            Crafted with passion, our ice creams bring pure delight in every bite. Made with the finest ingredients, we ensure a rich, creamy experience. From classic flavors to exciting twists, there's something for everyone. Taste the tradition, love the flavor!
          </p>
          <div class="heritage-actions-row">
            <a href="#catalog-showcase" class="btn-heritage-primary">Explore Treats</a>
            <a href="#about-heritage" class="btn-heritage-secondary">Our Story</a>
          </div>
        </div>

        <div class="indulgence-img-collage">
          <div class="indulgence-collage-item">
            <img src="assets/images/live/golden-f.webp" alt="Golden Fantasy Cone" loading="lazy">
            <span class="collage-item-name">Golden Fantasy</span>
          </div>
          <div class="indulgence-collage-item">
            <img src="assets/images/live/round.webp" alt="Round Pie" loading="lazy">
            <span class="collage-item-name">Round Pie</span>
          </div>
          <div class="indulgence-collage-item">
            <img src="assets/images/live/sandwich.webp" alt="Sandwich Biscuit" loading="lazy">
            <span class="collage-item-name">Sandwich Biscuit</span>
          </div>
          <div class="indulgence-collage-item">
            <img src="assets/images/live/bera-n.webp" alt="Vega Bar" loading="lazy">
            <span class="collage-item-name">Vega Crunchy Bar</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 8: HERITAGE & DELIGHT
       ======================================================== -->
  <section class="section-heritage" id="uzbekistan-favorite" style="padding-top: 20px;">
    <div class="container">
      <div class="heritage-split-grid">
        <div class="heritage-text-col">
          <span class="heritage-badge">TIMELESS HERITAGE &amp; TASTE</span>
          <h2 class="heritage-main-title">Crafting Smiles, One Scoop at a Time</h2>
          <p class="heritage-desc">
            Bringing smiles with every scoop, one indulgence at a time. From nostalgic classics to exciting new treats, we have it all. A world of flavor, crafted for pure happiness. Dive into delight today!
          </p>
          <div class="heritage-actions-row">
            <a href="#about-heritage" class="btn-heritage-primary">About Us</a>
            <a href="#contact-us" class="btn-heritage-secondary">Contact Us</a>
          </div>
        </div>

        <div class="heritage-cone-stage" id="heritage-cone-stage" data-flavor="mango" data-product-id="alphonso-mango-cone">
          <div class="heritage-cone-halo" aria-hidden="true"></div>
          
          <!-- Ambient Floating Mango Splash Decor -->
          <div class="heritage-orbit-particles" aria-hidden="true">
            <span class="h-particle h-p1">✨</span>
            <span class="h-particle h-p2">🥭</span>
            <span class="h-particle h-p3">✦</span>
            <span class="h-particle h-p4">🌿</span>
          </div>

          <!-- 3D Interactive Tilt & Levitation Product Box -->
          <div class="heritage-cone-tilt-box" id="heritage-cone-tilt">
            <img src="assets/images/products/alphonso-mango-cone-splash.png" 
                 alt="Dairy Classic Alphonso Mango Gourmet Cone" 
                 class="heritage-floating-cone-img" 
                 id="heritage-cone-img" 
                 loading="lazy">
          </div>

          <!-- Dynamic Soft Floor Shadow with Synchronized Breathing Animation -->
          <div class="heritage-cone-shadow" aria-hidden="true"></div>

          <!-- Glassmorphism Floating Heritage Badge Stamp -->
          <div class="heritage-stamp-floating">
            <div class="stamp-badge-glow"></div>
            <span class="stamp-icon">✨</span>
            <div class="stamp-text-group">
              <strong>Alphonso Gold Reserve</strong>
              <span>100% Real Farm Milk &bull; Artisanal Waffle Cone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 9: SIGNATURE RECIPES (Creamica Milkshake - dairyclassics.com)
       ======================================================== -->
  <section class="section-recipes" id="recipes">
    <!-- Floating 3D Elements (Top-Right Vanilla Scoop & Bottom-Left Cube) -->
    <div class="floating-3d-decor decor-top-right decor-scoop" aria-hidden="true">
      <img src="assets/images/3d-elements/vanilla-scoop-float.png" alt="3D Floating Vanilla Splash Scoop" class="float-3d-img">
      <div class="float-3d-shadow"></div>
    </div>
    <div class="floating-3d-decor decor-bottom-left decor-cube" aria-hidden="true">
      <img src="assets/images/3d-elements/ice-cream-cube-3d.png" alt="3D Floating Ice Cream Cube" class="float-3d-img">
      <div class="float-3d-shadow"></div>
    </div>

    <div class="container">
      <div class="recipes-split-grid">
        <div class="recipes-info-col">
          <span class="recipe-badge">SIGNATURE RECIPE</span>
          <h2 class="recipe-title">Creamica Milkshake</h2>
          <p class="recipe-desc">Iconic recipe with just few ingredients, best for summers. Creamy taste of Dairy classic creamica in your milkshake.</p>
          
          <div class="recipe-steps-list">
            <div class="recipe-step-item">
              <span class="step-circle">1</span>
              <span>Scoop 2 generous scoops of Belgian Chocolate or French Vanilla into a blender.</span>
            </div>
            <div class="recipe-step-item">
              <span class="step-circle">2</span>
              <span>Add 150ml of chilled whole farm milk and 1 tablespoon of dark cocoa powder or fresh berries.</span>
            </div>
            <div class="recipe-step-item">
              <span class="step-circle">3</span>
              <span>Blend on medium for 35 seconds until ultra-thick and velvety. Pour into a chilled tall glass and garnish with roasted nuts.</span>
            </div>
          </div>
        </div>

        <div class="recipe-fan-stage" id="recipe-fan-stage">
          <!-- Orbiting Multi-Flavor Particle Sparks -->
          <div class="recipe-fan-particles" aria-hidden="true">
            <span class="rf-particle rf-p1">🍓</span>
            <span class="rf-particle rf-p2">🍫</span>
            <span class="rf-particle rf-p3">✨</span>
            <span class="rf-particle rf-p4">🍮</span>
          </div>

          <!-- 3D Perspective Levitation Wrapper -->
          <div class="recipe-fan-3d-wrapper" id="recipe-fan-wrapper">
            <!-- Continuous 3D Fan Rotor (Blade-Spinning Trio Splash) -->
            <div class="recipe-fan-rotor" id="recipe-fan-rotor">
              <img src="assets/images/products/trio-scoop-splash-3d.png" 
                   alt="Dairy Classic Trio Gourmet Scoops Splash 3D Fan" 
                   class="recipe-fan-img" 
                   id="recipe-fan-img" 
                   loading="lazy">
            </div>
          </div>

          <!-- Dynamic Soft Floor Shadow -->
          <div class="recipe-fan-shadow" aria-hidden="true"></div>
          
          <!-- Floating Heritage Feature Pill -->
          <div class="recipe-fan-badge">
            <span class="badge-icon">✦</span>
            <span>Tri-Flavor 3D Symphony</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       NEW SECTION: INTERACTIVE FAQS ACCORDION (dairyclassics.com/faqs/)
       ======================================================== -->
  <section class="section-faqs-accordion" id="faqs">
    <div class="container">
      <div class="art-section-head text-center">
        <span class="art-kicker">FREQUENTLY ASKED QUESTIONS</span>
        <h2 class="art-title">Want Some Answers?</h2>
        <p class="art-desc" style="max-width: 600px; margin: 10px auto 0;">
          Everything you need to know about our ice creams, production standards, and partnership opportunities.
        </p>
      </div>

      <!-- FAQ Category Filter Tabs -->
      <div class="faq-category-nav">
        <?php $fIndex = 0; foreach ($faqs_data as $catKey => $cat): ?>
          <button class="faq-tab-btn <?= $fIndex === 0 ? 'active' : '' ?>" data-faq-cat="<?= $catKey ?>">
            <span><?= $cat['category'] ?></span>
          </button>
        <?php $fIndex++; endforeach; ?>
      </div>

      <!-- FAQ Accordions Container -->
      <div class="faq-accordions-wrapper">
        <?php $fIndex = 0; foreach ($faqs_data as $catKey => $cat): ?>
          <div class="faq-accordion-group <?= $fIndex === 0 ? 'active' : '' ?>" id="faq-group-<?= $catKey ?>">
            <?php foreach ($cat['questions'] as $qIndex => $item): ?>
              <div class="faq-item <?= ($fIndex === 0 && $qIndex === 0) ? 'open' : '' ?>">
                <button class="faq-question-btn" aria-expanded="<?= ($fIndex === 0 && $qIndex === 0) ? 'true' : 'false' ?>">
                  <span class="faq-q-text"><?= $item['q'] ?></span>
                  <span class="faq-icon-toggle">+</span>
                </button>
                <div class="faq-answer-pane">
                  <p><?= $item['a'] ?></p>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php $fIndex++; endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ========================================================
       NEW SECTION: INSTAGRAM SOCIAL SHOWCASE (@dairyclassic.uz)
       ======================================================== -->
  <section class="section-instagram-showcase" id="instagram-feed">
    <div class="container">
      <div class="art-section-head text-center">
        <span class="art-kicker">FOLLOW OUR SWEET MOMENTS</span>
        <h2 class="art-title">@dairyclassic.uz on Instagram</h2>
        <p class="art-desc" style="max-width: 600px; margin: 10px auto 0;">
          Tag your delicious moments with <strong>#DairyClassic</strong> for a chance to be featured on our official channel.
        </p>
      </div>

      <div class="insta-gallery-grid">
        <?php foreach ($instagram_posts as $post): ?>
          <a href="https://www.instagram.com/dairyclassic.uz/" target="_blank" rel="noopener noreferrer" class="insta-card">
            <div class="insta-img-wrap">
              <img src="<?= $post['image'] ?>" alt="Dairy Classic Instagram Moment" loading="lazy">
              <div class="insta-overlay">
                <span class="insta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </span>
                <span class="insta-likes">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFF" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <?= $post['likes'] ?>
                </span>
              </div>
            </div>
            <div class="insta-card-info">
              <p class="insta-caption"><?= htmlspecialchars($post['caption']) ?></p>
              <div class="insta-sub-row">
                <span class="insta-tag-pill">#DairyClassic</span>
                <span class="insta-likes-pill">❤️ <?= $post['likes'] ?></span>
              </div>
            </div>
          </a>
        <?php endforeach; ?>
      </div>

      <div class="text-center" style="margin-top: 36px;">
        <a href="https://www.instagram.com/dairyclassic.uz/" target="_blank" rel="noopener noreferrer" class="btn-insta-follow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          <span>Follow @dairyclassic.uz</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ========================================================
       SECTION 10: GOT A CRAVING OR A QUESTION? (Live Website Section)
       ======================================================== -->
  <section class="section-craving-cta" id="craving-cta">
    <div class="container">
      <div class="craving-cta-box">
        <h2>Got a Craving or a Question?</h2>
        <p>Have a question or looking for something special? We'd love to hear from you! Reach out and let's make every moment delicious.</p>
        <div class="craving-cta-actions">
          <a href="#contact-us" class="btn-cta-contact">Contact Us</a>
          <a href="tel:+998781203377" class="btn-cta-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -2px; margin-right: 6px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+99878 120 33 77</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================
       NEW SECTION: COMPLETE CONTACT FORM & FACTORY LOCATION MAP
       ======================================================== -->
  <section class="section-contact-full" id="contact-us">
    <div class="container">
      <div class="art-section-head text-center">
        <span class="art-kicker">DISCOVER &amp; CONNECT</span>
        <h2 class="art-title">Talk to Us! Let’s Discuss</h2>
        <p class="art-desc" style="max-width: 650px; margin: 10px auto 0;">
          Discover the magic behind every scoop. We’re here to share our story, values, and passion for crafting ice cream that brings people together.
        </p>
      </div>

      <div class="contact-full-grid">
        <!-- Interactive Contact / Inquiry Form -->
        <div class="contact-form-card">
          <div class="form-card-head">
            <h3>Send an Inquiry</h3>
            <p>Thank you for getting in touch! Kindly fill the form, have a great day!</p>
          </div>

          <form id="live-contact-form" onsubmit="handleContactSubmit(event)">
            <div class="form-row-2col">
              <div class="form-field">
                <label for="c-name">Full Name *</label>
                <input type="text" id="c-name" name="name" placeholder="Your Name" required>
              </div>
              <div class="form-field">
                <label for="c-email">Email Address *</label>
                <input type="email" id="c-email" name="email" placeholder="name@example.com" required>
              </div>
            </div>

            <div class="form-row-2col">
              <div class="form-field">
                <label for="c-country">Country Code</label>
                <select id="c-country" name="country">
                  <option value="+998" selected>+998 (Uzbekistan)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+971">+971 (Dubai / UAE)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+1">+1 (US / Canada)</option>
                </select>
              </div>
              <div class="form-field">
                <label for="c-phone">Phone Number *</label>
                <input type="tel" id="c-phone" name="phone" placeholder="90 998 2019" required>
              </div>
            </div>

            <div class="form-field">
              <label for="c-interest">Interested In</label>
              <select id="c-interest" name="interest">
                <option value="Cones">Cones (Golden Fantasy, Choco Boom, Super Twist)</option>
                <option value="Sticks">Sticks &amp; Bars (Vega, Super Choc, Delizia)</option>
                <option value="Cups">Cups &amp; Creamica (Cheese Cake, Vanilla, Ambroziya)</option>
                <option value="Biscuit">Biscuit &amp; Sandwiches (Bricket, Olino, Round Pie)</option>
                <option value="Cassatta">Cassatta (Classic 1 LTR, Galaxy)</option>
                <option value="Tubs">Gourmet 500ml Pints &amp; Tubs</option>
                <option value="Wholesale">Wholesale &amp; Retail Distribution</option>
                <option value="General">General Inquiry &amp; Feedback</option>
              </select>
            </div>

            <div class="form-field">
              <label for="c-message">Your Message *</label>
              <textarea id="c-message" name="message" rows="4" placeholder="Tell us how we can make your sweet moments special..." required></textarea>
            </div>

            <button type="submit" class="btn-form-submit" id="btn-submit-inquiry">
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

            <div class="form-toast-msg" id="form-toast-msg" style="display: none;">
              <span>🎉 Thank you! Your message has been sent successfully. Our team will contact you shortly.</span>
            </div>
          </form>
        </div>

        <!-- Contact Cards & Map -->
        <div class="contact-info-map-card">
          <div class="contact-quick-cards">
            <div class="cq-item">
              <span class="cq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <strong>Visit Factory &amp; HQ</strong>
                <p>БУТ 5, 65M6+H9 Tashkent, Uzbekistan. Factory location.</p>
              </div>
            </div>
            <div class="cq-item">
              <span class="cq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div>
                <strong>Call Us Directly</strong>
                <p>+99878 120 33 77 / 78 &bull; +998 90 992 2999</p>
              </div>
            </div>
            <div class="cq-item">
              <span class="cq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </span>
              <div>
                <strong>Regional Support</strong>
                <p>Tashkent: +998 90 998 2019<br>Samarkand: +998 90 502 9292</p>
              </div>
            </div>
            <div class="cq-item">
              <span class="cq-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E1C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <div>
                <strong>Email Us</strong>
                <p><a href="mailto:support@dairyclassic.uz">support@dairyclassic.uz</a> &bull; <a href="mailto:jkapoor@me.com">jkapoor@me.com</a></p>
              </div>
            </div>
          </div>

          <!-- Google Maps Embed for Factory Location in Tashkent -->
          <div class="map-embed-wrapper">
            <iframe 
              title="Dairy Classic Factory Location Tashkent"
              src="https://maps.google.com/maps?q=41.2995,69.2401&hl=en&z=14&output=embed" 
              width="100%" 
              height="240" 
              style="border:0; border-radius: 16px;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll-Driven Flight Animation Proxy (Hero to 3D Showcase) -->
  <div id="flight-proxy-tub" aria-hidden="true">
    <img id="flight-proxy-img" src="assets/images/products/french-vanilla-splash-tub.png" alt="Flying Ice Cream Tub">
  </div>
</main>

<?php include 'includes/footer.php'; ?>
