import { createRouter, createWebHistory } from "vue-router";
import PlayersView from "../views/PlayersView.vue";
import WeightView from "../views/WeightView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "players",
      component: PlayersView,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: WeightView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
