<template>
  <div class="blog-view">
    <!-- Hero Section - Simple style like Testimonials -->
    <section class="blog-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">Our <span class="highlight">Blog</span></h1>
            <p class="lead">
              Explore the latest in technology, cybersecurity trends, and student life at CCIT.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <div class="hero-icon">
              <i class="fas fa-newspaper"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search Bar - Moved below hero -->
    <section class="search-section py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="search-wrapper">
              <div class="search-container">
                <i class="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  class="search-input" 
                  placeholder="Search articles..."
                  v-model="searchQuery"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="blog-categories py-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="category-tabs d-flex justify-content-center flex-wrap gap-3">
              <button 
                v-for="category in categories" 
                :key="category.id"
                :class="['category-tab', { 'active': activeCategory === category.id }]"
                @click="activeCategory = category.id"
              >
                <i :class="category.icon" class="me-2"></i>
                {{ category.name }}
                <span class="category-count">{{ getCategoryCount(category.id) }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="featured-section py-5" v-if="featuredArticle">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="section-subtitle mb-4">
              <i class="fas fa-star text-gold me-2"></i> Featured Article
            </h3>
            <div class="featured-card" @click="readArticle(featuredArticle)">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="featured-image-wrapper">
                    <img 
                      :src="featuredArticle.image" 
                      :alt="featuredArticle.title"
                      class="featured-image"
                    >
                    <div class="featured-category" :class="featuredArticle.category">
                      <i :class="getCategoryIcon(featuredArticle.category)"></i>
                      <span>{{ getCategoryLabel(featuredArticle.category) }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="featured-content p-4 p-lg-5">
                    <div class="article-meta mb-3">
                      <span class="meta-date">
                        <i class="far fa-calendar-alt me-2"></i>{{ featuredArticle.date }}
                      </span>
                      <span class="meta-read ms-3">
                        <i class="far fa-clock me-2"></i>{{ featuredArticle.readTime }} min read
                      </span>
                    </div>
                    <h2 class="featured-title">{{ featuredArticle.title }}</h2>
                    <p class="featured-excerpt">{{ featuredArticle.excerpt }}</p>
                    
                    <div class="article-author d-flex align-items-center mt-4">
                      <img 
                        :src="featuredArticle.author.avatar" 
                        :alt="featuredArticle.author.name"
                        class="author-avatar me-3"
                      >
                      <div>
                        <div class="author-name">{{ featuredArticle.author.name }}</div>
                        <div class="author-role">{{ featuredArticle.author.role }}</div>
                      </div>
                    </div>
                    
                    <button class="btn-read-more mt-4">
                      Read Full Article <i class="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="blog-grid py-5 bg-light">
      <div class="container">
        <div class="row">
          <div 
            class="col-lg-4 col-md-6 mb-4" 
            v-for="article in filteredArticles" 
            :key="article.id"
          >
            <div class="blog-card h-100">
              <div class="blog-image-wrapper">
                <img 
                  :src="article.image" 
                  :alt="article.title"
                  class="blog-image"
                >
                <span class="blog-category" :class="article.category">
                  <i :class="getCategoryIcon(article.category)"></i>
                  {{ getCategoryLabel(article.category) }}
                </span>
              </div>
              
              <div class="blog-body p-4">
                <div class="blog-meta d-flex justify-content-between mb-3">
                  <span class="meta-date">
                    <i class="far fa-calendar-alt me-1"></i>{{ article.date }}
                  </span>
                  <span class="meta-read">
                    <i class="far fa-clock me-1"></i>{{ article.readTime }} min
                  </span>
                </div>
                
                <h3 class="blog-title mb-3">{{ article.title }}</h3>
                <p class="blog-excerpt mb-4">{{ article.excerpt }}</p>
                
                <div class="blog-footer d-flex justify-content-between align-items-center">
                  <div class="blog-author d-flex align-items-center">
                    <img 
                      :src="article.author.avatar" 
                      :alt="article.author.name"
                      class="author-thumb me-2"
                    >
                    <span>{{ article.author.name }}</span>
                  </div>
                  
                  <button class="btn-read" @click="readArticle(article)">
                    Read <i class="fas fa-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-5" v-if="hasMoreArticles">
          <button class="btn-load-more" @click="loadMore">
            <i class="fas fa-sync-alt me-2"></i> Load More Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Popular Tags -->
    <section class="popular-tags py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Popular <span class="highlight">Topics</span></h2>
        <div class="tags-cloud text-center">
          <span 
            v-for="(tag, index) in popularTags" 
            :key="index"
            class="tag-cloud-item"
            @click="filterByTag(tag.name)"
          >
            #{{ tag.name }}
            <span class="tag-count">{{ tag.count }}</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <!-- <section class="newsletter-section py-5 bg-light">
      <div class="container">
        <div class="newsletter-card">
          <div class="row align-items-center">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="newsletter-title mb-4">
                Subscribe to Our <span class="highlight">Newsletter</span>
              </h2>
              <p class="newsletter-description mb-4">
                Get the latest tech insights, cybersecurity tips, and student stories delivered directly to your inbox.
              </p>
              
              <div class="newsletter-form">
                <div class="input-group">
                  <input 
                    type="email" 
                    class="form-control" 
                    placeholder="Enter your email address"
                    v-model="newsletterEmail"
                  >
                  <button class="btn-subscribe" @click="subscribeNewsletter">
                    Subscribe <i class="fas fa-paper-plane ms-2"></i>
                  </button>
                </div>
                <p class="form-text mt-3">
                  <i class="fas fa-shield-alt me-2"></i>
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Article Popup Modal -->
    <transition name="modal-fade">
      <div class="article-modal-overlay" v-if="selectedArticle" @click.self="closeArticle">
        <div class="article-modal">
          <!-- Modal Close Button -->
          <button class="modal-close-btn" @click="closeArticle">
            <i class="fas fa-times"></i>
          </button>

          <!-- Modal Hero Image -->
          <div class="modal-hero-image">
            <img :src="selectedArticle.image" :alt="selectedArticle.title">
            <div class="modal-image-overlay"></div>
            <span class="modal-category-badge" :class="selectedArticle.category">
              <i :class="getCategoryIcon(selectedArticle.category)"></i>
              {{ getCategoryLabel(selectedArticle.category) }}
            </span>
          </div>

          <!-- Modal Content -->
          <div class="modal-content-body">
            <!-- Article Meta -->
            <div class="modal-meta d-flex align-items-center flex-wrap gap-3 mb-4">
              <span class="meta-date">
                <i class="far fa-calendar-alt me-2"></i>{{ selectedArticle.date }}
              </span>
              <span class="meta-read">
                <i class="far fa-clock me-2"></i>{{ selectedArticle.readTime }} min read
              </span>
              <span class="meta-tags ms-auto d-flex flex-wrap gap-2">
                <span 
                  v-for="tag in selectedArticle.tags" 
                  :key="tag" 
                  class="modal-tag"
                >
                  #{{ tag }}
                </span>
              </span>
            </div>

            <!-- Title -->
            <h1 class="modal-title">{{ selectedArticle.title }}</h1>

            <!-- Author -->
            <div class="modal-author d-flex align-items-center mb-5">
              <img 
                :src="selectedArticle.author.avatar" 
                :alt="selectedArticle.author.name"
                class="modal-author-avatar me-3"
              >
              <div>
                <div class="modal-author-name">{{ selectedArticle.author.name }}</div>
                <div class="modal-author-role">{{ selectedArticle.author.role }}</div>
              </div>
            </div>

            <!-- Article Body -->
            <div class="modal-article-body" v-html="getArticleContent(selectedArticle)"></div>

            <!-- Footer -->
            <div class="modal-footer-section mt-5 pt-4">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div class="modal-tags-footer d-flex flex-wrap gap-2">
                  <span 
                    v-for="tag in selectedArticle.tags" 
                    :key="tag" 
                    class="modal-tag"
                  >
                    #{{ tag }}
                  </span>
                </div>
                <button class="btn-close-article" @click="closeArticle">
                  <i class="fas fa-arrow-left me-2"></i> Back to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'BlogView',
  data() {
    return {
      activeCategory: 'all',
      searchQuery: '',
      newsletterEmail: '',
      visibleArticles: 6,
      selectedArticle: null,
      categories: [
        { id: 'all', name: 'All Articles', icon: 'fas fa-newspaper' },
        { id: 'ai', name: 'AI Trends', icon: 'fas fa-robot' },
        { id: 'security', name: 'Cybersecurity', icon: 'fas fa-shield-alt' },
        { id: 'student-life', name: 'Student Life', icon: 'fas fa-users' }
      ],
      articles: [
        // AI Trends Articles
        {
          id: 1,
          category: 'ai',
          title: 'The Future of AI',
          excerpt: 'An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.',
          date: 'Mar 15, 2024',
          readTime: 8,
          image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
          author: {
            name: 'Dr. Text',
            role: 'Text',
            avatar: 'https://ik.imagekit.io/kp5tixhur/ccit-web/icon-profile.jpg'
          },
          tags: ['AI', 'Education', 'Technology'],
          featured: true,
          content: `
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>What Are Personalized Learning Paths?</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>How AI Enables Adaptive Learning</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <blockquote>"Test Text"</blockquote>

            <h2>Test</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
          `
        },
        {
          id: 2,
          category: 'ai',
          title: 'Machine Learning',
          excerpt: 'An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.',
          date: 'Mar 10, 2024',
          readTime: 6,
          image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
          author: {
            name: 'Text Name',
            role: 'ML Specialist',
            avatar: 'https://ik.imagekit.io/kp5tixhur/ccit-web/icon-profile.jpg'
          },
          tags: ['Machine Learning', 'Career', 'Technology'],
          content: `
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>What Are Personalized Learning Paths?</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>How AI Enables Adaptive Learning</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <blockquote>"Test Text"</blockquote>

            <h2>Test</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
          `
        },
        // {
        //   id: 3,
        //   category: 'ai',
        //   title: 'Ethical AI: Preparing the Next Generation of Developers',
        //   excerpt: 'Why understanding AI ethics is crucial for students and how CCIT integrates responsible AI development into the curriculum.',
        //   date: 'Mar 5, 2024',
        //   readTime: 7,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/ethical-ai.jpg',
        //   author: {
        //     name: 'Dr. Anil Perera',
        //     role: 'Principal',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/ccit-web/icon-profile.jpg'
        //   },
        //   tags: ['Ethics', 'AI', 'Education'],
        //   content: `
        //     <p>Every powerful technology carries within it the potential for misuse. Nuclear energy, the internet, social media—each arrived with promises and perils intertwined. Artificial intelligence is no different, and perhaps more consequential than anything that came before.</p>
        //     <p>As the principal of CCIT, I believe our greatest responsibility is not teaching students to build AI—it's teaching them to build AI responsibly.</p>

        //     <h2>Why Ethics Can't Be an Elective</h2>
        //     <p>For years, ethics in technology programs was treated as optional enrichment: interesting, perhaps, but not core. That view is no longer tenable. AI systems are making decisions that affect hiring, lending, healthcare, and criminal justice. The engineers who build these systems are morally implicated in their outcomes.</p>
        //     <p>At CCIT, AI ethics is woven into our core curriculum—not as a standalone module students can compartmentalize, but as a thread running through every course where algorithms meet human lives.</p>

        //     <h2>What Ethical AI Education Actually Looks Like</h2>
        //     <p>We've moved away from abstract philosophical lectures toward case-based learning. Students examine real incidents: facial recognition systems with documented racial bias, predictive policing algorithms that reinforced existing inequalities, recommendation engines linked to radicalization. The question isn't "was this wrong?" but "how did this happen, and how would you have designed it differently?"</p>

        //     <h2>Key Principles We Teach</h2>
        //     <ul>
        //       <li><strong>Fairness:</strong> Understanding how training data encodes historical biases and how to audit models for disparate impact</li>
        //       <li><strong>Transparency:</strong> Building systems whose decisions can be explained to the people they affect</li>
        //       <li><strong>Accountability:</strong> Establishing clear lines of responsibility when AI systems cause harm</li>
        //       <li><strong>Privacy:</strong> Designing for data minimization and informed consent from the ground up</li>
        //     </ul>

        //     <h2>The World Needs Ethical Engineers</h2>
        //     <p>Regulators in Europe, the United States, and across Asia are beginning to codify AI ethics into law. Companies that build systems without ethical safeguards face reputational, legal, and financial consequences. Graduates who understand both the technical and ethical dimensions of AI will be in high demand.</p>
        //     <p>More importantly, they'll be the engineers who help ensure that the AI systems shaping our world are ones we can be proud of.</p>
        //   `
        // },

        // Cybersecurity Articles
        {
          id: 4,
          category: 'security',
          title: 'Top 10 Cybersecurity Threats',
          excerpt: 'An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.',
          date: 'Mar 12, 2024',
          readTime: 5,
          image: 'https://ik.imagekit.io/kp5tixhur/blog/cyber-threats.jpg',
          author: {
            name: 'Text Name',
            role: 'Security Analyst',
            avatar: 'https://ik.imagekit.io/kp5tixhur/authors/lisa-fernando.jpg'
          },
          tags: ['Security', 'Tips', 'Students'],
          featured: true,
          content: `
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>What Are Personalized Learning Paths?</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>How AI Enables Adaptive Learning</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <blockquote>"Test Text"</blockquote>

            <h2>Test</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
          `
        },
        // {
        //   id: 5,
        //   category: 'security',
        //   title: 'Password Security: Best Practices for Students',
        //   excerpt: 'Simple yet effective strategies to protect your online accounts and personal data.',
        //   date: 'Mar 8, 2024',
        //   readTime: 4,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/password-security.jpg',
        //   author: {
        //     name: 'Rajith Kumar',
        //     role: 'Network Security Expert',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/rajith-kumar.jpg'
        //   },
        //   tags: ['Passwords', 'Security', 'Tips'],
        //   content: `
        //     <p>Passwords are the locks on your digital life—and most people are using locks that can be picked in seconds. The good news: getting this right isn't complicated. It just takes a few deliberate habits.</p>

        //     <h2>The Problem With Most Student Passwords</h2>
        //     <p>Studies consistently show that the most common passwords are variations of "password", "123456", birth years, and pet names. These aren't just weak—they're the first things an automated attack will try. And if you're reusing that password across your email, student portal, and social media, a single breach cascades into a complete account takeover.</p>

        //     <h2>Use a Password Manager</h2>
        //     <p>The most impactful change you can make is adopting a password manager. Tools like Bitwarden (free), 1Password, or Dashlane generate and store unique, complex passwords for every site you use. You only need to remember one master password. This eliminates both weak passwords and password reuse in a single step.</p>

        //     <h2>What Makes a Strong Password?</h2>
        //     <p>Length matters more than complexity. A 16-character passphrase like "correct-horse-battery-staple" is far stronger than "P@ssw0rd!" and much easier to remember. If you're generating passwords through a manager, aim for random strings of 20+ characters.</p>

        //     <h2>Enable Two-Factor Authentication</h2>
        //     <p>Even a compromised password can't unlock your account if an attacker also needs access to your authenticator app. Enable 2FA on your email, student accounts, and any service that offers it. Use an app like Google Authenticator or Authy rather than SMS, which can be intercepted.</p>

        //     <h2>Check If You've Been Breached</h2>
        //     <p>Visit haveibeenpwned.com and enter your email address. This free service checks whether your credentials have appeared in known data breaches. If they have, change those passwords immediately.</p>

        //     <h2>Quick Rules to Live By</h2>
        //     <ul>
        //       <li>Never reuse passwords across sites</li>
        //       <li>Never share passwords, even with friends</li>
        //       <li>Change passwords immediately if you suspect compromise</li>
        //       <li>Use 2FA everywhere it's available</li>
        //       <li>Don't save passwords in your browser on shared computers</li>
        //     </ul>
        //     <p>Password security is one of the simplest wins in cybersecurity. Five minutes of setup today protects you from years of potential damage.</p>
        //   `
        // },
        {
          id: 6,
          category: 'security',
          title: 'Secure Remote Learning',
          excerpt: 'An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.',
          date: 'Mar 3, 2024',
          readTime: 6,
          image: 'https://ik.imagekit.io/kp5tixhur/ccit-web/S1.jpg',
          author: {
            name: 'Text',
            role: 'Head of Academics',
            avatar: 'https://ik.imagekit.io/kp5tixhur/ccit-web/icon-profile.jpg'
          },
          tags: ['Remote Learning', 'Security', 'Network'],
          content: `
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>What Are Personalized Learning Paths?</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>How AI Enables Adaptive Learning</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <blockquote>"Test Text"</blockquote>

            <h2>Test</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
          `
        },

        // Student Life Articles
        // {
        //   id: 7,
        //   category: 'student-life',
        //   title: 'A Day in the Life: CCIT Student Vlog',
        //   excerpt: 'Follow our student ambassador through a typical day at CCIT, from coding sessions to campus activities.',
        //   date: 'Mar 14, 2024',
        //   readTime: 5,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/student-life.jpg',
        //   author: {
        //     name: 'Amara Weerasinghe',
        //     role: 'Student Ambassador',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/amara.jpg'
        //   },
        //   tags: ['Student Life', 'Vlog', 'Campus'],
        //   featured: true,
        //   content: `
        //     <p>It's 7:45 AM and my alarm goes off. I'm Amara, a second-year IT student at CCIT and student ambassador, and today I want to walk you through what a real day on campus looks like—the good parts, the stressful parts, and everything in between.</p>

        //     <h2>Morning: The Commute and First Lecture</h2>
        //     <p>I live about 40 minutes from campus by bus, which gives me time to review notes or catch up on tech news. By 8:30 I'm grabbing tea from the canteen and heading to our 9 AM Data Structures lecture. Professor Jayawardena has a way of making even binary trees feel intuitive—she draws everything out on the whiteboard and takes questions throughout, which I appreciate compared to just staring at slides.</p>

        //     <h2>Mid-Morning: Lab Session</h2>
        //     <p>After the lecture, we move straight into a two-hour lab. Today we're implementing graph traversal algorithms. The computers in the lab are well-specced—no lag, no crashes mid-compile—which sounds trivial until you've lost 30 minutes of work to a frozen machine. My lab partner Dinesh and I split the BFS and DFS implementations and then swap to review each other's code. The TA walks around, catches bugs, and asks the right questions rather than just giving answers. By the time we wrap up, both of us understand it in a way that just reading the textbook wouldn't have produced.</p>

        //     <h2>Lunch and the Usual Chaos</h2>
        //     <p>Lunch is social time. The canteen fills up fast, so a group of us claim a table early. Topics jump between assignment deadlines, weekend plans, a new Netflix series, and somehow always circle back to tech. Today someone brings up a viral AI image that turned out to be fake, and we end up in a 20-minute debate about media literacy. It's the kind of conversation that doesn't happen in class but that I'll probably remember longer than any lecture.</p>

        //     <h2>Afternoon: Project Work and Club Meeting</h2>
        //     <p>My group has a final-year project presentation coming up in six weeks. We book a study room and spend two hours on our prototype—a web application that aggregates local event listings using a public API. It's coming together faster than I expected, mostly because we used Trello to break the work into small tasks from the start.</p>
        //     <p>At 4 PM, I head to the Cybersecurity Club meeting. About 15 students show up. This week a guest speaker from a local fintech company talks about penetration testing as a career path. Hands-on, honest, and genuinely useful. These talks are one of the reasons I joined the club in the first place.</p>

        //     <h2>Evening: Winding Down</h2>
        //     <p>I'm home by 7, dinner, a short walk to clear my head, then an hour reviewing tomorrow's reading before bed. It's not glamorous, but it's purposeful. The days at CCIT are full—sometimes overwhelming—but rarely empty. There's always something being built, learned, or debated, and that energy is hard to find anywhere else.</p>
        //   `
        // },
        {
          id: 8,
          category: 'student-life',
          title: 'Balancing Studies and Social Life',
          excerpt: 'An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.',
          date: 'Mar 7, 2024',
          readTime: 4,
          image: 'https://ik.imagekit.io/kp5tixhur/blog/balance.jpg',
          author: {
            name: 'Kasun Perera',
            role: 'Senior Student',
            avatar: 'https://ik.imagekit.io/kp5tixhur/authors/kasun.jpg'
          },
          tags: ['Balance', 'Tips', 'Wellness'],
          content: `
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>What Are Personalized Learning Paths?</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>How AI Enables Adaptive Learning</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <blockquote>"Test Text"</blockquote>

            <h2>Test</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>

            <h2>Text</h2>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
            <p>An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.</p>
          `
        },
        // {
        //   id: 9,
        //   category: 'student-life',
        //   title: 'Student Clubs at CCIT: Building Skills Beyond Code',
        //   excerpt: 'Explore the various clubs and extracurricular activities that complement technical education.',
        //   date: 'Mar 1, 2024',
        //   readTime: 6,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/clubs.jpg',
        //   author: {
        //     name: 'Dilini Rajapakse',
        //     role: 'Student Activities Coordinator',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/dilini.jpg'
        //   },
        //   tags: ['Clubs', 'Activities', 'Community'],
        //   content: `
        //     <p>A degree in IT will teach you to think logically, write clean code, and solve technical problems. What it won't automatically teach you—unless you seek it out—is how to communicate your ideas, lead a team under pressure, manage a project from concept to delivery, or build relationships with people outside your immediate circle. That's where clubs come in.</p>

        //     <h2>The Cybersecurity Club</h2>
        //     <p>One of our most active student organizations, the Cybersecurity Club runs weekly workshops, hosts guest speakers from industry, and fields teams for national and regional Capture the Flag (CTF) competitions. Members have gone on to internships at financial institutions and tech companies specifically because of the hands-on skills and portfolio pieces the club helped them develop.</p>

        //     <h2>The AI & Innovation Lab</h2>
        //     <p>This club is part study group, part startup incubator. Members work on independent AI projects throughout the year and present at an end-of-year showcase that draws attention from local companies and occasionally investors. If you have a project idea you've been putting off, this is the environment that will hold you accountable and give you collaborators.</p>

        //     <h2>The Developers' Circle</h2>
        //     <p>The Developers' Circle focuses on full-stack web and mobile development, running hackathons and collaborative builds. The club partners with NGOs and local businesses to deliver real projects—giving members client experience before they ever enter the job market.</p>

        //     <h2>The Public Speaking and Leadership Society</h2>
        //     <p>Technical skills get you the interview. Communication skills get you the job. The PSLS runs Toastmasters-style sessions, debate workshops, and presentation coaching. Alumni consistently cite this club as the most surprising value-add of their time at CCIT—"I didn't know I needed it until I was in a boardroom."</p>

        //     <h2>How to Get Involved</h2>
        //     <p>All clubs hold open enrollment at the start of each semester. Visit the Student Affairs office or check the CCIT student portal for schedules and meeting times. You don't need experience to join any club—just curiosity and the willingness to show up. The skills you build outside the classroom may be the ones that define your career.</p>
        //   `
        // },
        // {
        //   id: 10,
        //   category: 'student-life',
        //   title: 'From Student to Professional: Internship Success Stories',
        //   excerpt: 'How CCIT students landed internships at top tech companies and what they learned.',
        //   date: 'Feb 25, 2024',
        //   readTime: 7,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/internships.jpg',
        //   author: {
        //     name: 'Chamara Jayawardena',
        //     role: 'Career Counselor',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/chamara.jpg'
        //   },
        //   tags: ['Internships', 'Career', 'Success'],
        //   content: `
        //     <p>Landing an internship at a reputable tech company as an undergraduate is competitive—but far from impossible. Over the past two years, CCIT students have secured placements at companies ranging from local startups to multinational technology firms. Here are three of their stories, and the lessons embedded in each.</p>

        //     <h2>Ruwani's Story: The Power of a Visible Portfolio</h2>
        //     <p>Ruwani secured an internship at a leading e-commerce platform in her third year. She credits her GitHub portfolio as the deciding factor. "I had four projects on there—two from assignments, two personal ones. The recruiter mentioned one of my personal projects in the interview. They'd actually looked at my code."</p>
        //     <p>Her advice: "Don't wait until you have something perfect to put online. A finished imperfect project beats an unfinished perfect one every time. Ship it, document it, and keep building."</p>

        //     <h2>Sahan's Story: Networking Without Being Weird About It</h2>
        //     <p>Sahan's internship offer came through a connection he made at a CCIT alumni networking event in his second year. He wasn't looking for a job—he was genuinely curious about the speaker's work and asked a follow-up question after the session. That conversation became an email exchange, which became a coffee meeting, which became an internship offer twelve months later.</p>
        //     <p>"People always talk about networking like it's this transactional thing," Sahan says. "But it's really just being interested in people and their work. If you do that genuinely, the professional stuff follows."</p>

        //     <h2>Ishara's Story: Failing First and Succeeding Better</h2>
        //     <p>Ishara applied to nine companies before receiving her first offer. She kept a log of every rejection, noting what she could improve. After the fourth rejection, she rewrote her CV. After the sixth, she overhauled how she explained her projects. The company that eventually hired her noted that her ability to articulate her development process—not just the end result—set her apart.</p>
        //     <p>"The rejections taught me more about how to present myself than any career workshop," she says. "Don't treat them as failures. Treat them as user feedback."</p>

        //     <h2>Common Threads</h2>
        //     <p>Across all three stories—and across dozens of CCIT internship placements—a few patterns emerge consistently: a visible portfolio, genuine curiosity about the industry, and the resilience to treat setbacks as data. The technical skills are the baseline. What converts them into opportunities is everything else.</p>
        //   `
        // },
        // {
        //   id: 11,
        //   category: 'ai',
        //   title: 'Natural Language Processing: Building Chatbots',
        //   excerpt: 'Hands-on tutorial for students interested in creating intelligent conversational agents.',
        //   date: 'Feb 20, 2024',
        //   readTime: 8,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/nlp.jpg',
        //   author: {
        //     name: 'Dr. Sarah Chen',
        //     role: 'AI Research Lead',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/sarah-chen.jpg'
        //   },
        //   tags: ['NLP', 'Tutorial', 'AI'],
        //   content: `
        //     <p>Chatbots have gone from novelty to infrastructure in less than a decade. They handle customer support, assist with healthcare triage, tutor students, and power voice assistants. Understanding how they work—and how to build one—is one of the most practical skills an IT student can develop today.</p>

        //     <h2>What Is NLP?</h2>
        //     <p>Natural Language Processing is the branch of AI concerned with enabling computers to understand, interpret, and generate human language. It sits at the intersection of linguistics, machine learning, and software engineering. When you ask a chatbot a question and it responds coherently, NLP is doing the heavy lifting.</p>

        //     <h2>The Building Blocks of a Simple Chatbot</h2>
        //     <p>A basic chatbot has three layers: input processing (parsing what the user said), intent classification (figuring out what the user wants), and response generation (producing an appropriate reply).</p>
        //     <p>For beginners, a rule-based approach is the best starting point. You define a set of patterns (using regular expressions or keyword matching) and map them to responses. It's limited but educational—and it forces you to think explicitly about how conversations are structured.</p>

        //     <h2>Moving to Machine Learning</h2>
        //     <p>Once you understand rule-based systems, the step to ML-based NLP becomes much clearer. Instead of manually writing rules, you train a classifier on labeled examples. The model learns to associate patterns in text with intents. Libraries like NLTK, spaCy, and Hugging Face's Transformers make this accessible even without a deep ML background.</p>

        //     <h2>A Simple Project to Start</h2>
        //     <p>Build a FAQ chatbot for a topic you know well—your study program, a hobby, a local service. Gather 50–100 sample questions across 8–10 categories. Train a simple intent classifier using scikit-learn or Rasa. Add a basic response template for each intent. Deploy it as a simple web app using Flask. This is achievable in a weekend and gives you a genuinely demonstrable project.</p>

        //     <h2>Where to Go Next</h2>
        //     <p>Once comfortable with the basics, explore retrieval-augmented generation (RAG), which combines traditional information retrieval with large language models to create chatbots that can answer questions from a custom knowledge base. This is one of the most in-demand skills in enterprise AI development right now, and the conceptual foundation is accessible to any student who understands the basics covered here.</p>
        //   `
        // },
        // {
        //   id: 12,
        //   category: 'security',
        //   title: 'Ransomware Attacks: Prevention and Response',
        //   excerpt: 'What every IT professional needs to know about ransomware and how to protect systems.',
        //   date: 'Feb 18, 2024',
        //   readTime: 6,
        //   image: 'https://ik.imagekit.io/kp5tixhur/blog/ransomware.jpg',
        //   author: {
        //     name: 'Lisa Fernando',
        //     role: 'Security Analyst',
        //     avatar: 'https://ik.imagekit.io/kp5tixhur/authors/lisa-fernando.jpg'
        //   },
        //   tags: ['Ransomware', 'Security', 'Prevention'],
        //   content: `
        //     <p>Ransomware is one of the most damaging forms of cybercrime in operation today. In 2023 alone, ransomware attacks caused billions of dollars in losses, disrupted hospitals, schools, government agencies, and businesses of every size. Understanding how it works—and how to defend against it—is foundational knowledge for any IT professional.</p>

        //     <h2>How Ransomware Works</h2>
        //     <p>Ransomware is malicious software that encrypts a victim's files, making them inaccessible. The attacker then demands payment—typically in cryptocurrency—in exchange for the decryption key. Modern ransomware operations are sophisticated criminal enterprises, often with customer support lines and negotiation specialists on the attacker's side.</p>
        //     <p>The most common infection vectors are phishing emails with malicious attachments, drive-by downloads from compromised websites, exploitation of unpatched software vulnerabilities, and compromised remote desktop protocol (RDP) credentials.</p>

        //     <h2>Prevention: The Defense-in-Depth Approach</h2>
        //     <p>No single control prevents ransomware. Effective defense uses multiple layers:</p>
        //     <ul>
        //       <li><strong>Backups:</strong> The most important control. Maintain regular, offline backups following the 3-2-1 rule: three copies, two different media types, one offsite. Test your backups regularly—an untested backup is an assumption, not a guarantee.</li>
        //       <li><strong>Patch Management:</strong> Keep operating systems and software updated. Many ransomware attacks exploit vulnerabilities that have had patches available for months.</li>
        //       <li><strong>Email Filtering:</strong> Implement robust spam and phishing filters. Train users to recognize suspicious emails. Configure email clients to flag messages from external senders.</li>
        //       <li><strong>Least Privilege:</strong> Limit user permissions to only what each role requires. Ransomware can only encrypt what the infected account has access to.</li>
        //       <li><strong>Network Segmentation:</strong> Isolate critical systems so that an infection in one segment cannot spread laterally across the entire network.</li>
        //     </ul>

        //     <h2>Response: If You're Hit</h2>
        //     <p>Immediate steps matter enormously. Disconnect infected systems from the network immediately to prevent spread. Do not pay the ransom—payment does not guarantee decryption, funds criminal operations, and may violate sanctions regulations. Contact law enforcement. Engage a cybersecurity incident response team. Restore from backups once the infection vector has been identified and remediated.</p>

        //     <h2>The Human Factor</h2>
        //     <p>Technical controls are only as effective as the people operating them. Regular security awareness training—teaching staff to recognize phishing, avoid suspicious downloads, and report anomalies—remains one of the highest-return investments an organization can make. For IT students, understanding this human dimension is just as important as mastering the technical defenses.</p>
        //   `
        // }
      ],
      popularTags: [
        { name: 'AI', count: 12 },
        { name: 'Machine Learning', count: 8 },
        { name: 'Cybersecurity', count: 15 },
        { name: 'Student Life', count: 20 },
        { name: 'Tips', count: 18 },
        { name: 'Coding', count: 10 },
        { name: 'Career', count: 14 },
        { name: 'Education', count: 16 }
      ]
    }
  },
  computed: {
    featuredArticle() {
      return this.articles.find(article => article.featured) || this.articles[0]
    },
    filteredArticles() {
      let filtered = this.articles.filter(article => !article.featured) // Exclude featured
      
      // Filter by category
      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(article => article.category === this.activeCategory)
      }
      
      // Filter by search query
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.author.name.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }
      
      return filtered.slice(0, this.visibleArticles)
    },
    hasMoreArticles() {
      let totalCount = this.articles.filter(article => !article.featured)
      
      if (this.activeCategory !== 'all') {
        totalCount = totalCount.filter(article => article.category === this.activeCategory)
      }
      
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        totalCount = totalCount.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.author.name.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }
      
      return this.visibleArticles < totalCount.length
    }
  },
  methods: {
    getCategoryIcon(category) {
      const icons = {
        'ai': 'fas fa-robot',
        'security': 'fas fa-shield-alt',
        'student-life': 'fas fa-users',
        'all': 'fas fa-newspaper'
      }
      return icons[category] || 'fas fa-file-alt'
    },
    getCategoryLabel(category) {
      const labels = {
        'ai': 'AI Trends',
        'security': 'Cybersecurity',
        'student-life': 'Student Life',
        'all': 'All Articles'
      }
      return labels[category] || category
    },
    getCategoryCount(categoryId) {
      if (categoryId === 'all') {
        return this.articles.length
      }
      return this.articles.filter(article => article.category === categoryId).length
    },
    loadMore() {
      this.visibleArticles += 3
    },
    readArticle(article) {
      console.log('Reading article:', article.id)
      // Navigate to article detail page
      // this.$router.push(`/blog/${article.id}`)
      this.selectedArticle = article
      document.body.style.overflow = 'hidden'
    },
    closeArticle() {
      this.selectedArticle = null
      document.body.style.overflow = ''
    },
    getArticleContent(article) {
      // Return the article's full content, or fall back to a longer version of the excerpt
      return article.content || `<p>${article.excerpt}</p>`
    },
    filterByTag(tag) {
      this.searchQuery = tag
    },
    subscribeNewsletter() {
      if (this.newsletterEmail) {
        alert('Thank you for subscribing to our newsletter!')
        this.newsletterEmail = ''
      }
    }
  },
  watch: {
    activeCategory() {
      this.visibleArticles = 6
    },
    searchQuery() {
      this.visibleArticles = 6
    }
  }
}
</script>

