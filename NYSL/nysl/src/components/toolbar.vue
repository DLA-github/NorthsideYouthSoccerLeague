<template>
  <nav>
    <v-toolbar dark>
      <v-layout dark row xs12 md6 sm8 lg6 xl6 align-center justify-space-around>
        <v-flex xs6 md4 lg4 xl4>
          <router-link to="./">
            <v-icon large>fas fa-home</v-icon>
          </router-link>
        </v-flex>

        <v-flex xs1 sm1 md1 lg1 xl1>
          <v-img :src="require('../assets/nysl_logo.png')" aspect-ratio="1"></v-img>
        </v-flex>
        <span class="title">NYSL</span>
      </v-layout>
    </v-toolbar>
  </nav>
</template>
<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapState(["logged"]),
    user() {
      console.log(firebase.auth().currentUser);
      return firebase.auth().currentUser;
    }
  },
  watch: {}
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>

