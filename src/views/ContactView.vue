<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="contact-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Contact <span class="highlight">Us</span> </h1>
            <p class="lead">
              Get in touch with Cambridge College of Information Technology. 
              We're here to answer all your questions.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-headset"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="contact-main py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Information -->
          <div class="col-lg-5 mb-5 mb-lg-0">
            <div class="contact-info card-theme p-4 h-100">
              <h2 class="mb-4">Get in Touch</h2>
              
              <div class="contact-item mb-4">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h4>Visit Our Campus</h4>
                  <p>{{ address }}</p>
                </div>
              </div>
              
              <div class="contact-item mb-4">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h4>Call Us</h4>
                  <p>
                    <a :href="`tel:${mobile}`">{{ mobile }}</a>
                  </p>
                </div>
              </div>
              
              <div class="contact-item mb-4">
                <div class="contact-icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a :href="`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`" target="_blank">
                      {{ whatsapp }}
                    </a>
                  </p>
                </div>
              </div>
              
              <div class="contact-item mb-4">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h4>Email Us</h4>
                  <p>
                    <a :href="`mailto:${email}`">{{ email }}</a>
                  </p>
                </div>
              </div>
              
              <div class="contact-item mb-4">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div class="social-links mt-5">
                <h4 class="mb-3">Follow Us</h4>
                <div class="d-flex gap-3">
                  <a href="#" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="social-link">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="contact-form card-theme p-4">
              <h2 class="mb-4">Send Us a Message</h2>
              
              <form @submit.prevent="submitForm" id="contactForm">
                <!-- Removed old alert divs -->
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name" class="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name" 
                      v-model="form.name"
                      required
                    >
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="phone" class="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      id="phone" 
                      v-model="form.phone"
                      required
                    >
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="form.email"
                    required
                  >
                </div>
                
                <div class="mb-3">
                  <label for="subject" class="form-label">Subject *</label>
                  <select class="form-select" id="subject" v-model="form.subject" required>
                    <option value="">Select a subject</option>
                    <option value="course">Course Inquiry</option>
                    <option value="admission">Admission Process</option>
                    <option value="schedule">Schedule & Timing</option>
                    <option value="fees">Fee Structure</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="course" class="form-label">Course Interested In</label>
                  <select class="form-select" id="course" v-model="form.course">
                    <option value="">Select a course</option>
                    <option value="fundamentals">Computer Fundamentals</option>
                    <option value="python">Programming with Python</option>
                    <option value="web">Web Development</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="cyber">Cybersecurity</option>
                    <option value="ccna">CISCO CCNA</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label">Message *</label>
                  <textarea 
                    class="form-control" 
                    id="message" 
                    rows="5"
                    v-model="form.message"
                    required
                  ></textarea>
                </div>
                
                <div class="mb-3">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="newsletter"
                      v-model="form.newsletter"
                    >
                    <label class="form-check-label" for="newsletter">
                      Subscribe to our newsletter for updates and offers
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  class="btn-primary-custom"
                  :disabled="formSubmitting"
                >
                  <span v-if="formSubmitting">
                    <i class="fas fa-spinner fa-spin"></i> Sending...
                  </span>
                  <span v-else>
                    <i class="fas fa-paper-plane"></i> Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="map-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Find <span class="highlight">Our College</span></h2>
        <div class="map-container card-theme overflow-hidden">
          <!-- In a real application, you would embed Google Maps here -->
          <div class="map-placeholder text-center py-5">
            <i class="fas fa-map-marked-alt fa-4x mb-3"></i>
            <h3>Location Map</h3>
            <p class="mb-0">{{ address }}</p>
            <div class="mt-4">
              <a 
                href="https://www.google.com/maps/place/Cambridge+College+of+Information+Technology+(Pvt)+Ltd/@6.2344923,80.0519568,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae18115f8c652d9:0x786c763eacf34d9c!8m2!3d6.234487!4d80.0545317!16s%2Fg%2F11l6twft7_?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank"
                class="btn-primary-custom"
              >
                <i class="fas fa-map-marker-alt"></i> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Frequently Asked Questions</h2>
        
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h3 class="accordion-header">
              <button 
                class="accordion-button" 
                type="button" 
                :class="{ 'collapsed': index !== 0 }"
                :data-bs-target="`#faq${index}`"
                data-bs-toggle="collapse"
                :aria-expanded="index === 0 ? 'true' : 'false'"
              >
                {{ faq.question }}
              </button>
            </h3>
            <div 
              :id="`faq${index}`" 
              class="accordion-collapse collapse"
              :class="{ 'show': index === 0 }"
              :data-bs-parent="'#faqAccordion'"
            >
              <div class="accordion-body">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import { useToast } from 'vue-toastification';

