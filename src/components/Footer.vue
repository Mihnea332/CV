<script setup lang="ts"></script>

<template>
  <footer class="main-footer">
    <div class="footer-content">
      <p class="copyright">© 2026 All rights reserved</p>
      <div class="social-links">
        <a href="https://github.com/Mihnea332" target="_blank" class="social-icon">GitHub</a>
        <a href="https://www.linkedin.com/in/mihnea-gabriel-189a06369/?skipRedirect=true" target="_blank" class="social-icon">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: #111111;
  border-top: 2px solid rgba(57, 255, 20, 0.4);
  box-shadow: 0 -4px 20px rgba(57, 255, 20, 0.15);
  font-family: "Courier New", Courier, monospace;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.copyright {
  color: #888;
  font-size: 0.95rem;
  margin: 0;
  letter-spacing: 0.5px;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-icon {
  text-decoration: none;
  color: #888;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.social-icon:hover {
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14;
}
</style>
