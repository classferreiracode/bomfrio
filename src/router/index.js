import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Hero.vue";
// import Services from "./components/Services.vue";
// import About from "./components/About.vue";
// import Portfolio from "./components/Portfolio.vue";
// import Contact from "./components/Contact.vue";

const routes = [
  { path: "/", component: Home },
  //   { path: "/services", component: Services },
  //   { path: "/about", component: About },
  //   { path: "/portfolio", component: Portfolio },
  //   { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
