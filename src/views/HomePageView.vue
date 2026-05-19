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
  </main>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
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
    transform: translateY(10px); /* O mișcare ușoară în jos */
  }
}
</style>
