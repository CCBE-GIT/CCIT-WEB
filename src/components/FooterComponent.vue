<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="mt-2">
        <strong class="title-footer">Shaping Your Future with <span class="highlight">CCIT</span></strong>
      </div>
      <div class="mt-2">
        <strong class="contact-info">
          <span>Hot Line: <a :href="`tel:${mobile}`">{{ mobile }}</a> | Email: <a :href="`mailto:${email}`">{{ email }}</a></span>
        </strong>
      </div>
      
      <!-- Social Media Icons -->
      <div class="social-media-section">
        <div class="social-icons">
          <a 
            v-for="(social, index) in socialLinks" 
            :key="index"
            :href="social.url" 
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
      
      <div class="logos-container">
        <div class="logos-grid">
          <div class="logo-item" v-for="(logo, index) in logos" :key="index">
            <img 
              :src="logo.src" 
              :alt="logo.alt" 
              class="responsive-logo"
              :style="{
                width: logo.width ? logo.width + 'px' : 'auto',
                height: logo.height ? logo.height + 'px' : 'auto',
                maxWidth: logo.width ? logo.width + 'px' : '100%',
                maxHeight: logo.height ? logo.height + 'px' : '100%'
              }"
            />
          </div>
        </div>
      </div>
      
      <div class="footer-legal-section">
        <div class="policy-links">
          <button class="privacy-link" @click="openPopup('privacy')">Privacy Policy</button>
          <span class="separator">|</span>
          <button class="privacy-link" @click="openPopup('terms')">Terms of Service</button>
        </div>
      </div>
      
      <div class="footer-text">
        At Cambridge College of Information Technology, we are committed to providing students with the tools they need to succeed academically and beyond.
        <br />Copyright © {{ currentYear }} Cambridge College of Information Technology. All rights reserved.
      </div>
    </div>

    <!-- Privacy Policy Popup -->
    <div v-if="showPrivacyPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <div class="popup-header">
          <h3>Privacy Policy</h3>
          <button class="popup-close" @click="closePopup">&times;</button>
        </div>
        <div class="popup-body">
          <h4>1. Information We Collect</h4>
          <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include:</p>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Payment information for course enrollment</li>
            <li>Student performance and progress data</li>
            <li>Communication preferences</li>
          </ul>
          
          <h4>2. How We Use Your Information</h4>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
          
          <h4>3. Data Security</h4>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h4>4. Your Rights</h4>
          <p>You have the right to access, correct, or delete your personal information. Contact us at <strong>{{ email }}</strong> to exercise these rights.</p>
          
          <p class="policy-date">Last Updated: {{ currentYear }}</p>
        </div>
      </div>
    </div>

    <!-- Terms of Service Popup -->
    <div v-if="showTermsPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <div class="popup-header">
          <h3>Terms of Service</h3>
          <button class="popup-close" @click="closePopup">&times;</button>
        </div>
        <div class="popup-body">
          <h4>1. Acceptance of Terms</h4>
          <p>By accessing and using CCIT services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h4>2. Course Enrollment and Payment</h4>
          <ul>
            <li>Course fees must be paid in full before access is granted</li>
            <li>Refunds are available within 7 days of enrollment, subject to our refund policy</li>
            <li>Course materials are for personal use only</li>
          </ul>
          
          <h4>3. Student Responsibilities</h4>
          <ul>
            <li>Maintain respectful behavior in all interactions</li>
            <li>Complete assignments by specified deadlines</li>
            <li>Adhere to academic integrity policies</li>
            <li>Keep login credentials secure</li>
          </ul>
          
          <h4>4. Intellectual Property</h4>
          <p>All course materials, including videos, text, and code examples, are the intellectual property of CCIT and may not be redistributed without permission.</p>
          
          <h4>5. Limitation of Liability</h4>
          <p>CCIT shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          
          <h4>6. Modifications to Terms</h4>
          <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>
          
          <p class="policy-date">Effective Date: {{ currentYear }}</p>
        </div>
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
    const mobile = '+94 71 886 4477'
    const whatsapp = '+94 70 520 5666'
    const email = 'email.ccit@gmail.com'
    
    const showPrivacyPopup = ref(false)
    const showTermsPopup = ref(false)
    
    // Logo data with individual width and height
    const logos = ref([
      {
        src: require("@/assets/images/CCIT - logo.png"),
        alt: 'CCIT Logo',
        width: 180,
        height: 150
      },
      {
        src: require("@/assets/images/lable.jpeg"),
        alt: 'English Qu Label',
        width: 160,
        height: 90
      },
      {
        src: require("@/assets/images/IELTS_up.png"),
        alt: 'IELTS Logo', 
        width: 150,
        height: 70
      },
      {
        src: require("@/assets/images/CES.png"),
        alt: 'Cambridge English School Logo',
        width: 170,
        height: 85
      }
    ])
    
    // Social Media Links - Update these with your actual links
    const socialLinks = ref([
      {
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        url: 'https://www.facebook.com/share/1DEPXGQbA3/'
      },
      // {
      //   name: 'Instagram',
      //   icon: 'fab fa-instagram',
      //   url: 'https://instagram.com/yourpage'
      // },
      // {
      //   name: 'Twitter',
      //   icon: 'fab fa-twitter',
      //   url: 'https://twitter.com/yourpage'
      // },
      {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/company/cambridge-college-of-information-technology/'
      },
      {
        name: 'YouTube',
        icon: 'fab fa-youtube',
        url: 'https://www.youtube.com/@Cambridigit'
      },
      {
        name: 'WhatsApp',
        icon: 'fab fa-whatsapp',
        url: `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`
      }
    ])
    
    const openPopup = (type) => {
      if (type === 'privacy') {
        showPrivacyPopup.value = true
        showTermsPopup.value = false
      } else if (type === 'terms') {
        showTermsPopup.value = true
        showPrivacyPopup.value = false
      }
    }
    
    const closePopup = () => {
      showPrivacyPopup.value = false
      showTermsPopup.value = false
    }
    
    return {
      currentYear,
      mobile,
      whatsapp,
      email,
      logos,
      socialLinks,
      showPrivacyPopup,
      showTermsPopup,
      openPopup,
      closePopup
    }
  }
}
</script>

