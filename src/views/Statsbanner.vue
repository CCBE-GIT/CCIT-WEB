<template>
  <section class="stats-banner">
    <!-- Background decoration -->
    <div class="stats-bg-orb stats-bg-orb-1"></div>
    <div class="stats-bg-orb stats-bg-orb-2"></div>

    <div class="stats-container">
      <div class="stats-grid">
        <div
          class="stat-item"
          v-for="(stat, index) in stats"
          :key="index"
          :style="{ animationDelay: index * 0.12 + 's' }"
        >
          <div class="stat-icon-wrap">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>

          <!-- Vertical separator (all except last) -->
          <div class="stat-separator" v-if="index < stats.length - 1"></div>
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
        { icon: 'fas fa-building',       value: '01',   label: 'Branches' },
        { icon: 'fas fa-user-graduate',   value: '500+', label: 'Students Trained' },
        { icon: 'fas fa-laptop-code',     value: '10+',  label: 'Expert Courses' },
        { icon: 'fas fa-award',           value: '5',    label: 'Years of Excellence' }
      ]
    }
  }
}
</script>

<style scoped>
.stats-banner {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a0000 50%, #0f0f0f 100%);
  padding: 4rem 0;
}

/* Top & bottom glowing borders */
.stats-banner::before,
.stats-banner::after {
  content: '';
  position: absolute;
  left: 0; right: 0;
  height: 2px;
}
.stats-banner::before {
  top: 0;
  background: linear-gradient(90deg, transparent, #FF5F15 30%, #FBB700 50%, #FF5F15 70%, transparent);
}
.stats-banner::after {
  bottom: 0;
  background: linear-gradient(90deg, transparent, #FBB700 30%, #FF5F15 50%, #FBB700 70%, transparent);
}

.stats-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}
.stats-bg-orb-1 {
  width: 350px; height: 350px;
  background: rgba(255, 95, 21, 0.12);
  top: -120px; left: -80px;
}
.stats-bg-orb-2 {
  width: 300px; height: 300px;
  background: rgba(251, 183, 0, 0.1);
  bottom: -100px; right: -60px;
}

.stats-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.stat-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  animation: fadeInUp 0.6s ease both;
  transition: transform 0.3s ease;
}

.stat-item:hover { transform: translateY(-6px); }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.stat-icon-wrap {
  width: 60px; height: 60px;
  border-radius: 18px;
  background: rgba(255, 95, 21, 0.12);
  border: 1px solid rgba(255, 95, 21, 0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  color: #FF5F15;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.stat-item:hover .stat-icon-wrap {
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #000;
  border-color: transparent;
  transform: rotate(-5deg) scale(1.08);
}

.stat-number {
  font-family: 'Poppins', sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #FF5F15 0%, #FBB700 60%, #FFCC00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Vertical separator */
.stat-separator {
  position: absolute;
  right: 0; top: 20%; bottom: 20%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(255, 183, 0, 0.3), transparent);
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }

  .stat-number { font-size: 2rem; }
  .stat-icon-wrap { width: 50px; height: 50px; font-size: 1.2rem; }

  /* Remove separator for 2nd column in 2-col layout */
  .stat-item:nth-child(2) .stat-separator,
  .stat-item:last-child .stat-separator { display: none; }
}

@media (max-width: 420px) {
  .stats-grid { grid-template-columns: 1fr; }
  .stat-separator { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .stat-item { animation: none; transition: none; }
  .stat-item:hover .stat-icon-wrap { transform: none; }
}
</style>