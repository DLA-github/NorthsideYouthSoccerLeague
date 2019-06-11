<template>
  <v-app>
    <v-content>
      <toolbar></toolbar>
      <router-view></router-view>
      <controls></controls>
    </v-content>
  </v-app>
</template>

<script>
import nyslChat from "./views/chat.vue";
import nyslPlayers from "./views/players.vue";
import nyslHome from "./views/home";
import nyslDetailMatch from "./views/detailMatch.vue";
import nyslMatch from "./views/match.vue";
import nyslResults from "./views/results.vue";
import nyslSchedule from "./views/schedule.vue";
import nyslTeams from "./views/teams.vue";
import nysldetailTeam from "./views/detailTeam.vue";
import nyslClassification from "./views/classification.vue";
import nyslLogin from "./views/login.vue";
import nyslRegistration from "./views/register.vue";
import toolbar from "./components/toolbar.vue";
import controls from "./components/controls.vue";

export default {
  name: "App",
  components: {
    toolbar,
    nyslChat,
    nyslPlayers,
    nyslLogin,
    nyslRegistration,
    nyslHome,
    nyslDetailMatch,
    nyslResults,
    nyslSchedule,
    nyslTeams,
    nysldetailTeam,
    controls
  },
  data() {
    return {
      //
    };
  }
};
</script>
