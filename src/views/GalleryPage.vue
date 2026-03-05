<template>
  <div class="gallery-page">
    <!-- Hero Section (unchanged) -->
    <section class="gallery-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Our <span class="highlight">Gallery</span></h1>
            <p class="lead">
              Take a visual tour of our campus, facilities, events, and student life.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-camera-retro"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Categories (unchanged) -->
    <section class="gallery-categories py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="category-filters text-center">
              <button 
                v-for="(category, index) in categories" 
                :key="index"
                class="category-btn"
                :class="{ active: activeCategory === category.value }"
                @click="activeCategory = category.value"
              >
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid - UPDATED to show multiple images indicator -->
    <section class="gallery-grid py-4">
      <div class="container">
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="(image, index) in filteredImages" 
            :key="index"
          >
            <div class="gallery-item card-theme" @click="openLightbox(image.images, 0)">
              <div class="gallery-image-wrapper">
                <!-- Show first image if available, otherwise placeholder -->
                <div v-if="image.images && image.images.length > 0" class="gallery-image-container">
                  <img 
                    :src="image.images[0].url" 
                    :alt="image.title"
                    class="gallery-image"
                    loading="lazy"
                    @error="handleImageError"
                  >
                  <!-- Multiple images badge -->
                  <div v-if="image.images.length > 1" class="image-count-badge">
                    <i class="fas fa-images"></i> {{ image.images.length }}
                  </div>
                </div>
                <div v-else class="gallery-placeholder" :style="{ background: image.gradient }">
                  <i :class="image.icon"></i>
                </div>
                <div class="gallery-overlay">
                  <div class="overlay-content">
                    <i class="fas fa-search-plus"></i>
                    <span>Click to view {{ image.images ? image.images.length : 1 }} photo{{ image.images && image.images.length > 1 ? 's' : '' }}</span>
                  </div>
                </div>
              </div>
              <div class="gallery-caption p-3">
                <h4>{{ image.title }}</h4>
                <p class="mb-0">{{ image.description }}</p>
                <div class="gallery-meta mt-2">
                  <span class="meta-item">
                    <i class="far fa-calendar-alt"></i> {{ image.date }}
                  </span>
                  <!-- <span class="meta-item">
                    <i class="far fa-user"></i> {{ image.photographer }}
                  </span> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button (unchanged) -->
        <div class="text-center mt-4" v-if="hasMoreImages">
          <button class="btn-load-more" @click="loadMore">
            Load More <i class="fas fa-arrow-down ms-2"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Campus Tour (unchanged) -->
    <section class="campus-tour py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Virtual <span class="highlight">Campus Tour</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="tour-card card-theme overflow-hidden">
              <div class="tour-video-placeholder">
                <i class="fas fa-play-circle"></i>
                <span>Take a 360° Virtual Tour</span>
              </div>
              <div class="tour-info p-4">
                <div class="row">
                  <div class="col-md-4 text-center mb-3 mb-md-0" v-for="(stop, index) in tourStops" :key="index">
                    <div class="tour-stop">
                      <div class="stop-icon mb-2">
                        <i :class="stop.icon"></i>
                      </div>
                      <h5>{{ stop.name }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Life Gallery - UPDATED -->
    <section class="student-life py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Student <span class="highlight">Life</span></h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="student-life-grid">
              <div class="row">
                <div class="col-md-4 col-6 mb-3" v-for="(moment, index) in studentLife" :key="index">
                  <div class="moment-card" @click="openLightbox(moment.images, 0)">
                    <div class="moment-image-container">
                      <img 
                        v-if="moment.images && moment.images[0]"
                        :src="moment.images[0].url"
                        :alt="moment.title"
                        class="moment-image"
                        loading="lazy"
                      >
                      <div v-else class="moment-placeholder" :style="{ background: moment.gradient }">
                        <i :class="moment.icon"></i>
                      </div>
                      <div v-if="moment.images && moment.images.length > 1" class="moment-count">
                        +{{ moment.images.length }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal - UPDATED for multiple images -->
    <div class="lightbox-modal" v-if="lightboxOpen" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        <button class="lightbox-nav prev" @click="prevImage" v-if="currentImageIndex > 0">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="lightbox-image-container">
          <img 
            v-if="currentImage && currentImage.url"
            :src="currentImage.url" 
            :alt="currentImage.title || 'Gallery image'"
            class="lightbox-image"
          >
          <div v-else class="lightbox-placeholder" :style="{ background: currentImage.gradient }">
            <i :class="currentImage.icon || 'fas fa-image'"></i>
          </div>
          <div class="lightbox-caption" v-if="currentImage.title || currentImage.description">
            <h4 v-if="currentImage.title">{{ currentImage.title }}</h4>
            <p v-if="currentImage.description">{{ currentImage.description }}</p>
            <div class="lightbox-meta" v-if="currentImage.date || currentImage.photographer">
              <span v-if="currentImage.date"><i class="far fa-calendar-alt"></i> {{ currentImage.date }}</span>
              <span v-if="currentImage.photographer"><i class="far fa-user"></i> {{ currentImage.photographer }}</span>
            </div>
          </div>
          <div class="lightbox-counter" v-if="currentImageSet.length > 1">
            {{ currentImageIndex + 1 }} / {{ currentImageSet.length }}
          </div>
        </div>
        <button class="lightbox-nav next" @click="nextImage" v-if="currentImageIndex < currentImageSet.length - 1">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'GalleryPage',
  data() {
    return {
      activeCategory: 'all',
      visibleImages: 9,
      lightboxOpen: false,
      currentImageSet: [],
      currentImageIndex: 0,
      categories: [
        // { label: 'All Photos', value: 'all' },
        // { label: 'Campus', value: 'campus' },
        // { label: 'Labs', value: 'labs' },
        // { label: 'Events', value: 'events' },
        // { label: 'Student Life', value: 'student-life' },
        // { label: 'Graduation', value: 'graduation' }
      ],
      
      // UPDATED: allImages now with multiple images per item
      allImages: [
        // Campus Category - with multiple images
        {
          title: 'Cambrians Day',
          description: 'Celebrating Unity, Talent & the Spirit of Cambrians',
          // category: 'campus',
          icon: 'fas fa-university',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          date: '2026',
          // photographer: 'Campus Media Team',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9732.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE6.jpeg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9882.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9410.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9429.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0003.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410643.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419664.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410494.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0301.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410017.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410292.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0047.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0859.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0904.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410295.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9853.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0155.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D411555.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
             {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410469.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
             {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9910.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
             {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410911.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419741.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419672.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9412.jpg',
              title: 'Cambrians Day',
              description: '',
              date: '2026',
              // photographer: 'Sarah Johnson'
            }
          ]
        },
        {
          title: 'Staff Wellness & Medical Screening Program',
          description: 'Caring for Our Team, Building a Healthier CCBE',
          // category: 'campus',
          icon: 'fas fa-tree',
          gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          date: '2025',
          // photographer: 'Student Photography Club',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/8.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE4.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/5.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/10.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
             {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/3.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
             {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/4.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/9.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/WhatsApp%20Image%202026-02-23%20at%202.38.15%20PM.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/2.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/6.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/WhatsApp%20Image%202026-02-23%20at%203.03.59%20PM.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/7.jpeg',
              title: 'Staff Wellness & Medical Screening Program',
              description: '',
              date: '2025',
              // photographer: 'Maria Garcia'
            },
          ]
        },
        {
          title: 'A Decade of Dedication',
          description: 'CCBE - 10th Anniversary Celebration',
          // category: 'campus',
          icon: 'fas fa-book',
          gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
          date: '2025',
          // photographer: 'John Smith',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/u3wbiya66/Highlights/2.jpg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/4.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/WhatsApp%20Image%202026-02-23%20at%203.25.57%20PM.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/6.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/3.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/2.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/5.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Dedication/7.jpeg',
              title: 'A Decade of Dedication',
              description: '',
              date: '2025',
              // photographer: 'John Smith'
            },
          ]
        },
        // {
        //   title: 'Campus Garden',
        //   description: 'Peaceful garden area for relaxation and study',
        //   // category: 'campus',
        //   icon: 'fas fa-leaf',
        //   gradient: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)',
        //   date: 'Apr 5, 2024',
        //   // photographer: 'Maria Garcia',
        //   featured: false,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/campus/garden-1.jpg',
        //       title: 'Garden Overview',
        //       description: 'Main garden area with benches',
        //       date: 'Apr 5, 2024',
        //       // photographer: 'Maria Garcia'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/campus/garden-2.jpg',
        //       title: 'Flower Garden',
        //       description: 'Colorful flowers in bloom',
        //       date: 'Apr 5, 2024',
        //       // photographer: 'Maria Garcia'
        //     }
        //   ]
        // },
        {
          title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
          description: 'ස්වර්ණමාලි මහා සෑය – අනුරාධපුරය',
          // category: 'campus',
          icon: 'fas fa-futbol',
          gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
          date: '2025',
          // photographer: 'Sports Club',
          featured: false,
          images: [
            {
              url: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE5.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/6.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/3.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/16.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/5.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/17.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/8.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/2.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/9.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/4.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/15.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/11.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/1.jpeg',
              title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
              description: '',
              date: '2025',
              // photographer: 'Sports Club'
            }
          ]
        },
        
        // Labs Category - with multiple images
        {
          title: 'Computer Lab A',
          description: 'Modern computer lab with 30 high-performance workstations',
          // category: 'labs',
          icon: 'fas fa-desktop',
          gradient: 'linear-gradient(135deg, #2980b9 0%, #6dd5fa 100%)',
          date: 'Feb 20, 2024',
          // photographer: 'Tech Department',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/computer-lab-1.jpg',
              title: 'Main Lab Area',
              description: 'Overview of the main computer lab',
              date: 'Feb 20, 2024',
              // photographer: 'Tech Department'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/computer-lab-2.jpg',
              title: 'Workstations',
              description: 'Individual workstations with dual monitors',
              date: 'Feb 20, 2024',
              // photographer: 'Tech Department'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/computer-lab-3.jpg',
              title: 'Teaching Area',
              description: 'Instructor station with projection system',
              date: 'Feb 21, 2024',
              // photographer: 'Tech Department'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/computer-lab-4.jpg',
              title: 'Collaboration Zone',
              description: 'Group work area with whiteboards',
              date: 'Feb 21, 2024',
              // photographer: 'Tech Department'
            }
          ]
        },
        // {
        //   title: 'Robotics Lab',
        //   description: 'Students working on robotics projects',
        //   // category: 'labs',
        //   icon: 'fas fa-robot',
        //   gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
        //   date: 'Mar 5, 2024',
        //   // photographer: 'Robotics Club',
        //   featured: true,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/robotics-1.jpg',
        //       title: 'Robotics Lab Overview',
        //       description: 'Full view of the robotics workspace',
        //       date: 'Mar 5, 2024',
        //       // photographer: 'Robotics Club'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/robotics-2.jpg',
        //       title: 'Robot Assembly',
        //       description: 'Students assembling robot components',
        //       date: 'Mar 5, 2024',
        //       // photographer: 'Robotics Club'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/robotics-3.jpg',
        //       title: 'Programming Station',
        //       description: 'Coding and testing area',
        //       date: 'Mar 6, 2024',
        //       // photographer: 'Robotics Club'
        //     }
        //   ]
        // },
        {
          title: 'Networking Lab',
          description: 'CISCO networking equipment setup',
          // category: 'labs',
          icon: 'fas fa-network-wired',
          gradient: 'linear-gradient(135deg, #ff0084 0%, #33001b 100%)',
          date: 'Mar 18, 2024',
          // photographer: 'Network Team',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/networking-1.jpg',
              title: 'Network Racks',
              description: 'CISCO equipment in server racks',
              date: 'Mar 18, 2024',
              // photographer: 'Network Team'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/networking-2.jpg',
              title: 'Configuration Stations',
              description: 'Workstations for network configuration',
              date: 'Mar 18, 2024',
              // photographer: 'Network Team'
            }
          ]
        },
        {
          title: 'Hardware Workshop',
          description: 'Students learning hardware assembly',
          // category: 'labs',
          icon: 'fas fa-microchip',
          gradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
          date: 'Apr 2, 2024',
          // photographer: 'Workshop Instructor',
          featured: false,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/hardware-1.jpg',
              title: 'Hardware Workshop',
              description: 'Students working on hardware projects',
              date: 'Apr 2, 2024',
              // photographer: 'Workshop Instructor'
            }
          ]
        },
        // {
        //   title: 'VR Lab',
        //   description: 'Virtual reality development setup',
        //   // category: 'labs',
        //   icon: 'fas fa-vr-cardboard',
        //   gradient: 'linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)',
        //   date: 'Apr 8, 2024',
        //   // photographer: 'VR Team',
        //   featured: false,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/vr-1.jpg',
        //       title: 'VR Setup',
        //       description: 'VR headsets and tracking area',
        //       date: 'Apr 8, 2024',
        //       // photographer: 'VR Team'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/labs/vr-2.jpg',
        //       title: 'Development Stations',
        //       description: 'Workstations for VR development',
        //       date: 'Apr 8, 2024',
        //       // photographer: 'VR Team'
        //     }
        //   ]
        // },
        
        // Events Category - with multiple images
        // {
        //   title: 'Hackathon 2024',
        //   description: 'Annual coding competition with 200+ participants',
        //   // category: 'events',
        //   icon: 'fas fa-laptop-code',
        //   gradient: 'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
        //   date: 'Jan 28, 2024',
        //   // photographer: 'Event Team',
        //   featured: true,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
        //       title: 'Opening Ceremony',
        //       description: 'Kickoff of Hackathon 2024',
        //       date: 'Jan 28, 2024',
        //       // photographer: 'Event Team'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
        //       title: 'Teams Coding',
        //       description: 'Participants working on projects',
        //       date: 'Jan 28, 2024',
        //       // photographer: 'Event Team'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/hackathon-3.jpg',
        //       title: 'Mentor Session',
        //       description: 'Mentors helping teams',
        //       date: 'Jan 29, 2024',
        //       // photographer: 'Event Team'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/hackathon-4.jpg',
        //       title: 'Project Presentations',
        //       description: 'Teams presenting their projects',
        //       date: 'Jan 29, 2024',
        //       // photographer: 'Event Team'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/hackathon-5.jpg',
        //       title: 'Award Ceremony',
        //       description: 'Winners announced',
        //       date: 'Jan 30, 2024',
        //       // photographer: 'Event Team'
        //     }
        //   ]
        // },
        {
          title: 'Career Fair',
          description: 'Tech companies recruiting our students',
          // category: 'events',
          icon: 'fas fa-briefcase',
          gradient: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
          date: 'Feb 15, 2024',
          // photographer: 'Career Services',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/career-fair-1.jpg',
              title: 'Company Booths',
              description: 'Employers setting up booths',
              date: 'Feb 15, 2024',
              // photographer: 'Career Services'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/career-fair-2.jpg',
              title: 'Networking',
              description: 'Students networking with recruiters',
              date: 'Feb 15, 2024',
              // photographer: 'Career Services'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/career-fair-3.jpg',
              title: 'Interview Sessions',
              description: 'On-site interviews',
              date: 'Feb 16, 2024',
              // photographer: 'Career Services'
            }
          ]
        },
        // {
        //   title: 'Guest Lecture',
        //   description: 'Industry expert speaking about AI trends',
        //   // category: 'events',
        //   icon: 'fas fa-chalkboard-teacher',
        //   gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        //   date: 'Mar 22, 2024',
        //   // photographer: 'Academic Affairs',
        //   featured: true,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/guest-lecture-1.jpg',
        //       title: 'Speaker Session',
        //       description: 'Guest speaker presenting',
        //       date: 'Mar 22, 2024',
        //       // photographer: 'Academic Affairs'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/guest-lecture-2.jpg',
        //       title: 'Audience',
        //       description: 'Students attending the lecture',
        //       date: 'Mar 22, 2024',
        //       // photographer: 'Academic Affairs'
        //     }
        //   ]
        // },
        {
          title: 'Tech Symposium',
          description: 'Student research presentations',
          // category: 'events',
          icon: 'fas fa-microphone-alt',
          gradient: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)',
          date: 'Apr 1, 2024',
          // photographer: 'Research Dept',
          featured: false,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/events/symposium-1.jpg',
              title: 'Presentations',
              description: 'Students presenting research',
              date: 'Apr 1, 2024',
              // photographer: 'Research Dept'
            }
          ]
        },
        
        // Student Life Category - with multiple images
        {
          title: 'Study Group',
          description: 'Students collaborating on a project',
          // category: 'student-life',
          icon: 'fas fa-users',
          gradient: 'linear-gradient(135deg, #ff4b1f 0%, #1fddff 100%)',
          date: 'Feb 10, 2024',
          // photographer: 'Student Life',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/study-group-1.jpg',
              title: 'Group Study',
              description: 'Students working together',
              date: 'Feb 10, 2024',
              // photographer: 'Student Life'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/study-group-2.jpg',
              title: 'Discussion',
              description: 'Active discussion session',
              date: 'Feb 10, 2024',
              // photographer: 'Student Life'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/study-group-3.jpg',
              title: 'Whiteboard Session',
              description: 'Planning on whiteboard',
              date: 'Feb 11, 2024',
              // photographer: 'Student Life'
            }
          ]
        },
        // {
        //   title: 'Cafeteria',
        //   description: 'Students enjoying lunch together',
        //   // category: 'student-life',
        //   icon: 'fas fa-utensils',
        //   gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        //   date: 'Mar 12, 2024',
        //   // photographer: 'Campus Life',
        //   featured: true,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/cafeteria-1.jpg',
        //       title: 'Lunch Time',
        //       description: 'Busy cafeteria during lunch',
        //       date: 'Mar 12, 2024',
        //       // photographer: 'Campus Life'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/cafeteria-2.jpg',
        //       title: 'Food Court',
        //       description: 'Various food options',
        //       date: 'Mar 12, 2024',
        //       // photographer: 'Campus Life'
        //     }
        //   ]
        // },
        {
          title: 'Sports Day',
          description: 'Annual sports competition',
          // category: 'student-life',
          icon: 'fas fa-running',
          gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
          date: 'Mar 25, 2024',
          // photographer: 'Sports Club',
          featured: false,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/sports-day-1.jpg',
              title: 'Race Event',
              description: 'Students participating in races',
              date: 'Mar 25, 2024',
              // photographer: 'Sports Club'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/sports-day-2.jpg',
              title: 'Award Ceremony',
              description: 'Winners receiving medals',
              date: 'Mar 25, 2024',
              // photographer: 'Sports Club'
            }
          ]
        },
        
        // Graduation Category - with multiple images
        {
          title: 'Graduation Ceremony',
          description: 'Class of 2024 graduation day',
          // category: 'graduation',
          icon: 'fas fa-graduation-cap',
          gradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
          date: 'Dec 15, 2023',
          // photographer: 'Official Photographer',
          featured: true,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/ceremony-1.jpg',
              title: 'Procession',
              description: 'Graduates walking in',
              date: 'Dec 15, 2023',
              // photographer: 'Official Photographer'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/ceremony-2.jpg',
              title: 'Degree Presentation',
              description: 'Receiving diplomas',
              date: 'Dec 15, 2023',
              // photographer: 'Official Photographer'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/ceremony-3.jpg',
              title: 'Group Photo',
              description: 'Class of 2024 group photo',
              date: 'Dec 15, 2023',
              // photographer: 'Official Photographer'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/ceremony-4.jpg',
              title: 'Family Moments',
              description: 'Graduates with families',
              date: 'Dec 15, 2023',
              // photographer: 'Official Photographer'
            }
          ]
        },
        // {
        //   title: 'Cap Throwing',
        //   description: 'Graduates celebrating their achievement',
        //   // category: 'graduation',
        //   icon: 'fas fa-hat-wizard',
        //   gradient: 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)',
        //   date: 'Dec 15, 2023',
        //   // photographer: 'Official Photographer',
        //   featured: true,
        //   images: [
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/cap-throw-1.jpg',
        //       title: 'Cap Toss',
        //       description: 'Traditional cap throwing moment',
        //       date: 'Dec 15, 2023',
        //       // photographer: 'Official Photographer'
        //     },
        //     {
        //       url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/cap-throw-2.jpg',
        //       title: 'Celebration',
        //       description: 'Graduates celebrating',
        //       date: 'Dec 15, 2023',
        //       // photographer: 'Official Photographer'
        //     }
        //   ]
        // },
        {
          title: 'Award Winners',
          description: 'Students receiving academic excellence awards',
          // category: 'graduation',
          icon: 'fas fa-award',
          gradient: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
          date: 'Dec 16, 2023',
          // photographer: 'Academic Office',
          featured: false,
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/graduation/awards-1.jpg',
              title: 'Award Ceremony',
              description: 'Students receiving awards',
              date: 'Dec 16, 2023',
              // photographer: 'Academic Office'
            }
          ]
        }
      ],
      
      albums: [ /* unchanged */ ],
      tourStops: [ /* unchanged */ ],
      eventHighlights: [ /* unchanged */ ],
      
      // UPDATED: studentLife with multiple images
      studentLife: [
        {
          title: 'Campus Events',
          icon: 'fas fa-calendar-alt',
          gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/6.jpeg',
              //title: ''
            },
            // {
            //   url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/event-2.jpg',
            //   title: 'Cultural Fest'
            // },
            // {
            //   url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/event-3.jpg',
            //   title: 'Movie Night'
            // }
          ]
        },
        {
          title: 'Coffee Breaks',
          icon: 'fas fa-coffee',
          gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/4.jpeg',
              //title: ''
            },
            // {
            //   url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
            //   title: 'Study Break'
            // }
          ]
        },
        {
          title: 'Fun Moments',
          icon: 'fas fa-laugh',
          gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/7.jpeg',
              //title: 'Game Night'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/1.jpeg',
              //title: 'Picnic'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/2.jpeg',
              //title: 'Talent Show'
            },
            // {
            //   url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/fun-4.jpg',
            //   title: 'Dance Party'
            // }
          ]
        },
        {
          title: 'Food & Dining',
          icon: 'fas fa-pizza-slice',
          gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/3.jpeg',
              //title: 'Food Festival'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/7.jpeg',
              //title: 'Cooking Class'
            }
          ]
        },
        {
          title: 'Gaming Zone',
          icon: 'fas fa-gamepad',
          gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/9.jpeg',
              //title: 'Gaming Tournament'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/gaming-2.jpg',
              title: 'Console Gaming'
            }
          ]
        },
        {
          title: 'Music Club',
          icon: 'fas fa-headphones',
          gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
          images: [
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/5.jpeg',
              //title: 'Band Practice'
            },
            {
              url: 'https://ik.imagekit.io/kp5tixhur/ccit-web/ccit-student/8.jpeg',
              //title: 'Open Mic Night'
            },
            // {
            //   url: 'https://ik.imagekit.io/kp5tixhur/gallery/student-life/music-3.jpg',
            //   title: 'Music Festival'
            // }
          ]
        }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.activeCategory === 'all') {
        return this.allImages.slice(0, this.visibleImages);
      }
      return this.allImages
        .filter(img => img.category === this.activeCategory)
        .slice(0, this.visibleImages);
    },
    fullImages() {
      if (this.activeCategory === 'all') {
        return this.allImages;
      }
      return this.allImages.filter(img => img.category === this.activeCategory);
    },
    currentImage() {
      return this.currentImageSet[this.currentImageIndex] || {};
    },
    hasMoreImages() {
      if (this.activeCategory === 'all') {
        return this.visibleImages < this.allImages.length;
      }
      return this.visibleImages < this.allImages.filter(img => img.category === this.activeCategory).length;
    }
  },
  methods: {
    loadMore() {
      this.visibleImages += 6;
    },
    openLightbox(images, index = 0) {
      this.currentImageSet = images || [];
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = 'auto';
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.currentImageSet.length - 1) {
        this.currentImageIndex++;
      }
    },
    openAlbum(album) {
      console.log('Opening album:', album.title);
    },
    viewEventGallery(event) {
      console.log('Viewing event gallery:', event.title);
    },
    handleImageError(event) {
      event.target.src = 'https://ik.imagekit.io/kp5tixhur/gallery/placeholder.jpg';
      event.target.classList.add('image-error');
    }
  },
  watch: {
    activeCategory() {
      this.visibleImages = 9;
    }
  }
}
</script>

