import GroupHome from "./GroupHome.js";
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
    GroupHome,
  },

  data() {
    return {
      groupId: null,
      groupIsCreated: false,
      url: null,
    };
  },

  mounted() {
    if (window.location.search) {
      this.groupIsCreated = true;
      const urlParams = new URLSearchParams(window.location.search);
      this.groupId = urlParams.get("groupId");
    }
  },

  methods: {
    // Creates a group on click
    async createGroup() {
      const db = getFirestore(firebaseApp);
      const docRef = await addDoc(collection(db, "groups"), {});
      //   Sets the groupId to the id of the group
      this.groupId = docRef.id;
      this.setUrl();
    },

    // Sets the new url for the group
    setUrl() {
      // Gets the current url
      this.url = window.location.href;
      // Changes the url and adds the groupId
      window.location.href = `${this.url}index.html?groupId=${this.groupId}`;
    },
  },

  template: `
  <div class="home" v-if="!groupIsCreated">
    <h1>SpaceMessenger</h1>
    <button class="button" @click="createGroup">Create a group</button>
  </div>
  <GroupHome v-else-if="groupIsCreated" :groupId="this.groupId"></GroupHome>
`,
};
