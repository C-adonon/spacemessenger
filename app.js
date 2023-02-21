import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Home from "./components/Home.js";

createApp({
  components: {
    Home,
  },
  template: `
  <main>
    <Home></Home>
  </main>
  `,
}).mount("#app");
