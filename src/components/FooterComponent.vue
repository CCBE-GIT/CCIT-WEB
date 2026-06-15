<template>
  <footer class="footer">
    <!-- Decorative top glow line -->
    <div class="footer-glow-line"></div>

    <div class="footer-inner">

      <!-- Brand strip -->
      <div class="footer-brand-strip">
        <p class="footer-tagline">
          Shaping Your Future with <span class="footer-highlight">CCIT</span>
        </p>
        <p class="footer-contact-line">
          <a :href="`tel:${mobile.replace(/\s/g,'')}`" class="footer-link">
            <i class="fas fa-phone-alt"></i> {{ mobile }}
          </a>
          <span class="footer-sep">·</span>
          <a :href="`mailto:${email}`" class="footer-link">
            <i class="fas fa-envelope"></i> {{ email }}
          </a>
        </p>
      </div>

      <!-- Social icons -->
      <div class="social-row">
        <a
          v-for="(social, i) in socialLinks"
          :key="i"
          :href="social.url"
          :aria-label="social.name"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <i :class="social.icon"></i>
        </a>
      </div>

      <!-- Partner Logos -->
      <div class="logos-panel">
        <div class="logos-grid">
          <div class="logo-tile" v-for="(logo, i) in logos" :key="i">
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="partner-logo"
              :style="{
                maxWidth: logo.width ? logo.width + 'px' : '140px',
                maxHeight: logo.height ? logo.height + 'px' : '80px'
              }"
            />
          </div>
        </div>
      </div>

      <!-- Legal -->
      <div class="footer-legal">
        <div class="legal-links">
          <button class="legal-btn" @click="openPopup('privacy')">Privacy Policy</button>
          <span class="legal-sep">|</span>
          <button class="legal-btn" @click="openPopup('terms')">Terms of Service</button>
        </div>
        <p class="footer-copy">
          At Cambridge College of Information Technology, we are committed to providing students with the tools they need to succeed academically and beyond.<br />
          Copyright © {{ currentYear }} Cambridge College of Information Technology. All rights reserved.
        </p>
      </div>

    </div>

    <!-- ── Privacy Policy Popup ── -->
    <transition name="popup-fade">
      <div v-if="showPrivacyPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-box" @click.stop>
          <div class="popup-head">
            <h3>Privacy Policy</h3>
            <button class="popup-close" @click="closePopup">
              <i class="fas fa-times"></i>
            </button>
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
    </transition>

    <!-- ── Terms of Service Popup ── -->
    <transition name="popup-fade">
      <div v-if="showTermsPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-box" @click.stop>
          <div class="popup-head">
            <h3>Terms of Service</h3>
            <button class="popup-close" @click="closePopup">
              <i class="fas fa-times"></i>
            </button>
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
    </transition>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FooterComponent',
  setup() {
    const currentYear = ref(new Date().getFullYear())
    const mobile   = '+94 71 886 4477'
    const whatsapp = '+94 70 520 5666'
    const email    = 'email.ccit@gmail.com'

    const showPrivacyPopup = ref(false)
    const showTermsPopup   = ref(false)

    const logos = ref([
      { src: require('@/assets/images/CCIT - logo.png'), alt: 'CCIT Logo',                    width: 180, height: 150 },
      { src: require('@/assets/images/lable.jpeg'),       alt: 'English Qu Label',              width: 160, height: 90  },
      { src: require('@/assets/images/IELTS_up.png'),     alt: 'IELTS Logo',                   width: 150, height: 70  },
      { src: require('@/assets/images/CES.png'),          alt: 'Cambridge English School Logo', width: 170, height: 85  }
    ])

    const socialLinks = ref([
      { name: 'Facebook',  icon: 'fab fa-facebook-f',  url: 'https://www.facebook.com/share/1DEPXGQbA3/' },
      { name: 'LinkedIn',  icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/cambridge-college-of-information-technology/' },
      { name: 'YouTube',   icon: 'fab fa-youtube',     url: 'https://www.youtube.com/@Cambridigit' },
      { name: 'WhatsApp',  icon: 'fab fa-whatsapp',    url: `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}` }
    ])

    const openPopup = (type) => {
      showPrivacyPopup.value = type === 'privacy'
      showTermsPopup.value   = type === 'terms'
    }
    const closePopup = () => {
      showPrivacyPopup.value = false
      showTermsPopup.value   = false
    }

    return { currentYear, mobile, whatsapp, email, logos, socialLinks, showPrivacyPopup, showTermsPopup, openPopup, closePopup }
  }
}
</script>

