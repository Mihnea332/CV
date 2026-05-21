<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
const isLoading = ref(false);
const router = useRouter();
router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<template>
  <div class="app-wrapper">
    <div v-if="isLoading" class="loader-overlay">
      <div class="neon-spinner"></div>
      <div class="loader-text">SYSTEM.LOADING...</div>
    </div>
    <Header />
    <main class="page-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #0a0a0a;
}
</style>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.page-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  flex: 1;
}
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #050505;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.neon-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-top-color: #39ff14;
  border-right-color: #39ff14;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow:
    0 0 15px #39ff14,
    inset 0 0 10px #39ff14;
  margin-bottom: 25px;
}

.loader-text {
  color: #39ff14;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  letter-spacing: 4px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    text-shadow: 0 0 15px #39ff14;
  }
  50% {
    opacity: 0.4;
    text-shadow: none;
  }
}
</style>
