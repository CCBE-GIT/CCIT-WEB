<template>
  <div class="about-view">
    <!-- Hero Section (unchanged) -->
    <section class="about-hero py-5">
      <!-- Simple Particles Container -->
      <div class="particles-container">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          :style="particle.style"
          class="particle"
        ></div>
      </div>
      
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">
              About
              <span class="highlight"
                >Cambridge College of Information Technology</span
              >
            </h1>
            <p class="lead">
              Shaping the future through 100% practical IT education since our
              establishment.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-placeholder text-center">
              <img :src="logo" alt="CCIT Logo" class="logo-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision - REDESIGNED -->
    <section class="mission-vision py-5 bg-white">
      <div class="container">
        <div class="row g-4">
          <!-- Mission Card - Redesigned -->
          <div class="col-lg-6 mb-4">
            <div class="modern-card mission-card h-100">
              <div class="card-bg-pattern"></div>
              <div class="card-orbiting-icons">
                <i class="fas fa-code"></i>
                <i class="fas fa-robot"></i>
                <i class="fas fa-cloud"></i>
                <i class="fas fa-database"></i>
              </div>
              <div class="card-content-wrapper">
                <div class="card-icon-badge">
                  <i class="fas fa-bullseye"></i>
                </div>
                <h2 class="card-title">
                  Our <span class="gradient-text">Mission</span>
                </h2>
                <div class="card-divider"></div>
                <div class="card-text-container">
                  <p class="card-text">
                    To provide exceptional, practical IT education that empowers
                    students with the skills, knowledge, and confidence to excel in
                    the digital world and become innovative leaders in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Vision Card - Redesigned -->
          <div class="col-lg-6 mb-4">
            <div class="modern-card vision-card h-100">
              <div class="card-bg-pattern"></div>
              <div class="card-orbiting-icons">
                <i class="fas fa-rocket"></i>
                <i class="fas fa-globe"></i>
                <i class="fas fa-microchip"></i>
                <i class="fas fa-brain"></i>
              </div>
              <div class="card-content-wrapper">
                <div class="card-icon-badge">
                  <i class="fas fa-eye"></i>
                </div>
                <h2 class="card-title">
                  Our <span class="gradient-text">Vision</span>
                </h2>
                <div class="card-divider"></div>
                <div class="card-text-container">
                  <p class="card-text">
                    To be Sri Lanka's premier institution for practical IT
                    education, recognized for producing highly skilled professionals
                    who drive technological innovation and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story - REDESIGNED & FIXED -->
    <section class="our-story py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Our <span class="gradient-text">Story</span>
        </h2>
        
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <!-- Story Cards Container - ALL CONTENT NOW VISIBLE -->
            <div class="story-cards-container">
              <!-- Card 1 - Foundation -->
              <div class="story-card-modern">
                <div class="story-year-badge">2015</div>
                <div class="story-content">
                  <h3>The Beginning</h3>
                  <p>
                    Cambridge College of Information Technology (CCIT) was founded
                    with a simple yet powerful vision: to bridge the gap between
                    theoretical knowledge and practical application in IT education.
                  </p>
                </div>
                <div class="story-icon">
                  <i class="fas fa-seedling"></i>
                </div>
              </div>

              <!-- Card 2 - Location & Need -->
              <div class="story-card-modern">
                <div class="story-year-badge">2016</div>
                <div class="story-content">
                  <h3>Finding Our Home</h3>
                  <p>
                    Located in Ambalangoda, we recognized the growing need for
                    practical IT skills in the local community and beyond. Our
                    founders, experienced IT professionals and educators, designed a
                    curriculum that focuses entirely on hands-on learning.
                  </p>
                </div>
                <div class="story-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
              </div>

              <!-- Card 3 - Philosophy -->
              <div class="story-card-modern">
                <div class="story-year-badge">2018</div>
                <div class="story-content">
                  <h3>Our Philosophy</h3>
                  <p>
                    What sets CCIT apart is our commitment to
                    <strong>100% practical content</strong>. We believe that true
                    learning happens when students can apply their knowledge to
                    real-world scenarios. Our courses are carefully crafted to
                    ensure that every concept is reinforced through practical
                    exercises, projects, and simulations.
                  </p>
                </div>
                <div class="story-icon">
                  <i class="fas fa-lightbulb"></i>
                </div>
              </div>

              <!-- Card 4 - Present & Future -->
              <div class="story-card-modern">
                <div class="story-year-badge">Today</div>
                <div class="story-content">
                  <h3>Evolving Forward</h3>
                  <p>
                    Today, CCIT continues to evolve, staying at the forefront of
                    technological advancements while maintaining our core
                    philosophy: practical education for real-world success.
                  </p>
                </div>
                <div class="story-icon">
                  <i class="fas fa-rocket"></i>
                </div>
              </div>
            </div>

            <!-- Timeline Progress -->
            <div class="story-timeline-progress">
              <div class="progress-line"></div>
              <div class="progress-dots">
                <span class="dot active"></span>
                <span class="dot active"></span>
                <span class="dot active"></span>
                <span class="dot active"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values (unchanged) -->
    <section class="values py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Our <span class="highlight">Core Values</span>
        </h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="(value, index) in values"
            :key="index"
          >
            <div class="value-card card-theme text-center p-4 h-100 text-black">
              <div class="value-card-image" v-if="value.image">
                <img 
                  :src="value.image" 
                  :alt="value.title" 
                  class="img-fluid w-100"
                  style="height: 160px; object-fit: cover;"
                />
              </div>
              <div class="value-icon mb-3">
                <i :class="value.icon"></i>
              </div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section (unchanged) -->
    <section class="team py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Meet <span class="highlight">Our Leadership</span>
        </h2>
        <div class="row justify-content-center">
          <div
            class="col-md-4 mb-4"
            v-for="(member, index) in team"
            :key="index"
          >
            <div class="team-card card-theme text-center p-4">
              <div class="team-avatar mb-3">
                <i :class="member.avatar"></i>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="text-accent">{{ member.position }}</p>
              <p class="small">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "AboutView",
  data() {
    return {
      logo: require("@/assets/images/CCIT - logo.png"),
      particles: [],
      particleCount: 30,
      values: [
        {
          //icon: "fas fa-hands-helping",
          title: "100% Practical Enviornment",
          description: "We strive for the highest standards in education and student outcomes.",
          image: "url"
        },
        {
          //icon: "fas fa-lightbulb",
          title: "Standard Safe Enviornment",
          description: "text",
          image: "url"
        },
        {
          //icon: "fas fa-users",
          title: "Individual Attention Qualified Panel",
          description: "text",
          image: "url"
        },
        {
          //icon: "fas fa-handshake",
          title: "Continues Evaluation Plan",
          description: "text",
          image: "url"
        },
        // {
        //   icon: "fas fa-graduation-cap",
        //   title: "Practicality",
        //   description: "Focusing on real-world applications and hands-on learning.",
        //   image: "url"
        // },
        // {
        //   icon: "fas fa-heart",
        //   title: "Passion",
        //   description: "Inspiring students through dedicated teaching and mentorship.",
        //   image: "url"
        // },
      ],
      team: [
        {
          name: "Dr. Anil Perera",
          position: "Principal & Founder",
          bio: "PhD in Computer Science with 15+ years of teaching experience",
          avatar: "fas fa-user-tie",
        },
        {
          name: "Ms. Nimali Silva",
          position: "Head of Academics",
          bio: "MSc in Information Technology, specializing in curriculum development",
          avatar: "fas fa-chalkboard-teacher",
        },
        {
          name: "Mr. Rajith Fernando",
          position: "Technical Director",
          bio: "Industry expert with 20+ years in software development",
          avatar: "fas fa-laptop-code",
        },
      ],
    };
  },
  mounted() {
    this.initParticles();
    this.animateParticles();
  },
  beforeUnmount() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  },
  methods: {
    initParticles() {
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      this.updateParticleStyles();
    },
    
    updateParticleStyles() {
      this.particles.forEach(particle => {
        particle.style = {
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          opacity: particle.opacity,
          backgroundColor: '#ff8c00',
          borderRadius: '50%',
          position: 'absolute',
        };
      });
    },
    
    animateParticles() {
      this.particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x <= 0 || particle.x >= 100) particle.speedX *= -1;
        if (particle.y <= 0 || particle.y >= 100) particle.speedY *= -1;
        
        particle.x = Math.max(0, Math.min(100, particle.x));
        particle.y = Math.max(0, Math.min(100, particle.y));
      });
      
      this.updateParticleStyles();
      this.animationFrame = requestAnimationFrame(this.animateParticles);
    }
  },
};
</script>