/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'ContactView',
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      address: 'No 26/B, New Rd, Ambalangoda, Sri Lanka',
      mobile: '+94 71 886 4477',
      whatsapp: '+94 70 520 5666',
      email: 'email.ccit@gmail.com',
      form: {
        name: '',
        phone: '',
        email: '',
        subject: '',
        course: '',
        message: '',
        newsletter: false
      },
      formSubmitting: false,
      faqs: [
        {
          question: 'What are your operating hours?',
          answer: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 8:00 AM to 1:00 PM. We are closed on Sundays and public holidays.'
        },
        {
          question: 'How can I enroll in a course?',
          answer: 'You can enroll by visiting our campus, calling us, or filling out the contact form above. We recommend scheduling a consultation first to discuss your goals and suitable courses.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for most courses. You can pay in monthly installments. Please contact us for specific payment options for your chosen course.'
        },
        {
          question: 'Are there any prerequisites for courses?',
          answer: 'Beginner courses have no prerequisites. Intermediate and advanced courses may require basic computer knowledge or completion of prerequisite courses. Contact us for specific requirements.'
        },
        {
          question: 'Do you provide certificates?',
          answer: 'Yes, upon successful completion of any course, you will receive a recognized certificate from Cambridge College of Information Technology. Some courses also prepare you for international certifications.'
        },
        {
          question: 'Can I visit the campus before enrolling?',
          answer: 'Absolutely! We encourage prospective students to visit our campus, see our facilities, and meet our instructors. Please call ahead to schedule a campus tour.'
        }
      ],

      // Add EmailJS credentials
      emailjsConfig: {
        serviceId: 'service_438x8g1', // SERVICE_ID
        templateId: 'template_sc86cor', // TEMPLATE_ID
        publicKey: 'MIgdDTa538ETb_5yl', // PUBLIC_KEY
        toEmail: 'yunethper@gmail.com' // The email where you want to receive messages
      }
    }
  },
  methods: {
    async submitForm() {
      this.formSubmitting = true;
      
      try {
        // Prepare template parameters for EmailJS
        const templateParams = {
          to_email: this.emailjsConfig.toEmail,
          from_name: this.form.name,
          from_email: this.form.email,
          phone: this.form.phone,
          subject: this.getSubjectText(this.form.subject),
          course: this.getCourseText(this.form.course),
          message: this.form.message,
          newsletter_subscription: this.form.newsletter ? 'Yes' : 'No',
          received_date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        
        // Send email using EmailJS
        await emailjs.send(
          this.emailjsConfig.serviceId,
          this.emailjsConfig.templateId,
          templateParams,
          this.emailjsConfig.publicKey
        );
        
        // Show success toast
        this.toast.success('Thank you for your message! We have received it and will contact you within 24 hours.', {
          timeout: 8000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          closeButton: "button",
          icon: "fas fa-check-circle"
        });
        
        // Reset form
        this.form = {
          name: '',
          phone: '',
          email: '',
          subject: '',
          course: '',
          message: '',
          newsletter: false
        };
        
        // Reset form validation
        const form = document.getElementById('contactForm');
        if (form) {
          form.reset();
        }
        
      } catch (error) {
        console.error('Error sending message:', error);
        
        // Show error toast
        this.toast.error('Sorry, there was an error sending your message. Please try again or contact us directly.', {
          timeout: 8000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          closeButton: "button",
          icon: "fas fa-exclamation-circle"
        });
        
      } finally {
        this.formSubmitting = false;
      }
    },
    
    getSubjectText(subjectValue) {
      const subjects = {
        'course': 'Course Inquiry',
        'admission': 'Admission Process',
        'schedule': 'Schedule & Timing',
        'fees': 'Fee Structure',
        'other': 'Other'
      };
      return subjects[subjectValue] || subjectValue || 'Not specified';
    },
    
    getCourseText(courseValue) {
      const courses = {
        'fundamentals': 'Computer Fundamentals',
        'python': 'Programming with Python',
        'web': 'Web Development',
        'fullstack': 'Full Stack Development',
        'cyber': 'Cybersecurity',
        'ccna': 'CISCO CCNA'
      };
      return courses[courseValue] || courseValue || 'Not specified';
    }
  }
}
</script>

<style scoped>
/* Your existing styles remain the same */
.contact-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #FFD700 0%, #FFD700 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.hero-icon {
  font-size: 6rem;
  color: #FFD700;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: #FFD700;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-details h4 {
  color: var(--text-primary);
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.contact-details p {
  color: var(--text-secondary);
  margin: 0;
}

.contact-details a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--accent-color);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #FFD700;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: black;
  transform: translateY(-3px);
}

.contact-form .form-label {
  color: var(--text-primary);
  font-weight: 500;
}

.contact-form .form-control,
.contact-form .form-select {
  background-color: var(--bg-primary);
  border-color: var(--border-color);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.contact-form .form-control:focus,
.contact-form .form-select:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.25rem rgba(0, 188, 212, 0.25);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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
  border: 2px solid  #FFD700;
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

.map-container {
  border-radius: 15px;
  height: 400px;
}

.map-placeholder {
  color: var(--text-secondary);
}

.map-placeholder i {
  color: #FFD700;
}

.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.accordion-item {
  background-color: var(--card-bg);
  border-color: var(--border-color);
  margin-bottom: 10px;
  border-radius: 10px !important;
  overflow: hidden;
}

.accordion-button {
  background-color: var(--card-bg);
  color: var(--text-primary);
  font-weight: 600;
  border: none;
}

.accordion-button:not(.collapsed) {
  background-color: #FFD700;
  color: black;
  box-shadow: none;
}

.accordion-button:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.25rem rgba(0, 188, 212, 0.25);
}

.accordion-body {
  background-color: var(--bg-primary);
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-icon {
    font-size: 4rem;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>