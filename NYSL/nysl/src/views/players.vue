<template>
  <v-container v-if="player[0]">
    <v-divider color="light-green lighten-2"></v-divider>
    <v-toolbar dark class="light-green--text text--lighten-2">
      <v-layout justify-center>
        <v-toolbar-title class="display-1">{{player[0].name}}</v-toolbar-title>
      </v-layout>
    </v-toolbar>

    <v-card dark>
      <v-layout xs12 md6 justify-center>
        <v-flex xs8 class="logo my-2">
          <v-img :src="player[0].src"></v-img>
        </v-flex>
      </v-layout>
      <v-layout id="Oinfo" justify-center>
        <v-flex xs12 md6>
          <v-list class="mx-3 mb-2">
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">birth:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center blue-grey darken-2">{{player[0].birth}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">Pos:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center blue-grey darken-2">{{player[0].pos}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content wrap>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">born:</v-list-tile-title>
                <v-list-tile-sub-title
                  class="text-xs-center blue-grey darken-2"
                >{{player[0].nationality}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="blue-grey darken-2">
              <v-list-tile-content wrap>
                <v-list-tile-title class="text-xs-center blue-grey darken-2">Current Team:</v-list-tile-title>
                <v-list-tile-sub-title class="text-xs-center blue-grey darken-2">
                  <router-link :to="'./team/t:'+player[0].currentTeam">{{player[0].currentTeam}}</router-link>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card dark v-if="getTeam">
      <v-toolbar>
        <v-layout>
          <v-flex class="text-xs-center headline light-green--text text--lighten-2">SQUAD</v-flex>
        </v-layout>
      </v-toolbar>
      <v-layout justify-center>
        <v-flex xs6>
          <v-carousel hide-delimiters height="210">
            <v-carousel-item v-for="(p,i) in getTeam.players" :key="i">
              <v-card class="layout row wrap justify-space-around caption">
                <v-flex xs12>
                  <v-img :src="p.src" aspect-ratio="1"></v-img>
                </v-flex>
                <v-flex xs8 class="cut" align-center>{{p.name}}</v-flex>
                <v-flex xs4 align-center>{{p.pos}}</v-flex>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-card>
    <v-toolbar dark class="pa-3">
      <v-layout xs12 align-center justify-space-around>
        <v-flex>
          <v-text-field
            label="Search for another player"
            outline
            color="light-green lighten-2 ml-1"
            v-model="search"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-card dark>
      <v-data-iterator
        :items="getPlayer"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-class="layout row wrap"
        row
        wrap
      >
        <template v-slot:item="props">
          <v-flex xs4 class="pa-2" id="plot">
            <router-link class="white--text" :to="'./player:'+ props.item.name">
              <v-img :src="props.item.src"></v-img>
              {{props.item.name}}
            </router-link>
          </v-flex>
        </template>
      </v-data-iterator>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // id: this.$route.params.id.split(":").pop(),
      currentTeam: {},
      search: "",
      result: [],
      rowsPerPageItems: [25, 50],
      pagination: {
        rowsPerPage: 25
      }
    };
  },
  created() {
    this.$store.dispatch("getPlayers", this.id);
    this.$store.dispatch("loadData");
  },

  computed: {
    ...mapState(["allPlayers", "player", "info"]),
    id() {
      return this.$route.params.id.split(":").pop();
    },
    getTeam() {
      if (this.info.teams) {
        let team = this.info.teams.filter(team => {
          return team.name == this.player[0].currentTeam;
        });
        this.currentTeam = team[0];
        return this.currentTeam;
      }
      return (this.currentTeam = {});
    },

    getPlayer() {
      let p = this.allPlayers.filter(play => {
        return play.name.toLowerCase().includes(this.search.toLowerCase());
      });
      this.result = p;
      return this.result;
    }
    // getSearch: function() {
    //   if (this.allPlayers) {
    //     this.currentPlayer = this.allPlayers.filter(p => {
    //       return p.name.toLowerCase().match(this.search.toLowerCase());
    //     });

    //     return this.currentTeam;
    //   }
    //   return (this.currentTeam = []);
    // }
  },
  watch: {
    "$route.params.id"(val) {
      this.$router.push("./player" + val);
      // this.id = this.$route.params.id.split(":").pop();
      this.$store.dispatch("getPlayers", this.id);
    }
  },
  methods: {}
};
</script>
<style scoped>
.v-list {
  border: 2px solid black;
  padding: 0;
}
.map {
  text-align: center;
}
.cut {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>



