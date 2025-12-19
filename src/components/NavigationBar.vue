<template>
  <nav class="navbar navbar-custom sticky-top">
    <div class="container">
      <!-- Logo on the left -->
      <router-link class="navbar-brand" to="/">
        <div class="logo-container">
          <img 
            :src="logo" 
            alt="CCIT Logo" 
            class="logo-image"
            loading="lazy"
          />
          <div class="logo-text-container">
            <h2 class="logo-text">CCIT</h2>
            <small class="logo-subtext">Cambridge College of Information Technology</small>
          </div>
        </div>
      </router-link>
      
      <!-- Hamburger menu for mobile -->
      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        aria-controls="navbarNav"
      >
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
      </button>
      
      <!-- Navigation menu on the right -->
      <div 
        class="navbar-menu" 
        :class="{ 'show': menuOpen }" 
        id="navbarNav"
      >
        <ul class="nav-list">
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/' }"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/about" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/about' }"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/courses" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/courses' }"
            >
              Courses
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/facilities" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/facilities' }"
            >
              Facilities
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/careers" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/careers' }"
            >
              Careers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/news_event" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/news_event' }"
            >
              News & Events
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/contact" 
              @click="closeMenu"
              :class="{ 'active': $route.path === '/contact' }"
            >
              Contact
            </router-link>
          </li>
          <!-- Make Payment Button -->
          <li class="nav-item">
            <button 
              class="nav-btn btn-payment"
              @click="handlePayment"
            >
              <i class="fas fa-credit-card"></i> Make Payment
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      logo: require('@/assets/images/CCIT - logo.png'),
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handlePayment() {
      // Close mobile menu first
      this.closeMenu();
      
      // Then handle payment
      this.makePayment();
    },
    makePayment() {
      // Example 1: Open payment gateway in new tab
      window.open('#Add gateway Link', '_blank');
    }
  },
  mounted() {
    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
      if (this.menuOpen && !event.target.closest('.navbar-custom')) {
        this.closeMenu();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.menuOpen) {
        this.closeMenu();
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenu);
    document.removeEventListener('keydown', this.closeMenu);
  }
}
</script>

<style scoped>
/* Base Styles */
.navbar-custom {
  background-color: var(--header-bg, #ffffff);
  box-shadow: var(--shadow, 0 2px 10px rgba(0,0,0,0.1));
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Logo Styles - Left Side */
.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-image {
  height: 100px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.logo-text-container {
  display: flex;
  flex-direction: column;
}

.logo-text {
  color: #FFD700;
  font-weight: 700;
  margin: 0;
  font-size: 1.75rem;
  line-height: 1;
  white-space: nowrap;
}

.logo-subtext {
  color: var(--text-secondary, #666);
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.25rem;
  letter-spacing: 0.5px;
  line-height: 1.2;
  white-space: nowrap;
}

/* Hamburger Menu - Hidden on Desktop */
.custom-toggler {
  display: none;
  background: transparent;
  border: 2px solid var(--primary-color, #007bff);
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 44px;
  height: 44px;
  transition: all 0.3s ease;
  z-index: 1001;
}

.custom-toggler:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.custom-toggler:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
}

.toggler-icon {
  display: block;
  width: 24px;
  height: 3px;
  background-color: var(--primary-color, #007bff);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.custom-toggler[aria-expanded="true"] .toggler-icon:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.custom-toggler[aria-expanded="true"] .toggler-icon:nth-child(2) {
  opacity: 0;
}

.custom-toggler[aria-expanded="true"] .toggler-icon:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Navigation Menu - Right Side */
.navbar-menu {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-item {
  position: relative;
}

/* Regular Navigation Links */
.nav-link {
  color: var(--text-primary, #333);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  display: block;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color, #FFD700);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-color, #FFD700);
}

/* Active state for better UX */
.nav-link.active {
  font-weight: 600;
}

/* Payment Button Styles */
.nav-btn {
  background: linear-gradient(135deg, #FFD700 0%, #FFD700 80%);
  color: black;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  margin-left: 0.5rem;
}

.nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.nav-btn:active {
  transform: translateY(0);
}

.nav-btn i {
  font-size: 0.9rem;
}

.nav-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.3);
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablet (768px - 991px) */
@media (max-width: 991px) {
  .container {
    padding: 0 1rem;
  }
  
  .logo-image {
    height: 50px;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .logo-subtext {
    font-size: 0.7rem;
  }
  
  .nav-list {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.95rem;
  }
  
  .nav-btn {
    font-size: 0.9rem;
    padding: 0.45rem 1rem;
  }
}

/* Mobile (Below 768px) */
@media (max-width: 767px) {
  .custom-toggler {
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    z-index: 999;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .navbar-menu.show {
    transform: translateX(0);
  }
  
  .nav-list {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 300px;
  }
  
  .nav-item {
    width: 100%;
    text-align: center;
  }
  
  .nav-link {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    border-radius: 6px;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background-color: rgba(255, 165, 0, 0.1);
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-btn {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0 0 0;
    font-size: 1.1rem;
  }
  
  .logo-image {
    height: 45px;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .logo-subtext {
    font-size: 0.65rem;
  }
}

/* Small Mobile (Below 576px) */
@media (max-width: 575px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .logo-container {
    gap: 0.5rem;
  }
  
  .logo-image {
    height: 40px;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .logo-subtext {
    font-size: 0.6rem;
  }
  
  .custom-toggler {
    width: 40px;
    height: 40px;
  }
  
  .toggler-icon {
    width: 20px;
    height: 2px;
  }
  
  .nav-btn {
    padding: 0.65rem 1rem;
  }
}

/* Extra Small Mobile (Below 400px) */
@media (max-width: 399px) {
  .logo-text {
    font-size: 1.1rem;
  }
  
  .logo-subtext {
    font-size: 0.55rem;
  }
  
  .logo-image {
    height: 35px;
  }
  
  .nav-link {
    font-size: 1rem;
  }
  
  .nav-btn {
    font-size: 1rem;
  }
}

/* Accessibility improvements */
.nav-link:focus {
  outline: 2px solid var(--accent-color, #FFD700);
  outline-offset: 4px;
  border-radius: 4px;
}

.custom-toggler:focus-visible {
  outline: 2px solid var(--accent-color, #FFD700);
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .navbar-custom,
  .nav-link,
  .custom-toggler,
  .logo-image,
  .navbar-menu,
  .toggler-icon,
  .nav-btn {
    transition: none;
  }
  
  .navbar-menu {
    transition: none;
  }
  
  .nav-btn:hover {
    transform: none;
  }
}

/* Print styles */
@media print {
  .navbar-custom {
    position: static;
    box-shadow: none;
    background-color: white !important;
  }
  
  .custom-toggler {
    display: none !important;
  }
  
  .navbar-menu {
    display: flex !important;
    position: static;
    transform: none !important;
    background: none !important;
  }
  
  .nav-list {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .nav-link {
    color: black !important;
  }
  
  .nav-btn {
    display: none !important;
  }
}
</style>