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
        <!-- <div class="cert-badges">
          <div class="cert-badge">
            <div class="cert-badge-header">We prepare for</div>
            <div class="cert-badge-title">Cambridge English Qualifications</div>
          </div>
          <div class="cert-badge">
            <div class="cert-badge-title">Cambridge English School</div>
            <div class="cert-badge-subtitle">using Cambridge English teams & materials</div>
          </div>
        </div> -->
        
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

    <!-- Popups remain the same -->
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
        width: 180,  // Custom width for CCIT logo
        height: 150   // Custom height for CCIT logo
      },
      {
        src: require("@/assets/images/lable.jpeg"),
        alt: 'English Qu Label',
        width: 160,  // Custom width for English Qu label
        height: 90   // Custom height for English Qu label
      },
      {
        src: require("@/assets/images/IELTS_up.png"),
        alt: 'Sample Partner Logo 3', 
        width: 150,  // Custom width for logo 3
        height: 70   // Custom height for logo 3
      },
      {
        src: require("@/assets/images/CES.png"),
        alt: 'Sample Partner Logo 4',
        width: 170,  // Custom width for logo 4
        height: 85   // Custom height for logo 4
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
  /* text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); */
}

.contact-info {
  font-size: 18px;
  color: #FFD700;
  font-weight: 500;
  margin: 15px 0;
  display: block;
}

.highlight {
  background: linear-gradient(135deg,  #FFD700 0%, #FFD700 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
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

/* Certification Badges */
.cert-badges {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.cert-badge {
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid #FFD700;
  padding: 20px 25px;
  border-radius: 0 8px 8px 0;
  text-align: left;
  min-width: 280px;
  transition: all 0.3s ease;
}

.cert-badge:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.cert-badge-header {
  color: #FFD700;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cert-badge-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
}

.cert-badge-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 5px;
  line-height: 1.4;
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

/* Popup Styles - Dark Theme */
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

/* HEADER */
.popup-header {
  background: black; 
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: left;
  position: sticky;
  top: 0;
  z-index: 1;
}

.popup-header h3 {
  color: #FFD700;
  margin: 0;
  font-size: 24px;
}

/* CLOSE BUTTON */
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
  align-items: left;
  justify-content: left;
  transition: 0.3s;
}

.popup-close:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #FFD700;
}

/* BODY */
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
  
  .cert-badges {
    gap: 20px;
  }
  
  .cert-badge {
    min-width: 250px;
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
  
  .cert-badges {
    flex-direction: column;
    align-items: center;
  }
  
  .cert-badge {
    width: 100%;
    max-width: 350px;
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
  
  .cert-badge-title {
    font-size: 16px;
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