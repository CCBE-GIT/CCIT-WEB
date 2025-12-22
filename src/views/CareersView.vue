<template>
  <div class="careers-page">
    <!-- Hero Section -->
    <section class="careers-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="hero-title">
              Join Our <span class="highlight">Team</span>
            </h1>
            <p class="lead">
              Shape the future of IT education with CCIT. We're looking for
              passionate professionals who want to make a difference in
              students' lives.
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="hero-icon">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="benefits-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Why Work at <span class="highlight">CCIT?</span>
        </h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="(benefit, index) in benefits"
            :key="index"
          >
            <div class="benefit-card card-theme">
              <div class="benefit-icon">
                <i :class="benefit.icon"></i>
              </div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Openings -->
    <section class="openings-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Current <span class="highlight">Openings</span>
        </h2>
        <p class="text-center mb-5 text-muted">
          Browse through our available positions and apply today
        </p>

        <!-- Opening Cards -->
        <div class="row">
          <div
            class="col-md-6 mb-4"
            v-for="(opening, index) in openings"
            :key="index"
          >
            <div class="opening-card card-theme">
              <div class="opening-header">
                <span class="opening-type">{{ opening.type }}</span>
                <span class="opening-location">{{ opening.location }}</span>
              </div>
              <h3>{{ opening.title }}</h3>
              <p>{{ opening.description }}</p>

              <div class="opening-details">
                <div class="detail-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ opening.duration }}</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-calendar-alt"></i>
                  <span>Posted: {{ opening.postedDate }}</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-user-graduate"></i>
                  <span>{{ opening.qualification }}</span>
                </div>
              </div>

              <div class="opening-actions">
                <button
                  class="btn btn-outline-accent"
                  @click="openApplicationModal(opening)"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Apply -->
    <section class="apply-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          How to <span class="highlight">Apply</span>
        </h2>
        <div class="row">
          <div
            class="col-md-3 mb-4"
            v-for="(step, index) in applySteps"
            :key="index"
          >
            <div class="step-card text-center">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-icon">
                <i :class="step.icon"></i>
              </div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta py-5">
      <div class="container text-center">
        <h2 class="section-title mb-4">
          Questions About <span class="highlight">Careers at CCIT?</span>
        </h2>
        <p class="mb-4 text-black">
          Get in touch with our HR team for more information
        </p>
        <div class="cta-buttons">
          <a href="mailto:careers@ccit.lk" class="btn btn-primary-custom btn-lg">
            <i class="fas fa-envelope"></i> Email HR
          </a>
          <a href="tel:+94112233445" class="btn btn-accent btn-lg">
            <i class="fas fa-phone"></i> Call HR
          </a>
          <button class="btn btn-primary-custom btn-lg" @click="openApplicationModal()">
            <i class="fas fa-file-alt"></i> Quick Apply
          </button>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div
      v-if="showApplicationModal"
      class="application-modal"
      @click="closeApplicationModal"
    >
      <div class="modal-content application-content" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Apply for Position</h2>
          <p class="modal-subtitle">
            {{ selectedOpening?.title || "General Application" }}
          </p>
          <button class="modal-close" @click="closeApplicationModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form class="application-form" @submit.prevent="submitApplication">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                v-model="applicationForm.fullName"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="email">Email Address *</label>
              <input
                type="email"
                id="email"
                v-model="applicationForm.email"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                v-model="applicationForm.phone"
                required
              />
            </div>
            <div class="form-group col-md-6">
              <label for="position">Position Applying For *</label>
              <input
                type="text"
                id="position"
                v-model="applicationForm.position"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="experience">Years of Experience *</label>
            <select
              id="experience"
              v-model="applicationForm.experience"
              required
            >
              <option value="">Select experience level</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <div class="form-group">
            <label for="qualification">Highest Qualification *</label>
            <select
              id="qualification"
              v-model="applicationForm.qualification"
              required
            >
              <option value="">Select qualification</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's">Bachelor's Degree</option>
              <option value="Master's">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Professional">Professional Certification</option>
            </select>
          </div>

          <div class="form-group">
            <label for="coverLetter">Cover Letter *</label>
            <textarea
              id="coverLetter"
              v-model="applicationForm.coverLetter"
              rows="4"
              placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="resumeLink">Resume/CV Google Drive Link *</label>
            <div class="input-with-icon">
              <i class="fas fa-link"></i>
              <input
                type="url"
                id="resumeLink"
                v-model="applicationForm.resumeLink"
                placeholder="https://drive.google.com/file/d/..."
                required
                pattern="https://.*"
              />
            </div>
            <small class="form-help">
              <i class="fas fa-info-circle"></i>
              Please upload your resume to Google Drive and share the link here (set sharing to "Anyone with the link")
            </small>
            
            <!-- Add preview button if link is entered -->
            <div v-if="applicationForm.resumeLink" class="link-preview mt-2">
              <button 
                type="button" 
                class="btn btn-sm btn-outline-success"
                @click.prevent="previewResumeLink"
              >
                <i class="fas fa-eye"></i> Preview Link
              </button>
              <span class="preview-status ms-2">
                <i class="fas fa-check-circle text-success"></i> Link added
              </span>
            </div>
          </div>

          <div class="form-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="closeApplicationModal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin"></i> Submitting...
              </span>
              <span v-else>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";
