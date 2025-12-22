<template>
  <div class="news-events-page">
    <!-- Hero Section -->
    <section class="news-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="hero-title">
              News & Events <span class="highlight">at CCIT</span>
            </h1>
            <p class="lead">
              Stay updated with the latest happenings, workshops, achievements, 
              and important announcements from CCIT.
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="hero-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="upcoming-events py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Latest <span class="highlight">News & Events</span>
        </h2>
        <p class="text-center mb-5 text-muted">
          Discover the latest at CCIT on our dynamic News & Events page.
        </p>

        <!-- Events Grid - Simplified Version -->
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="(event, index) in upcomingEvents"
            :key="index"
          >
            <div class="event-card card-theme">
              <!-- Event Image -->
              <div class="event-image">
                <img :src="event.image" :alt="event.title" class="img-fluid">
                <div class="event-date-badge">
                  <span class="date-day">{{ event.date.day }}</span>
                  <span class="date-month">{{ event.date.month }}</span>
                </div>
              </div>
              
              <!-- Event Content -->
              <div class="event-body p-4">
                <div class="event-type mb-2">
                  <span class="type-badge" :style="{ backgroundColor: event.color }">
                    {{ event.type }}
                  </span>
                </div>
                <h3 class="event-title">{{ event.title }}</h3>
                <p class="event-description">{{ event.description }}</p>
                
                <!-- Optional: Simple "Learn More" button -->
                <button 
                  class="btn btn-outline-primary mt-3"
                  @click="viewEventDetails(event)"
                >
                  <i class="fas fa-info-circle"></i> Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <!-- <section class="newsletter-section py-5">
      <div class="container">
        <div class="newsletter-card card-theme p-5 text-center">
          <h2 class="section-title mb-3">
            Stay <span class="highlight">Updated</span>
          </h2>
          <p class="mb-4">
            Subscribe to our newsletter and never miss an important update or event
          </p>
          
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <div class="row justify-content-center">
              <div class="col-md-6 mb-3">
                <div class="input-group">
                  <input 
                    type="email" 
                    v-model="newsletterEmail"
                    placeholder="Enter your email address"
                    class="form-control"
                    required
                  >
                  <button class="btn btn-primary" type="submit">
                    <i class="fas fa-paper-plane"></i> Subscribe
                  </button>
                </div>
                <small class="form-text text-muted">
                  We'll send you monthly updates. Unsubscribe anytime.
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section> -->

    <!-- Event Details Modal -->
    <div
      v-if="showEventModal"
      class="event-modal"
      @click="closeEventModal"
    >
      <div class="modal-content event-content" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Event Details</h2>
          <p class="modal-subtitle">
            {{ selectedEvent?.title }}
          </p>
          <button class="modal-close" @click="closeEventModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="event-details-content">
          <div class="event-image-large">
            <img :src="selectedEvent?.image" :alt="selectedEvent?.title" class="img-fluid">
          </div>
          
          <div class="p-4">
            <div class="event-meta mb-4">
              <div class="event-date-display mb-3">
                <i class="fas fa-calendar-alt text-primary"></i>
                <span class="ms-2">{{ selectedEvent?.date?.day }} {{ selectedEvent?.date?.month }}</span>
              </div>
              <div class="event-type-display">
                <span class="type-badge" :style="{ backgroundColor: selectedEvent?.color }">
                  {{ selectedEvent?.type }}
                </span>
              </div>
            </div>
            
            <h3 class="event-title-large">{{ selectedEvent?.title }}</h3>
            <p class="event-description-large">{{ selectedEvent?.description }}</p>
            
            <!-- Only show additional details if they exist -->
            <div v-if="selectedEvent?.fullDescription" class="mt-4">
              <h4>About This Event</h4>
              <p class="event-full-description">{{ selectedEvent.fullDescription }}</p>
            </div>
            
            <!-- <div v-if="selectedEvent?.details" class="event-extra-details mt-4">
              <div class="row">
                <div v-if="selectedEvent.details.time" class="col-md-6 mb-3">
                  <div class="detail-item">
                    <i class="far fa-clock"></i>
                    <span>{{ selectedEvent.details.time }}</span>
                  </div>
                </div>
                <div v-if="selectedEvent.details.location" class="col-md-6 mb-3">
                  <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ selectedEvent.details.location }}</span>
                  </div>
                </div>
                <div v-if="selectedEvent.details.seats" class="col-md-6 mb-3">
                  <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>{{ selectedEvent.details.seats }} seats available</span>
                  </div>
                </div>
                <div v-if="selectedEvent.details.instructor" class="col-md-6 mb-3">
                  <div class="detail-item">
                    <i class="fas fa-user-tie"></i>
                    <span>Instructor: {{ selectedEvent.details.instructor }}</span>
                  </div>
                </div>
              </div>
            </div> -->
            
            <!-- Optional Registration Button in Modal -->
            <!-- <div v-if="selectedEvent?.showRegistration" class="mt-4 text-center">
              <button 
                class="btn btn-primary"
                @click="registerForEvent(selectedEvent)"
                :disabled="selectedEvent?.details?.seats === 0"
              >
                <i class="fas fa-calendar-plus"></i>
                {{ selectedEvent?.details?.seats > 0 ? 'Register Now' : 'Fully Booked' }}
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <div
      v-if="showGalleryModal"
      class="gallery-modal"
      @click="closeGalleryModal"
    >
      <div class="gallery-modal-content" @click.stop>
        <button class="gallery-close" @click="closeGalleryModal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="gallery-main-image">
          <img :src="selectedPhoto?.image" :alt="selectedPhoto?.title" class="img-fluid">
          <div class="image-caption">
            <h4>{{ selectedPhoto?.title }}</h4>
            <p>{{ selectedPhoto?.date }} • {{ selectedPhoto?.category }}</p>
            <p>{{ selectedPhoto?.description }}</p>
          </div>
        </div>

        <div class="gallery-navigation">
          <button 
            class="nav-btn prev-btn" 
            @click="prevPhoto"
            :disabled="currentPhotoIndex === 0"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <div class="gallery-thumbnails">
            <div 
              class="thumbnail"
              v-for="(photo, index) in filteredGallery.slice(0, 5)"
              :key="index"
              :class="{ 'active': index === currentPhotoIndex }"
              @click="currentPhotoIndex = index"
            >
              <img :src="photo.image" :alt="photo.title">
            </div>
          </div>
          
          <button 
            class="nav-btn next-btn"
            @click="nextPhoto"
            :disabled="currentPhotoIndex === filteredGallery.length - 1"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'NewsEventsView',
  setup() {
    const toast = useToast();
    
    // State
    const activeGalleryCategory = ref('All');
    const visiblePhotos = ref(8);
    const showEventModal = ref(false);
    const showGalleryModal = ref(false);
    const selectedEvent = ref(null);
    const selectedPhoto = ref(null);
    const currentPhotoIndex = ref(0);
    
    // Forms
    const newsletterEmail = ref('');

    // Data - Updated with images and simplified structure
    const upcomingEvents = ref([
      {
        id: 1,
        title: 'Free Python Workshop for Beginners',
        description: 'Hands-on introduction to Python programming. No prior experience required.',
        date: { day: '15', month: 'MAR' },
        type: 'Workshop',
        color: '#4CAF50',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        // Optional detailed information (only shown in modal)
        fullDescription: 'This comprehensive workshop is designed for absolute beginners who want to start their programming journey with Python. Learn the fundamentals in a hands-on environment with practical examples.',
        details: {
          time: '6:00 PM - 8:00 PM',
          location: 'CCIT Main Campus, Colombo',
          seats: 25,
          instructor: 'Dr. Sanjaya Perera',
          requirements: 'Laptop with Python installed'
        },
        showRegistration: true
      },
      {
        id: 2,
        title: 'Career Fair 2024',
        description: 'Connect with top IT companies and explore job opportunities.',
        date: { day: '22', month: 'MAR' },
        type: 'Career Fair',
        color: '#2196F3',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Meet representatives from leading tech companies and discover exciting career opportunities. Perfect for students and professionals looking to advance their careers in IT.',
        details: {
          time: '9:00 AM - 4:00 PM',
          location: 'Colombo Convention Center',
          seats: 150
        },
        showRegistration: true
      },
      {
        id: 3,
        title: 'Cybersecurity Awareness Session',
        description: 'Learn about latest cyber threats and protection methods.',
        date: { day: '05', month: 'APR' },
        type: 'Webinar',
        color: '#FF9800',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Join our cybersecurity experts as they discuss current threats and best practices for online safety. Essential knowledge for everyone in the digital age.',
        details: {
          time: '4:00 PM - 6:00 PM',
          location: 'Online via Zoom',
          seats: 100
        },
        showRegistration: true
      },
      {
        id: 4,
        title: 'Graduation Ceremony - Batch 23',
        description: 'Celebrating the achievements of our graduating students.',
        date: { day: '12', month: 'APR' },
        type: 'Ceremony',
        color: '#9C27B0',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Join us in celebrating the success of our students as they complete their IT education journey. Proud moment for students, families, and faculty.',
        details: {
          time: '3:00 PM - 6:00 PM',
          location: 'CCIT Auditorium',
          seats: 200
        },
        showRegistration: false
      },
      {
        id: 5,
        title: 'Web Development Hackathon',
        description: '24-hour coding competition with exciting prizes.',
        date: { day: '20', month: 'APR' },
        type: 'Competition',
        color: '#F44336',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Challenge your coding skills in our annual hackathon. Work in teams to create innovative web solutions. Great prizes await the winners!',
        details: {
          time: '10:00 AM (Day 1) - 10:00 AM (Day 2)',
          location: 'CCIT Computer Lab',
          seats: 40
        },
        showRegistration: true
      },
      {
        id: 6,
        title: 'Industry Expert Talk: AI in 2024',
        description: 'Insights from leading AI professionals on current trends.',
        date: { day: '28', month: 'APR' },
        type: 'Talk',
        color: '#00BCD4',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Get insights into the latest trends in Artificial Intelligence from industry experts. Perfect for students and professionals interested in AI.',
        details: {
          time: '5:30 PM - 7:00 PM',
          location: 'CCIT Seminar Hall',
          seats: 80
        },
        showRegistration: true
      },
      {
        id: 7,
        title: 'Industry Expert Talk: AI in 2024',
        description: 'Insights from leading AI professionals on current trends.',
        date: { day: '28', month: 'APR' },
        type: 'Talk',
        color: '#00BCD4',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        fullDescription: 'Get insights into the latest trends in Artificial Intelligence from industry experts. Perfect for students and professionals interested in AI.',
        details: {
          time: '5:30 PM - 7:00 PM',
          location: 'CCIT Seminar Hall',
          seats: 80
        },
        showRegistration: true
      }
    ]);

    const featuredNews = ref({
      id: 1,
      title: 'CCIT Partners with Tech Giants for Internship Program',
      excerpt: 'Exciting opportunity for our students to work with leading technology companies through our new industry partnership program.',
      date: 'March 10, 2024',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Partnership', 'Internship', 'Opportunity']
    });

    const latestNews = ref([
      {
        id: 2,
        title: 'New Cybersecurity Lab Inaugurated',
        excerpt: 'State-of-the-art cybersecurity lab with latest equipment for hands-on training.',
        date: 'March 8, 2024',
        category: 'Facilities',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        title: 'Student Wins National Coding Competition',
        excerpt: 'Our student secured first place in the National Programming Championship 2024.',
        date: 'March 5, 2024',
        category: 'Achievement',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80'
      },
      {
        id: 4,
        title: 'New Evening Batch Announcement',
        excerpt: 'Special evening batches for working professionals starting from April 2024.',
        date: 'March 3, 2024',
        category: 'Announcement',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 5,
        title: 'Scholarship Program Launched',
        excerpt: 'Merit-based scholarships available for exceptional students.',
        date: 'February 28, 2024',
        category: 'Scholarship',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]);

    const galleryCategories = ref(['All', 'Events', 'Workshops', 'Graduation', 'Students', 'Campus']);
    
    const photoGallery = ref([
      {
        id: 1,
        title: 'Python Workshop 2024',
        date: 'March 15, 2024',
        category: 'Workshops',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Students actively participating in our Python programming workshop.'
      },
      {
        id: 2,
        title: 'Graduation Ceremony',
        date: 'February 28, 2024',
        category: 'Graduation',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Happy graduates celebrating their achievement.'
      },
      {
        id: 3,
        title: 'Campus Life',
        date: 'February 25, 2024',
        category: 'Campus',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Students collaborating in our modern computer lab.'
      },
      {
        id: 4,
        title: 'Career Fair',
        date: 'February 20, 2024',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Industry professionals interacting with our students.'
      },
      {
        id: 5,
        title: 'Student Projects',
        date: 'February 15, 2024',
        category: 'Students',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Innovative projects developed by our talented students.'
      },
      {
        id: 6,
        title: 'Expert Lecture Series',
        date: 'February 10, 2024',
        category: 'Workshops',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Industry expert sharing insights with students.'
      },
      {
        id: 7,
        title: 'Hackathon Winners',
        date: 'February 5, 2024',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Celebrating our hackathon champions.'
      },
      {
        id: 8,
        title: 'New Lab Opening',
        date: 'January 30, 2024',
        category: 'Campus',
        image: 'https://images.unsplash.com/photo-1564981797816-1043664d23b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Inauguration of our new cybersecurity lab.'
      },
      {
        id: 9,
        title: 'Alumni Meetup',
        date: 'January 25, 2024',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Annual alumni gathering and networking event.'
      },
      {
        id: 10,
        title: 'Workshop Session',
        date: 'January 20, 2024',
        category: 'Workshops',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Hands-on workshop on web development.'
      }
    ]);

    // Computed
    const filteredGallery = computed(() => {
      const filtered = activeGalleryCategory.value === 'All' 
        ? photoGallery.value 
        : photoGallery.value.filter(photo => photo.category === activeGalleryCategory.value);
      
      return filtered.slice(0, visiblePhotos.value);
    });

    // Methods
    const viewEventDetails = (event) => {
      selectedEvent.value = event;
      showEventModal.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeEventModal = () => {
      showEventModal.value = false;
      document.body.style.overflow = '';
      selectedEvent.value = null;
    };

    const registerForEvent = (event) => {
      if (event.details?.seats === 0) {
        toast.warning('This event is fully booked. Please check other events.', {
          timeout: 4000,
          icon: 'fas fa-calendar-times'
        });
        return;
      }
      
      // Show registration form/modal
      toast.info(`Registration for "${event.title}" - Coming soon!`, {
        timeout: 5000,
        icon: 'fas fa-calendar-plus'
      });
    };

    const viewNewsDetails = (news) => {
      // In a real app, this would navigate to news detail page
      toast.info(`Reading: ${news.title}\n\n${news.excerpt}`, {
        timeout: 6000,
        icon: 'fas fa-newspaper',
        closeButton: true
      });
    };

    const openGalleryModal = (photo, index) => {
      selectedPhoto.value = photo;
      currentPhotoIndex.value = index;
      showGalleryModal.value = true;
      document.body.style.overflow = 'hidden';
    };

    const closeGalleryModal = () => {
      showGalleryModal.value = false;
      document.body.style.overflow = '';
      selectedPhoto.value = null;
      currentPhotoIndex.value = 0;
    };

    const prevPhoto = () => {
      if (currentPhotoIndex.value > 0) {
        currentPhotoIndex.value--;
        selectedPhoto.value = filteredGallery.value[currentPhotoIndex.value];
      }
    };

    const nextPhoto = () => {
      if (currentPhotoIndex.value < filteredGallery.value.length - 1) {
        currentPhotoIndex.value++;
        selectedPhoto.value = filteredGallery.value[currentPhotoIndex.value];
      }
    };

    const loadMorePhotos = () => {
      visiblePhotos.value += 4;
    };

    const subscribeNewsletter = () => {
      if (!newsletterEmail.value.trim()) {
        toast.error('Please enter your email address', {
          timeout: 4000,
          icon: 'fas fa-envelope'
        });
        return;
      }

      toast.success(`Thank you for subscribing! Updates will be sent to ${newsletterEmail.value}`, {
        timeout: 6000,
        icon: 'fas fa-check-circle'
      });
      
      newsletterEmail.value = '';
    };

    // Lifecycle
    onMounted(() => {
      // Welcome message
      // setTimeout(() => {
      //   toast.info('📰 Stay updated with CCIT news and events!', {
      //     timeout: 6000,
      //     icon: 'fas fa-calendar-check'
      //   });
      // }, 1000);
    });

    return {
      // State
      activeGalleryCategory,
      visiblePhotos,
      showEventModal,
      showGalleryModal,
      selectedEvent,
      selectedPhoto,
      currentPhotoIndex,
      
      // Forms
      newsletterEmail,
      
      // Data
      upcomingEvents,
      featuredNews,
      latestNews,
      galleryCategories,
      photoGallery,
      
      // Computed
      filteredGallery,
      
      // Methods
      viewEventDetails,
      closeEventModal,
      registerForEvent,
      viewNewsDetails,
      openGalleryModal,
      closeGalleryModal,
      prevPhoto,
      nextPhoto,
      loadMorePhotos,
      subscribeNewsletter
    };
  }
};
</script>

<style scoped>
/* News Hero Section */
.news-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.news-hero::before {
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
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
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
}

.hero-icon i {
  font-size: 6rem;
  color: #ff5f15;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

/* Events Section - Simplified */
.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.event-card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.event-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-date-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  min-width: 60px;
}

.date-day {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}

.date-month {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-body {
  padding: 1.5rem;
}

.type-badge {
  display: inline-block;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.event-title {
  color: var(--text-primary);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.8rem 0;
  line-height: 1.4;
}

.event-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

/* Event Modal */
.event-modal {
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

.event-content {
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

.event-details-content .event-image-large {
  height: 300px;
  overflow: hidden;
}

.event-details-content .event-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-title-large {
  color: var(--text-primary);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.event-description-large {
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-full-description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1rem;
}

.event-date-display {
  display: flex;
  align-items: center;
  color: var(--text-primary);
  font-weight: 600;
}

.event-extra-details .detail-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.event-extra-details .detail-item i {
  color: var(--accent-color);
  width: 20px;
  text-align: center;
}

/* News Section */
.featured-news {
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100%;
}

.featured-news:hover {
  transform: translateY(-5px);
}

.featured-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-news:hover .featured-image img {
  transform: scale(1.05);
}

.featured-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--accent-color);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.news-category {
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
}

.news-date {
  color: var(--text-secondary);
}

.news-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
}

.news-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.news-item {
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.news-item:hover {
  transform: translateX(5px);
}

.news-image {
  height: 150px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-item:hover .news-image img {
  transform: scale(1.1);
}

.news-content .news-title {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.news-content .news-excerpt {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Gallery Section */
.gallery-filter {
  margin-bottom: 2rem;
}

.filter-btn {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.gallery-item {
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  text-align: center;
  padding: 1rem;
}

.overlay-content h5 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

/* Newsletter Section */
.newsletter-card {
  background: linear-gradient(135deg, white 0%, white 100%);
  border-radius: 15px;
  border: 2px solid var(--border-color);
}

.newsletter-form .input-group {
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form .form-control {
  padding: 12px 20px;
  border: 2px solid var(--border-color);
  border-right: none;
  border-radius: 8px 0 0 8px;
}

.newsletter-form .btn {
  border-radius: 0 8px 8px 0;
  padding: 12px 30px;
}

.form-text {
  display: block;
  margin-top: 0.5rem;
}

/* Gallery Modal */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.gallery-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 1200px;
}

.gallery-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;
}

.gallery-main-image {
  background: black;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.gallery-main-image img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.image-caption {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
}

.image-caption h4 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.image-caption p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.gallery-navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.nav-btn:hover:not(:disabled) {
  background: var(--accent-color);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.gallery-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  flex: 1;
  padding: 0.5rem 0;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.thumbnail.active,
.thumbnail:hover {
  opacity: 1;
  transform: scale(1.1);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-icon i {
    font-size: 4rem;
  }
  
  .event-image {
    height: 180px;
  }
  
  .featured-image {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .event-title {
    font-size: 1.1rem;
  }
  
  .event-image {
    height: 150px;
  }
  
  .event-date-badge {
    padding: 8px;
    min-width: 50px;
  }
  
  .date-day {
    font-size: 1.5rem;
  }
  
  .date-month {
    font-size: 0.8rem;
  }
  
  .gallery-thumbnails {
    justify-content: center;
  }
  
  .news-content .news-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 576px) {
  .hero-icon {
    margin-top: 2rem;
  }
  
  .hero-icon i {
    font-size: 3rem;
  }
  
  .gallery-navigation {
    flex-direction: column;
  }
  
  .news-item {
    flex-direction: column;
  }
  
  .news-image {
    height: 120px;
  }
  
  .event-details-content .event-image-large {
    height: 200px;
  }
}

/* Button styles */
.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.btn-outline-primary {
  background: transparent;
  border: 2px solid #FFD700;
  color: black;
}

.btn-outline-primary:hover {
  background: black;
  color: white;
  transform: translateY(-2px);
}

/* Animation for modal entrance */
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.event-content,
.gallery-modal-content {
  animation: modalSlideIn 0.3s ease;
}

/* Common utility classes */
.text-center {
  text-align: center;
}

.text-muted {
  color: var(--text-secondary);
}

.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 2rem; }
.mt-3 { margin-top: 1rem; }
.mt-4 { margin-top: 1.5rem; }

.p-3 { padding: 1rem; }
.p-4 { padding: 1.5rem; }
.p-5 { padding: 2rem; }

.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.w-100 {
  width: 100%;
}

/* Card theme */
.card-theme {
  background: white;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-theme:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive images */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>