<style scoped>
/* Blog Hero Section - Simple style like Testimonials */
.blog-hero {
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
  display: inline-block;
}

.lead {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.hero-icon {
  font-size: 6rem;
  color: #ff5f15;
}

/* Search Section */
.search-section {
  background: white;
  border-bottom: 1px solid rgba(255, 95, 21, 0.1);
}

.search-wrapper {
  max-width: 500px;
  margin: 0 auto;
}

.search-container {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #ff5f15;
  font-size: 1rem;
  z-index: 2;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: white;
  border: 2px solid rgba(255, 95, 21, 0.2);
  border-radius: 50px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #ff5f15;
  box-shadow: 0 0 30px rgba(255, 95, 21, 0.1);
}

.search-input::placeholder {
  color: #999;
}

/* Category Tabs */
.category-tabs {
  margin-top: 1rem;
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
  display: inline-flex;
  align-items: center;
  position: relative;
}

.category-tab i {
  color: #ff5f15;
  transition: all 0.3s ease;
}

.category-tab .category-count {
  background: rgba(0, 0, 0, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

.category-tab.active,
.category-tab:hover {
  background: #FFD700;
  color: black;
  border-color: #FFD700;
}

.category-tab.active i,
.category-tab:hover i {
  color: black;
}

.category-tab.active .category-count,
.category-tab:hover .category-count {
  background: rgba(0, 0, 0, 0.1);
  color: black;
}

/* Section Titles */
.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.5rem;
  font-weight: 600;
}

.text-gold {
  color: #FFD700;
}

/* Featured Article Card */
.featured-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  /* box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 95, 21, 0.1);
}

.featured-card:hover {
  transform: translateY(-10px);
  /* box-shadow: 0 25px 50px rgba(255, 95, 21, 0.2); */
}

.featured-image-wrapper {
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image {
  transform: scale(1.1);
}

.featured-category {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.featured-category.ai {
  background: #007bff;
}

.featured-category.security {
  background: #28a745;
}

.featured-category.student-life {
  background: #ff5f15;
}

.featured-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article-meta {
  color: #666;
  font-size: 0.9rem;
}

.featured-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.featured-excerpt {
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
  flex-grow: 1;
}

.article-author {
  margin-top: auto;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff5f15;
}

.author-name {
  font-weight: 700;
  color: #333;
}

.author-role {
  font-size: 0.85rem;
  color: #ff5f15;
}

.btn-read-more {
  padding: 0.8rem 2rem;
  background: transparent;
  border: 2px solid #ff5f15;
  color: #ff5f15;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.btn-read-more:hover {
  background: #ff5f15;
  color: white;
  transform: translateX(5px);
}

/* Blog Grid Cards */
.blog-grid {
  background: #f8f9fa;
}

.blog-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 95, 21, 0.1);
}

.blog-card:hover {
  transform: translateY(-10px);
  /* box-shadow: 0 20px 40px rgba(255, 95, 21, 0.15); */
}

.blog-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.1);
}