<style scoped>
/* Original styles remain exactly the same */
.about-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  pointer-events: none;
  will-change: transform, opacity;
  background: radial-gradient(circle at center, 
    rgba(255, 140, 0, 0.8) 0%, 
    rgba(255, 107, 53, 0.6) 50%, 
    rgba(255, 165, 0, 0.4) 100%);
  box-shadow: 
    0 0 10px rgba(255, 140, 0, 0.6),
    0 0 20px rgba(255, 107, 53, 0.4);
  animation: particle-glow 3s ease-in-out infinite alternate;
}

@keyframes particle-glow {
  0% {
    box-shadow: 
      0 0 5px rgba(255, 140, 0, 0.4),
      0 0 10px rgba(255, 107, 53, 0.2);
    opacity: 1;
  }
  100% {
    box-shadow: 
      0 0 15px rgba(255, 140, 0, 0.8),
      0 0 25px rgba(255, 165, 0, 0.5);
    opacity: 1;
  }
}

.particle:nth-child(3n) {
  background: radial-gradient(circle at center, 
    rgba(255, 165, 0, 0.8) 0%, 
    rgba(255, 140, 0, 0.6) 50%, 
    rgba(255, 107, 53, 0.4) 100%);
  box-shadow: 
    0 0 10px rgba(255, 165, 0, 0.6),
    0 0 20px rgba(255, 140, 0, 0.4);
}

