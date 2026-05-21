<script setup lang="ts"></script>

<template>
  <main class="main">
    <div class="prezentare">
      Hello, my name is Mihnea, I'm a soon to be software engineer and here's my
      CV web page!
    </div>
    <svg
      class="arrow-down"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor">
      <path
        d="M7 10l5 5 5-5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>
    <div class="ringdiv">
      <div class="toprow">
        <RouterLink to="/aboutme" class="ring">
          <span class="ring-text">About me</span>
        </RouterLink>
        <RouterLink to="/education" class="ring">
          <span class="ring-text">Education</span>
        </RouterLink>
      </div>
      <div class="bottomrow">
        <RouterLink to="/repositories" class="ring">
          <span class="ring-text">Repositories</span>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.prezentare {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid green;
  border-radius: 10px;
  height: 100%;
  font-size: larger;
  margin: 20px;
  padding: 10px;
  text-align: center;
  font-family: "Orbitron", sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.arrow-down {
  width: 100px;
  height: 100px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  color: #39ff14;
  filter: drop-shadow(0 0 5px #39ff14);

  animation: bounce 1.5s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
.ringdiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.toprow {
  display: flex;
  gap: 30px;
}

.bottomrow {
  display: flex;
  justify-content: center;
  margin-top: -30px;
}

.ring {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #39ff14;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow:
    0 0 15px rgba(57, 255, 20, 0.5),
    inset 0 0 10px rgba(57, 255, 20, 0.3);
  transition: all 0.3s ease;
  z-index: 1;
  margin: -5px;
}

.ring:hover {
  transform: scale(1.1);
  z-index: 10;
  box-shadow:
    0 0 25px #39ff14,
    inset 0 0 15px #39ff14;
  background-color: rgba(57, 255, 20, 0.15);
}

.ring-text {
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 0 0 6px #39ff14;
  transition: color 0.3s ease;
  text-align: center;
}

.ring:hover .ring-text {
  color: #39ff14;
  text-shadow: 0 0 8px #ffffff;
}
</style>