.blog-category {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.blog-category.ai {
  background: #007bff;
}

.blog-category.security {
  background: #28a745;
}

.blog-category.student-life {
  background: #ff5f15;
}

.blog-body {
  padding: 1.5rem;
}

.blog-meta {
  color: #999;
  font-size: 0.85rem;
}

.blog-title {
  color: #333;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-excerpt {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-author {
  font-size: 0.9rem;
  color: #666;
}

.author-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.btn-read {
  background: transparent;
  border: none;
  color: #ff5f15;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.btn-read:hover {
  transform: translateX(5px);
}

/* Load More Button */
.btn-load-more {
  padding: 1rem 2.5rem;
  background: transparent;
  border: 2px solid #ff5f15;
  color: #ff5f15;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.btn-load-more:hover {
  background: #ff5f15;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 95, 21, 0.3);
}

/* Popular Tags */
.popular-tags {
  background: white;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.tag-cloud-item {
  padding: 0.6rem 1.5rem;
  background: white;
  border: 1px solid rgba(255, 95, 21, 0.2);
  border-radius: 50px;
  color: #666;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.02);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-cloud-item:hover {
  background: #ff5f15;
  color: white;
  border-color: #ff5f15;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 95, 21, 0.2);
}

.tag-count {
  background: rgba(0, 0, 0, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.75rem;
}

.tag-cloud-item:hover .tag-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Newsletter Section */
.newsletter-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.newsletter-card {
  background: white;
  border-radius: 30px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 95, 21, 0.1);
}

.newsletter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}

.newsletter-description {
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 0.5rem;
}

.form-control {
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 95, 21, 0.2);
  border-radius: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #ff5f15;
  box-shadow: 0 0 30px rgba(255, 95, 21, 0.1);
}

