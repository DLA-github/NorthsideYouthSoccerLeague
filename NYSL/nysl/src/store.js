import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './router'
import moment from "moment";
import {
  stat
} from 'fs';


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    info: {},
    currentmatch: [],
    matchDetail: [],
    standing: [],
    user: null,
    matchday: {},
    allPlayers: [],
    player: {},
    messages: [],
    logged: ""
  },

  actions: {
    getPlayers({
      commit
    }, value) {

      axios.get('https://nysl-bb039.firebaseio.com/.json')
        .then(r => {
          let data = r.data;
          ////////////Players//////////////////////
          let players = [];
          data.teams.forEach(team => {

            players.push(team.players.map(player => {
              return player;
            }));
          });
          let allPlayers = [].concat.apply([], players);

          allPlayers.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
          let player = allPlayers.filter(p => {
            return p.name == value;
          })
          commit('SET_Players', allPlayers)
          commit('SET_Player', player)
        }).catch(error => {
          console.log(error);
        });
    },
    loadData({
      commit
    }, value) {
      axios.get('https://nysl-bb039.firebaseio.com/.json')
        .then(r => {
          let data = r.data;
          ////////jornada acual///////////
          let currentMatch = [];
          let matchday = {}
          let first = true;
          let now = Date.parse("Jun 22, 2019");
          data.league.map(a => {
            let date = Date.parse(a.date);
            if (now < date && first == true) {
              first = false;
              matchday = a;
              currentMatch = a.confrontation;
            }
          });




          /////////////standing////////////////////
          let standing = data.teams.sort((a, b) => {
            return a.pos - b.pos;
          });
          commit('SET_STANDING', standing);
          commit('SET_DATA', data);
          commit('SET_MATCH', currentMatch);
          commit('SET_Matchday', matchday)


          ///////////detalle de partido/////////

          if (value) {

            let teams = value.split("-");

            let a = teams[0].split(":").pop();

            let b = teams[1];
            let result1 = data.teams.filter(team => team.name == a);

            let result2 = data.teams.filter(team => team.name == b);
            let match = [];
            match.push(result1[0], result2[0]);

            commit('SET_MATCH_Detail', match);
          }

        }).catch(error => {
          console.log;
        });
    },
    logout({
      commit
    }) {
      console.log(firebase.auth().currentUser);
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log(firebase.auth().currentUser);
          router.push("./");
          let user = null
          let logged = ""
          commit('AUTH', user);

        });
    },
    init({
      commit
    }, value) {
      //  FIRESTORE
      // let ref = fb.collection("messages").orderBy("timestamp");
      // ref.onSnapshot(snapshot => {
      //   snapshot.docChanges().forEach(change => {
      //     if (change.type == "added") {
      //       let doc = change.doc;
      //       commit('ADD_MESSAGE', {
      //         user: doc.data().user,
      //         message: doc.data().message,
      //         timestamp: moment(doc.data().timestamp).format("LTS")
      //       });
      //
      //FIREBASE
      let ref = "messages" + value
      console.log(ref)
      firebase.database().ref(ref).on('value', (data) => {

        if (data.val()) {
          commit('delete_messages', []);
          Object.values(data.val()).forEach(m => {
            commit('ADD_MESSAGE', {
              user: m.user,
              message: m.message,
              timestamp: moment(m.timestamp).format("LTS")
            });

          });
        }
      });

    },

    logIn({
      commit
    }, value) {
      console.log(value)

      let uiConfig = {
        signInOptions: [{
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
          },
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
          },
          {
            provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID
          },
          {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID
          }
        ],
        callbacks: {
          signInSuccessWithAuthResult() {
            let user = firebase.auth().currentUser;

            commit('AUTH', user);
            let ref = "./chat:" + value;
            router.push(ref);
          }
        }
      };
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      ui.start('#firebaseui-auth-container', uiConfig)
    }


  },
  mutations: {
    SET_DATA(state, data) {
      state.info = data;
    },
    SET_MATCH(state, currentMatch) {
      state.currentmatch = currentMatch;
    },
    SET_MATCH_Detail(state, name) {
      state.matchDetail = name;
    },
    SET_STANDING(state, name) {
      state.standing = name;
    },
    AUTH(state, value) {
      state.user = value
    },
    SET_Matchday(state, payload) {
      state.matchday = payload
    },
    SET_Players(state, payload) {
      state.allPlayers = payload;
    },
    SET_Player(state, payload) {
      state.player = payload;
    },
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
    },
    delete_messages(state) {
      state.messages = [];
    },
    Log(state, payload) {
      state.logged = payload
    }
  },
  getters: {
    getLeague(state) {
      return state.info.league;
    },
    getTeams(state) {
      return state.info.teams
    }
  }
})