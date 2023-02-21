import GroupChat from "./GroupChat.js";
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
  components: {
    GroupChat,
  },

  props: {
    groupId: String,
  },

  data() {
    return {
      submitted: false,
      userName: null,
    };
  },

  methods: {
    async onSubmit() {
      this.submitted = true;
      console.log(this.submitted + " " + this.userName + " " + this.groupId);

      const db = getFirestore(firebaseApp);
      const groupsRef = collection(db, "groups", String(this.groupId), "users");
      const newEntry = await setDoc(doc(groupsRef), {
        name: this.userName,
      });
    },
  },

  template: `
    <div v-if="!submitted" class="group-home">
        <h1>Group<br>#{{this.groupId}}</h1>
        <form class="form" @submit.prevent="onSubmit">
            <input class="input" type="text" placeholder="Enter your name" v-model="userName" />
        </form>
    </div>
    <GroupChat v-else-if="submitted" :groupId="this.groupId" :userName="userName"></GroupChat>
`,
};
