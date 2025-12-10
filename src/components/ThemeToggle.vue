<template>
  <button @click="toggleTheme" class="theme-toggle">
    <span v-if="isDarkTheme">
      <i class="fas fa-sun"></i> Light Mode
    </span>
    <span v-else>
      <i class="fas fa-moon"></i> Dark Mode
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ThemeToggle',
  setup() {
    const store = useStore()
    
    const toggleTheme = () => {
      store.dispatch('toggleTheme')
    }
    
    const isDarkTheme = computed(() => store.getters.isDarkTheme)
    
    return {
      toggleTheme,
      isDarkTheme
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.theme-toggle i {
  font-size: 1.2rem;
}
</style>