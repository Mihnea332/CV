<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="top-navbar">
    <div class="animation">
      <div class="circle"></div>
      <RouterLink to="/">
        <svg
          class="icon-controller"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M6 12h4"></path>
          <path d="M8 10v4"></path>
          <circle cx="15" cy="11" r="1"></circle>
          <circle cx="18" cy="13" r="1"></circle>
        </svg>
      </RouterLink>
    </div>

    <nav class="main-nav">
      <RouterLink to="/aboutme" class="nav-link">About me</RouterLink>
      <RouterLink to="/education" class="nav-link">Education</RouterLink>
      <RouterLink to="/repositories" class="nav-link">Repositories</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.top-navbar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #111111;
  border-bottom: 2px solid rgba(57, 255, 20, 0.4);
  box-shadow: 0 4px 20px rgba(57, 255, 20, 0.15);
  color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;
}

.animation {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #39ff14;
  border-right-color: #39ff14;
  box-shadow:
    0 0 8px #39ff14,
    inset 0 0 4px #39ff14;
  animation: invartire 3s linear infinite;
}

.icon-controller {
  width: 34px;
  height: 34px;
  color: #39ff14;
  filter: drop-shadow(0 0 6px #39ff14);
  z-index: 2;
}

@keyframes invartire {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.main-nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #888;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 10px 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.nav-link:hover {
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14;
}

.nav-link.router-link-exact-active {
  color: #39ff14;
  border-color: #39ff14;
  background-color: rgba(57, 255, 20, 0.05);
  box-shadow:
    0 0 12px rgba(57, 255, 20, 0.3),
    inset 0 0 6px rgba(57, 255, 20, 0.2);
  text-shadow: 0 0 5px #39ff14;
}
@media (max-width: 768px) {
  .top-navbar {
    height: auto;
    min-height: 80px;
    padding: 0.6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .nav-link {
    text-decoration: none;
    color: #888;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 10px 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: all 0.3s ease;
    letter-spacing: 1px;
  }
}
</style>
