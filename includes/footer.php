<?php
// includes/footer.php - Exact 4-Column Footer from dairyclassics.com
$current_design = isset($design) ? $design : 1;
?>

<!-- Quick View Tasting Notes Modal (Static) -->
<div class="modal-backdrop" id="quickview-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="qv-title">
  <div class="quickview-modal">
    <button class="modal-close-btn" onclick="closeQuickView()" aria-label="Close modal">&times;</button>
    <div class="quickview-grid">
      <div class="quickview-visual">
        <img id="qv-img" src="" alt="Product Image">
      </div>
      <div class="quickview-details">
        <span class="quickview-badge" id="qv-badge">100% Real Farm Milk</span>
        <h3 class="quickview-title" id="qv-title">Product Title</h3>
        <div class="quickview-price-row">
          <span class="quickview-size" id="qv-size" style="font-size: 0.95rem; font-weight: 600; color: #888;">(120 ml)</span>
        </div>
        <p class="quickview-desc" id="qv-desc">Description goes here...</p>
        
        <div class="nutrition-pills">
          <div class="nutrition-pill-item"><div class="val" id="qv-cal">-</div><div class="lbl">Calories</div></div>
          <div class="nutrition-pill-item"><div class="val" id="qv-fat">-</div><div class="lbl">Butterfat</div></div>
          <div class="nutrition-pill-item"><div class="val" id="qv-sugar">-</div><div class="lbl">Sugar</div></div>
          <div class="nutrition-pill-item"><div class="val" id="qv-prot">-</div><div class="lbl">Protein</div></div>
        </div>

        <button class="btn-modal-add" onclick="closeQuickView()">
          <span>Close Tasting Notes</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- ========================================================
     EXACT 4-COLUMN FOOTER FROM DAIRYCLASSICS.COM
     ======================================================== -->
