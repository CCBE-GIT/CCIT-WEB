<template>
  <!-- Navbar -->
  <nav class="navbar-custom" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">

      <!-- Logo -->
      <router-link class="navbar-brand" to="/" @click="closeMenu">
        <div class="logo-container">
          <img :src="logo" alt="CCIT Logo" class="logo-image" loading="eager" />
          <div class="logo-text-container">
            <span class="logo-text">CCIT</span>
            <span class="logo-subtext">Cambridge College of Information Technology</span>
          </div>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <div class="desktop-nav">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.to" class="nav-item">
            <router-link
              class="nav-link"
              :to="link.to"
              :class="{ 'active': $route.path === link.to }"
            >{{ link.label }}</router-link>
          </li>
        </ul>

        <button class="btn-payment" @click="handlePayment">
          <i class="fas fa-credit-card"></i>
          Make Payment
        </button>
      </div>

      <!-- Mobile Hamburger — always on top -->
      <button
        class="hamburger"
        :class="{ 'open': menuOpen }"
        @click="toggleMenu"
        :aria-expanded="menuOpen.toString()"
        aria-label="Toggle navigation"
        aria-controls="mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </nav>

  <!-- Mobile Drawer — rendered OUTSIDE the nav via Teleport to avoid z-index stacking context issues -->
  <Teleport to="body">
    <transition name="mobile-slide">
      <div
        v-if="menuOpen"
        class="mobile-overlay"
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        @click.self="closeMenu"
      >
        <!-- Drawer panel -->
        <div class="mobile-panel">

          <!-- Panel Header -->
          <div class="mobile-panel-head">
            <img :src="logo" alt="CCIT Logo" class="mobile-logo-img" />
            <button class="mobile-close-btn" @click="closeMenu" aria-label="Close menu">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Nav Links -->
          <nav class="mobile-nav-body">
            <ul class="mobile-nav-list">
              <li v-for="link in navLinks" :key="link.to">
                <router-link
                  class="mobile-nav-link"
                  :to="link.to"
                  :class="{ 'active': $route.path === link.to }"
                  @click="closeMenu"
                >
                  <span>{{ link.label }}</span>
                  <i class="fas fa-chevron-right mobile-arrow"></i>
                </router-link>
              </li>
            </ul>
          </nav>

          <!-- Payment Button -->
          <div class="mobile-panel-foot">
            <button class="btn-payment btn-payment-mobile" @click="handlePayment">
              <i class="fas fa-credit-card"></i> Make Payment
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      logo: require('@/assets/images/CCIT - logo.png'),
      menuOpen: false,
      isScrolled: false,
      navLinks: [
        { to: '/',            label: 'Home' },
        { to: '/about',       label: 'About' },
        { to: '/courses',     label: 'Courses' },
        { to: '/facilities',  label: 'Facilities' },
        { to: '/news_event',  label: 'News & Events' },
        { to: '/gallery',     label: 'Gallery' },
        { to: '/careers',     label: 'Careers' },
        { to: '/testimonials',label: 'Testimonials' },
        { to: '/blogs',       label: 'Blogs' },
        { to: '/contact',     label: 'Contact' },
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      // Lock / unlock body scroll
      document.body.style.overflow = this.menuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    },
    handlePayment() {
      this.closeMenu()
      window.open('#Add gateway Link', '_blank')
    },
    onScroll() {
      this.isScrolled = window.scrollY > 20
    },
    onKeydown(e) {
      if (e.key === 'Escape' && this.menuOpen) this.closeMenu()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    document.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    document.removeEventListener('keydown', this.onKeydown)
    // Restore scroll if component is destroyed while drawer is open
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* ═══════════════════════════════════════════
   NAVBAR  (sticky, high z-index)
═══════════════════════════════════════════ */
.navbar-custom {
  position: sticky;
  top: 0;
  z-index: 1050;          /* above everything */
  width: 100%;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

.navbar-custom.scrolled {
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.10);
  background: rgba(255, 255, 255, 0.99);
}

/* ─── Container ─── */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.55rem 2rem;
  gap: 1.5rem;
}

