<template>
  <v-card min-height="550">
    <v-toolbar>
      <v-layout justify-center>
        <v-toolbar-title>CHAT</v-toolbar-title>
      </v-layout>
    </v-toolbar>
    <v-form class="text-xs-center pa-3">
      <p>For acces to our Chat, please log in.</p>
      <v-layout justify-center>
        <v-flex xs6>
          <v-text-field v-model="user" label="User" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs6>
          <v-text-field v-model="password" label="Password" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-flex>
        <button>Go</button>
      </v-flex>
      <v-flex>
        <router-link to="/chat/reg">Or create Account</router-link>
      </v-flex>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: ""
    };
  }
};
</script>

