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
    <v-list dark>
      <v-list-group v-for="day in info.league" :key="day.match" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title ml-5 class="layout row grey--text text--lighten-1 pl-2">
              <v-flex xs6>
                Current Match:
                <span class="light-green--text text--lighten-2 px-2">{{day.match}}</span>
              </v-flex>
              <v-flex xs6>
                Date:
                <span class="light-green--text text--lighten-2 px-2">{{day.date}}</span>
              </v-flex>
            </v-list-tile-title>
          </v-list-tile-content>
        </template>
        <v-list-tile v-for="play in day.confrontation" :key="play" class="mr-5">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center grey lighten-1">
              <router-link :to="'/match:' + play" class="black--text">{{play}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {},
  computed: mapState(["info"])
};
</script>

