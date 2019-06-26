<template>
  <v-card dark min-height="530">
    <v-layout justify-center align-center>
      <v-flex xs-6 align-content-center class="mt-5">
        <div id="firebaseui-auth-container"></div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
// import firebase from "firebase";
// import firebaseui from "firebaseui";
import "../../node_modules/firebaseui/dist/firebaseui.css";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id.split(":").pop()
    };
  },
  created() {},
  mounted() {
    this.$store.dispatch("logIn", this.id);
  },
  methods: {
    ...mapActions(["logIn"])
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>



<!-- //   <v-card min-height="550">
//     <v-toolbar>
//       <v-layout justify-center>
//         <v-toolbar-title>CHAT</v-toolbar-title>
//       </v-layout>
//     </v-toolbar>
//     <v-form class="text-xs-center pa-3">
//       <p>For acces to our Chat, please log in.</p>
//       <v-layout justify-center>
//         <v-flex xs6>
//           <v-text-field v-model="user" label="User" required></v-text-field>
//         </v-flex>
//       </v-layout>
//       <v-layout justify-center>
//         <v-flex xs6>
//           <v-text-field v-model="password" label="Password" required></v-text-field>
//         </v-flex>
//       </v-layout>
//       <v-flex>
//         <v-btn @click="login">Go!</v-btn>
//         <v-btn @click="logOut">Out!</v-btn>
//       </v-flex>
//       <v-flex>
//         <router-link to="/chat/reg">Or create Account</router-link>
//       </v-flex>
//     </v-form>
//   </v-card> -->



