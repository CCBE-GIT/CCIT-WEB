<template>
  <div id="app" :class="themeClass">
    <ThemeToggle />
    <NavigationBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ThemeToggle from '@/components/ThemeToggle.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    ThemeToggle,
    NavigationBar,
    FooterComponent
  },
  setup() {
    const store = useStore()
    const themeClass = computed(() => store.getters.currentTheme)
    
    // Initialize theme
    store.dispatch('setTheme', store.state.theme.theme || 'light')
    
    return {
      themeClass
    }
  }
}
</script>

<style>
@import '@/assets/css/theme.css';
@import 'bootstrap/dist/css/bootstrap.min.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>