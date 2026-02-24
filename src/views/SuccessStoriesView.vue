<template>
  <div class="success-stories-view">
    <!-- Hero Section -->
    <section class="success-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Student <span class="highlight">Success Stories</span></h1>
            <p class="lead">
              Discover how our students transformed their careers and achieved their goals.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-trophy"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Success Stories -->
    <section class="featured-stories py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Featured <span class="highlight">Success Stories</span></h2>
        <div class="row">
          <div 
            class="col-lg-6 mb-4" 
            v-for="(story, index) in featuredStories" 
            :key="index"
          >
            <div class="story-card card-theme overflow-hidden">
              <div class="story-header p-4">
                <div class="story-badge mb-3">
                  <span class="badge">{{ story.achievement }}</span>
                </div>
                <h3 class="story-title">{{ story.name }}</h3>
                <p class="story-position">{{ story.currentPosition }}</p>
                <p class="story-company">
                  <i class="fas fa-building me-2"></i>{{ story.company }}
                </p>
              </div>
              <div class="story-body p-4">
                <div class="story-journey mb-4">
                  <h4>The Journey</h4>
                  <p>{{ story.journey }}</p>
                </div>
                <div class="story-details row">
                  <div class="col-md-6 mb-3">
                    <div class="detail-item">
                      <i class="fas fa-graduation-cap text-gold me-2"></i>
                      <strong>Course:</strong> {{ story.course }}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="detail-item">
                      <i class="fas fa-calendar-alt text-gold me-2"></i>
                      <strong>Graduated:</strong> {{ story.graduationYear }}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="detail-item">
                      <i class="fas fa-map-marker-alt text-gold me-2"></i>
                      <strong>Location:</strong> {{ story.location }}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="detail-item">
                      <i class="fas fa-clock text-gold me-2"></i>
                      <strong>Time to Job:</strong> {{ story.timeToJob }}
                    </div>
                  </div>
                </div>
                <div class="story-skills mt-3">
                  <h5>Skills Acquired</h5>
                  <div class="skills-tags">
                    <span 
                      v-for="(skill, idx) in story.skills" 
                      :key="idx"
                      class="skill-tag"
                    >{{ skill }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Transformation Stories -->
    <section class="transformation-stories py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Career <span class="highlight">Transformations</span></h2>
        <div class="row">
          <div 
            class="col-md-6 col-lg-4 mb-4" 
            v-for="(transformation, index) in careerTransformations" 
            :key="index"
          >
            <div class="transformation-card card-theme p-4">
              <div class="before-after mb-4">
                <div class="before mb-3">
                  <span class="label">Before</span>
                  <p class="mb-0">{{ transformation.before }}</p>
                </div>
                <div class="after">
                  <span class="label">After</span>
                  <p class="mb-0">{{ transformation.after }}</p>
                </div>
                <div class="transformation-arrow">
                  <i class="fas fa-arrow-down"></i>
                </div>
              </div>
              <h4 class="student-name">{{ transformation.name }}</h4>
              <p class="student-course">{{ transformation.course }}</p>
              <p class="student-quote mb-0">"{{ transformation.quote }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Placement Statistics -->
    <section class="placement-stats py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Placement <span class="highlight">Statistics</span></h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="stats-grid">
              <div class="row">
                <div class="col-md-3 col-6 mb-4" v-for="(stat, index) in placementStats" :key="index">
                  <div class="stat-card card-theme p-3 text-center">
                    <div class="stat-icon mb-2">
                      <i :class="stat.icon"></i>
                    </div>
                    <h3 class="stat-number">{{ stat.value }}</h3>
                    <p class="stat-label">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alumni Companies -->
    <section class="alumni-companies py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Where Our <span class="highlight">Alumni Work</span></h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="companies-grid">
              <div class="row">
                <div 
                  class="col-md-4 col-6 mb-4" 
                  v-for="(company, index) in alumniCompanies" 
                  :key="index"
                >
                  <div class="company-card card-theme p-3 text-center">
                    <div class="company-icon mb-2">
                      <i :class="company.icon"></i>
                    </div>
                    <h4 class="company-name">{{ company.name }}</h4>
                    <p class="company-hires">{{ company.hires }} alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Salary Progression -->
    <section class="salary-progression py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Salary <span class="highlight">Progression</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="salary-card card-theme p-4">
              <div class="row">
                <div class="col-md-4 text-center mb-3 mb-md-0" v-for="(salary, index) in salaryData" :key="index">
                  <div class="salary-item">
                    <p class="salary-label">{{ salary.label }}</p>
                    <h3 class="salary-value">{{ salary.amount }}</h3>
                    <p class="salary-change" :class="{ 'positive': salary.change > 0 }">
                      <i :class="salary.change > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
                      {{ salary.change }}% increase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alumni Spotlights -->
    <section class="alumni-spotlights py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Alumni <span class="highlight">Spotlights</span></h2>
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="(spotlight, index) in alumniSpotlights" 
            :key="index"
          >
            <div class="spotlight-card card-theme p-4">
              <div class="spotlight-header d-flex align-items-center mb-3">
                <div class="spotlight-avatar me-3">
                  <i :class="spotlight.avatar"></i>
                </div>
                <div>
                  <h4 class="spotlight-name">{{ spotlight.name }}</h4>
                  <p class="spotlight-position mb-0">{{ spotlight.position }}</p>
                </div>
              </div>
              <p class="spotlight-story">{{ spotlight.story }}</p>
              <div class="spotlight-achievements mt-3">
                <h5>Key Achievements</h5>
                <ul class="achievements-list">
                  <li v-for="(achievement, idx) in spotlight.achievements" :key="idx">
                    <i class="fas fa-check-circle text-gold me-2"></i>
                    {{ achievement }}
                  </li>
                </ul>
              </div>
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
  name: 'SuccessStoriesView',
  data() {
    return {
      featuredStories: [
        {
          name: "Sarah Johnson",
          achievement: "Career Changer of the Year",
          currentPosition: "Senior Full Stack Developer",
          company: "Tech Innovations Inc.",
          journey: "Sarah left her marketing career to pursue her passion for coding. Within 8 months of completing our Web Development Bootcamp, she not only landed her first developer role but was promoted to senior position within 2 years.",
          course: "Web Development Bootcamp",
          graduationYear: "2022",
          location: "San Francisco, CA",
          timeToJob: "3 months",
          skills: ["JavaScript", "React", "Node.js", "Python", "MongoDB"]
        },
        {
          name: "Michael Chen",
          achievement: "Fastest Promotion",
          currentPosition: "Lead Software Engineer",
          company: "Google",
          journey: "Michael joined our program with basic programming knowledge. His dedication and exceptional projects caught the attention of Google recruiters. He now leads a team of 5 developers working on cloud infrastructure.",
          course: "Advanced Software Engineering",
          graduationYear: "2021",
          location: "Seattle, WA",
          timeToJob: "2 months",
          skills: ["Java", "Spring Boot", "AWS", "Kubernetes", "Microservices"]
        },
        {
          name: "Priya Patel",
          achievement: "Entrepreneur Success",
          currentPosition: "Founder & CTO",
          company: "DataViz Solutions",
          journey: "Priya used the skills from our Data Science program to launch her own startup. Her company now provides data visualization services to small businesses and has grown to a team of 12 employees.",
          course: "Data Science Program",
          graduationYear: "2020",
          location: "Austin, TX",
          timeToJob: "Started company immediately",
          skills: ["Python", "Machine Learning", "Tableau", "SQL", "Big Data"]
        },
        {
          name: "James Wilson",
          achievement: "Remote Work Success",
          currentPosition: "DevOps Architect",
          company: "Remote Tech Solutions",
          journey: "James transitioned from IT support to DevOps engineering. He now works remotely for a US-based company while living in his hometown, achieving the work-life balance he always wanted.",
          course: "Cloud & DevOps Course",
          graduationYear: "2022",
          location: "Remote (based in Denver)",
          timeToJob: "4 months",
          skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"]
        }
      ],
      careerTransformations: [
        {
          before: "Marketing Manager",
          after: "Product Manager (Tech)",
          name: "Emily Rodriguez",
          course: "Product Management Course",
          quote: "The course gave me the technical foundation I needed to transition into tech product management."
        },
        {
          before: "High School Teacher",
          after: "Learning & Development Specialist",
          name: "David Kim",
          course: "Instructional Design for Tech",
          quote: "Now I design training programs for a major tech company. Best career move I ever made."
        },
        {
          before: "Graphic Designer",
          after: "UI/UX Designer",
          name: "Lisa Thompson",
          course: "UI/UX Design Bootcamp",
          quote: "The portfolio I built during the course helped me land a job at a design agency."
        },
        {
          before: "Accountant",
          after: "Financial Analyst (Tech)",
          name: "Robert Martinez",
          course: "Financial Analytics",
          quote: "Combining my accounting background with data analytics skills opened new doors."
        },
        {
          before: "Customer Service Rep",
          after: "Technical Support Engineer",
          name: "Amanda White",
          course: "IT Support Specialist",
          quote: "From answering phones to solving complex technical issues - dream job achieved."
        },
        {
          before: "Retail Manager",
          after: "E-commerce Specialist",
          name: "Thomas Brown",
          course: "Digital Commerce",
          quote: "Now I manage online stores for multiple brands using the skills I learned."
        }
      ],
      placementStats: [
        {
          icon: "fas fa-briefcase",
          value: "95%",
          label: "Placement Rate"
        },
        {
          icon: "fas fa-clock",
          value: "3.5",
          label: "Avg Months to Job"
        },
        {
          icon: "fas fa-dollar-sign",
          value: "85K",
          label: "Avg Starting Salary"
        },
        {
          icon: "fas fa-building",
          value: "200+",
          label: "Hiring Partners"
        }
      ],
      alumniCompanies: [
        {
          icon: "fab fa-google",
          name: "Google",
          hires: 45
        },
        {
          icon: "fab fa-microsoft",
          name: "Microsoft",
          hires: 38
        },
        {
          icon: "fab fa-amazon",
          name: "Amazon",
          hires: 52
        },
        {
          icon: "fab fa-apple",
          name: "Apple",
          hires: 27
        },
        {
          icon: "fab fa-meta",
          name: "Meta",
          hires: 31
        },
        {
          icon: "fas fa-code",
          name: "Startups",
          hires: 120
        }
      ],
      salaryData: [
        {
          label: "Before Course",
          amount: "$45K",
          change: 0
        },
        {
          label: "After Course",
          amount: "$85K",
          change: 89
        },
        {
          label: "After 3 Years",
          amount: "$120K",
          change: 41
        }
      ],
      alumniSpotlights: [
        {
          name: "Dr. Patricia Okafor",
          position: "AI Research Scientist",
          avatar: "fas fa-user-graduate",
          story: "After completing our Advanced AI program, Patricia joined a research lab where she's now working on cutting-edge machine learning applications for healthcare.",
          achievements: [
            "Published 3 research papers",
            "Patent pending for ML algorithm",
            "Speaker at international conferences"
          ]
        },
        {
          name: "Kevin Zhang",
          position: "Cybersecurity Lead",
          avatar: "fas fa-user-shield",
          story: "Kevin's exceptional performance in our cybersecurity program led to a position at a Fortune 500 company. He now leads their security operations team.",
          achievements: [
            "Prevented major security breach",
            "Developed company-wide security training",
            "Certified ethical hacker"
          ]
        },
        {
          name: "Maria Santos",
          position: "Tech Startup Founder",
          avatar: "fas fa-user-tie",
          story: "Maria's final project evolved into a successful startup that now serves over 500 small businesses with affordable POS solutions.",
          achievements: [
            "Raised $2M in seed funding",
            "Team of 15 employees",
            "Featured in TechCrunch"
          ]
        },
        {
          name: "Ahmed Hassan",
          position: "Cloud Architect",
          avatar: "fas fa-user-astronaut",
          story: "Ahmed went from IT technician to cloud architect in just 2 years. He now designs cloud infrastructure for government agencies.",
          achievements: [
            "AWS Certified Solutions Architect",
            "Led major cloud migration project",
            "Mentors new students"
          ]
        },
        {
          name: "Jennifer Lee",
          position: "Mobile App Developer",
          avatar: "fas fa-user-ninja",
          story: "Jennifer's mobile app, developed during her course, was acquired by a major tech company. She now leads mobile development for their social media division.",
          achievements: [
            "App with 1M+ downloads",
            "Featured on App Store",
            "Young innovator award"
          ]
        },
        {
          name: "Carlos Mendez",
          position: "Blockchain Developer",
          avatar: "fas fa-user-cog",
          story: "Carlos was an early adopter of our blockchain program. He now develops smart contracts for a leading fintech company.",
          achievements: [
            "Developed 10+ smart contracts",
            "Blockchain certification",
            "Industry conference speaker"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.success-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
}

.hero-title {
  font-size: 2.8rem;
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

.hero-icon {
  font-size: 6rem;
  color: #ff5f15;
}

.story-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
  height: 100%;
}

.story-card:hover {
  transform: translateY(-10px);
}

.story-header {
  background: linear-gradient(135deg, black 0%, #ff5f15 100%);
  color: white;
}

.story-badge .badge {
  background: #FFD700;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
}

.story-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.story-position {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
}

.story-company {
  margin-bottom: 0;
  font-size: 1rem;
  opacity: 0.8;
}

.story-body {
  background: var(--card-bg);
}

.story-journey h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.story-journey p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.detail-item {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.detail-item i {
  width: 20px;
}

.text-gold {
  color: #ff5f15;
}

.story-skills h5 {
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(255, 95, 21, 0.1);
  color: #ff5f15;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}

.transformation-card {
  border-radius: 15px;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
}

.transformation-card:hover {
  transform: translateY(-5px);
}

.before-after {
  background: rgba(0, 0, 0, 0.03);
  padding: 1rem;
  border-radius: 10px;
  position: relative;
}

.before .label,
.after .label {
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
  display: block;
}

.before p,
.after p {
  font-weight: 600;
  color: var(--text-primary);
}

.transformation-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ff5f15;
  font-size: 1.2rem;
}

.student-name {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.student-course {
  color: #ff5f15;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.student-quote {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.6;
}

.stat-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2rem;
  color: #ff5f15;
}

.stat-number {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.company-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.company-card:hover {
  transform: translateY(-5px);
}

.company-icon {
  font-size: 2.5rem;
  color: #ff5f15;
}

.company-name {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.company-hires {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
}

.salary-card {
  border-radius: 15px;
}

.salary-item {
  padding: 1rem;
}

.salary-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.salary-value {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.salary-change {
  font-size: 0.85rem;
  color: #28a745;
}

.salary-change.positive {
  color: #28a745;
}

.salary-change i {
  font-size: 0.7rem;
}

.spotlight-card {
  border-radius: 15px;
  height: 100%;
  transition: transform 0.3s ease;
}

.spotlight-card:hover {
  transform: translateY(-5px);
}

.spotlight-avatar {
  width: 50px;
  height: 50px;
  background: #ff5f15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.spotlight-name {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.spotlight-position {
  color: #ff5f15;
  font-size: 0.9rem;
}

.spotlight-story {
  color: var(--text-secondary);
  line-height: 1.6;
}

.spotlight-achievements h5 {
  color: var(--text-primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.achievements-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.achievements-list li {
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
}

.achievements-list i {
  color: #ff5f15;
}

.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-icon {
    font-size: 4rem;
  }
  
  .story-title {
    font-size: 1.5rem;
  }
  
  .transformation-arrow {
    position: static;
    transform: none;
    text-align: center;
    margin: 0.5rem 0;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .salary-value {
    font-size: 1.5rem;
  }
}
</style>