<template>
  <footer class="footer mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h3 class="footer-logo">CCIT</h3>
          <p class="footer-text">
            Shaping the future through 100% practical IT education. 
            We hone your child's ICT skills with content that goes beyond the subject..
          </p>
        </div>
        
        <div class="col-md-4 mb-4">
          <h4>Contact Information</h4>
          <ul class="contact-list">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              No 26/B, New Rd, Ambalangoda, Sri Lanka
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <a :href="`tel:${mobile}`">{{ mobile }}</a>
            </li>
            <li>
              <i class="fab fa-whatsapp"></i>
              <a :href="`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`" target="_blank">{{ whatsapp }}</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a :href="`mailto:${email}`">{{ email }}</a>
            </li>
          </ul>
        </div>
        
        <div class="col-md-4 mb-4">
          <h4>Quick Links</h4>
          <ul class="quick-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/courses">Courses</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom text-center mt-4 pt-3 border-top">
        <p>&copy; {{ currentYear }} Cambridge College of Information Technology. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FooterComponent',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    const address = 'No 26/B, New Rd, Ambalangoda, Sri Lanka'
    const mobile = '+94 71 886 4477'
    const whatsapp = '+94 70 520 5666'
    const email = 'email.ccit@gmail.com'
    
    return {
      currentYear,
      address,
      mobile,
      whatsapp,
      email
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(
    135deg,
    black 0%,
    black 100%
  );
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-logo {
  color: #ffa500;
  font-weight: 700;
  margin-bottom: 1rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

h4 {
  color: #ff8c00;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
}

.contact-list i {
  color: #ff8c00;
  margin-right: 10px;
  margin-top: 3px;
  min-width: 20px;
}

.contact-list a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-list a:hover {
  color: var(--accent-color);
}

.quick-links {
  list-style: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 0.8rem;
}

.quick-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.quick-links a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  border-top-color: rgba(255, 255, 255, 0.1) !important;
  color: rgba(255, 255, 255, 0.6);
}

.footer-bottom p {
  margin: 0;
}
</style>