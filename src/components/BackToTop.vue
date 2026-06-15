<template>
  <transition name="fade-up">
    <button v-if="visible" class="back-to-top" @click="scrollToTop" aria-label="Back to top">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() { return { visible: false } },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() { this.visible = window.scrollY > 400 },
    scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 900;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #FF5F15, #FBB700);
  color: #000;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 6px 24px rgba(255, 95, 21, 0.5);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.back-to-top:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 12px 36px rgba(255, 95, 21, 0.65);
}

.back-to-top:active {
  transform: translateY(-1px) scale(0.98);
}

/* Transition */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}
</style>