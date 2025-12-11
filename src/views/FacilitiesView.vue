<template>
  <div class="facilities-view">
    <!-- Hero Section -->
    <section class="facilities-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Our <span class="highlight">Facilities</span></h1>
            <p class="lead">
              State-of-the-art learning environment designed for practical IT education.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-building"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Grid -->
    <section class="facilities-grid py-5">
      <div class="container">
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="(facility, index) in facilities" 
            :key="index"
          >
            <div class="facility-card card-theme">
              <div class="facility-icon">
                <i :class="facility.icon"></i>
              </div>
              <h3>{{ facility.title }}</h3>
              <p>{{ facility.description }}</p>
              <ul class="facility-features">
                <li v-for="(feature, idx) in facility.features" :key="idx">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">College <span class="highlight">Gallery</span></h2>
        <div class="row">
          <div class="col-md-6 mb-4" v-for="(gallery, index) in galleryItems" :key="index">
            <div class="gallery-item card-theme overflow-hidden">
              <div class="gallery-placeholder">
                <i :class="gallery.icon"></i>
              </div>
              <div class="gallery-caption p-3">
                <h4>{{ gallery.title }}</h4>
                <p class="mb-0">{{ gallery.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment & Resources -->
    <section class="equipment-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5"><span class="highlight">Equipment</span> & <span class="highlight">Resources</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="equipment-list card-theme p-4">
              <h3 class="mb-4">Our Technology Stack</h3>
              <div class="row">
                <div class="col-md-6" v-for="(resource, index) in resources" :key="index">
                  <div class="resource-item mb-3">
                    <div class="d-flex align-items-center mb-2">
                      <i :class="resource.icon" class="text-primary me-2"></i>
                      <h5 class="mb-0">{{ resource.category }}</h5>
                    </div>
                    <ul class="resource-details">
                      <li v-for="(item, idx) in resource.items" :key="idx">{{ item }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Environment -->
    <section class="environment-section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Learning <span class="highlight">Environment</span></h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="environment-features">
              <div class="row">
                <div class="col-md-6 mb-4" v-for="(feature, index) in environmentFeatures" :key="index">
                  <div class="environment-card d-flex align-items-start">
                    <div class="feature-badge me-3">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'FacilitiesView',
  data() {
    return {
      facilities: [
        {
          icon: 'fas fa-desktop',
          title: 'Modern Computer Labs',
          description: 'Fully equipped computer laboratories with the latest hardware and software.',
          features: [
            'High-performance computers',
            'Dual monitor setups',
            'High-speed internet',
            'Air-conditioned environment'
          ]
        },
        {
          icon: 'fas fa-wifi',
          title: 'High-Speed Internet',
          description: 'Dedicated fiber optic internet connection for seamless learning.',
          features: [
            '1 Gbps fiber connection',
            'Wi-Fi 6 throughout campus',
            'Dedicated servers',
            'Unlimited bandwidth'
          ]
        },
        {
          icon: 'fas fa-book',
          title: 'Digital Library',
          description: 'Access to extensive digital resources and learning materials.',
          features: [
            'E-books & online journals',
            'Video tutorials',
            'Coding platforms access',
            'Research databases'
          ]
        },
        {
          icon: 'fas fa-project-diagram',
          title: 'Project Labs',
          description: 'Dedicated spaces for group projects and collaborative work.',
          features: [
            'Team collaboration areas',
            'Presentation equipment',
            'Whiteboards & smart boards',
            'Meeting rooms'
          ]
        },
        {
          icon: 'fas fa-robot',
          title: 'Specialized Labs',
          description: 'Dedicated labs for networking, cybersecurity, and hardware.',
          features: [
            'CISCO networking equipment',
            'Cybersecurity testing lab',
            'Hardware workshop',
            'Server room'
          ]
        },
        {
          icon: 'fas fa-users',
          title: 'Student Lounge',
          description: 'Comfortable spaces for relaxation and informal learning.',
          features: [
            'Comfortable seating',
            'Snack & beverage area',
            'Group study spaces',
            'Entertainment zone'
          ]
        }
      ],
      galleryItems: [
        {
          icon: 'fas fa-laptop-house',
          title: 'Main Computer Lab',
          description: 'Our primary teaching lab with 30 high-performance workstations'
        },
        {
          icon: 'fas fa-network-wired',
          title: 'Networking Lab',
          description: 'Dedicated space for networking and hardware experiments'
        },
        {
          icon: 'fas fa-chalkboard-teacher',
          title: 'Interactive Classroom',
          description: 'Smart classroom with multimedia teaching aids'
        },
        {
          icon: 'fas fa-users',
          title: 'Collaboration Space',
          description: 'Area for group projects and team discussions'
        },
        {
          icon: 'fas fa-book-open',
          title: 'Library Corner',
          description: 'Quiet study area with reference materials'
        },
        {
          icon: 'fas fa-coffee',
          title: 'Student Lounge',
          description: 'Relaxation area for breaks and informal meetings'
        }
      ],
      resources: [
        {
          category: 'Hardware',
          icon: 'fas fa-microchip',
          items: [
            'Intel Core i7/i9 Computers',
            '16-32GB RAM Workstations',
            'NVIDIA Graphics Cards',
            'CISCO Routers & Switches'
          ]
        },
        {
          category: 'Software',
          icon: 'fas fa-code',
          items: [
            'Visual Studio Code',
            'IntelliJ IDEA',
            'Microsoft Office 365',
            'Adobe Creative Cloud'
          ]
        },
        {
          category: 'Development Tools',
          icon: 'fas fa-tools',
          items: [
            'Git & GitHub Enterprise',
            'Docker Containers',
            'Virtual Machines',
            'Cloud Platform Access'
          ]
        },
        {
          category: 'Learning Platforms',
          icon: 'fas fa-graduation-cap',
          items: [
            'Pluralsight Access',
            'LinkedIn Learning',
            'Udemy Business',
            'Custom LMS Platform'
          ]
        }
      ],
      environmentFeatures: [
        {
          icon: 'fas fa-snowflake',
          title: 'Climate Controlled',
          description: 'Air-conditioned classrooms and labs for comfortable learning'
        },
        {
          icon: 'fas fa-chair',
          title: 'Ergonomic Furniture',
          description: 'Adjustable chairs and desks designed for long study sessions'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Secure Environment',
          description: '24/7 security and CCTV surveillance for student safety'
        },
        {
          icon: 'fas fa-car',
          title: 'Ample Parking',
          description: 'Safe and convenient parking facilities for students'
        },
        {
          icon: 'fas fa-wheelchair',
          title: 'Accessibility',
          description: 'Wheelchair accessible facilities and restrooms'
        },
        {
          icon: 'fas fa-first-aid',
          title: 'First Aid',
          description: 'Fully equipped first aid room with trained staff'
        }
      ]
    }
  }
}
</script>

<style scoped>
.facilities-hero {
  background: linear-gradient(135deg, black 0%, black 100%);
  color: white;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #ff6b35 0%, #ffa500 50%, #ff8c00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.hero-icon {
  font-size: 6rem;
  color: #ff8c00;
}

.facility-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-10px);
}

.facility-icon {
  font-size: 3rem;
  color: #ff8c00;
  margin-bottom: 1.5rem;
}

.facility-card h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.facility-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.facility-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.facility-features li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.facility-features i {
  color: #ff8c00;
  margin-right: 10px;
  flex-shrink: 0;
}

.gallery-item {
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-placeholder {
  height: 200px;
  background: linear-gradient(135deg, black 0%, #ff8c00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
}

.gallery-caption h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.gallery-caption p {
  color: var(--text-secondary);
  margin: 0;
}

.equipment-list {
  border-radius: 15px;
}

.resource-item h5 {
  color: var(--text-primary);
  font-size: 1.1rem;
}

.resource-details {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.resource-details li {
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  padding-left: 1.5rem;
  position: relative;
}

.resource-details li:before {
  content: "•";
  color: var(--accent-color);
  position: absolute;
  left: 0;
}

.environment-card {
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.environment-card:hover {
  transform: translateX(5px);
}

.feature-badge {
  width: 50px;
  height: 50px;
  background: #ff8c00;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.environment-card h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.environment-card p {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
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
  
  .facility-features {
    text-align: center;
  }
  
  .facility-features li {
    justify-content: center;
  }
}
</style>