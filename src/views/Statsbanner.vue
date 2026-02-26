<template>
  <section class="stats-banner py-5">
    <div class="container">
      <div class="banner-inner">
        <div class="row justify-content-center text-center g-0">
          <div
            class="col-6 col-md-3"
            v-for="(stat, index) in stats"
            :key="index"
          >
            <div class="stat-item" :style="{ animationDelay: index * 0.15 + 's' }">
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
              <div class="stat-number">
                <span class="counter">{{ stat.value }}</span>
              </div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-divider" v-if="index < stats.length - 1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsBanner',
  data() {
    return {
      stats: [
        {
          icon: 'fas fa-user-graduate',
          value: '500+',
          label: 'Students Trained'
        },
        {
          icon: 'fas fa-laptop-code',
          value: '10+',
          label: 'Expert Courses'
        },
        {
          icon: 'fas fa-award',
          value: '5',
          label: 'Years of Excellence'
        },
        {
          icon: 'fas fa-briefcase',
          value: '92%',
          label: 'Employment Rate'
        }
      ]
    }
  }
}
</script>

<style scoped>
.stats-banner {
  background: linear-gradient(135deg, white 0%, white 100%);
  position: relative;
  overflow: hidden;
}

.stats-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff5f15, #FFD700, #ff5f15);
}

.stats-banner::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #ff5f15, #FFD700);
}

/* Decorative background orbs */
.stats-banner .container::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  /* background: radial-gradient(circle, rgba(255, 95, 21, 0.08) 0%, transparent 70%); */
  top: -50px;
  left: -100px;
  border-radius: 50%;
  pointer-events: none;
}

.banner-inner {
  position: relative;
  z-index: 1;
}

.stat-item {
  padding: 2rem 1rem;
  position: relative;
  animation: fadeInUp 0.6s ease both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-icon {
  font-size: 2rem;
  color: #ff5f15;
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-icon {
  transform: scale(1.2) rotate(-5deg);
  color: #FFD700;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ff5f15 0%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.stat-label {
  color: black;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Vertical divider between stats */
.col-6:not(:nth-child(2n)) .stat-item::after,
.col-md-3:not(:last-child) .stat-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 25%;
  height: 50%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(255, 215, 0, 0.4), transparent);
}

@media (max-width: 767px) {
  .stat-number {
    font-size: 2.2rem;
  }

  .stat-icon {
    font-size: 1.6rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  /* Remove divider on right of 2nd column in 2-column mobile layout */
  .col-6:nth-child(2n) .stat-item::after {
    display: none;
  }
}
</style>