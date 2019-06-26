<template>
  <v-container min-height="530">
    <v-toolbar dark>
      <v-layout justify-center>
        <router-link to="/class">
          <v-btn outline color="light-green lighten-2">Standing</v-btn>
        </router-link>
        <router-link to="/class/sched">
          <v-btn outline color="light-green lighten-2">Schedule</v-btn>
        </router-link>
        <router-link to="/class/res">
          <v-btn outline color="light-green lighten-2">Results</v-btn>
        </router-link>
      </v-layout>
    </v-toolbar>
    <v-card height="480" dark>
      <v-img src></v-img>
      <v-layout justify-center v-for="(pos,i) in standing" :key="pos.name" class="mt-2 pa-2">
        <v-flex xs4 class="text-xs-center">
          <v-layout justify-end>
            <span class="pr-2">Position:</span>
            <v-flex xs4 class="light-green lighten-2 round black--text">{{i+1}}</v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs8 class="grey lighten-1 round text-xs-center ml-2">
          <router-link :to="'/team/t:'+ pos.name" class="black--text">{{pos.name}}</router-link>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    ...mapState(["info", "standing"])
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.round {
  border-radius: 50px;
}
</style>


