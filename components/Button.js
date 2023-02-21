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
    text: String,
  },

  data() {
    return {
      groupId: null,
    };
  },

  async created() {},

  methods: {
    // Creates a group on click
    async createGroup() {
      const db = getFirestore(firebaseApp);
      const docRef = await addDoc(collection(db, "groups"), {});
      //   Checks groupId
      console.log("createGroup");
      console.log(docRef.id);
      this.groupId = docRef.id;
      //   Changes the url to the groupId
      window.location.href = `http://localhost:5500/index.html?groupId=${this.groupId}`;
      //   emits the groupId to the parent component
    //   this.$emit("groupId", this.groupId);
    },
  },

  template: `
    <button class="button" @click="createGroup">{{text}}</button>
    `,
};