.btn-subscribe {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff5f15 0%, #ff5f15 50%, #FFD700 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-subscribe:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 95, 21, 0.3);
}

.form-text {
  color: #999;
  font-size: 0.85rem;
}

/* Responsive Design */
@media (max-width: 991px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-icon {
    font-size: 5rem;
  }
  
  .featured-title {
    font-size: 1.8rem;
  }
  
  .featured-image-wrapper {
    min-height: 300px;
  }
  
  .newsletter-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-icon {
    font-size: 4rem;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .category-tabs {
    flex-wrap: wrap;
  }
  
  .category-tab {
    width: 100%;
    max-width: 250px;
  }
  
  .featured-content {
    padding: 2rem !important;
  }
  
  .featured-title {
    font-size: 1.5rem;
  }
  
  .newsletter-card {
    padding: 2rem;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .btn-subscribe {
    width: 100%;
  }
  
  .tags-cloud {
    gap: 0.5rem;
  }
  
  .tag-cloud-item {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-icon {
    font-size: 3rem;
  }
  
  .category-tab {
    max-width: 100%;
  }
  
  .blog-image-wrapper {
    height: 180px;
  }
  
  .blog-title {
    font-size: 1.2rem;
  }
  
  .newsletter-title {
    font-size: 1.8rem;
  }
}

/* Background Colors */
.bg-light {
  background: #f8f9fa;
}

/* =============================================
   ARTICLE POPUP MODAL
   ============================================= */

.article-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
  backdrop-filter: blur(4px);
}

.article-modal {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 860px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  margin: auto;
}

/* Close button */
.modal-close-btn {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 10;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}

.modal-close-btn:hover {
  background: #ff5f15;
  transform: rotate(90deg);
}

/* Hero image */
.modal-hero-image {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.modal-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%);
}

.modal-category-badge {
  position: absolute;
  bottom: 1.2rem;
  left: 1.5rem;
  padding: 0.45rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.modal-category-badge.ai       { background: #007bff; }
.modal-category-badge.security { background: #28a745; }
.modal-category-badge.student-life { background: #ff5f15; }

/* Modal content body */
.modal-content-body {
  padding: 2.5rem 3rem 3rem;
}

@media (max-width: 600px) {
  .modal-content-body {
    padding: 1.5rem 1.5rem 2rem;
  }
  .modal-hero-image {
    height: 220px;
  }
}

/* Meta row */
.modal-meta {
  color: #888;
  font-size: 0.9rem;
}

.modal-tag {
  display: inline-block;
  padding: 0.25rem 0.85rem;
  background: rgba(255, 95, 21, 0.08);
  color: #ff5f15;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Title */
.modal-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.25;
  margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .modal-title {
    font-size: 1.5rem;
  }
}

/* Author */
.modal-author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff5f15;
}

.modal-author-name {
  font-weight: 700;
  color: #222;
  font-size: 1rem;
}

.modal-author-role {
  font-size: 0.85rem;
  color: #ff5f15;
}

/* Article body rich text */
.modal-article-body {
  color: #444;
  font-size: 1.05rem;
  line-height: 1.85;
}

.modal-article-body :deep(h2) {
  font-size: 1.45rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 2rem 0 0.75rem;
}

.modal-article-body :deep(h3) {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin: 1.5rem 0 0.5rem;
}

.modal-article-body :deep(p) {
  margin-bottom: 1.2rem;
}

.modal-article-body :deep(ul),
.modal-article-body :deep(ol) {
  margin: 0.5rem 0 1.2rem 1.5rem;
}

.modal-article-body :deep(li) {
  margin-bottom: 0.5rem;
}

.modal-article-body :deep(blockquote) {
  border-left: 4px solid #ff5f15;
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  background: rgba(255, 95, 21, 0.05);
  border-radius: 0 10px 10px 0;
  color: #555;
  font-style: italic;
  font-size: 1.05rem;
}

/* Footer */
.modal-footer-section {
  border-top: 1px solid rgba(0,0,0,0.08);
}

.modal-tags-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn-close-article {
  padding: 0.75rem 1.75rem;
  background: transparent;
  border: 2px solid #ff5f15;
  color: #ff5f15;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-size: 0.95rem;
}

.btn-close-article:hover {
  background: #ff5f15;
  color: #fff;
}

/* Modal transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .article-modal,
.modal-fade-leave-active .article-modal {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .article-modal {
  transform: translateY(40px) scale(0.97);
  opacity: 0;
}

.modal-fade-leave-to .article-modal {
  transform: translateY(20px) scale(0.98);
  opacity: 0;
}
</style>