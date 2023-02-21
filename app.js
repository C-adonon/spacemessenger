import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Home from "./components/Home.js";
import GroupHome from "./components/GroupHome.js";
// import GroupChat from "./components/GroupChat.js";
import Button from "./components/Button.js";
import TextInput from "./components/TextInput.js";

createApp({
  components: {
    Home,
    GroupHome,
    Button,
    TextInput,
  },
  template: `
  <main>
    <Home></Home>
  </main>
  `,
}).mount("#app");
