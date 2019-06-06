<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import nyslChat from "./components/chat.vue";
import nyslPlayers from "./components/players.vue";
import nyslHome from "./components/home.vue";
import nyslDetailMatch from "./components/detailMatch.vue";
import nyslMatch from "./components/match.vue";
import nyslResults from "./components/results.vue";
import nyslSchedule from "./components/schedule.vue";
import nyslTeams from "./components/teams.vue";
import nyslClassification from "./components/classification.vue";

export default {
  name: "app",
  components: {
    nyslChat,
    nyslPlayers,
    nyslHome,
    nyslDetailMatch,
    nyslMatch,
    nyslResults,
    nyslTeams,
    nyslClassification,
    nyslSchedule
  }
};
</script>

<style>
</style>