/* ─── Brand / Logo ─── */
.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.logo-image {
  height: 68px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.logo-image:hover { transform: scale(1.04) rotate(-1deg); }

.logo-text-container {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.7rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.logo-subtext {
  font-size: 0.62rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.3px;
  margin-top: 2px;
  white-space: nowrap;
}

/* ─── Desktop Nav ─── */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex: 1;
  justify-content: flex-end;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item { position: relative; }

.nav-link {
  display: block;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease, background 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF5F15, #FBB700);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover        { color: #FF5F15; background: rgba(255, 95, 21, 0.05); }
.nav-link.active       { color: #FF5F15; font-weight: 600; }

.nav-link:hover::after,
.nav-link.active::after { width: calc(100% - 1.4rem); }

/* ─── Payment Button ─── */
.btn-payment {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0.55rem 1.25rem;
  background: linear-gradient(135deg, #FF5F15 0%, #FBB700 100%);
  color: #000;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(255, 95, 21, 0.35);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-payment:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 24px rgba(255, 95, 21, 0.5);
}

.btn-payment:active { transform: translateY(0); }

/* ─── Hamburger ─── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  gap: 5px;
  background: transparent;
  border: 2px solid rgba(255, 95, 21, 0.3);
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  flex-shrink: 0;
  position: relative;
  z-index: 1051;  /* always on top, even above the overlay */
}

.hamburger:hover {
  border-color: #FF5F15;
  background: rgba(255, 95, 21, 0.07);
}

.hamburger span {
  display: block;
  width: 20px;
  height: 2px;
  background: #FF5F15;
  border-radius: 2px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  pointer-events: none;
}

/* Animated X */
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ═══════════════════════════════════════════
   MOBILE OVERLAY  (teleported to <body>)
   z-index below navbar (1050) won't work
   — overlay must be BELOW 1050 or the navbar
   must be on top. We keep overlay at 1040 and
   the hamburger explicitly at 1051.
═══════════════════════════════════════════ */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 1040;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
}

/* ─── Drawer Panel ─── */
.mobile-panel {
  width: min(85vw, 360px);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: -16px 0 48px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* Panel Header */
.mobile-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
}

.mobile-logo-img {
  height: 56px;
  width: auto;
  object-fit: contain;
}

.mobile-close-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 95, 21, 0.08);
  border: 1.5px solid rgba(255, 95, 21, 0.2);
  border-radius: 10px;
  color: #FF5F15;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.mobile-close-btn:hover {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  border-color: transparent;
  color: #000;
}

/* Panel Body */
.mobile-nav-body {
  flex: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: linear-gradient(135deg, rgba(255, 95, 21, 0.09), rgba(251, 183, 0, 0.07));
  color: #FF5F15;
}

.mobile-nav-link.active { font-weight: 700; }

.mobile-arrow {
  font-size: 0.65rem;
  opacity: 0.4;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.mobile-nav-link:hover .mobile-arrow {
  transform: translateX(3px);
  opacity: 0.75;
}

/* Panel Footer */
.mobile-panel-foot {
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #f0f0f0;
  background: #fff;
}

.btn-payment-mobile {
  width: 100%;
  justify-content: center;
  padding: 0.875rem;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(255, 95, 21, 0.3);
}

/* ═══════════════════════════════════════════
   TRANSITIONS  (Teleport target = body)
   Note: these are NOT scoped, they target
   the teleported elements. Vue 3 Teleport
   with scoped styles: the transition classes
   must be kept generic here so the transition
   root (mobile-overlay) gets them.
═══════════════════════════════════════════ */
.mobile-slide-enter-active {
  transition: opacity 0.3s ease;
}
.mobile-slide-leave-active {
  transition: opacity 0.25s ease;
}
.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
}

.mobile-slide-enter-active .mobile-panel {
  transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.mobile-slide-leave-active .mobile-panel {
  transition: transform 0.28s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.mobile-slide-enter-from .mobile-panel,
.mobile-slide-leave-to .mobile-panel {
  transform: translateX(100%);
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 1100px) {
  .nav-list { gap: 0; }
  .nav-link { font-size: 0.82rem; padding: 0.35rem 0.5rem; }
}

@media (max-width: 900px) {
  .desktop-nav { display: none; }
  .hamburger   { display: flex; }
}

@media (max-width: 480px) {
  .nav-container { padding: 0.5rem 1rem; }
  .logo-image    { height: 52px; }
  .logo-text     { font-size: 1.4rem; }
  .logo-subtext  { font-size: 0.55rem; }
}

/* ─── Accessibility ─── */
.nav-link:focus-visible,
.btn-payment:focus-visible,
.hamburger:focus-visible,
.mobile-close-btn:focus-visible {
  outline: 2px solid #FF5F15;
  outline-offset: 3px;
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .navbar-custom,
  .nav-link,
  .hamburger,
  .btn-payment,
  .logo-image,
  .hamburger span,
  .mobile-slide-enter-active,
  .mobile-slide-leave-active,
  .mobile-slide-enter-active .mobile-panel,
  .mobile-slide-leave-active .mobile-panel {
    transition: none;
  }
}
</style>