.particle:nth-child(3n+1) {
  background: radial-gradient(circle at center, 
    rgba(255, 107, 53, 0.8) 0%, 
    rgba(255, 165, 0, 0.6) 50%, 
    rgba(255, 140, 0, 0.4) 100%);
  box-shadow: 
    0 0 10px rgba(255, 107, 53, 0.6),
    0 0 20px rgba(255, 165, 0, 0.4);
}

.hero-title, .lead, .container {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.logo-image {
  height: 350px;
  width: 300px;
  object-fit: contain;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.hero-image-placeholder {
  font-size: 8rem;
  color: var(--accent-color);
}

.icon-wrapper {
  font-size: 2.5rem;
  color: #FFD700;
  display: inline-block;
}

.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.value-card {
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}

.value-card-image {
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.value-icon {
  font-size: 2.5rem;
  color: #FFD700;
}

.team-avatar {
  font-size: 3rem;
  color: #FFD700;
}

.text-accent {
  color: #ff5f15;
  font-weight: 600;
}

.team-card {
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

/* ===== NEW STYLES FOR REDESIGNED SECTIONS ===== */

/* Gradient Text - used in redesigned sections */
.gradient-text {
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Modern Cards for Mission & Vision */
.modern-card {
  position: relative;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 95, 21, 0.1);
  min-height: 450px;
}

.modern-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 30px 60px rgba(255, 95, 21, 0.15);
  border-color: rgba(255, 95, 21, 0.3);
}

.card-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(255, 95, 21, 0.03) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 30%),
    repeating-linear-gradient(45deg, rgba(255, 95, 21, 0.02) 0px, rgba(255, 95, 21, 0.02) 1px, transparent 1px, transparent 10px);
  pointer-events: none;
}

.card-orbiting-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.card-orbiting-icons i {
  position: absolute;
  color: rgba(255, 95, 21, 0.1);
  font-size: 2rem;
  animation: orbit 20s linear infinite;
}

.card-orbiting-icons i:nth-child(1) {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-orbiting-icons i:nth-child(2) {
  top: 20%;
  right: 15%;
  animation-delay: -5s;
}

.card-orbiting-icons i:nth-child(3) {
  bottom: 15%;
  left: 20%;
  animation-delay: -10s;
}

.card-orbiting-icons i:nth-child(4) {
  bottom: 25%;
  right: 10%;
  animation-delay: -15s;
}

@keyframes orbit {
  from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}

.card-content-wrapper {
  position: relative;
  z-index: 2;
  padding: 3rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-icon-badge {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(255, 95, 21, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ff5f15;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(255, 95, 21, 0.2);
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.card-icon-badge i {
  transform: rotate(-45deg);
}

.modern-card:hover .card-icon-badge {
  transform: rotate(90deg);
  background: linear-gradient(135deg, #ff5f15 0%, #FFD700 100%);
  color: white;
}

.card-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.card-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff5f15, #FFD700);
  border-radius: 2px;
  margin: 1rem 0 1.5rem;
  transition: width 0.3s ease;
}

.modern-card:hover .card-divider {
  width: 120px;
}

.card-text-container {
  flex-grow: 1;
  margin-bottom: 2rem;
}

.card-text {
  color: #666;
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.stat-mini {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ff5f15;
  line-height: 1.2;
}

.stat-label-mini {
  font-size: 0.8rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.vision-timeline {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 0;
  margin-top: auto;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #ff5f15;
  border-radius: 50%;
  position: relative;
  animation: pulse-dot 2s infinite;
}

.timeline-dot:nth-child(2) { animation-delay: 0.5s; }
.timeline-dot:nth-child(3) { animation-delay: 1s; }
.timeline-dot:nth-child(4) { animation-delay: 1.5s; }

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; background: #FFD700; }
}

/* Story Cards - REDESIGNED & FIXED */
.story-cards-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.story-card-modern {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 95, 21, 0.1);
  min-height: auto;
  width: 100%;
}

.story-card-modern:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 40px rgba(255, 95, 21, 0.1);
  border-color: #ff5f15;
}

.story-year-badge {
  min-width: 80px;
  height: 40px;
  background: linear-gradient(135deg, #ff5f15, #FFD700);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(255, 95, 21, 0.3);
  flex-shrink: 0;
}

.story-content {
  flex: 1;
}

.story-content h3 {
  color: #333;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.story-content p {
  color: #555;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

.story-content strong {
  color: #ff5f15;
  font-weight: 700;
}

.story-icon {
  width: 45px;
  height: 45px;
  background: rgba(255, 95, 21, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff5f15;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.story-card-modern:hover .story-icon {
  background: #ff5f15;
  color: white;
  transform: rotate(360deg);
}

/* Story Timeline Progress */
.story-timeline-progress {
  position: relative;
  padding: 1.5rem 0;
  margin-top: 1rem;
}

.progress-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff5f15, #FFD700);
  transform: translateY(-50%);
  border-radius: 2px;
}

.progress-dots {
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
}

.dot {
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid #ff5f15;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.dot.active {
  background: #ff5f15;
  box-shadow: 0 0 15px #ff5f15;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-content-wrapper {
    padding: 2rem 1.5rem;
  }
  
  .card-title {
    font-size: 1.8rem;
  }
  
  .story-card-modern {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
  }
  
  .story-year-badge {
    min-width: 70px;
    font-size: 0.9rem;
  }
  
  .story-content h3 {
    font-size: 1.2rem;
  }
  
  .story-content p {
    font-size: 0.95rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-image-placeholder {
    font-size: 5rem;
  }
  
  .particle {
    display: block;
  }
}

@media (max-width: 576px) {
  .story-card-modern {
    padding: 1.2rem;
  }
  
  .story-year-badge {
    min-width: 60px;
    height: 35px;
    font-size: 0.8rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: float 8s infinite ease-in-out;
  }
}
</style>