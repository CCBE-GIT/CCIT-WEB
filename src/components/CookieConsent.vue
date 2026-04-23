<template>
  <transition name="cookie-slide">
    <div v-if="showBanner" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div class="cookie-inner">
        <!-- <div class="cookie-icon">🍪</div> -->
        <div class="cookie-text">
          <p>
            We use cookies to enhance your browsing experience, analyse site traffic, and personalise content.
            By clicking <strong>"Accept All"</strong>, you consent to our use of cookies.
            <a href="/privacy-policy" class="cookie-link">Learn more</a>
          </p>
        </div>
        <div class="cookie-actions">
          <button class="btn-decline" @click="decline">Decline</button>
          <button class="btn-customize" @click="toggleCustomize">Customize</button>
          <button class="btn-accept" @click="acceptAll">Accept All</button>
        </div>
      </div>

      <!-- Customize Panel -->
      <transition name="expand">
        <div v-if="showCustomize" class="cookie-customize">
          <div class="cookie-customize-inner">
            <div class="pref-item" v-for="pref in preferences" :key="pref.key">
              <div class="pref-info">
                <span class="pref-name">{{ pref.name }}</span>
                <span class="pref-desc">{{ pref.description }}</span>
              </div>
              <label class="toggle-switch" :class="{ disabled: pref.required }">
                <input
                  type="checkbox"
                  v-model="pref.enabled"
                  :disabled="pref.required"
                />
                <span class="toggle-slider"></span>
              </label>
            </div>
            <button class="btn-save" @click="savePreferences">Save Preferences</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showBanner: false,
      showCustomize: false,
      preferences: [
        {
          key: 'necessary',
          name: 'Strictly Necessary',
          description: 'Required for the website to function properly. Cannot be disabled.',
          enabled: true,
          required: true
        },
        {
          key: 'analytics',
          name: 'Analytics',
          description: 'Helps us understand how visitors interact with our website.',
          enabled: false,
          required: false
        },
        {
          key: 'marketing',
          name: 'Marketing',
          description: 'Used to track visitors across websites for advertising purposes.',
          enabled: false,
          required: false
        },
        {
          key: 'functional',
          name: 'Functional',
          description: 'Enables enhanced functionality and personalisation.',
          enabled: false,
          required: false
        }
      ]
    };
  },
  mounted() {
    const consent = localStorage.getItem('ccit_cookie_consent');
    if (!consent) {
      setTimeout(() => {
        this.showBanner = true;
      }, 800);
    }
  },
  methods: {
    acceptAll() {
      this.preferences.forEach(p => (p.enabled = true));
      this.saveToStorage('all');
      this.showBanner = false;
    },
    decline() {
      this.preferences.forEach(p => {
        if (!p.required) p.enabled = false;
      });
      this.saveToStorage('necessary');
      this.showBanner = false;
    },
    toggleCustomize() {
      this.showCustomize = !this.showCustomize;
    },
    savePreferences() {
      const chosen = this.preferences.reduce((acc, p) => {
        acc[p.key] = p.enabled;
        return acc;
      }, {});
      this.saveToStorage(JSON.stringify(chosen));
      this.showBanner = false;
    },
    saveToStorage(value) {
      try {
        localStorage.setItem('ccit_cookie_consent', value);
        localStorage.setItem('ccit_cookie_consent_date', new Date().toISOString());
      } catch (e) {
        // localStorage not available
      }
    }
  }
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  border-top: 3px solid #FBB700;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.12);
  font-family: 'Roboto', sans-serif;
}

.cookie-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cookie-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cookie-text {
  flex: 1;
  min-width: 220px;
}

.cookie-text p {
  margin: 0;
  font-size: 0.92rem;
  color: #444;
  line-height: 1.5;
}

.cookie-link {
  color: #FF5F15;
  text-decoration: underline;
  font-weight: 600;
}

.cookie-link:hover {
  color: #FBB700;
}

.cookie-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-shrink: 0;
}

/* Buttons */
.btn-decline,
.btn-customize,
.btn-accept {
  padding: 9px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-decline {
  background: transparent;
  border-color: #ccc;
  color: #666;
}
.btn-decline:hover {
  border-color: #999;
  color: #333;
}

.btn-customize {
  background: transparent;
  border-color: #FBB700;
  color: #FBB700;
}
.btn-customize:hover {
  background: #FBB700;
  color: #fff;
}

.btn-accept {
  background: #FF5F15;
  border-color: #FF5F15;
  color: #fff;
  box-shadow: 0 4px 12px rgba(255, 95, 21, 0.3);
}
.btn-accept:hover {
  background: #e04f0d;
  border-color: #e04f0d;
  transform: translateY(-1px);
}

/* Customize Panel */
.cookie-customize {
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
  overflow: hidden;
}

.cookie-customize-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.pref-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 14px;
  min-width: 200px;
  flex: 1;
}

.pref-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.pref-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
}

.pref-desc {
  font-size: 0.75rem;
  color: #888;
  margin-top: 2px;
  line-height: 1.3;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
}

.toggle-switch.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.toggle-slider {
  position: absolute;
  inset: 0;
  background: #ccc;
  border-radius: 24px;
  transition: background 0.3s;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}

.toggle-switch input:checked + .toggle-slider {
  background: #FF5F15;
}

.toggle-switch input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.btn-save {
  padding: 9px 24px;
  background: #FF5F15;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 95, 21, 0.3);
  white-space: nowrap;
}

.btn-save:hover {
  background: #e04f0d;
  transform: translateY(-1px);
}

/* Transitions */
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.4s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.35s ease, opacity 0.3s ease;
  max-height: 300px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-inner {
    padding: 14px 16px;
    gap: 12px;
  }

  .cookie-text p {
    font-size: 0.85rem;
  }

  .cookie-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .cookie-customize-inner {
    padding: 12px 16px 16px;
  }

  .pref-item {
    min-width: 140px;
  }
}

@media (max-width: 480px) {
  .cookie-actions {
    justify-content: center;
  }

  .btn-decline,
  .btn-customize,
  .btn-accept {
    flex: 1;
    text-align: center;
    padding: 9px 12px;
    font-size: 0.8rem;
  }
}
</style>