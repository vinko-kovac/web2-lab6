import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import WeightConverter from "./components/WeightConverter.vue";
import PlayerCard from "./components/PlayerCard.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("weight-converter", WeightConverter);
app.component("player-card", PlayerCard);
app.mount("#app");