<style scoped>
/* ── Footer Shell ── */
.footer {
  position: relative;
  background: linear-gradient(180deg, #0a0a0a 0%, #0f0000 60%, #0a0a0a 100%);
  color: #fff;
  font-family: 'Inter', 'Poppins', sans-serif;
  overflow: hidden;
}

.footer-glow-line {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #FF5F15 25%, #FBB700 50%, #FF5F15 75%, transparent 100%);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

/* ── Brand Strip ── */
.footer-brand-strip { text-align: center; }

.footer-tagline {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}

.footer-highlight {
  background: linear-gradient(135deg, #FF5F15, #FBB700, #FFCC00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-contact-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 0;
  font-size: 0.92rem;
  color: rgba(255,255,255,0.65);
}

.footer-link {
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.25s ease;
}
.footer-link:hover { color: #FBB700; }
.footer-link i { font-size: 0.85rem; color: #FF5F15; }

.footer-sep { color: rgba(255,255,255,0.2); }

/* ── Social Icons ── */
.social-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.social-icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.social-icon:hover {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  border-color: transparent;
  color: #000;
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 8px 24px rgba(255,95,21,0.45);
}

/* ── Logos Panel ── */
.logos-panel {
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: center;
}

.logo-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 1rem;
  border-radius: 12px;
  /* background: rgba(0,0,0,0.02); */
  /* border: 1px solid rgba(0,0,0,0.05); */
  transition: all 0.3s ease;
}
.logo-tile:hover {
  background: rgba(255,95,21,0.04);
  /* border-color: rgba(255,95,21,0.12); */
  transform: translateY(-3px);
  /* box-shadow: 0 6px 20px rgba(0,0,0,0.08); */
}

.partner-logo {
  object-fit: contain;
  transition: transform 0.3s ease;
}
.logo-tile:hover .partner-logo { transform: scale(1.06); }

/* ── Legal ── */
.footer-legal { text-align: center; width: 100%; }

.legal-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.legal-btn {
  background: none; border: none;
  color: rgba(255,255,255,0.6);
  font-size: 0.88rem; font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
  transition: color 0.2s ease;
  position: relative;
}
.legal-btn::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: #FBB700;
  transition: width 0.3s ease;
}
.legal-btn:hover { color: #FBB700; }
.legal-btn:hover::after { width: 100%; }

.legal-sep { color: rgba(255,255,255,0.2); font-size: 1rem; }

.footer-copy {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

/* ── Popup ── */
.popup-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.88);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.popup-box {
  background: #fff;
  border-radius: 20px;
  width: 100%; max-width: 680px;
  max-height: 85vh;
  overflow-y: auto;
  color: #212121;
  box-shadow: 0 24px 80px rgba(0,0,0,0.5);
}

.popup-head {
  background: linear-gradient(135deg, #0f0f0f, #1a0000);
  padding: 1.25rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 1;
  border-radius: 20px 20px 0 0;
}
.popup-head h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.popup-close {
  background: rgba(255,255,255,0.1);
  border: none; border-radius: 8px;
  color: #fff;
  width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 1rem;
  transition: all 0.2s ease;
}
.popup-close:hover {
  background: rgba(255,95,21,0.3);
  color: #FF5F15;
}

.popup-body {
  padding: 1.75rem 1.5rem;
  text-align: left;
}
.popup-body h4 {
  color: #FF5F15;
  font-size: 1rem;
  font-weight: 700;
  margin: 1.25rem 0 0.5rem;
  padding-bottom: 4px;
  border-bottom: 1px solid #f0f0f0;
}
.popup-body h4:first-child { margin-top: 0; }
.popup-body p  { line-height: 1.6; color: #444; font-size: 0.9rem; margin-bottom: 0.75rem; }
.popup-body ul { padding-left: 1.25rem; margin-bottom: 0.75rem; }
.popup-body li { margin-bottom: 6px; line-height: 1.5; color: #444; font-size: 0.9rem; }
.policy-date   { color: #aaa; font-style: italic; font-size: 0.82rem; margin-top: 1.5rem; }

/* ── Transitions ── */
.popup-fade-enter-active, .popup-fade-leave-active { transition: opacity 0.3s ease; }
.popup-fade-enter-from, .popup-fade-leave-to { opacity: 0; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .logos-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 576px) {
  .footer-tagline { font-size: 1.3rem; }
  .logos-grid { grid-template-columns: 1fr; }
  .logos-panel { padding: 1.5rem; }
  .social-row { gap: 8px; }
  .legal-links { flex-direction: column; gap: 0.5rem; }
  .legal-sep { display: none; }
}
</style>