<template>
  <nav>
    <v-toolbar dark>
      <v-layout dark row xs12 align-center justify-space-around>
        <v-flex xs8>
          <router-link to="/">
            <v-icon large>fas fa-home</v-icon>
          </router-link>
        </v-flex>
        <v-flex xs1>
          <v-img :src="require('../assets/nysl_logo.png')" aspect-ratio="1"></v-img>
        </v-flex>
        <span class="title">NYSL</span>
      </v-layout>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>

