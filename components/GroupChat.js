import { firebaseApp } from "../firebase.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

export default {
  props: {
    groupId: String,
    userName: String,
  },

  

  template: `

    <div class="group-chat">
        <section class="chat-message">
        </section>
        <form class="chat-form" @submit.prevent="onSubmit">
            <input class="input" type="text" placeholder="Your message" v-model="message" />
            <input class="button" type="submit" value="Send" />
        </form>
    </div>
`,
};
