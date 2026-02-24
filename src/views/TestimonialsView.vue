<template>
  <div class="testimonials-view">
    <!-- Hero Section -->
    <section class="testimonials-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Student <span class="highlight">Testimonials</span></h1>
            <p class="lead">
              Hear what our students and parents have to say about their experience with us.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Testimonials -->
    <section class="featured-testimonials py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Featured <span class="highlight">Reviews</span></h2>
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="(testimonial, index) in featuredTestimonials" 
            :key="index"
          >
            <div class="testimonial-card card-theme">
              <div class="testimonial-rating mb-3">
                <i 
                  v-for="star in 5" 
                  :key="star"
                  class="fas fa-star"
                  :class="{ 'text-gold': star <= testimonial.rating }"
                ></i>
              </div>
              <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
              <div class="testimonial-author d-flex align-items-center">
                <div class="author-avatar me-3">
                  <i :class="testimonial.avatar"></i>
                </div>
                <div>
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-role mb-0">{{ testimonial.role }}</p>
                  <p class="author-course">{{ testimonial.course }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Testimonials -->
    <section class="video-testimonials py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Video <span class="highlight">Stories</span></h2>
        <div class="row">
          <div class="col-lg-6 mb-4" v-for="(video, index) in videoTestimonials" :key="index">
            <div class="video-card card-theme">
              <div class="video-placeholder">
                <i :class="video.icon"></i>
                <div class="play-button">
                  <i class="fas fa-play-circle"></i>
                </div>
              </div>
              <div class="video-info p-3">
                <h4>{{ video.title }}</h4>
                <p class="mb-0">{{ video.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parent Testimonials -->
    <section class="parent-testimonials py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">What <span class="highlight">Parents</span> Say</h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="parent-grid">
              <div 
                class="parent-card card-theme mb-4" 
                v-for="(parent, index) in parentTestimonials" 
                :key="index"
              >
                <div class="parent-quote-icon">
                  <i class="fas fa-quote-right"></i>
                </div>
                <p class="parent-quote">"{{ parent.quote }}"</p>
                <div class="parent-info d-flex align-items-center">
                  <div class="parent-avatar me-3">
                    <i :class="parent.avatar"></i>
                  </div>
                  <div>
                    <h4 class="parent-name">{{ parent.name }}</h4>
                    <p class="parent-child mb-0">Parent of {{ parent.childName }}</p>
                    <p class="parent-course">{{ parent.childCourse }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Review Statistics -->
    <section class="review-stats py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Student <span class="highlight">Satisfaction</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="stats-card card-theme p-4">
              <div class="row">
                <div class="col-md-4 text-center mb-3 mb-md-0" v-for="(stat, index) in statistics" :key="index">
                  <div class="stat-item">
                    <h3 class="stat-number">{{ stat.value }}</h3>
                    <p class="stat-label">{{ stat.label }}</p>
                    <div class="stat-rating" v-if="stat.rating">
                      <i v-for="star in 5" :key="star" class="fas fa-star" :class="{ 'text-gold': star <= stat.rating }"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Reviews -->
    <section class="platform-reviews py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Reviews from <span class="highlight">Platforms</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="platform-grid">
              <div 
                class="platform-card card-theme d-flex align-items-center p-3 mb-3" 
                v-for="(platform, index) in platformReviews" 
                :key="index"
              >
                <div class="platform-icon me-3">
                  <i :class="platform.icon"></i>
                </div>
                <div class="platform-info flex-grow-1">
                  <h4 class="platform-name">{{ platform.name }}</h4>
                  <div class="platform-rating">
                    <i v-for="star in 5" :key="star" class="fas fa-star" :class="{ 'text-gold': star <= platform.rating }"></i>
                    <span class="rating-value ms-2">{{ platform.rating }} ({{ platform.reviews }} reviews)</span>
                  </div>
                </div>
                <div class="platform-link">
                  <i class="fas fa-external-link-alt"></i>
                </div>
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
  name: 'TestimonialsView',
  data() {
    return {
      featuredTestimonials: [
        {
          rating: 5,
          quote: "The instructors here are amazing! They don't just teach theory; they ensure you understand how to apply everything in real-world scenarios. I landed a job even before completing my course.",
          name: "Sarah Johnson",
          role: "Full Stack Developer",
          course: "Web Development Bootcamp",
          avatar: "fas fa-user-circle"
        },
        {
          rating: 5,
          quote: "The project-based learning approach helped me build a strong portfolio. The career support team was instrumental in preparing me for interviews.",
          name: "Michael Chen",
          role: "Software Engineer",
          course: "Advanced JavaScript Course",
          avatar: "fas fa-user-circle"
        },
        {
          rating: 5,
          quote: "Coming from a non-technical background, I was nervous. But the supportive environment and step-by-step curriculum made learning to code accessible and fun.",
          name: "Priya Patel",
          role: "Frontend Developer",
          course: "Python Programming",
          avatar: "fas fa-user-circle"
        },
        {
          rating: 5,
          quote: "The networking opportunities and industry connections provided through this program are invaluable. I'm now working at a tech startup thanks to them.",
          name: "James Wilson",
          role: "DevOps Engineer",
          course: "Cloud Computing Course",
          avatar: "fas fa-user-circle"
        },
        {
          rating: 5,
          quote: "Flexible class timings allowed me to work while studying. The online resources and recorded sessions helped me catch up when needed.",
          name: "Emma Davis",
          role: "Data Analyst",
          course: "Data Science Program",
          avatar: "fas fa-user-circle"
        },
        {
          rating: 4,
          quote: "Great curriculum and hands-on projects. The only reason for 4 stars is that I wish the course was longer to cover more advanced topics.",
          name: "Alex Rodriguez",
          role: "IT Support Specialist",
          course: "Networking Fundamentals",
          avatar: "fas fa-user-circle"
        }
      ],
      videoTestimonials: [
        {
          icon: "fas fa-video",
          title: "Sarah's Journey from Beginner to Developer",
          description: "Watch how Sarah transitioned careers in just 6 months"
        },
        {
          icon: "fas fa-video",
          title: "Michael's Success Story",
          description: "From student to software engineer at a top tech company"
        },
        {
          icon: "fas fa-video",
          title: "Group Project Experience",
          description: "Students share their collaborative learning experience"
        },
        {
          icon: "fas fa-video",
          title: "Career Support Impact",
          description: "How our career services helped students land jobs"
        }
      ],
      parentTestimonials: [
        {
          quote: "I've seen tremendous growth in my son's confidence and technical skills. The supportive environment and dedicated instructors made all the difference.",
          name: "Robert Chen",
          childName: "Michael Chen",
          childCourse: "Web Development Program",
          avatar: "fas fa-user-circle"
        },
        {
          quote: "As a parent, I was concerned about my daughter's career choices. This institute provided her with practical skills and real-world experience. She's now thriving in her IT career.",
          name: "Linda Johnson",
          childName: "Sarah Johnson",
          childCourse: "Full Stack Development",
          avatar: "fas fa-user-circle"
        },
        {
          quote: "The communication from instructors and staff is excellent. We always knew how our child was progressing. The career guidance was exceptional.",
          name: "David Patel",
          childName: "Priya Patel",
          childCourse: "Python Programming",
          avatar: "fas fa-user-circle"
        },
        {
          quote: "Worth every penny. My son not only learned technical skills but also developed problem-solving abilities and professional etiquette.",
          name: "Maria Rodriguez",
          childName: "Alex Rodriguez",
          childCourse: "IT Support Specialist Program",
          avatar: "fas fa-user-circle"
        }
      ],
      statistics: [
        {
          value: "95%",
          label: "Graduate Employment Rate",
          rating: 5
        },
        {
          value: "4.8/5",
          label: "Overall Student Rating",
          rating: 5
        },
        {
          value: "1000+",
          label: "Successful Graduates",
          rating: 5
        }
      ],
      platformReviews: [
        {
          icon: "fab fa-google",
          name: "Google Reviews",
          rating: 4.8,
          reviews: 342
        },
        {
          icon: "fab fa-facebook",
          name: "Facebook",
          rating: 4.7,
          reviews: 256
        },
        {
          icon: "fas fa-star",
          name: "Course Report",
          rating: 4.9,
          reviews: 189
        },
        {
          icon: "fab fa-linkedin",
          name: "LinkedIn Recommendations",
          rating: 4.8,
          reviews: 423
        },
        {
          icon: "fab fa-yelp",
          name: "Yelp",
          rating: 4.6,
          reviews: 98
        },
        {
          icon: "fas fa-graduation-cap",
          name: "SwitchUp",
          rating: 4.9,
          reviews: 156
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-hero {
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

.testimonial-card {
  padding: 2rem;
  border-radius: 15px;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-10px);
}

.testimonial-rating {
  color: #ddd;
}

.testimonial-rating i.text-gold {
  color: #FFD700;
}

.testimonial-quote {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author-avatar {
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

.author-name {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.author-role {
  color: #ff5f15;
  font-size: 0.9rem;
  font-weight: 500;
}

.author-course {
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
}

.video-card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-placeholder {
  height: 200px;
  background: linear-gradient(135deg, black 0%, #ff5f15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  position: relative;
}

.play-button {
  position: absolute;
  font-size: 3rem;
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.play-button:hover {
  opacity: 1;
  transform: scale(1.1);
}

.video-info h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.video-info p {
  color: var(--text-secondary);
  margin: 0;
}

.parent-card {
  padding: 2rem;
  border-radius: 15px;
  position: relative;
}

.parent-quote-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 4rem;
  color: rgba(255, 95, 21, 0.1);
}

.parent-quote {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.parent-avatar {
  width: 50px;
  height: 50px;
  background: #FFD700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.parent-name {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.parent-child {
  color: #ff5f15;
  font-size: 0.9rem;
  font-weight: 500;
}

.parent-course {
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
}

.stats-card {
  border-radius: 15px;
  text-align: center;
}

.stat-number {
  color: #ff5f15;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.stat-rating i {
  color: #ddd;
  font-size: 0.9rem;
}

.stat-rating i.text-gold {
  color: #FFD700;
}

.platform-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.platform-card:hover {
  transform: translateX(10px);
}

.platform-icon {
  width: 40px;
  height: 40px;
  background: #ff5f15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.platform-name {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.platform-rating i {
  color: #ddd;
  font-size: 0.9rem;
}

.platform-rating i.text-gold {
  color: #FFD700;
}

.rating-value {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.platform-link {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.platform-card:hover .platform-link {
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
  
  .testimonial-quote {
    font-size: 0.95rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>