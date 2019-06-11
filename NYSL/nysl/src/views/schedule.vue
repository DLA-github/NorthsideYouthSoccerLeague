<template>
  <v-card min-height="530">
    <v-toolbar>
      <v-layout justify-center>
        <router-link to="/class">|| Standing |</router-link>
        <router-link to="/class/sched">| Schedule |</router-link>
        <router-link to="/class/res">| Results ||</router-link>
      </v-layout>
    </v-toolbar>
    <v-list>
      <v-list-group v-for="day in league" :key="day.match" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title
              ml-5
              class="blue lighten-5 pl-5 ml-2"
            >Current Match: {{day.match}}--> date: {{day.date}}</v-list-tile-title>
          </v-list-tile-content>
        </template>
        <v-list-tile v-for="play in day.confrontation" :key="play" class="mr-5">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center grey lighten-2">
              <router-link :to="'/match' + play">{{play}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    league() {
      return this.$store.state.league;
    }
  },
  created() {}
};
</script>

