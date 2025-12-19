<template>
  <div class="home-page">
    <!-- Hero Section with Matrix Background -->
    <section class="hero-section">
      <!-- Matrix Canvas Background -->
      <div class="matrix-bg">
        <canvas ref="matrixCanvas"></canvas>
      </div>
      
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Shaping Your Future with <span class="highlight">CCIT</span></h1>
            <p class="hero-subtitle">
              The national IT school that hones your child's ICT skills with 
              <strong class="highlight">100% PRACTICAL</strong> content that goes beyond the subject.
            </p>
            <div class="hero-buttons">
              <router-link to="/courses" class="btn-primary-custom">
                Explore Courses
              </router-link>
              <router-link to="/contact" class="btn-outline-primary-custom">
                Contact Us
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <div class="image-placeholder">
                <i class="fas fa-laptop-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Why Choose <span class="highlight">CCIT?</span></h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(feature, index) in features" :key="index">
            <div class="feature-card card-theme">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Preview -->
    <section class="courses-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Popular <span class="highlight">Courses</span></h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(course, index) in courses" :key="index">
            <div class="course-card card-theme">
              <div class="course-badge">{{ course.level }}</div>
              <h3>{{ course.title }}</h3>
              <p>{{ course.description }}</p>
              <ul class="course-features">
                <li v-for="(feature, idx) in course.features" :key="idx">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
              <router-link :to="`/courses#${course.id}`" class="btn btn-accent">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta py-5">
      <div class="container text-center">
        <h2 class="section-title mb-4">Ready to Start Your <span class="highlight">IT Journey?</span></h2>
        <p class="mb-4 text-black">Contact us today to learn more about our programs and enrollment.</p>
        <div class="cta-buttons">
          <a :href="`tel:${mobile}`" class="btn btn-primary btn-lg">
            <i class="fas fa-phone"></i> Call Now
          </a>
          <a :href="`https://wa.me/${whatsapp.replace('+', '')}`" target="_blank" class="btn btn-success btn-lg">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a :href="`mailto:${email}`" class="btn btn-outline-primary btn-lg">
            <i class="fas fa-envelope"></i> Email Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const mobile = '0718864477'
    const whatsapp = '+94705205666'
    const email = 'email.ccit@gmail.com'
    
    const matrixCanvas = ref(null)
    const matrixInterval = ref(null)
    
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
        title: 'Programming Fundamentals',
        level: 'Beginner',
        description: 'Learn coding basics with Python, Java, and web development.',
        features: ['Python Basics', 'Web Development', 'Problem Solving', '3 Months Duration']
      },
      {
        id: 'web-dev',
        title: 'Full Stack Web Development',
        level: 'Intermediate',
        description: 'Master modern web technologies for frontend and backend development.',
        features: ['HTML/CSS/JS', 'Vue.js', 'Node.js', 'Database Design', '6 Months Duration']
      },
      {
        id: 'cyber',
        title: 'Cybersecurity Essentials',
        level: 'Advanced',
        description: 'Learn to protect systems and networks from digital threats.',
        features: ['Network Security', 'Ethical Hacking', 'Risk Management', '4 Months Duration']
      }
    ])
    
    // Matrix Rain Effect Functions
    const initMatrix = () => {
      const canvas = matrixCanvas.value
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      
      // Set canvas size to match hero section
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        canvas.width = heroSection.clientWidth
        canvas.height = heroSection.clientHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight * 0.8
      }
      
      // Matrix characters - IT themed
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>*+-/\\=^~|"
      const charArray = chars.split("")
      const fontSize = 14
      const columns = Math.floor(canvas.width / fontSize)
      
      // Array of drops - one per column
      const drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize)
      }
      
      // Drawing function
      const draw = () => {
        // Semi-transparent black rectangle for trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        // Green color for matrix effect
        ctx.fillStyle = "#0F0"
        ctx.font = `${fontSize}px monospace`
        
        // Loop over drops
        for (let i = 0; i < drops.length; i++) {
          // Random character
          const text = charArray[Math.floor(Math.random() * charArray.length)]
          
          // Draw the character
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
          
          // Move drop down
          drops[i]++
          
          // Reset drop if it goes below canvas
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
        }
      }
      
      // Start animation
      matrixInterval.value = setInterval(draw, 35)
    }
    
    const handleResize = () => {
      if (matrixInterval.value) {
        clearInterval(matrixInterval.value)
      }
      initMatrix()
    }
    
    // Lifecycle hooks
    onMounted(() => {
      // Wait for DOM to be ready
      setTimeout(() => {
        initMatrix()
        window.addEventListener('resize', handleResize)
      }, 100)
    })
    
    onBeforeUnmount(() => {
      if (matrixInterval.value) {
        clearInterval(matrixInterval.value)
      }
      window.removeEventListener('resize', handleResize)
    })
    
    return {
      mobile,
      whatsapp,
      email,
      features,
      courses,
      matrixCanvas
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    black 0%,
    black 100%
  );
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Matrix Background */
.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

.matrix-bg canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
}

.highlight {
  background: linear-gradient(135deg, #FFD700 0%, #FFD700 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
  z-index: 2;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  position: relative;
  z-index: 2;
  /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); */
}

.hero-subtitle strong {
  color: var(--accent-color);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

/* Primary button */
.btn-primary-custom {
  display: inline-block;
  padding: 10px 26px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  background-color:  #FFD700;       
  color: black;                     
  border: 1px solid  #FFD700;
  text-decoration: none;
  transition: 0.3s ease;
  text-align: center;
}

.btn-primary-custom:hover {
  background-color: black;      
  border-color: #0b5ed7;
  text-decoration: none;
  color: #fff;
}

/* Outline button */
.btn-outline-primary-custom {
  display: inline-block;
  padding: 10px 26px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  color: #FFD700;                 
  border: 1px solid #FFD700;
  text-decoration: none;
  transition: 0.3s ease;
  text-align: center;
}

.btn-outline-primary-custom:hover {
  background-color: #FFD700;      
  color: black;
  text-decoration: none;
}

.hero-image {
  text-align: center;
  position: relative;
  z-index: 2;
}

.image-placeholder {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.image-placeholder i {
  font-size: 8rem;
  color: #FFD700;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

/* Container for hero content */
.hero-section .container {
  position: relative;
  z-index: 2;
}

/* Section Titles */
.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #FFD700;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 3rem;
  color: #FFD700;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.course-card {
  padding: 2rem;
  border-radius: 15px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-10px);
}

.course-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background: #FFD700;
  color: black;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.8rem;
  z-index: 1;
}

.course-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.course-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.course-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.course-features li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.course-features i {
  color: #FFD700;
  margin-right: 10px;
}

.btn-accent {
  background: #FFD700;
  color: black;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  margin-top: auto;
}

.btn-accent:hover {
  background: black;
  color: white;
  transform: translateY(-2px);
}

.contact-cta {
  background: linear-gradient(135deg, white 0%, white 100%);
  color: white;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-success {
  background-color: #25d366 !important;
  border-color: #25d366 !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .image-placeholder {
    padding: 40px;
    margin-top: 2rem;
  }
  
  .image-placeholder i {
    font-size: 5rem;
  }
  
  /* Adjust matrix effect for mobile */
  .matrix-bg {
    opacity: 0.4;
  }
}

/* Performance optimization for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .image-placeholder {
    animation: none;
  }
  
  .feature-card,
  .course-card,
  .btn-accent:hover {
    transition: none;
  }
  
  .matrix-bg {
    display: none;
  }
}
</style>