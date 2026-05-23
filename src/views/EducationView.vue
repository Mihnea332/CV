<script setup lang="ts">
import { ref } from "vue";
const favoriteCourses = ref([
  {
    id: 1,
    title: "SQL Tutorial - Full Database Course for Beginners by freeCodeCamp",
    url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
  },
  {
    id: 2,
    title: "Learn Vue.js - Tutorial for Beginners by freeCodeCamp",
    url: "https://www.youtube.com/watch?v=Kt2E8nblvXU&t=4312s",
  },
  {
    id: 3,
    title: "Node.js and Express.js - Full Course by freeCodeCamp",
    url: "https://www.youtube.com/watch?v=Oe421EPjeBE&t=2734s",
  },
]);
</script>

<template>
  <div class="edu-wrapper">
    <h1 class="neon-title">Education</h1>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <span class="date">2024 - Present</span>
          <h2 class="institution">Lucian Blaga University</h2>
          <h3 class="degree">Faculty of Engineering</h3>
          <p class="description">
            Major: Computer Science (BSc). Studying the fundamentals of software
            engineering, data structures, algorithms,embedded systems,
            databases, and system architecture.
          </p>
          <div class="relevant-courses">
            <span class="course-tag">Data Structures</span>
            <span class="course-tag">OOP</span>
            <span class="course-tag">Web Dev</span>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <span class="date">2020 - 2024</span>
          <h2 class="institution">Onisifor Ghibu High School</h2>
          <h3 class="degree">Mathematics and Informatics Profile</h3>
          <p class="description">
            Built the foundation for logical thinking and took my first steps in
            programming (C++).
          </p>
        </div>
      </div>
    </div>
    <div class="courses-section">
      <h2 class="subtitle">Favourite video courses</h2>

      <div class="courses-container">
        <a
          v-for="course in favoriteCourses"
          :key="course.id"
          :href="course.url"
          target="_blank"
          class="course-btn">
          {{ course.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edu-wrapper {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  color: #ffffff;
  padding: 2rem 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 30px;
  top: 0;
  width: 2px;
  height: 100%;
  background: rgba(57, 255, 20, 0.3);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.2);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 21px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0a0a0a;
  border: 3px solid #39ff14;
  box-shadow: 0 0 10px #39ff14;
  z-index: 2;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: rgba(57, 255, 20, 0.05);
  border-left: 3px solid #39ff14;
  transform: translateX(10px);
}

.date {
  color: #39ff14;
  font-weight: bold;
  font-size: 0.9rem;
}

.institution {
  font-family: "Orbitron", sans-serif;
  font-size: 1.4rem;
  margin: 0.5rem 0;
}

.degree {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.description {
  line-height: 1.6;
  color: #ccc;
}

.relevant-courses {
  margin-top: 1rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.course-tag {
  font-size: 0.8rem;
  padding: 4px 10px;
  border: 1px solid rgba(57, 255, 20, 0.5);
  border-radius: 15px;
  color: #39ff14;
}

.extra-edu {
  margin-top: 4rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.extra-title {
  font-family: "Orbitron", sans-serif;
  color: #39ff14;
  margin-bottom: 2rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.course-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  background: #111;
  transition: 0.3s;
}

.course-card:hover {
  border-color: #39ff14;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.2);
}

.course-card h4 {
  margin: 0 0 0.5rem 0;
}

.course-card p {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .timeline::before {
    left: 20px;
  }
  .timeline-marker {
    left: 11px;
  }
  .timeline-item {
    padding-left: 40px;
  }
}
.courses-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.subtitle {
  color: #39ff14;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
}

.courses-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.course-btn {
  color: #39ff14;
  background: rgba(57, 255, 20, 0.1);
  padding: 8px 16px;
  border: 1px solid #39ff14;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.course-btn:hover {
  background: rgba(57, 255, 20, 0.3);
  box-shadow: 0 0 10px #39ff14;
  color: #ffffff;
}
</style>
