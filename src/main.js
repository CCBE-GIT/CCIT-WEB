import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

loadFonts()

// Define toast options BEFORE using them
const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(bootstrap)
  .use(Toast, options)  // Now options is defined
  .mount('#app')