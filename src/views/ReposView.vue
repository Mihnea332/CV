<script setup lang="ts">
import { onMounted, ref, computed } from "vue";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
};

const repos = ref<Repo[]>([]);
const count = ref(6);
const getRepos = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Mihnea332/repos");
    const data = await res.json();
    //   console.log(data);
    repos.value = data;
  } catch (error) {
    console.error("Eroare: ", error);
  }
};
const visibleRepos = computed(() => {
  return repos.value.slice(0, count.value);
});
const loadMore = () => {
  count.value += 6;
};
onMounted(() => {
  getRepos();
});
</script>

<template>
  <div class="repos-wrapper">
    <h1 class="neon-title">Repositories</h1>
    <div class="wrappergrid">
      <div v-for="repo in visibleRepos" :key="repo.id" class="repocard">
        <h2 class="name">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </h2>
        <p class="description">{{ repo.description || "No description" }}</p>
        <span class="language"> {{ repo.language || "Not added" }}</span>
        <br />
        <span class="stars">⭐ {{ repo.stargazers_count }}</span>
        <br />
        <span class="forks">🍴 {{ repo.forks_count }}</span>
        <br />
        <span class="date"
          >Created at: {{ repo.created_at.split("T")[0] }}</span
        >
      </div>
    </div>

    <button v-if="count < repos.length" @click="loadMore" class="load-more-btn">
      System.loadMore()
    </button>
  </div>
</template>

<style scoped>
.repos-wrapper {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  color: #ffffff;
  padding: 2rem 0;
}

.wrappergrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
}

@media (max-width: 600px) {
  /* small tweaks kept here; .neon-title handled in global.css */
}
.repocard {
  background: rgba(17, 17, 17, 0.8);
  border: 1px solid rgba(57, 255, 20, 0.3);
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
}
.repocard:hover {
  background: rgba(10, 138, 116, 0.5);
}
.name {
  overflow-wrap: break-word;
  word-break: break-all;
}
.name a {
  color: #39ff14;
  text-decoration: none;
  transition: all 0.3s ease;
}

.name a:hover {
  text-shadow: 0 0 15px #39ff14;
  color: #ffffff;
}
.description {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.language {
  color: #39ff14;
  background: rgba(57, 255, 20, 0.1);
  padding: 4px 8px;
  border: 1px solid #39ff14;
  border-radius: 4px;
  font-size: 0.85rem;
  max-width: fit-content;
}

.date {
  color: #888888;
  font-family: monospace;
  font-size: 0.8rem;
  float: right;
  margin-top: 5px;
}
.stars {
  display: inline-block;
  color: #ffea00;
  background: rgba(255, 234, 0, 0.1);
  border: 1px solid rgba(255, 234, 0, 0.4);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: monospace;
  margin-bottom: 8px;
  max-width: fit-content;
}

.forks {
  display: inline-block;
  color: #00e5ff;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.4);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: monospace;
  max-width: fit-content;
}
.load-more-btn {
  margin-top: 30px;
  padding: 10px 20px;
  background: transparent;
  color: #39ff14;
  border: 1px solid #39ff14;
  border-radius: 4px;
  font-family: monospace;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.load-more-btn:hover {
  background: rgba(57, 255, 20, 0.1);
  box-shadow: 0 0 10px #39ff14;
}
</style>
