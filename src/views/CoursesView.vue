<template>
  <div class="courses-view">
    <!-- Hero Section -->
    <section class="courses-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Our <span class="highlight">Courses</span></h1>
            <p class="lead">
              Industry-relevant programs with <strong>100% practical</strong> training. 
              Choose from beginner to advanced levels.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Categories -->
    <section class="course-categories py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title text-center mb-4">Course <span class="highlight">Categories</span></h2>
            <div class="category-tabs d-flex justify-content-center flex-wrap gap-3">
              <button 
                v-for="category in categories" 
                :key="category.id"
                :class="['category-tab', { 'active': activeCategory === category.id }]"
                @click="activeCategory = category.id"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
        </div>

        <!-- Course Grid -->
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="course in filteredCourses" 
            :key="course.id"
          >
            <div class="course-card card-theme h-100">
              <div class="course-header">
                <span class="course-level" :class="course.level">{{ course.level }}</span>
                <span class="course-duration">
                  <i class="far fa-clock"></i> {{ course.duration }}
                </span>
              </div>
              <div class="course-body p-4">
                <h3 class="course-title mb-3">{{ course.title }}</h3>
                <p class="course-description mb-4">{{ course.description }}</p>
                
                <div class="course-highlights mb-4">
                  <h5>What You'll Learn:</h5>
                  <ul class="course-features">
                    <li v-for="(feature, index) in course.features" :key="index">
                      <i class="fas fa-check-circle"></i> {{ feature }}
                    </li>
                  </ul>
                </div>
                
                <div class="course-details mb-4">
                  <div class="row">
                    <div class="col-6">
                      <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>Max: {{ course.maxStudents }} students</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="detail-item">
                        <i class="fas fa-certificate"></i>
                        <span>{{ course.certification }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="course-footer">
                  <!-- <div class="course-price mb-3">
                    <span class="price">LKR {{ course.price.toLocaleString() }}</span>
                    <span class="installment" v-if="course.installment">
                      or {{ course.installment }}
                    </span>
                  </div> -->
                  <!-- <div class="d-grid gap-2">
                    <button class="btn btn-primary" @click="enrollCourse(course)">
                      <i class="fas fa-edit"></i> Enroll Now
                    </button>
                    <button class="btn btn-outline-primary" @click="viewDetails(course)">
                      <i class="fas fa-info-circle"></i> More Details
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Comparison -->
    <section class="comparison py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5 text-black">Why <span class="highlight">Our Courses</span> Stand Out?</h2>
        <div class="row">
          <div class="col-md-6 mb-4 text-black" v-for="(feature, index) in uniqueFeatures" :key="index">
            <div class="feature-comparison card-theme p-4">
              <div class="d-flex align-items-start">
                <div class="feature-icon me-3">
                  <i :class="feature.icon"></i>
                </div>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p class="mb-0">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enrollment CTA -->
    <section class="enrollment-cta py-5">
      <div class="container text-center">
        <h2 class="mb-4">Ready to <span class="highlight">Start Your IT Journey?</span></h2>
        <p class="mb-4">Limited seats available. Enroll today to secure your spot.</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="btn btn-primary btn-lg">
            <i class="fas fa-calendar-alt"></i> Schedule Consultation
          </router-link>
          <a :href="`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" class="btn btn-success btn-lg">
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'CoursesView',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All Courses' },
        { id: 'beginner', name: 'Beginner' },
        { id: 'intermediate', name: 'Intermediate' },
        { id: 'advanced', name: 'Advanced' },
        { id: 'certification', name: 'Certification' }
      ],
      courses: [
        {
          id: 1,
          category: 'beginner',
          level: 'Beginner',
          title: 'Computer Fundamentals & Office Automation',
          description: 'Master essential computer skills including Microsoft Office, internet basics, and file management.',
          duration: '2 Months',
          maxStudents: 20,
          certification: 'CCIT Certificate',
          //price: 15000,
          //installment: 'LKR 8,000 x 2 months',
          features: [
            'Windows/Mac OS Basics',
            'Microsoft Word & Excel',
            'PowerPoint Presentations',
            'Internet & Email Basics',
            'File Management',
            'Typing Skills'
          ]
        },
        {
          id: 2,
          category: 'beginner',
          level: 'Beginner',
          title: 'Programming Basics with Python',
          description: 'Introduction to programming concepts using Python. Perfect for absolute beginners.',
          duration: '3 Months',
          maxStudents: 15,
          certification: 'CCIT Python Certificate',
          //price: 25000,
          //installment: 'LKR 9,000 x 3 months',
          features: [
            'Python Syntax & Basics',
            'Variables & Data Types',
            'Conditional Statements',
            'Loops & Functions',
            'Basic Algorithms',
            'Mini Projects'
          ]
        },
        {
          id: 3,
          category: 'intermediate',
          level: 'Intermediate',
          title: 'Web Development Fundamentals',
          description: 'Learn to build responsive websites using HTML5, CSS3, and JavaScript.',
          duration: '4 Months',
          maxStudents: 15,
          certification: 'CCIT Web Developer Certificate',
          //price: 35000,
          //installment: 'LKR 12,000 x 3 months',
          features: [
            'HTML5 & Semantic Markup',
            'CSS3 & Flexbox/Grid',
            'JavaScript Fundamentals',
            'Responsive Design',
            'Git & GitHub Basics',
            'Portfolio Project'
          ]
        },
        {
          id: 4,
          category: 'intermediate',
          level: 'Intermediate',
          title: 'Full Stack Development with Vue.js & Node.js',
          description: 'Become a full-stack developer with modern JavaScript frameworks.',
          duration: '6 Months',
          maxStudents: 12,
          certification: 'CCIT Full Stack Developer Certificate',
          //price: 65000,
          //installment: 'LKR 12,000 x 6 months',
          features: [
            'Vue.js Framework',
            'Node.js & Express',
            'MongoDB Database',
            'RESTful APIs',
            'Authentication & Security',
            'Complete Project'
          ]
        },
        {
          id: 5,
          category: 'advanced',
          level: 'Advanced',
          title: 'Cybersecurity Professional',
          description: 'Comprehensive cybersecurity training covering network security, ethical hacking, and defense strategies.',
          duration: '5 Months',
          maxStudents: 10,
          certification: 'CCIT Cybersecurity Certificate',
          //price: 75000,
          //installment: 'LKR 16,000 x 5 months',
          features: [
            'Network Security',
            'Ethical Hacking',
            'Cryptography',
            'Penetration Testing',
            'Security Auditing',
            'Incident Response'
          ]
        },
        {
          id: 6,
          category: 'certification',
          level: 'Certification',
          title: 'CISCO CCNA Preparation',
          description: 'Prepare for CISCO Certified Network Associate certification with hands-on lab sessions.',
          duration: '4 Months',
          maxStudents: 10,
          certification: 'CCIT Network Certificate + CCNA Prep',
          //price: 80000,
          //installment: 'LKR 20,000 x 4 months',
          features: [
            'Network Fundamentals',
            'Routing & Switching',
            'WAN Technologies',
            'Network Security',
            'CISCO IOS',
            'Exam Preparation'
          ]
        }
      ],
      uniqueFeatures: [
        {
          icon: 'fas fa-laptop-code',
          title: '100% Practical Training',
          description: 'No boring lectures. Learn by doing real projects from day one.'
        },
        {
          icon: 'fas fa-user-tie',
          title: 'Industry Expert Instructors',
          description: 'Learn from professionals currently working in the IT industry.'
        },
        {
          icon: 'fas fa-briefcase',
          title: 'Career Support',
          description: 'Resume building, interview preparation, and job placement assistance.'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Progressive Curriculum',
          description: 'Regularly updated content to match industry trends and demands.'
        },
        {
          icon: 'fas fa-users',
          title: 'Small Class Sizes',
          description: 'Personalized attention with limited seats for better learning.'
        },
        {
          icon: 'fas fa-certificate',
          title: 'Recognized Certifications',
          description: 'Industry-recognized certificates upon successful completion.'
        }
      ],
      whatsapp: '+94 70 520 5666'
    }
  },
  computed: {
    filteredCourses() {
      if (this.activeCategory === 'all') {
        return this.courses
      }
      return this.courses.filter(course => course.category === this.activeCategory)
    }
  },
  methods: {
    enrollCourse(course) {
      // In a real application, this would navigate to enrollment form
      alert(`Enrolling in: ${course.title}\n\nPlease contact us to complete enrollment:\nWhatsApp: ${this.whatsapp}\nPhone: 071 886 4477`)
    },
    viewDetails(course) {
      // In a real application, this would show detailed modal
      const details = `
Course: ${course.title}
Duration: ${course.duration}
Level: ${course.level}
Price: LKR ${course.price.toLocaleString()}
Max Students: ${course.maxStudents}
Certification: ${course.certification}

Features:
${course.features.map(f => `• ${f}`).join('\n')}

Contact us for more details!
      `
      alert(details)
    }
  }
}
</script>

