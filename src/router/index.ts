import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePageView.vue";
import HomePageView from "@/views/HomePageView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import EducationView from "@/views/EducationView.vue";
import ReposView from "@/views/ReposView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageView,
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: AboutMeView
    },
     {
      path: "/education",
      name: "education",
      component: EducationView
    },
    {
      path: "/repositories",
      name: "repositories",
      component: ReposView
    },
  ],
});

export default router;