import { useToast } from "vue-toastification";

export default {
  name: "CareersPage",
  setup() {
    // Initialize toast
    const toast = useToast();
    
    // Modal State
    const showApplicationModal = ref(false);
    const selectedOpening = ref(null);
    const isSubmitting = ref(false);

    // Application Form
    const applicationForm = ref({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      qualification: "",
      coverLetter: "",
      resumeLink: "",
    });

    // Data
    const benefits = ref([
      {
        icon: "fas fa-chart-line",
        title: "Career Growth",
        description:
          "Clear progression paths and opportunities for professional development.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Training & Development",
        description:
          "Regular workshops, certifications, and skill enhancement programs.",
      },
      {
        icon: "fas fa-users",
        title: "Collaborative Environment",
        description:
          "Work with passionate educators and industry professionals.",
      },
      {
        icon: "fas fa-award",
        title: "Competitive Packages",
        description:
          "Attractive salaries, bonuses, and comprehensive benefits.",
      },
      {
        icon: "fas fa-balance-scale",
        title: "Work-Life Balance",
        description: "Flexible schedules and supportive work environment.",
      },
      {
        icon: "fas fa-child",
        title: "Make a Difference",
        description:
          "Impact students lives by shaping the next generation of IT professionals.",
      },
    ]);

    const openings = ref([
      {
        id: 1,
        title: "IT Instructor",
        type: "Full-time",
        location: "Colombo",
        description:
          "Deliver engaging IT lessons and practical sessions to students of all levels.",
        duration: "Permanent",
        postedDate: "2 weeks ago",
        qualification: "Bachelor's in IT/Computer Science",
      },
      {
        id: 2,
        title: "Web Development Trainer",
        type: "Part-time",
        location: "Online/On-site",
        description:
          "Train students in modern web development technologies and frameworks.",
        duration: "6 Months",
        postedDate: "1 week ago",
        qualification: "Relevant certification or experience",
      },
      {
        id: 3,
        title: "Student Counselor",
        type: "Full-time",
        location: "Colombo",
        description:
          "Guide and support students in their educational and career journey.",
        duration: "Permanent",
        postedDate: "3 days ago",
        qualification: "Degree in Psychology/Counseling",
      },
      {
        id: 4,
        title: "Marketing Executive",
        type: "Full-time",
        location: "Colombo",
        description:
          "Promote our programs and engage with the community through various channels.",
        duration: "Permanent",
        postedDate: "1 week ago",
        qualification: "Marketing/Communication degree",
      },
      {
        id: 5,
        title: "Content Developer",
        type: "Contract",
        location: "Remote",
        description:
          "Create engaging educational materials and online course content.",
        duration: "3 Months",
        postedDate: "2 days ago",
        qualification: "Experience in educational content",
      },
      {
        id: 6,
        title: "Administrative Assistant",
        type: "Full-time",
        location: "Colombo",
        description:
          "Provide administrative support and manage office operations.",
        duration: "Permanent",
        postedDate: "1 month ago",
        qualification: "Diploma in Office Administration",
      },
    ]);

    const applySteps = ref([
      {
        icon: "fas fa-search",
        title: "Browse Positions",
        description:
          "Explore our current openings and find the right fit for your skills.",
      },
      {
        icon: "fas fa-file-alt",
        title: "Prepare Documents",
        description:
          "Update your resume and prepare a compelling cover letter.",
      },
      {
        icon: "fas fa-edit",
        title: "Submit Application",
        description: "Fill out our application form and upload your documents.",
      },
      {
        icon: "fas fa-comments",
        title: "Interview Process",
        description: "Participate in interviews and assessment sessions.",
      },
    ]);

    // Methods
    const openApplicationModal = (opening = null) => {
      selectedOpening.value = opening;
      showApplicationModal.value = true;
      document.body.style.overflow = "hidden";

      // Set position in form
      if (opening) {
        applicationForm.value.position = opening.title;
      } else {
        applicationForm.value.position = "";
      }
      
      // Show info toast with Google Drive instructions
      // toast.info(
      //   `<div style="text-align: left;">
      //     <strong>📝 Application Instructions:</strong><br>
      //     1. Fill out all fields<br>
      //     2. Upload your resume to Google Drive<br>
      //     3. Share the link (set to "Anyone with the link")<br>
      //     4. Paste the link in the resume field
      //   </div>`, 
      //   {
      //     timeout: 8000,
      //     icon: "fas fa-info-circle",
      //     closeButton: true
      //   }
      // );
    };

    const closeApplicationModal = () => {
      showApplicationModal.value = false;
      document.body.style.overflow = "";
      selectedOpening.value = null;

      // Reset form
      applicationForm.value = {
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        qualification: "",
        coverLetter: "",
        resumeLink: "",
      };
    };

    // Method for previewing the link
    const previewResumeLink = () => {
      if (applicationForm.value.resumeLink) {
        // Open the link in a new tab
        window.open(applicationForm.value.resumeLink, '_blank');
        
        toast.success("Opening resume link in new tab...", {
          timeout: 3000,
          icon: "fas fa-external-link-alt"
        });
      } else {
        toast.warning("Please enter a Google Drive link first", {
          timeout: 4000,
          icon: "fas fa-link"
        });
      }
    };

    const submitApplication = async () => {
      // Validate required fields
      if (!applicationForm.value.fullName.trim()) {
        toast.error("Please enter your full name", {
          timeout: 4000,
          icon: "fas fa-user-times"
        });
        return;
      }

      if (!applicationForm.value.email.trim()) {
        toast.error("Please enter your email address", {
          timeout: 4000,
          icon: "fas fa-envelope"
        });
        return;
      }

      if (!applicationForm.value.phone.trim()) {
        toast.error("Please enter your phone number", {
          timeout: 4000,
          icon: "fas fa-phone"
        });
        return;
      }

      if (!applicationForm.value.resumeLink.trim()) {
        toast.error("Please provide your Google Drive resume link", {
          timeout: 5000,
          icon: "fas fa-link"
        });
        return;
      }

      // Validate Google Drive link format
      const googleDriveRegex = /https:\/\/drive\.google\.com\/(file\/d\/|drive\/folders\/|open\?id=)/i;
      if (!googleDriveRegex.test(applicationForm.value.resumeLink)) {
        toast.error("Please provide a valid Google Drive link (should start with https://drive.google.com/)", {
          timeout: 5000,
          icon: "fas fa-exclamation-triangle"
        });
        return;
      }

      isSubmitting.value = true;

      try {
        // Show processing toast
        toast.info("Processing your application...", { 
          timeout: 8000,
          icon: "fas fa-spinner fa-pulse",
          closeButton: true
        });

        // Generate a unique ID for this application
        const applicationId = "ccit_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

        // Prepare template parameters
        const templateParams = {
          to_email: "yunethper@gmail.com",
          applicant_name: applicationForm.value.fullName.trim(),
          applicant_email: applicationForm.value.email.trim(),
          applicant_phone: applicationForm.value.phone.trim(),
          position: applicationForm.value.position || "General Application",
          experience: applicationForm.value.experience || "Not specified",
          qualification: applicationForm.value.qualification || "Not specified",
          cover_letter: applicationForm.value.coverLetter.trim() || "No cover letter provided",
          application_date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          job_title: selectedOpening.value?.title || "General Application",
          resume_link: applicationForm.value.resumeLink.trim(),
          application_id: applicationId,
        };

        // Send email using EmailJS
        await emailjs.send(
          "service_438x8g1", // Service_ID
          "template_6velvsl", // Template_ID
          templateParams,
          "MIgdDTa538ETb_5yl" // PUBLIC_KEY
        );

        // Show success
        toast.success("🎉 Application submitted successfully! Our HR team will review it shortly.", {
          timeout: 8000,
          closeButton: true,
          icon: "fas fa-check-circle"
        });
        
        closeApplicationModal();
      } catch (error) {
        console.error("EmailJS Error:", error);
        
        // Show error toast
        let errorMessage = "There was an error submitting your application. Please try again.";
        
        if (error.text && error.text.includes("corrupted")) {
          errorMessage = "Please remove any special characters from your cover letter and try again.";
        } else if (error.text) {
          errorMessage = `Error: ${error.text}`;
        }
        
        toast.error(errorMessage, {
          timeout: 6000,
          icon: "fas fa-exclamation-triangle"
        });
      } finally {
        isSubmitting.value = false;
      }
    };

    // Lifecycle
    onMounted(() => {
      // Initialize EmailJS
      emailjs.init("MIgdDTa538ETb_5yl");
      
      // Show welcome toast on page load
      // setTimeout(() => {
      //   toast.info("👋 Browse our current openings and apply to join our team!", {
      //     timeout: 6000,
      //     icon: "fas fa-hand-wave"
      //   });
      // }, 1000);
    });

    return {
      showApplicationModal,
      selectedOpening,
      isSubmitting,
      applicationForm,
      benefits,
      openings,
      applySteps,
      openApplicationModal,
      closeApplicationModal,
      previewResumeLink,
      submitApplication,
    };
  },
};
</script>