<style scoped>
.courses-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.hero-icon {
  font-size: 6rem;
  color: #ff8c00;
}

.highlight {
  background: linear-gradient(135deg, #ff6b35 0%, #ffa500 50%, #ff8c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.category-tab {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.category-tab.active,
.category-tab:hover {
  background: #ff8c00;
  color: white;
  border-color: #ff8c00;
}

.course-card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-10px);
}

.course-header {
  background: black;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-level {
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.course-level.Beginner {
  background: #4CAF50;
}

.course-level.Intermediate {
  background: #FF9800;
}

.course-level.Advanced {
  background: #F44336;
}

.course-level.Certification {
  background: #9C27B0;
}

.course-duration {
  font-size: 0.9rem;
  opacity: 0.9;
}

.course-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 700;
}

.course-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.course-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.course-features li {
  color: var(--text-secondary);
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.course-features i {
  color: #ff8c00;
  margin-right: 10px;
  margin-top: 3px;
  flex-shrink: 0;
}

.course-details {
  background: var(--bg-secondary);
  padding: 15px;
  border-radius: 10px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.detail-item i {
  color: #ff8c00;
}

.course-price {
  text-align: center;
}

.price {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

.installment {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.feature-comparison {
  display: flex;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
  color: #ff8c00;
  flex-shrink: 0;
}

.enrollment-cta {
  background: linear-gradient(135deg, white 0%, white 100%);
  color: black;
  gap: 1rem;
}

.cta-buttons {
  display: flex;
  justify-content: center; 
  gap: 1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .category-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .category-tab {
    width: 100%;
    max-width: 300px;
  }
}
</style>