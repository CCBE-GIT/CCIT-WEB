<template>
  <div class="home-page">

    <!-- ══ HERO SECTION ══ -->
    <section class="hero-section">
      <!-- Video Background -->
      <div class="video-bg">
        <video ref="videoBg" autoplay muted loop playsinline webkit-playsinline>
          <source src="https://ik.imagekit.io/kp5tixhur/ccit-video/mixkit-little-girl-doing-homework-on-a-laptop-4757-hd-ready.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>

      <!-- Decorative orbs -->
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>

      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-star"></i>
            <span>Sri Lanka's #1 Practical IT School</span>
          </div>
          <h1 class="hero-title">
            Shaping Your Future<br>
            with <span class="hero-highlight">CCIT</span>
          </h1>
          <p class="hero-subtitle">
            The national IT school that hones your child's ICT skills with
            <strong class="hero-strong">100% PRACTICAL</strong> content
            that goes beyond the subject.
          </p>
          <div class="hero-buttons">
            <router-link to="/courses" class="btn-hero-primary">
              <i class="fas fa-rocket"></i> Explore Courses
            </router-link>
            <router-link to="/contact" class="btn-hero-outline">
              Contact Us <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>

          <!-- Quick stats row -->
          <div class="hero-stats">
            <div class="hero-stat" v-for="s in heroStats" :key="s.label">
              <span class="hero-stat-number">{{ s.value }}</span>
              <span class="hero-stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-float-card">
            <div class="float-icon-ring">
              <i class="fas fa-laptop-code float-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </section>

    <!-- ══ FEATURES SECTION ══ -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <p class="section-overline">Why CCIT?</p>
          <h2 class="section-title">Built for <span class="text-grad">Excellence</span></h2>
          <p class="section-subtitle">We go beyond textbooks — every lesson is a real-world experience.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" v-for="(feature, i) in features" :key="i">
            <div class="feature-icon-wrap">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
            <div class="feature-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ STATS BANNER ══ -->
    <StatsbannerPage></StatsbannerPage>

    <!-- ══ COURSES SECTION ══ -->
    <section class="courses-section">
      <div class="container">
        <div class="section-header">
          <p class="section-overline">Our Programs</p>
          <h2 class="section-title">Popular <span class="text-grad">Courses</span></h2>
          <p class="section-subtitle">Tailored learning paths for every age group and skill level.</p>
        </div>

        <div class="courses-grid">
          <div class="course-card" v-for="(course, i) in courses" :key="i">
            <div class="course-image-wrap">
              <img :src="course.image" :alt="course.title" class="course-img" loading="lazy" />
              <div class="course-badge-overlay">{{ course.level }}</div>
              <div class="course-img-shimmer"></div>
            </div>
            <div class="course-body">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-desc">{{ course.description }}</p>
              <ul class="course-features">
                <li v-for="(f, idx) in course.features" :key="idx">
                  <i class="fas fa-check"></i> {{ f }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="courses-cta">
          <router-link to="/courses" class="btn-see-all">
            View All Courses <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ══ TESTIMONIALS ══ -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <p class="section-overline">Real Stories</p>
          <h2 class="section-title">What <span class="text-grad">Parents</span> Say</h2>
          <p class="section-subtitle">Hear directly from the families who trust CCIT.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(p, i) in parentTestimonials" :key="i">
            <div class="quote-mark"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-text">"{{ p.quote }}"</p>
            <div class="testimonial-footer">
              <div class="testimonial-avatar">
                <i :class="p.avatar"></i>
              </div>
              <div class="testimonial-info">
                <span class="testimonial-name">{{ p.name }}</span>
                <span class="testimonial-sub">Parent of {{ p.childName }}</span>
                <span class="testimonial-course">{{ p.childCourse }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CONTACT CTA ══ -->
    <section class="cta-section">
      <div class="cta-glow-1"></div>
      <div class="cta-glow-2"></div>
      <div class="container cta-container">
        <div class="cta-content">
          <p class="section-overline" style="color: rgba(255,255,255,0.7);">Get Started Today</p>
          <h2 class="cta-title">Ready to Start Your <span class="cta-highlight">IT Journey?</span></h2>
          <p class="cta-subtitle">Contact us today to learn more about our programs and enrollment.</p>
          <div class="cta-buttons">
            <a :href="`tel:${mobile}`" class="cta-btn cta-btn-primary">
              <i class="fas fa-phone"></i> Call Now
            </a>
            <a :href="`https://wa.me/${whatsapp.replace('+', '')}`" target="_blank" class="cta-btn cta-btn-whatsapp">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a :href="`mailto:${email}`" class="cta-btn cta-btn-outline">
              <i class="fas fa-envelope"></i> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import StatsbannerPage from "./Statsbanner.vue"

export default {
  name: 'HomeView',
  components: { StatsbannerPage },
  setup() {
    const mobile = '0718864477'
    const whatsapp = '+94705205666'
    const email = 'email.ccit@gmail.com'
    const videoBg = ref(null)

    const heroStats = ref([
      { value: '500+', label: 'Students Trained' },
      { value: '10+',  label: 'Expert Courses' },
      { value: '5 Yrs',label: 'of Excellence' },
    ])

    const features = ref([
      {
        icon: 'fas fa-laptop-code',
        title: '100% Practical Training',
        description: 'Hands-on experience with real-world projects and industry-standard tools.'
      },
      {
        icon: 'fas fa-chalkboard-teacher',
        title: 'Expert Instructors',
        description: 'Learn from industry professionals with years of teaching experience.'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certification Programs',
        description: 'Internationally recognized certifications upon course completion.'
      }
    ])

    const courses = ref([
      {
        id: 'programming',
        image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/1-1.jpg',
        title: 'PER SCHOOLERS',
        level: 'Starters',
        description: 'AGE RANGE: 5 Years',
        features: ['Basic Technology', 'Digital Typing', 'Digital Painting', 'Fun Activities', '100% Practical Oriented']
      },
      {
        id: 'web-dev',
        image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/5.jpg',
        title: 'GRADE 04 & 05',
        level: 'Experts',
        description: 'AGE RANGE: 9 / 10 Years',
        features: ['Complex Software', 'History of ICT', 'Making Presentation', 'Programming Software', 'Online Behaviour']
      },
      {
        id: 'cyber',
        image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/cursos-de-informatica1.jpg',
        title: 'GRADE 6 - GRADE 11',
        level: 'KFS_ICT',
        description: 'Cover: School Syllabus, Practical Activities and Written & Practical Tests',
        features: ['Theory', 'Practical', 'Study Guide', 'Exam Booster', 'Practical Book']
      }
    ])

    const parentTestimonials = ref([
      {
        quote: "I've seen tremendous growth in my son's confidence and technical skills. The supportive environment and dedicated instructors made all the difference.",
        name: 'Robert Chen', childName: 'Michael Chen',
        childCourse: 'Web Development Program', avatar: 'fas fa-user-circle'
      },
      {
        quote: "As a parent, I was concerned about my daughter's career choices. This institute provided her with practical skills and real-world experience. She's now thriving in her IT career.",
        name: 'Linda Johnson', childName: 'Sarah Johnson',
        childCourse: 'Full Stack Development', avatar: 'fas fa-user-circle'
      },
      {
        quote: "The communication from instructors and staff is excellent. We always knew how our child was progressing. The career guidance was exceptional.",
        name: 'David Patel', childName: 'Priya Patel',
        childCourse: 'Python Programming', avatar: 'fas fa-user-circle'
      },
      {
        quote: "Worth every penny. My son not only learned technical skills but also developed problem-solving abilities and professional etiquette.",
        name: 'Maria Rodriguez', childName: 'Alex Rodriguez',
        childCourse: 'IT Support Specialist Program', avatar: 'fas fa-user-circle'
      }
    ])

    const initVideoBg = () => {
      if (videoBg.value) {
        videoBg.value.play().catch(() => {})
      }
    }

    onMounted(() => {
      setTimeout(initVideoBg, 100)
      document.addEventListener('click', () => {
        if (videoBg.value && videoBg.value.paused) videoBg.value.play().catch(() => {})
      }, { once: true })
    })

    onBeforeUnmount(() => {})

    return { mobile, whatsapp, email, heroStats, features, courses, videoBg, parentTestimonials }
  }
}
</script>

<style scoped>
/* ══ HERO ══ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #050505;
}

.video-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.video-bg video {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
}
.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(94,0,0,0.82) 0%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.55) 100%);
}

/* Decorative orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 2;
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: rgba(255, 95, 21, 0.18);
  top: -150px; left: -150px;
}
.hero-orb-2 {
  width: 400px; height: 400px;
  background: rgba(251, 183, 0, 0.12);
  bottom: -100px; right: -100px;
}

.hero-container {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  padding: 8rem 2rem 5rem;
}

.hero-content { max-width: 680px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(251,183,0,0.15);
  border: 1px solid rgba(251,183,0,0.35);
  color: #FBB700;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.hero-badge i { font-size: 0.75rem; }

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
}

.hero-highlight {
  background: linear-gradient(135deg, #FF5F15 0%, #FBB700 50%, #FFCC00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.82);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 560px;
}
.hero-strong { color: #FFCC00; font-weight: 700; }

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn-hero-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #000; font-size: 1rem; font-weight: 700;
  border-radius: 999px; text-decoration: none;
  box-shadow: 0 8px 32px rgba(255,95,21,0.45);
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.btn-hero-primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 14px 40px rgba(255,95,21,0.6);
  text-decoration: none; color: #000;
}

.btn-hero-outline {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 0.85rem 1.75rem;
  background: rgba(255,255,255,0.08); backdrop-filter: blur(8px);
  color: #fff; font-size: 1rem; font-weight: 600;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px; text-decoration: none;
  transition: all 0.3s ease;
}
.btn-hero-outline:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
  text-decoration: none; color: #fff;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  gap: 2rem;
}
.hero-stat {
  display: flex;
  flex-direction: column;
}
.hero-stat-number {
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FF5F15, #FFCC00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.hero-stat-label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
}

/* Hero Visual / floating card */
.hero-visual { display: flex; align-items: center; justify-content: center; }

.hero-float-card {
  width: 220px; height: 220px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 32px;
  display: flex; align-items: center; justify-content: center;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 0 40px rgba(255,95,21,0.08);
}

.float-icon-ring {
  width: 130px; height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,95,21,0.2), rgba(251,183,0,0.2));
  border: 2px solid rgba(251,183,0,0.35);
  display: flex; align-items: center; justify-content: center;
}

