<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="about-hero py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="hero-title">
              About
              <span class="highlight"
                >Cambridge College of Information Technology</span
              >
            </h1>
            <p class="lead">
              Shaping the future through 100% practical IT education since our
              establishment.
            </p>
          </div>
          <div class="col-lg-6">
            <!-- <div class="hero-image-placeholder text-center">
              <i class="fas fa-university"></i>
            </div> -->

            <div class="hero-image-placeholder text-center">
              <img :src="logo" alt="CCIT Logo" class="logo-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card-theme p-4 h-100">
              <div class="icon-wrapper mb-3">
                <i class="fas fa-bullseye"></i>
              </div>
              <h2 class="mb-3 text-black">Our <span class="highlight">Mission</span></h2>
              <p style="color: black">
                To provide exceptional, practical IT education that empowers
                students with the skills, knowledge, and confidence to excel in
                the digital world and become innovative leaders in technology.
              </p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card-theme p-4 h-100">
              <div class="icon-wrapper mb-3">
                <i class="fas fa-eye"></i>
              </div>
              <h2 class="mb-3 text-black">Our <span class="highlight">Vision</span></h2>
              <p style="color: black">
                To be Sri Lanka's premier institution for practical IT
                education, recognized for producing highly skilled professionals
                who drive technological innovation and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="our-story py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our <span class="highlight">Story</span></h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card-theme p-4">
              <p>
                Cambridge College of Information Technology (CCIT) was founded
                with a simple yet powerful vision: to bridge the gap between
                theoretical knowledge and practical application in IT education.
              </p>
              <p>
                Located in Ambalangoda, we recognized the growing need for
                practical IT skills in the local community and beyond. Our
                founders, experienced IT professionals and educators, designed a
                curriculum that focuses entirely on hands-on learning.
              </p>
              <p>
                What sets CCIT apart is our commitment to
                <strong>100% practical content</strong>. We believe that true
                learning happens when students can apply their knowledge to
                real-world scenarios. Our courses are carefully crafted to
                ensure that every concept is reinforced through practical
                exercises, projects, and simulations.
              </p>
              <p>
                Today, CCIT continues to evolve, staying at the forefront of
                technological advancements while maintaining our core
                philosophy: practical education for real-world success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our <span class="highlight">Core Values</span></h2>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="(value, index) in values"
            :key="index"
          >
            <div class="value-card card-theme text-center p-4 h-100 text-black">
              <div class="value-icon mb-3">
                <i :class="value.icon"></i>
              </div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Meet <span class="highlight">Our Leadership</span></h2>
        <div class="row justify-content-center">
          <div
            class="col-md-4 mb-4"
            v-for="(member, index) in team"
            :key="index"
          >
            <div class="team-card card-theme text-center p-4">
              <div class="team-avatar mb-3">
                <i :class="member.avatar"></i>
              </div>
              <h3>{{ member.name }}</h3>
              <p class="text-accent">{{ member.position }}</p>
              <p class="small">{{ member.bio }}</p>
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
  name: "AboutView",
  data() {
    return {
      logo: require("@/assets/images/CCIT - logo.png"),
      values: [
        {
          icon: "fas fa-hands-helping",
          title: "Excellence",
          description:
            "We strive for the highest standards in education and student outcomes.",
        },
        {
          icon: "fas fa-lightbulb",
          title: "Innovation",
          description:
            "Continuously updating our methods to reflect industry advancements.",
        },
        {
          icon: "fas fa-users",
          title: "Community",
          description:
            "Building a supportive learning environment for all students.",
        },
        {
          icon: "fas fa-handshake",
          title: "Integrity",
          description:
            "Maintaining honesty and ethical standards in all our interactions.",
        },
        {
          icon: "fas fa-graduation-cap",
          title: "Practicality",
          description:
            "Focusing on real-world applications and hands-on learning.",
        },
        {
          icon: "fas fa-heart",
          title: "Passion",
          description:
            "Inspiring students through dedicated teaching and mentorship.",
        },
      ],
      team: [
        {
          name: "Dr. Anil Perera",
          position: "Principal & Founder",
          bio: "PhD in Computer Science with 15+ years of teaching experience",
          avatar: "fas fa-user-tie",
        },
        {
          name: "Ms. Nimali Silva",
          position: "Head of Academics",
          bio: "MSc in Information Technology, specializing in curriculum development",
          avatar: "fas fa-chalkboard-teacher",
        },
        {
          name: "Mr. Rajith Fernando",
          position: "Technical Director",
          bio: "Industry expert with 20+ years in software development",
          avatar: "fas fa-laptop-code",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-hero {
  background: linear-gradient(
    135deg,
    black 0%,
    var(--secondary-color) 100%
  );
  color: white;
}

.hero-title {
  font-size: 2.5rem;
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

.logo-image {
  height: 350px;
  width: 300px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.hero-image-placeholder {
  font-size: 8rem;
  color: var(--accent-color);
}

.icon-wrapper {
  font-size: 2.5rem;
  color: var(--accent-color);
  display: inline-block;
}

.section-title {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 3rem;
}

.value-card {
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}

.value-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
}

.team-avatar {
  font-size: 3rem;
  color: var(--accent-color);
}

.text-accent {
  color: var(--accent-color);
  font-weight: 600;
}

.team-card {
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-image-placeholder {
    font-size: 5rem;
  }
}
</style>
