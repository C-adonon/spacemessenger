import GroupChat from "./GroupChat.js";

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
