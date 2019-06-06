import nyslChat from "./components/chat.vue";
import nyslPlayers from "./components/players.vue";
import nyslHome from "./components/home.vue";
import nyslDetailMatch from "./components/detailMatch.vue";
import nyslMatch from "./components/match.vue";
import nyslResults from "./components/results.vue";
import nyslSchedule from "./components/schedule.vue";
import nyslTeams from "./components/teams.vue";
import nysldetailTeam from "./components/detailTeam.vue";
import nyslClassification from "./components/classification.vue";
import nyslLogin from "./components/login.vue";
import nyslRegistration from "./components/register.vue";


export default [{

        path: '/',
        name: 'home',
        component: nyslHome
    },
    {

        path: '/match',
        name: 'match',
        component: nyslMatch
    },
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
        path: '/chat/chat',
        name: 'chat',
        component: nyslChat
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
        path: '/team/pl:id',
        name: 'player',
        component: nyslPlayers
    },
    {
        path: '/team/t:id',
        name: 'detailTeam',
        component: nysldetailTeam,
    },
    {
        path: '/class/res/det:id',
        name: 'detail',
        component: nyslDetailMatch
    },
    {
        path: '/chat/log',
        name: 'login',
        component: nyslLogin
    },
    {
        path: '/chat/reg',
        name: 'registration',
        component: nyslRegistration
    },
]