import { createApp } from "vue";
import App from "./App.vue";
import { Fachwerk } from "fachwerk";

const app = createApp(App);
app.use(Fachwerk);
app.mount("#app");