<style scoped>
/* Careers Hero Section */
.careers-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.careers-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
  background-size: cover;
  opacity: 0.1;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
}

.highlight {
  background: linear-gradient(135deg,   #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.lead {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 600px;
}

.hero-icon {
  display: inline-block;
  border-radius: 50%;
  padding: 40px;
}

.hero-icon i {
  font-size: 6rem;
  color: #ff5f15;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

/* Benefits Section */
.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.benefits-section {
  background: white;
}

.benefit-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #FFD700;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.benefit-card:hover::before {
  transform: scaleX(1);
}

.benefit-icon {
  font-size: 3rem;
  color: #FFD700;
  margin-bottom: 1.5rem;
}

.benefit-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.benefit-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Openings Section */
.opening-card {
  padding: 2rem;
  border-radius: 15px;
  height: 100%;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.opening-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.opening-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.opening-type {
  background: #FFD700;
  color: black;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.opening-location {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.opening-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.opening-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.opening-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.detail-item i {
  color: #FFD700;
}

.opening-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-accent {
  background: #ff5f15;
  color: black;
  border: none;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background: #FFD700;
  transform: translateY(-2px);
}

.btn-outline-accent {
  border: 2px solid #FFD700;
  color: black;
  background: transparent;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-accent:hover {
  background: black;
  color: white;
  transform: translateY(-2px);
}

/* Apply Steps */
.apply-section {
  background: white;
}

.step-card {
  padding: 2rem;
  position: relative;
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-icon {
  font-size: 2.5rem;
  color: #FFD700;
  margin-bottom: 1rem;
}

.step-card h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.step-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Application Modal */
.application-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.application-content {
  background: white;
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  background: linear-gradient(
    135deg,
    black 0%,
    black 100%
  );
  color: white;
  padding: 2rem;
  border-radius: 15px 15px 0 0;
  position: relative;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.modal-subtitle {
  opacity: 0.9;
  font-size: 1rem;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.application-form {
  padding: 2rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
}

.form-group {
  padding: 0.5rem;
  flex: 1 1 100%;
}

.form-group.col-md-6 {
  flex: 1 1 50%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(var(--accent-color-rgb), 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

/* Google Drive Link Input Styles */
.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon i {
  position: absolute;
  left: 15px;
  color: var(--accent-color);
  font-size: 16px;
}

.input-with-icon input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-with-icon input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(var(--accent-color-rgb), 0.1);
}

.form-help {
  display: block;
  margin-top: 8px;
  color: #666;
  font-size: 0.85rem;
}

.form-help i {
  color: var(--accent-color);
  margin-right: 5px;
}

.link-preview {
  display: flex;
  align-items: center;
  gap: 10px;
}

.preview-status {
  color: #28a745;
  font-size: 0.9rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.ms-2 {
  margin-left: 0.5rem;
}

.btn-sm {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: white;
  background-color: #28a745;
  border-color: #28a745;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

/* Contact CTA */
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-icon {
    padding: 30px;
    margin-top: 2rem;
  }

  .hero-icon i {
    font-size: 4rem;
  }

  .opening-actions {
    flex-direction: column;
  }

  .form-group.col-md-6 {
    flex: 1 1 100%;
  }

  .form-footer {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .step-card {
    margin-bottom: 2rem;
  }

  .hero-icon {
    padding: 20px;
  }

  .hero-icon i {
    font-size: 3rem;
  }
}

/* Performance optimization */
@media (prefers-reduced-motion: reduce) {
  .hero-icon,
  .benefit-card,
  .opening-card,
  .btn-accent:hover,
  .btn-outline-accent:hover {
    transition: none;
    animation: none;
  }
}

/* Spinner style */
.fa-spinner {
  margin-right: 8px;
}

.text-success {
  color: #28a745 !important;
}
</style>