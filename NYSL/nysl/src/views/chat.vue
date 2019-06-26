<template>
  <v-container>
    <v-layout>
      <v-flex align-center>
        <v-toolbar dark class="layout justify-center">
          <v-toolbar-title>
            <span class="text-xs-center light-green--text text--lighten-2">
              CHAT
              <v-icon large @click="logout">fas fa-sign-out-alt</v-icon>
            </span>
          </v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-card-text column align-center justify-center id="chats">
            <v-layout wrap justify-end v-for="(message, index) in messages" :key="index">
              <v-flex xs12 md6 lg6 class="mr-2 caption grey--text">{{message.user}}</v-flex>
              <v-flex xs12 md6 lg6 class="caption">{{message.timestamp}}</v-flex>
              <v-flex xs12 md6 lg6 class="text-xs-right">{{message.message}}</v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        <v-divider color="light-green lighten-2" class="ma-4"></v-divider>
        <v-card>
          <v-layout id="input">
            <v-flex xs12 md6 lg6>
              <v-form class="layout row" @submit.prevent="addMessage">
                <v-flex>
                  <v-text-field
                    v-model="newMessage"
                    autofocus
                    color="light-green lighten-2"
                    label="message"
                  ></v-text-field>
                </v-flex>
              </v-form>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      //id: this.$route.params.id.split(":").pop(),
      newMessage: ""
    };
  },
  created() {
    this.$store.dispatch("init", this.id);
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        //FIRESTORE
        // fb.collection("messages")
        //   .add({
        //     message: this.newMessage,
        //     user: this.user.user.email,
        //     timestamp: Date.now()
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        //FIREBASE
        let myObject = {
          message: this.newMessage, //si son iguales se puede poner simplemente message y ya esta sin igualarlo.
          user: this.user.displayName,
          timestamp: Date.now()
        };
        let ref = "messages" + this.id;
        firebase
          .database()
          .ref(ref)
          .push(myObject);
        this.newMessage = null;
      } else {
        console.log("Error");
      }
    },
    ...mapActions(["logout"])
  },
  computed: {
    ...mapState(["messages", "user"]),
    id() {
      return this.$route.params.id.split(":").pop();
    }
  },
  watch: {
    "$route.params.id"(val) {
      this.$router.push("./player" + val);
      // this.id = this.$route.params.id.split(":").pop();
      this.$store.dispatch("init", this.id);
    }
  },

  updated() {
    document.getElementById("chats").scrollTop = document.getElementById(
      "chats"
    ).scrollHeight;
  }
};
</script>

<style>
#chats {
  height: 420px;
  overflow: scroll;
  scroll-behavior: smooth;
}
</style>
