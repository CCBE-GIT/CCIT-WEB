import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Cambridge College of Information Technology - CCIT',
      description: 'Welcome to Cambridge College of Information Technology (CCIT) – a leading institution offering world-class IT education, industry-relevant courses, and career-focused training.',
      keywords: 'CCIT, Cambridge College of Information Technology, IT college, technology education, computer science, IT courses',
    }
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About Us | CCIT - Cambridge College of Information Technology',
      description: 'Learn about CCIT\'s mission, vision, history, and the dedicated team behind Cambridge College of Information Technology.',
      keywords: 'about CCIT, CCIT history, IT college mission, Cambridge College of Information Technology team',
    }
  },
  {
    path: '/courses',
    name: 'CoursesView',
    component: () => import('@/views/CoursesView.vue'),
    meta: {
      title: 'Courses | CCIT - Cambridge College of Information Technology',
      description: 'Explore a wide range of IT and technology courses at CCIT. From programming to networking, find the right course to launch your tech career.',
      keywords: 'IT courses, technology programs, CCIT courses, computer science programs, programming courses, networking courses',
    }
  },
  {
    path: '/facilities',
    name: 'FacilitiesView',
    component: () => import('@/views/FacilitiesView.vue'),
    meta: {
      title: 'Facilities | CCIT - Cambridge College of Information Technology',
      description: 'Discover the state-of-the-art facilities at CCIT including modern computer labs, high-speed internet, smart classrooms, and more.',
      keywords: 'CCIT facilities, computer labs, smart classrooms, IT infrastructure, college amenities',
    }
  },
  {
    path: '/careers',
    name: 'CareersView',
    component: () => import('@/views/CareersView.vue'),
    meta: {
      title: 'Careers | CCIT - Cambridge College of Information Technology',
      description: 'Explore career opportunities and job placements at CCIT. We connect graduates with top employers in the technology industry.',
      keywords: 'CCIT careers, IT jobs, tech job placement, technology careers, CCIT graduates',
    }
  },
  {
    path: '/news_event',
    name: 'NewsEventsView',
    component: () => import('@/views/NewsEventsView.vue'),
    meta: {
      title: 'News & Events | CCIT - Cambridge College of Information Technology',
      description: 'Stay updated with the latest news, upcoming events, seminars, and workshops at Cambridge College of Information Technology.',
      keywords: 'CCIT news, CCIT events, technology seminars, IT workshops, college events',
    }
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact Us | CCIT - Cambridge College of Information Technology',
      description: 'Get in touch with CCIT. Find our location, phone number, email, and contact form to reach Cambridge College of Information Technology.',
      keywords: 'contact CCIT, CCIT address, CCIT phone number, reach Cambridge College of Information Technology',
    }
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: () => import('@/views/GalleryPage.vue'),
    meta: {
      title: 'Gallery | CCIT - Cambridge College of Information Technology',
      description: 'Browse photos and media from CCIT\'s campus life, events, graduation ceremonies, and student activities.',
      keywords: 'CCIT gallery, campus photos, CCIT events photos, student life, college gallery',
    }
  },
  {
    path: '/testimonials',
    name: 'TestimonialsView',
    component: () => import('@/views/TestimonialsView.vue'),
    meta: {
      title: 'Testimonials | CCIT - Cambridge College of Information Technology',
      description: 'Read what our students and alumni say about their experience at CCIT. Real success stories from Cambridge College of Information Technology graduates.',
      keywords: 'CCIT testimonials, student reviews, alumni feedback, CCIT success stories, college reviews',
    }
  },
  {
    path: '/blogs',
    name: 'BlogsView',
    component: () => import('@/views/BlogsView.vue'),
    meta: {
      title: 'Blogs | CCIT - Cambridge College of Information Technology',
      description: 'Read the latest articles, tech insights, and educational blogs from CCIT faculty and students at Cambridge College of Information Technology.',
      keywords: 'CCIT blog, technology articles, IT insights, education blog, tech trends',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard to update meta tags on every route change
router.beforeEach((to, from, next) => {
  // Set page title
  document.title = to.meta.title || 'Cambridge College of Information Technology - CCIT'

  // Helper to update or create a <meta> tag
  const setMeta = (name, content, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  const { title, description, keywords } = to.meta

  // Standard SEO meta tags
  if (description) setMeta('description', description)
  if (keywords)    setMeta('keywords', keywords)

  // Open Graph tags (for social media sharing)
  setMeta('og:title',       title       || 'CCIT',        'property')
  setMeta('og:description', description || '',            'property')
  setMeta('og:url',         window.location.href,         'property')
  setMeta('og:type',        'website',                    'property')

  // Twitter Card tags
  setMeta('twitter:card',        'summary_large_image')
  setMeta('twitter:title',       title       || 'CCIT')
  setMeta('twitter:description', description || '')

  next()
})

export default router