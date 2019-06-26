<template>
  <v-container>
    <v-card dark class="mx-3" v-if="matchDetail[0]">
      <v-layout justify-center align-center class="logos">
        <v-flex xs3 md2 mt-2class="text-xs-center">
          <router-link :to="'/team/t:'+ matchDetail[0].name">
            <v-img :src="matchDetail[0].logo"></v-img>
          </router-link>
        </v-flex>
        <v-flex xs4 md4 class="text-xs-center">VS</v-flex>
        <v-flex xs3 md2 mt-2>
          <router-link :to="'/team/t:'+ matchDetail[1].name">
            <v-img :src="matchDetail[1].logo"></v-img>
          </router-link>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card dark v-if="matchDetail[0]">
      <v-toolbar class="mb-3">
        <v-toolbar-title class="layout justify-center">
          <v-flex
            xs5
            class="text-xs-center light-green--text text--lighten-2"
          >{{matchDetail[0].name}}</v-flex>
          <v-flex xs2 class="text-xs-center light-green--text text--lighten-2">-</v-flex>
          <v-flex
            xs5
            class="text-xs-center light-green--text text--lighten-2"
          >{{matchDetail[1].name}}</v-flex>
        </v-toolbar-title>
      </v-toolbar>

      <v-layout class="Oinfo mx-3">
        <v-flex>
          <v-layout row xs10 justify-center class="pt-4">
            <span>Date:{{matchday.date}}</span>
          </v-layout>
          <v-layout row xs10 justify-center class="pb-4">
            <span>Time:{{matchDetail[0].timeMatch}}</span>
          </v-layout>

          <v-layout row xs10 justify-center v-if="matchday.status" class="pb-4">
            <span>Status:{{matchday.status}}</span>
          </v-layout>
          <v-layout row xs10 justify-center class="pb-4" v-else>
            <span>Status: not played yet</span>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex v-if="user">
          <router-link :to="'./chat:'+id">
            <v-btn>Go To That Room Chat</v-btn>
          </router-link>
        </v-flex>
        <v-flex v-else>
          <router-link :to="'./log:'+id">
            <v-btn>Go To That Room Chat</v-btn>
          </router-link>
        </v-flex>
      </v-layout>

      <v-layout row xs10 justify-center wrap class="py-1">
        <v-card-title class="text-xs-center">{{matchDetail[0].Location}}</v-card-title>
        <div class="map pa-2">
          <iframe :src="matchDetail[0].maps"></iframe>
        </div>
      </v-layout>

      <v-toolbar class="mb-2">
        <v-layout>
          <v-flex class="headline text-xs-center light-green--text text--lighten-2">LINE-UP</v-flex>
        </v-layout>
      </v-toolbar>

      <v-layout row justify-space-around wrap v-if="matchDetail[0]">
        <!-- <v-flex xs12 class="text-xs-center">
          <span>LINE-UP</span>
        </v-flex>-->
        <v-flex xs5>
          <v-layout row v-for="(player,i) in matchDetail[0].players" :key="i">
            <!-- <v-flex xs1>
              <v-img :src="player.src" aspect-ratio="1"></v-img>
            </v-flex>-->
            <v-flex xs2 class="caption">{{player.numb}}</v-flex>
            <v-flex class="caption cut mb-2">
              <router-link class="black--text" :to="'./player:'+ player.name">{{player.name}}</router-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs5>
          <v-layout row v-for="(player,i) in matchDetail[1].players" :key="i">
            <!-- <v-flex xs1>
              <v-img :src="player.src" aspect-ratio="1"></v-img>
            </v-flex>-->
            <v-flex xs2 class="caption round">{{player.numb}}</v-flex>
            <v-flex class="caption cut round mb-2">
              <router-link class="black--text" :to="'./player:'+ player.name">{{player.name}}</router-link>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id.split(":").pop()
    };
  },
  created() {
    this.$store.dispatch("loadData", this.id);
  },
  methods: {},
  computed: {
    ...mapState(["info", "matchDetail", "matchday", "user"])
  }
};
</script>
<style scoped>
.Oinfo,
.logos {
  border: 2px black solid;
}

.Oinfo,
map {
  background-color: #455a64;
}
.cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #bdbdbd;
  border: 1px black solid;
  border-radius: 20px;
  text-align: center;
}
</style>



