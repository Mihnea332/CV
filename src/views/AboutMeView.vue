<script setup lang="ts">
</script>

<template>
  <div class="about-wrapper">
    <h1 class="neon-title">About Me</h1>
    
    <div class="content-layout">
      <div class="image-placeholder">
        <div class="scanline"></div>
      </div>
      
      <div class="text-content">
        <h2 class="subtitle">System.out.println("Hello World!");</h2>
        <p class="bio-text">
            Hello again ! My name is Halalaie Mihnea Gabriel, I'm currently a student at "Lucian Blaga" University of Sibiu, 
            learning computer science. I like programming, specifically Web apps, but I also enjoy playing around with controllers
            like Arduino. In my free time I'm a gamer, playing all kinds of video games: Multiplayer FPS, MMORPGs, but story games are
            my favorites.

         </p>
        
        <h3 class="skills-title">Preffered tools/Frameworks</h3>
        <div class="skills-container">
          <span class="skill-badge">Vue.js</span>
          <span class="skill-badge">TypeScript</span>
          <span class="skill-badge">Nodejs</span>
          <span class="skill-badge">Git</span>
          <span class="skill-badge">C++/C#</span>
        </div>
      </div>
      <div class="contact-card">
          <h3 class="contact-title">Contact Me Here</h3>
          <div class="contact-item">
            <span class="label">EMAIL:</span>
            <a href="mailto:gabi.mihnea46@gmail.com" class="value">gabi.mihnea46@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="label">PHONE:</span>
            <span class="value">+40 770 931 785</span>
          </div>
          <div class="contact-item">
            <span class="label">LOC:</span>
            <span class="value">Sibiu, Romania</span>
          </div>
        </div>
        <div class="languages-section">
          <h3 class="contact-title">System.Languages: English</h3>
          <table class="neon-table">
            <thead>
              <tr>
                <th>High School Competency</th>
                <th>Level (CEFR)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="lang-name">Listening Comprehension</td>
                <td><span class="badge-c2">C2</span></td>
                <td class="lang-desc">Proficient User</td>
              </tr>
              <tr>
                <td class="lang-name">Reading & Writing</td>
                <td><span class="badge-c2">C2</span></td>
                <td class="lang-desc">Proficient User</td>
              </tr>
              <tr>
                <td class="lang-name">Speaking & Interaction</td>
                <td><span class="badge-c2">C2</span></td>
                <td class="lang-desc">Proficient User</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.about-wrapper {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  color: #ffffff;
  padding: 2rem 0;
}

.neon-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  color: #39ff14;
  text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content-layout {
  display: flex;
  gap: 4rem;
  max-width: 900px;
  width: 100%;
  align-items: center;
}

.image-placeholder {
  width: 250px;
  height: 250px;
  border: 3px solid #39ff14;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.5), inset 0 0 15px rgba(57, 255, 20, 0.3);
  position: relative;
  overflow: hidden;
  background-color: #111111;
  flex-shrink: 0;
}

.scanline {
  width: 100%;
  height: 4px;
  background-color: rgba(57, 255, 20, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  animation: scan 3s linear infinite;
  box-shadow: 0 0 10px #39ff14;
}

@keyframes scan {
  0% { top: -10px; }
  100% { top: 100%; }
}

.text-content {
  display: flex;
  flex-direction: column;
}

.subtitle {
  color: #888;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 3px solid #39ff14;
  padding-left: 10px;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #cccccc;
}

.skills-title {
  font-family: 'Orbitron', sans-serif;
  color: #39ff14;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.skill-badge {
  padding: 8px 15px;
  border: 1px solid #39ff14;
  border-radius: 5px;
  font-weight: bold;
  color: #39ff14;
  background-color: rgba(57, 255, 20, 0.05);
  text-shadow: 0 0 5px #39ff14;
  box-shadow: 0 0 5px rgba(57, 255, 20, 0.2);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background-color: rgba(57, 255, 20, 0.2);
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .content-layout {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .subtitle {
    border-left: none;
    border-bottom: 3px solid #39ff14;
    padding-left: 0;
    padding-bottom: 5px;
    display: inline-block;
    margin: 0 auto 1rem auto;
  }
  
  .skills-container {
    justify-content: center;
  }
}
/* --- STILURI CONTACT INFO --- */
.contact-card {
  margin-top: 3rem;
  background: rgba(57, 255, 20, 0.03);
  border: 1px solid rgba(57, 255, 20, 0.2);
  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: #39ff14;
  background: rgba(57, 255, 20, 0.07);
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.1);
}

/* Efectul de linie de cod în colț */
.contact-card::before {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 0.7rem;
  color: #39ff14;
  opacity: 0.5;
}

.contact-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  color: #39ff14;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
}

.contact-item {
  display: flex;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.label {
  color: #39ff14;
  font-weight: bold;
  width: 80px; /* Aliniere perfectă pe verticală */
  opacity: 0.8;
}

.value {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

a.value:hover {
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14;
  padding-left: 5px;
}

/* Ajustare pentru ecrane mici */
@media (max-width: 768px) {
  .contact-card {
    margin-top: 2rem;
    text-align: left;
  }
  
  .contact-item {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 1.2rem;
  }
}
/* --- STILURI TABEL LIMBI STRAINE --- */
.languages-section {
  margin-top: 2rem;
  width: 100%;
}

.neon-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(17, 17, 17, 0.6);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 8px;
  overflow: hidden; /* Pentru a păstra marginile rotunjite la tabel */
  display: block; /* Necesită display block pe tabel pentru border-radius funcțional uneori */
}

/* Transformăm tbody/thead în block pentru a umple spațiul */
.neon-table thead, .neon-table tbody, .neon-table tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.neon-table th, .neon-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid rgba(57, 255, 20, 0.1);
}

.neon-table th {
  color: #39ff14;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(57, 255, 20, 0.05);
}

.neon-table tr {
  transition: background-color 0.3s ease;
}

.neon-table tbody tr:hover {
  background: rgba(57, 255, 20, 0.08);
}

.lang-name {
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;
}

.lang-desc {
  color: #cccccc;
  font-size: 0.95rem;
}

/* Insigne (Badges) pentru Nivel */
.badge-c2 {
  display: inline-block;
  background: rgba(57, 255, 20, 0.1);
  color: #39ff14;
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid #39ff14;
  font-weight: bold;
  text-shadow: 0 0 5px #39ff14;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.2);
}

.badge-native {
  display: inline-block;
  background: rgba(136, 136, 136, 0.1);
  color: #aaaaaa;
  padding: 5px 12px;
  border-radius: 4px;
  border: 1px solid #555555;
  font-weight: bold;
}

@media (max-width: 768px) {
  .neon-table th, .neon-table td {
    padding: 10px;
    font-size: 0.85rem;
  }
  
  .badge-c2, .badge-native {
    padding: 4px 8px;
  }
}
</style>