<style scoped>
.gallery-hero {
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

/* Add these new styles to your existing CSS */

.gallery-image-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.image-count-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.image-count-badge i {
  font-size: 0.8rem;
}

.moment-image-container {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
}

.moment-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.moment-card:hover .moment-image {
  transform: scale(1.1);
}

.moment-count {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
}

.lightbox-counter {
  position: absolute;
  top: -40px;
  left: 0;
  color: white;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 1rem;
  border-radius: 20px;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
}

.category-btn {
  padding: 0.6rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 50px;
  background: transparent;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  color: #ff5f15;
  border-color: #ff5f15;
}

.category-btn.active {
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  color: white;
  border-color: transparent;
}

.gallery-item {
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100%;
}

.gallery-item:hover {
  transform: translateY(-10px);
}

.gallery-image-wrapper {
  position: relative;
  overflow: hidden;
}

.gallery-placeholder {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  position: relative;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-placeholder {
  transform: scale(1.1);
}

.image-label {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  text-align: center;
  color: white;
}

.overlay-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.overlay-content span {
  font-size: 0.9rem;
}

.gallery-caption {
  background: var(--card-bg);
}

.gallery-caption h4 {
  color: var(--text-primary);
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
}

.gallery-caption p {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.gallery-meta {
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.meta-item i {
  margin-right: 0.3rem;
  color: #ff5f15;
}

.btn-load-more {
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-load-more:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 95, 21, 0.3);
}

.album-card {
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100%;
}

.album-card:hover {
  transform: translateY(-10px);
}

.album-cover {
  position: relative;
}

.album-placeholder {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
}

.photo-count {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.album-info h4 {
  color: var(--text-primary);
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.album-date {
  color: #ff5f15;
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
}

.album-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
}

.tour-card {
  border-radius: 15px;
}

.tour-video-placeholder {
  height: 300px;
  background: linear-gradient(135deg, black 0%, #ff5f15 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.tour-video-placeholder:hover {
  transform: scale(1.02);
}

.tour-video-placeholder i {
  font-size: 5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.tour-stop {
  padding: 1rem;
  border-radius: 10px;
  background: var(--card-bg);
  transition: transform 0.3s ease;
}

.tour-stop:hover {
  transform: translateY(-5px);
}

.stop-icon {
  font-size: 2rem;
  color: #ff5f15;
}

.tour-stop h5 {
  color: var(--text-primary);
  font-size: 1rem;
  margin: 0;
}

.event-card {
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-image-placeholder {
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
}

.event-date-badge {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.event-details h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.event-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.event-stats {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.event-stats i {
  color: #ff5f15;
}

.btn-view-gallery {
  background: transparent;
  border: none;
  color: #ff5f15;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.btn-view-gallery:hover {
  transform: translateX(5px);
}

.student-life-grid {
  margin: 0 -0.5rem;
}

.moment-card {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.moment-card:hover {
  transform: scale(1.05);
}

.moment-placeholder {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
}

.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1001;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav.prev {
  left: 10px;
}

.lightbox-nav.next {
  right: 10px;
}

.lightbox-image-container {
  text-align: center;
}

.lightbox-placeholder {
  width: 800px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8rem;
  border-radius: 10px;
}

.lightbox-caption {
  position: absolute;
  bottom: -80px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
}

.lightbox-caption h4 {
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
}

.lightbox-caption p {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.lightbox-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  opacity: 0.8;
}

.lightbox-meta i {
  margin-right: 0.3rem;
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
  
  .category-btn {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
  
  .gallery-placeholder {
    height: 200px;
    font-size: 3rem;
  }
  
  .lightbox-placeholder {
    width: 300px;
    height: 200px;
    font-size: 4rem;
  }
  
  .lightbox-caption {
    bottom: -100px;
  }
  
  .lightbox-nav {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
  
  .tour-video-placeholder {
    height: 200px;
    font-size: 1.5rem;
  }
  
  .tour-video-placeholder i {
    font-size: 3rem;
  }
  
  .moment-placeholder {
    height: 100px;
    font-size: 1.8rem;
  }
}
</style>