.float-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(2deg); }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.scroll-dot {
  width: 6px; height: 40px;
  background: rgba(255,255,255,0.15);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}
.scroll-dot::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 50%;
  background: linear-gradient(to bottom, #FF5F15, #FBB700);
  border-radius: 3px;
  animation: scrollAnim 1.8s ease-in-out infinite;
}
@keyframes scrollAnim {
  0%   { top: -50%; }
  100% { top: 100%; }
}

/* ══ FEATURES ══ */
.features-section {
  padding: 6rem 0;
  background: var(--bg-secondary, #fafafa);
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.section-overline {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FF5F15;
  margin-bottom: 0.75rem;
}
.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: var(--text-primary, #0f0f0f);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.text-grad {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-subtitle {
  color: var(--text-secondary, #6b7280);
  font-size: 1.05rem;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  position: relative;
  background: var(--card-bg, #fff);
  border-radius: 20px;
  padding: 2.25rem 2rem;
  text-align: center;
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(255,95,21,0.14);
  border-color: rgba(255,95,21,0.2);
}

.feature-accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FF5F15, #FBB700, #FFCC00);
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 3px 3px 0 0;
  transition: transform 0.4s ease;
}
.feature-card:hover .feature-accent { transform: scaleX(1); }

.feature-icon-wrap {
  width: 72px; height: 72px;
  background: linear-gradient(135deg, rgba(255,95,21,0.1), rgba(251,183,0,0.1));
  border: 2px solid rgba(251,183,0,0.25);
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem;
  color: #FF5F15;
  margin: 0 auto 1.25rem;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon-wrap {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #fff;
  border-color: transparent;
  transform: rotate(5deg) scale(1.05);
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary, #0f0f0f);
  margin-bottom: 0.75rem;
}
.feature-desc {
  font-size: 0.92rem;
  color: var(--text-secondary, #6b7280);
  line-height: 1.65;
  margin: 0;
}

/* ══ COURSES ══ */
.courses-section {
  padding: 6rem 0;
  background: var(--bg-primary, #fff);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
  margin-bottom: 3rem;
}

.course-card {
  background: var(--card-bg, #fff);
  border-radius: 20px;
  border: 1px solid var(--border-color, #e5e7eb);
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 56px rgba(255,95,21,0.14);
  border-color: rgba(255,95,21,0.2);
}

.course-image-wrap {
  position: relative; overflow: hidden;
}
.course-img {
  width: 100%; height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.course-card:hover .course-img { transform: scale(1.06); }

.course-badge-overlay {
  position: absolute;
  top: 12px; right: 12px;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #000;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 999px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.course-img-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,95,21,0.25), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.course-card:hover .course-img-shimmer { opacity: 1; }

.course-body { padding: 1.5rem; }

.course-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-primary, #0f0f0f);
  margin-bottom: 0.4rem;
}
.course-desc {
  font-size: 0.88rem;
  color: var(--text-secondary, #6b7280);
  margin-bottom: 1rem;
}
.course-features {
  list-style: none;
  padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 0.4rem;
}
.course-features li {
  font-size: 0.875rem;
  color: var(--text-secondary, #6b7280);
  display: flex; align-items: center; gap: 8px;
}
.course-features i {
  color: #FF5F15;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.courses-cta { text-align: center; }
.btn-see-all {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 0.875rem 2rem;
  background: transparent;
  border: 2px solid #FF5F15;
  color: #FF5F15;
  font-weight: 700; font-size: 0.95rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn-see-all:hover {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  border-color: transparent;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,95,21,0.35);
  text-decoration: none;
}

/* ══ TESTIMONIALS ══ */
.testimonials-section {
  padding: 6rem 0;
  background: var(--bg-secondary, #fafafa);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.testimonial-card {
  position: relative;
  background: var(--card-bg, #fff);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  transition: all 0.35s ease;
  overflow: hidden;
}
.testimonial-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #FF5F15, #FBB700, #FFCC00);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}
.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(255,95,21,0.12);
  border-color: rgba(255,95,21,0.15);
}
.testimonial-card:hover::before { transform: scaleX(1); }

.quote-mark {
  font-size: 2.5rem;
  color: rgba(255,95,21,0.12);
  margin-bottom: 0.75rem;
  line-height: 1;
}
.testimonial-text {
  font-size: 0.93rem;
  color: var(--text-secondary, #6b7280);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1.5rem;
}
.testimonial-footer {
  display: flex; align-items: center; gap: 1rem;
}
.testimonial-avatar {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 1.5rem;
  flex-shrink: 0;
}
.testimonial-info { display: flex; flex-direction: column; }
.testimonial-name  { font-weight: 700; color: var(--text-primary, #0f0f0f); font-size: 0.92rem; }
.testimonial-sub   { font-size: 0.8rem; color: #FF5F15; font-weight: 600; }
.testimonial-course{ font-size: 0.75rem; color: var(--text-muted, #9ca3af); }

/* ══ CTA ══ */
.cta-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a0000 0%, #3d0000 40%, #1a0000 100%);
  padding: 6rem 0;
}
.cta-glow-1 {
  position: absolute; width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(255,95,21,0.25) 0%, transparent 70%);
  top: -150px; left: -100px;
  pointer-events: none;
}
.cta-glow-2 {
  position: absolute; width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(251,183,0,0.2) 0%, transparent 70%);
  bottom: -100px; right: -100px;
  pointer-events: none;
}
.cta-container { position: relative; z-index: 1; }
.cta-content { text-align: center; }
.cta-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.cta-highlight {
  background: linear-gradient(135deg, #FF5F15, #FFCC00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-subtitle {
  color: rgba(255,255,255,0.7);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto; margin-right: auto;
}
.cta-buttons {
  display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
}
.cta-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 0.875rem 1.75rem;
  font-size: 1rem; font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.cta-btn-primary {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #000;
  box-shadow: 0 8px 28px rgba(255,95,21,0.45);
}
.cta-btn-primary:hover {
  transform: translateY(-3px); box-shadow: 0 14px 40px rgba(255,95,21,0.6);
  text-decoration: none; color: #000;
}
.cta-btn-whatsapp {
  background: #25d366; color: #fff;
  box-shadow: 0 8px 28px rgba(37,211,102,0.4);
}
.cta-btn-whatsapp:hover {
  transform: translateY(-3px); box-shadow: 0 14px 40px rgba(37,211,102,0.55);
  text-decoration: none; color: #fff;
}
.cta-btn-outline {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: #fff;
}
.cta-btn-outline:hover {
  background: rgba(255,255,255,0.18);
  transform: translateY(-2px);
  text-decoration: none; color: #fff;
}

/* ══ Container ══ */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ══ Responsive ══ */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 7rem 1.5rem 4rem;
  }
  .hero-content { max-width: 100%; }
  .hero-subtitle { max-width: 100%; }
  .hero-buttons { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { display: none; }
}

@media (max-width: 600px) {
  .features-grid,
  .courses-grid,
  .testimonials-grid { grid-template-columns: 1fr; }

  .cta-buttons { flex-direction: column; align-items: center; }
  .cta-btn { width: 100%; max-width: 300px; justify-content: center; }

  .hero-stats { flex-wrap: wrap; gap: 1.25rem; }
}

@media (prefers-reduced-motion: reduce) {
  .feature-card, .course-card, .testimonial-card,
  .btn-hero-primary, .btn-hero-outline,
  .hero-float-card { transition: none; animation: none; }
}
</style>