<template>
  <v-container>
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
    <div>Results</div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
