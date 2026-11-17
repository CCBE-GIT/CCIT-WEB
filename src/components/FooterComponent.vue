<template>
  <footer class="footer">

    <!-- Animated top border -->
    <div class="footer-top-bar">
      <div class="footer-top-bar-inner"></div>
    </div>

    <!-- Main footer body -->
    <div class="footer-body">
      <div class="footer-container">

        <!-- ── Column 1: Brand ── -->
        <div class="footer-col footer-col--brand">
          <div class="brand-logo-wrap">
            <img
              :src="logos[0].src"
              :alt="logos[0].alt"
              class="brand-logo"
            />
          </div>
          <p class="brand-tagline">Shaping Your Future with <span class="brand-accent">CCIT</span></p>
          <p class="brand-desc">
            Cambridge College of Information Technology — a leading institution delivering world-class IT education and career-focused training.
          </p>

          <!-- Contact pills -->
          <div class="contact-pills">
            <a :href="`tel:${mobile.replace(/\s/g,'')}`" class="contact-pill">
              <span class="pill-icon"><i class="fas fa-phone-alt"></i></span>
              <span>{{ mobile }}</span>
            </a>
            <a :href="`mailto:${email}`" class="contact-pill">
              <span class="pill-icon"><i class="fas fa-envelope"></i></span>
              <span>{{ email }}</span>
            </a>
            <a
              :href="`https://wa.me/${whatsapp.replace(/[^0-9]/g,'')}`"
              target="_blank" rel="noopener noreferrer"
              class="contact-pill"
            >
              <span class="pill-icon"><i class="fab fa-whatsapp"></i></span>
              <span>{{ whatsapp }}</span>
            </a>
          </div>
        </div>

        <!-- ── Column 2: Quick Links ── -->
        <div class="footer-col">
          <h4 class="col-heading"><span class="col-heading-line"></span>Quick Links</h4>
          <ul class="footer-nav-list">
            <li v-for="link in quickLinks" :key="link.label">
              <router-link :to="link.to" class="footer-nav-link">
                <i class="fas fa-chevron-right nav-arrow"></i>{{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- ── Column 3: Programs ── -->
        <div class="footer-col">
          <h4 class="col-heading"><span class="col-heading-line"></span>Our Programs</h4>
          <ul class="footer-nav-list">
            <li v-for="prog in programs" :key="prog">
              <span class="footer-nav-link footer-nav-link--static">
                <i class="fas fa-chevron-right nav-arrow"></i>{{ prog }}
              </span>
            </li>
          </ul>
        </div>

        <!-- ── Column 4: Connect ── -->
        <div class="footer-col footer-col--connect">
          <h4 class="col-heading"><span class="col-heading-line"></span>Connect With Us</h4>

          <div class="social-grid">
            <a
              v-for="(social, i) in socialLinks"
              :key="i"
              :href="social.url"
              :aria-label="social.name"
              target="_blank" rel="noopener noreferrer"
              class="social-card"
            >
              <i :class="social.icon" class="social-card-icon"></i>
              <span class="social-card-label">{{ social.name }}</span>
            </a>
          </div>

          <!-- Partner logos strip -->
          <div class="partner-strip">
            <p class="col-heading">Our Partners & Affiliations</p>
            <div class="partner-logos">
              <div
                v-for="(logo, i) in logos.slice(1)"
                :key="i"
                class="partner-logo-wrap"
              >
                <img
                  :src="logo.src"
                  :alt="logo.alt"
                  class="partner-logo-img"
                  :style="{
                    maxWidth: logo.width ? logo.width * 0.55 + 'px' : '80px',
                    maxHeight: logo.height ? logo.height * 0.55 + 'px' : '44px'
                  }"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Bottom bar ── -->
    <div class="footer-bottom">
      <div class="footer-container footer-bottom-inner">
        <p class="copy-text">
          © {{ currentYear }} Cambridge College of Information Technology. All rights reserved.
        </p>
        <div class="legal-links">
          <button class="legal-btn" @click="openPopup('privacy')">Privacy Policy</button>
          <span class="legal-dot">·</span>
          <button class="legal-btn" @click="openPopup('terms')">Terms of Service</button>
        </div>
      </div>
    </div>

    <!-- ── Privacy Policy Popup ── -->
    <transition name="popup-fade">
      <div v-if="showPrivacyPopup" class="popup-overlay" @click="closePopup">
        <div class="popup-box" @click.stop>
          <div class="popup-head">
            <h3>Privacy Policy</h3>
            <button class="popup-close" @click="closePopup"><i class="fas fa-times"></i></button>
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
            <button class="popup-close" @click="closePopup"><i class="fas fa-times"></i></button>
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
      { src: require('@/assets/images/CCIT_logo_footer.png'), alt: 'CCIT Logo',                    width: 180, height: 150 },
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

    const quickLinks = ref([
      { label: 'Home',        to: '/'          },
      { label: 'About Us',    to: '/about'     },
      { label: 'Courses',     to: '/courses'   },
      { label: 'Facilities',  to: '/facilities'},
      { label: 'Gallery',     to: '/gallery'   },
      { label: 'News & Events', to: '/news_event'    },
      { label: 'Careers',     to: '/careers'   },
      { label: 'Contact',     to: '/contact'   },
    ])

    const programs = ref([
      'Web Development',
      'IT / Computer Science',
      'Networking & Security',
      'Data Science & AI',
      'English Language (IELTS)',
      'Professional IT Courses',
    ])

    const openPopup  = (type) => {
      showPrivacyPopup.value = type === 'privacy'
      showTermsPopup.value   = type === 'terms'
    }
    const closePopup = () => {
      showPrivacyPopup.value = false
      showTermsPopup.value   = false
    }

    return {
      currentYear, mobile, whatsapp, email,
      logos, socialLinks, quickLinks, programs,
      showPrivacyPopup, showTermsPopup, openPopup, closePopup
    }
  }
}
</script>