<footer class="footer-live-4col <?= $current_design == 2 ? 'theme-luxury' : 'theme-artisanal' ?>" id="colophon">
  <!-- Chocolate Milk Drip Border on Top -->
  <div class="footer-choco-drip-wrap" aria-hidden="true">
    <svg class="footer-choco-drip-svg" viewBox="0 0 1440 85" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cream / Milk Froth Underlay Shadow -->
      <path d="M0,0 C140,42 210,68 320,68 C420,68 480,22 590,22 C700,22 760,78 880,78 C990,78 1050,20 1160,20 C1270,20 1340,54 1440,54 L1440,85 L0,85 Z" fill="rgba(240, 213, 154, 0.3)"/>
      <!-- Rich Melted Chocolate Wave -->
      <path d="M0,12 C110,12 170,62 270,62 C360,62 410,8 510,8 C610,8 660,74 770,74 C870,74 920,14 1020,14 C1120,14 1180,66 1280,66 C1360,66 1400,30 1440,30 L1440,85 L0,85 Z" class="choco-drip-path"/>
    </svg>
  </div>

  <div class="container">
    <div class="footer-live-grid">
      <!-- Column 1: Brand & Socials -->
      <div class="fl-brand-col">
        <div class="fl-logo-wrap">
          <img src="assets/images/dairy-classic-logo.jpg" alt="Dairy Classic Logo" class="fl-logo-img">
          <div>
            <span class="fl-brand-title">Dairy Classic</span>
            <span style="font-size: 0.78rem; opacity: 0.75; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em;">Since 1996 &bull; Uzbekistan</span>
          </div>
        </div>
        <p class="fl-brand-desc">Dairy Classic – Crafting world-class ice creams with passion, quality, and innovation since 1996.</p>
        
        <div class="fl-craft-badge">
          <span class="badge-dot">✦</span>
          <span>100% Real Farm Fresh Cream & Cocoa</span>
        </div>

        <div class="fl-social-icons">
          <a href="https://www.instagram.com/dairyclassic.uz/" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://www.facebook.com/DairyClassicsIceCream/" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://x.com/dairyclassicUz" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="X Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.pinterest.com/dairyclassic_1990" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="Pinterest">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.18c-.05-.98-.1-2.48.02-3.55l.72-3.07s-.18-.37-.18-.92c0-.86.5-1.5 1.12-1.5.53 0 .78.4.78.87 0 .53-.34 1.33-.52 2.06-.15.61.3 1.11.9 1.11 1.08 0 1.91-1.14 1.91-2.78 0-1.45-1.04-2.47-2.53-2.47-1.73 0-2.74 1.3-2.74 2.64 0 .52.2 1.08.45 1.39.05.06.06.12.04.18l-.17.7c-.03.11-.1.14-.22.09-1-.46-1.63-1.9-1.63-3.06 0-2.49 1.81-4.78 5.22-4.78 2.74 0 4.87 1.95 4.87 4.56 0 2.72-1.72 4.91-4.1 4.91-.8 0-1.56-.42-1.81-.91l-.49 1.88c-.18.69-.66 1.55-.98 2.08A12 12 0 1 0 12 0z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@dairyclassic.uz" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="TikTok">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.28 6.28 0 0 0 1.93-4.47V8.71a8.28 8.28 0 0 0 4.84 1.45V6.69z"/></svg>
          </a>
          <a href="https://www.youtube.com/@dairyclassic.uz.official" target="_blank" rel="noopener noreferrer" class="fl-social-btn" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Opening Hours -->
      <div class="fl-hours-col">
        <h4 class="fl-col-heading">Opening Hours</h4>
        <div class="fl-hours-text">
          <p style="margin: 0 0 8px 0;"><strong>Mon - Sat :</strong><br>09:00 am - 08:00 pm</p>
          <p style="margin: 0; color: #E84A7F; font-weight: 700;">Sun : Closed</p>
        </div>
      </div>

      <!-- Column 3: Quicklinks (Exact from dairyclassics.com) -->
      <div class="fl-links-col">
        <h4 class="fl-col-heading">Quicklinks</h4>
        <ul class="fl-links-list">
          <li><a href="#about-heritage">About Us</a></li>
          <li><a href="#recipes">Blog &amp; Recipes</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#catalog-showcase">Cones &amp; Sticks</a></li>
          <li><a href="#categories">Cups &amp; Biscuits</a></li>
          <li><a href="#flavors">Gourmet Tubs</a></li>
        </ul>
      </div>

      <!-- Column 4: Contact Us (Official Uzbekistan Details) -->
      <div class="fl-contact-col">
        <h4 class="fl-col-heading">Contact Us</h4>
        <ul class="fl-contact-list">
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">📍</span>
            <span>БУТ 5, 65M6+H9 Tashkent, Uzbekistan. Factory location. Tashkent</span>
          </li>
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">📞</span>
            <a href="tel:+998781203377">+99878 120 33 77 / 78</a>
          </li>
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">📞</span>
            <a href="tel:+998909922999">+998 90 992 2999</a>
          </li>
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">📱</span>
            <a href="tel:+998909982019">Tashkent: +998 90 998 2019</a>
          </li>
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">📱</span>
            <a href="tel:+998905029292">Samarkand: +998 90 502 9292</a>
          </li>
          <li class="fl-contact-item">
            <span style="font-size: 1.1rem;">✉️</span>
            <a href="mailto:jkapoor@me.com">jkapoor@me.com</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="fl-bottom-copyright">
      <p style="margin: 0;">Copyrights &copy;2026 Dairy Classic. All rights reserved.</p>
    </div>
  </div>
</footer>

<!-- Interactive Scripts -->
<script src="assets/js/shared.js"></script>
<script src="assets/js/viewer360.js"></script>
<script src="assets/js/coverflow-studio.js"></script>
<script src="assets/js/artisanal-scoop-cursor.js"></script>
<?php if ($current_design == 2): ?>
  <script src="assets/js/design2.js"></script>
<?php else: ?>
  <script src="assets/js/design1.js"></script>
<?php endif; ?>
</body>
</html>