<style scoped>
/* Main Footer Styling - Black Theme */
.footer-container {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
  padding: 40px 20px 30px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.title-footer {
  font-size: 28px;
  display: block;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}

.contact-info {
  font-size: 18px;
  color: #FFD700;
  font-weight: 500;
  margin: 15px 0;
  display: block;
}

.contact-info a {
  color: #FFD700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.highlight {
  background: linear-gradient(135deg, #FFD700 0%, #FFD700 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

/* Social Media Section */
.social-media-section {
  margin: 20px 0 30px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icon:hover {
  background: #FFD700;
  color: #000000;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  border-color: #FFD700;
}

/* Logos Container - White Box */
.logos-container {
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  max-width: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  align-items: center;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
}

.logo-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive logo with custom width/height support */
.responsive-logo {
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-item:hover .responsive-logo {
  transform: scale(1.08);
}

/* Footer Legal Section */
.footer-legal-section {
  margin: 30px 0;
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Policy Links */
.policy-links {
  margin: 25px 0;
}

.privacy-link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.privacy-link:hover {
  color: #FFD700;
}

.privacy-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #FFD700;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.privacy-link:hover::after {
  width: 80%;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  margin: 0 15px;
  font-weight: 300;
}

/* Footer Text */
.footer-text {
  font-size: 15px;
  line-height: 1.6;
  margin-top: 25px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

/* Popup Styles */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: #ffffff;
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  color: #212121;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

/* Popup Header */
.popup-header {
  background: black;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
}

.popup-header h3 {
  color: #FFD700;
  margin: 0;
  font-size: 24px;
}

/* Popup Close Button */
.popup-close {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.popup-close:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #FFD700;
}

/* Popup Body */
.popup-body {
  padding: 25px;
  text-align: left;
}

.popup-body h4 {
  color: #FFD700;
  margin: 20px 0 12px;
  font-size: 18px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
}

.popup-body p {
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
}

.popup-body ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.popup-body li {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #333;
}

.policy-date {
  color: #777;
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 2rem;
  text-align: left;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .social-icons {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .title-footer {
    font-size: 24px;
  }
  
  .contact-info {
    font-size: 16px;
  }
  
  .logos-container {
    padding: 25px;
  }
  
  .logo-item {
    min-height: 100px;
    padding: 12px;
  }
  
  .social-icons {
    gap: 12px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .footer-container {
    padding: 25px 15px;
  }
  
  .title-footer {
    font-size: 20px;
  }
  
  .contact-info {
    font-size: 15px;
  }
  
  .logos-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .logo-item {
    min-height: 90px;
  }
  
  .social-icons {
    gap: 10px;
  }
  
  .social-icon {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
  
  .policy-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .separator {
    display: none;
  }
  
  .privacy-link {
    padding: 10px 0;
  }
}
</style>