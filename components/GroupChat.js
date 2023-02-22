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
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

export default {
  props: {
    groupId: String,
    userName: String,
  },

  data() {
    return {
      message: null,
      groupMessages: [],
      url: null,
    };
  },

  mounted() {
    const db = getFirestore(firebaseApp);
    onSnapshot(
      collection(db, "groups", this.groupId, "messages"),
      this.getMessages
    );
  },

  methods: {
    // On submit, adds the message & user to the database
    async onSubmit() {
      const db = getFirestore(firebaseApp);
      const groupsRef = collection(db, "groups", this.groupId, "messages");
      const newEntry = await addDoc(groupsRef, {
        name: this.userName,
        message: this.message,
        createdAt: new Date(),
      });
    },

    // Gets the messages from the database
    async getMessages() {
      console.log("getting messages");
      const db = getFirestore(firebaseApp);
      const messagesRef = collection(db, "groups", this.groupId, "messages");
      const q = query(messagesRef, orderBy("createdAt", "asc"));
      const messagesSnapshot = await getDocs(q);
      this.groupMessages = [];
      messagesSnapshot.forEach((doc) => {
        this.groupMessages.push(doc.data());
      });
      console.log(this.groupMessages);
      console.log(window.location);
    },

    // Gets url
    getUrl() {
      url = window.location.href;
    },
  },

  template: `
    <section class="group-chat">
        <h2>Share the link: {{this.url}}</h2>
        <div class="chat-messages">
            <ul v-for="message in groupMessages" :key="message.id">
              // <li class="left-message">

              // </li>
              // <li class="right-message">
              
              // </li>
            
                <p>{{message.name}}: {{message.message}}</p>
            </ul> 
        </div>
        <form class="chat-form" @submit.prevent="onSubmit">
            <input class="input" type="text" placeholder="Your message" v-model="message" required />
            <input class="button" type="submit" value="Send" />
        </form>
    </section>
`,
};
