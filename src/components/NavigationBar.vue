<template>
  <nav class="navbar navbar-expand-lg navbar-custom sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div class="logo-container">
          <!-- Logo Image -->
          <img 
            :src="logo" 
            alt="CCIT Logo" 
            class="logo-image"
          />
          <!-- Logo Text -->
          <div class="logo-text-container">
            <h2 class="logo-text">CCIT</h2>
            <small class="logo-subtext">Cambridge College of Information Technology</small>
          </div>
        </div>
      </router-link>
      
      <!-- Custom Toggle Button with Menu Icon -->
      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
        <span class="toggler-icon"></span>
      </button>
      
      <!-- Collapsible Menu -->
      <div 
        class="collapse navbar-collapse" 
        :class="{ 'show': menuOpen }" 
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/" 
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/about" 
              @click="closeMenu"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/courses" 
              @click="closeMenu"
            >
              Courses
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/facilities" 
              @click="closeMenu"
            >
              Facilities
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/careers" 
              @click="closeMenu"
            >
              Careers
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/news_event" 
              @click="closeMenu"
            >
              News & Events
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              class="nav-link" 
              to="/contact" 
              @click="closeMenu"
            >
              Contact
            </router-link>
          </li>
          
          <!-- Optional: Add a CTA Button -->
          <!-- <li class="nav-item d-lg-none mt-3">
            <button class="btn btn-primary enroll-btn" @click="navigateToEnroll">
              Enroll Now
            </button>
          </li> -->
        </ul>
      </div>
      
      <!-- Desktop CTA Button -->
      <!-- <div class="d-none d-lg-block">
        <button class="btn btn-primary enroll-btn" @click="navigateToEnroll">
          Enroll Now
        </button>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      logo: require('@/assets/images/CCIT - logo.png'), // Update this path to your actual logo file
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
    navigateToEnroll() {
      this.$router.push('/enroll');
      this.closeMenu();
    }
  },
  mounted() {
    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
      if (this.menuOpen && !event.target.closest('.navbar')) {
        this.closeMenu();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.menuOpen) {
        this.closeMenu();
      }
    });
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: var(--header-bg);
  box-shadow: var(--shadow);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo Styles */
.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
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
  color: #ffa500;
  font-weight: 700;
  margin: 0;
  font-size: 1.8rem;
  line-height: 1;
}

.logo-subtext {
  color: var(--text-secondary);
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 2px;
  letter-spacing: 0.5px;
}

/* Custom Toggle Button */
.custom-toggler {
  display: none; /* Hidden by default */
  background: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 44px;
  height: 44px;
  transition: all 0.3s ease;
}

.custom-toggler:hover {
  background-color: rgba(0, 188, 212, 0.1);
}

.custom-toggler:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.3);
}

.toggler-icon {
  display: block;
  width: 24px;
  height: 3px;
  background-color: var(--primary-color);
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

/* Navigation Menu */
.navbar-collapse {
  transition: all 0.3s ease;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-primary) !important;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 16px !important;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: calc(100% - 32px);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent-color) !important;
}

/* Enroll Button */
.enroll-btn {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.enroll-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 188, 212, 0.3);
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
}

/* Responsive Design */
@media (max-width: 991px) {
  .custom-toggler {
    display: flex; /* Show on mobile/tablet */
  }
  
  .logo-container {
    gap: 12px;
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
  
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--header-bg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
  }
  
  .navbar-nav {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
  
  .nav-item {
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }
  
  .nav-link {
    padding: 12px 20px !important;
    display: block;
    font-size: 1.1rem;
  }
  
  .nav-link::after {
    display: none;
  }
  
  .enroll-btn {
    width: 100%;
    padding: 12px;
  }
}

@media (max-width: 576px) {
  .logo-text {
    font-size: 1.3rem;
  }
  
  .logo-subtext {
    font-size: 0.65rem;
  }
  
  .logo-image {
    height: 45px;
  }
  
  .container {
    padding: 0 15px;
  }
}

/* Animation for mobile menu */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar-collapse.show {
  animation: slideDown 0.3s ease forwards;
}

/* Active state for better UX */
.nav-link.router-link-active {
  font-weight: 600;
  background-color: rgba(0, 188, 212, 0.1);
  border-radius: 8px;
}

/* Scroll effect */
.navbar-custom.scrolled {
  padding: 0.5rem 0;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--header-bg-rgb), 0.95);
}

/* Accessibility improvements */
.nav-link:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.custom-toggler:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Smooth transitions */
.navbar-custom,
.nav-link,
.custom-toggler,
.enroll-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Print styles */
@media print {
  .navbar-custom {
    position: static;
    box-shadow: none;
  }
  
  .custom-toggler,
  .enroll-btn {
    display: none !important;
  }
}
</style>