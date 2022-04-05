import { createApp } from "vue";
import App from "./App.vue";
import { Fachwerk } from "fachwerk";

import "fachwerk/internal.css";
import "./app.css";

const app = createApp(App);
app.use(Fachwerk);
app.mount("#app");
