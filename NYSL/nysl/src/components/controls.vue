<template>
  <v-toolbar dark>
    <v-layout>
      <v-flex xs4 class="text-xs-center">
        <router-link to="/class">
          <v-icon x-large>fas fa-list-ol</v-icon>
        </router-link>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        <router-link to="/team">
          <v-icon x-large>fas fa-user-plus</v-icon>
        </router-link>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        <router-link to="/chat:all">
          <v-icon x-large>fas fa-comments</v-icon>
        </router-link>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.user);
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