<style scoped>
/* ══════════════════════════════════════════════
   CCIT Footer  —  WHITE theme
   Brand: #FF5F15 (orange) | #FBB700 (gold)
          #FFCC00 (yellow)  | #5E0000 (crimson)
   ══════════════════════════════════════════════ */

/* ── Shell ── */
.footer {
  position: relative;
  background: #ffffff;
  color: #1a1a1a;
  font-family: 'Inter', 'Poppins', sans-serif;
  overflow: hidden;
  border-top: 1px solid #e8e8e8;
}

/* subtle warm tint in top-left corner */
.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 40% at 0% 0%,  rgba(255,95,21,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 45% 35% at 100% 100%, rgba(251,183,0,0.06) 0%, transparent 55%);
  pointer-events: none;
}

/* ── Animated top gradient bar ── */
.footer-top-bar {
  height: 4px;
  background: linear-gradient(90deg, #5E0000, #FF5F15, #FBB700, #FFCC00, #FBB700, #FF5F15, #5E0000);
  background-size: 200% 100%;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer {
  0%   { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}
.footer-top-bar-inner { display: none; }

/* ── Layout container ── */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Main body ── */
.footer-body {
  padding: 4rem 0 3rem;
}
.footer-body .footer-container {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
}

/* ── Column headings ── */
.col-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.col-heading-line {
  display: inline-block;
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #FF5F15, #FBB700);
  flex-shrink: 0;
}

/* ════════════════════════════
   Column 1 — Brand
   ════════════════════════════ */
.brand-logo-wrap {
  margin-bottom: 1.25rem;
}
.brand-logo {
  width: 120px;
  height: auto;
  object-fit: contain;
  /*filter: drop-shadow(0 2px 8px rgba(255,95,21,0.15));*/
}

.brand-tagline {
  font-family: 'Poppins', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #111111;
  margin: 0 0 0.75rem;
  line-height: 1.25;
}
.brand-accent {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-desc {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.75;
  margin: 0 0 1.75rem;
  max-width: 300px;
}

/* Contact pills */
.contact-pills {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.contact-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #374151;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}
.contact-pill:hover { color: #FF5F15; }
.pill-icon {
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  background: #fff4ee;
  border: 1px solid #ffd5be;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #FF5F15;
  flex-shrink: 0;
  transition: all 0.25s ease;
}
.contact-pill:hover .pill-icon {
  background: #FF5F15;
  border-color: #FF5F15;
  color: #fff;
}

/* ════════════════════════════
   Column 2 & 3 — Nav lists
   ════════════════════════════ */
.footer-nav-list {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.footer-nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.875rem;
  padding: 6px 0;
  border-radius: 6px;
  transition: color 0.2s ease, padding-left 0.2s ease;
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
}
.footer-nav-link:hover,
.footer-nav-link.router-link-active {
  color: #FF5F15;
  padding-left: 4px;
}
.footer-nav-link--static { cursor: default; }
.footer-nav-link--static:hover {
  color: #374151;
  padding-left: 0;
}
.nav-arrow {
  font-size: 0.6rem;
  color: #FBB700;
  opacity: 0.9;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.footer-nav-link:hover .nav-arrow { transform: translateX(2px); }

/* ════════════════════════════
   Column 4 — Connect
   ════════════════════════════ */
.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 2rem;
}
.social-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  color: #374151;
  text-decoration: none;
  font-size: 0.82rem;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.social-card:hover {
  background: linear-gradient(135deg, #fff4ee, #fffbea);
  border-color: #FF5F15;
  color: #FF5F15;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(255,95,21,0.15);
}
.social-card-icon {
  font-size: 1rem;
  color: #FF5F15;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}
.social-card:hover .social-card-icon { color: #FBB700; }
.social-card-label { font-weight: 500; }

/* Partner logos strip */
.partner-strip-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
  margin: 0 0 0.9rem;
}
.partner-logos {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 12px 16px;
}
.partner-logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 60px;
}
.partner-logo-img {
  object-fit: contain;
  transition: transform 0.3s ease;
}
.partner-logo-wrap:hover .partner-logo-img { transform: scale(1.08); }

/* ════════════════════════════
   Bottom bar
   ════════════════════════════ */
.footer-bottom {
  border-top: 1px solid #e5e7eb;
  padding: 1.25rem 0;
  background: #f9fafb;
}
.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.copy-text {
  font-size: 0.8rem;
  color: #9ca3af;
  margin: 0;
}
.legal-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.legal-btn {
  background: none; border: none;
  color: #6b7280;
  font-size: 0.8rem; font-weight: 500;
  cursor: pointer; padding: 0;
  transition: color 0.2s ease;
  font-family: inherit;
}
.legal-btn:hover { color: #FF5F15; }
.legal-dot { color: #d1d5db; font-size: 0.75rem; }

/* ════════════════════════════
   Popup  (unchanged — dark head)
   ════════════════════════════ */
.popup-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.65);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(4px);
}
.popup-box {
  background: #fff;
  border-radius: 20px;
  width: 100%; max-width: 680px;
  max-height: 85vh;
  overflow-y: auto;
  color: #212121;
  box-shadow: 0 24px 80px rgba(0,0,0,0.25);
}
.popup-head {
  background: linear-gradient(135deg, #1a0a00, #3d1500);
  padding: 1.25rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 1;
  border-radius: 20px 20px 0 0;
}
.popup-head h3 {
  margin: 0;
  font-size: 1.3rem; font-weight: 700;
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
.popup-close:hover { background: rgba(255,95,21,0.35); color: #fff; }
.popup-body { padding: 1.75rem 1.5rem; text-align: left; }
.popup-body h4 {
  color: #FF5F15; font-size: 1rem; font-weight: 700;
  margin: 1.25rem 0 0.5rem;
  padding-bottom: 4px; border-bottom: 1px solid #f0f0f0;
}
.popup-body h4:first-child { margin-top: 0; }
.popup-body p  { line-height: 1.6; color: #444; font-size: 0.9rem; margin-bottom: 0.75rem; }
.popup-body ul { padding-left: 1.25rem; margin-bottom: 0.75rem; }
.popup-body li { margin-bottom: 6px; line-height: 1.5; color: #444; font-size: 0.9rem; }
.policy-date   { color: #aaa; font-style: italic; font-size: 0.82rem; margin-top: 1.5rem; }

/* ── Transitions ── */
.popup-fade-enter-active, .popup-fade-leave-active { transition: opacity 0.3s ease; }
.popup-fade-enter-from, .popup-fade-leave-to { opacity: 0; }

/* ════════════════════════════
   Responsive
   ════════════════════════════ */
@media (max-width: 1024px) {
  .footer-body .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-col--brand { grid-column: 1 / -1; }
  .brand-desc { max-width: 100%; }
  .contact-pills { flex-direction: row; flex-wrap: wrap; gap: 12px; }
}

@media (max-width: 640px) {
  .footer-body .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-col--brand { grid-column: auto; }
  .contact-pills { flex-direction: column; }
  .social-grid { grid-template-columns: 1fr 1fr; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .partner-logos { gap: 8px; }
}

@media (max-width: 400px) {
  .social-grid { grid-template-columns: 1fr; }
}
</style>
