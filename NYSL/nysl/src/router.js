import Vue from 'vue'
import Router from 'vue-router'
import nyslChat from "./views/chat.vue";
import nyslPlayers from "./views/players.vue";
import nyslHome from "./views/home";
import nyslDetailMatch from "./views/detailMatch.vue";
import nyslResults from "./views/results.vue";
import nyslSchedule from "./views/schedule.vue";
import nyslTeams from "./views/teams.vue";
import nysldetailTeam from "./views/detailTeam.vue";
import nyslClassification from "./views/classification.vue";
import nyslLogin from "./views/login.vue";
import nyslRegistration from "./views/register.vue";


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: nyslHome
    },
    // {

    //     path: '/match',
    //     name: 'match',
    //     component: nyslMatch
    // },
    {
      path: '/class',
      name: 'classification',
      component: nyslClassification
    },
    {
      path: '/team',
      name: 'teams',
      component: nyslTeams
    },
    {
      path: '/chat:id',
      name: 'chat',
      component: nyslChat,
      meta: {
        protected: true
      }
    },
    {
      path: '/class/sched',
      name: 'schedule',
      component: nyslSchedule
    },
    {
      path: '/class/res',
      name: 'results',
      component: nyslResults
    },
    {
      path: '/player:id',
      name: 'player',
      component: nyslPlayers,

    },
    {
      path: '/team/t:id',
      name: 'detailTeam',
      component: nysldetailTeam,
    },
    {
      path: '/match:id',
      name: 'detail',
      component: nyslDetailMatch
    },
    {
      path: '/log:id',
      name: 'login',
      component: nyslLogin
    },
    // {
    //   path: '/chat/reg',
    //   name: 'registration',
    //   component: nyslRegistration
    // },
  ]
})