<template>
<!--eslint-disabled-->
<div class="cont">
  <head>
    <img src="../assets/nysl_logo.png" alt>
    <h1>NorthSide Youth Soccer League</h1>
  </head>
  <h2>Content Info</h2>
  <div class="events"></div>
  <h2>Upcoming Matches</h2>
  <div class="next">
    <ul>
      <li v-for="match in this.currentMatch">
        <router-link :to="'/class/res/det:' + match">{{match}}</router-link>
      </li>
    </ul>
  </div>

  <div class="iconBox">
    <div class="controls">
      <router-link to="/class">
        <i class="fas fa-list-ol"></i>
        <!-- <img src="https://img.icons8.com/metro/52/000000/home.png"> -->
      </router-link>
      <router-link to="/team">
        <i class="fas fa-user-plus"></i>
      </router-link>
      <router-link to="/chat/log">
        <i class="fas fa-comments"></i>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      league: [
        {
          match: 1,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 2,
          confrontation: [
            "Atleti-Barça",
            "Valencia-Mallorca",
            "Real Madrid-Sevilla",
            "Atletico Bilbao-Depor",
            "Real Zaragoza-Real Sociedad"
          ]
        },
        {
          match: 3,
          confrontation: [
            "Valencia-Atleti",
            "Barça-Sevilla",
            "Real Madrid-Real Sociedad",
            "Real Zaragoza-Depor",
            "Atletico Bilbao-Mallorca"
          ]
        },
        {
          match: 4,
          confrontation: [
            "Atleti-Sevilla",
            "Atletico Bilbao-Valencia",
            "Barça-Real Sociedad",
            "Real Zaragoza-Mallorca",
            "Real Madrid-Depor"
          ]
        },
        {
          match: 5,
          confrontation: [
            "Atletico Bilbao-Atleti",
            "Sevilla-Real Sociedad",
            "Real Zaragoza-Valencia",
            "Barça-Depor",
            "Real Madrid-Mallorca"
          ]
        },
        {
          match: 6,
          confrontation: [
            "Atleti-Real Sociedad",
            "Real Zaragoza-Atletico Bilbao",
            "Sevilla-Depor",
            "Real Madrid-Valencia",
            "Barça-Mallorca"
          ]
        },
        {
          match: 7,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 8,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 9,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 10,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 11,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 12,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 13,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 14,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 15,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 16,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 17,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        },
        {
          match: 18,
          confrontation: [
            "Mallorca-Atleti",
            "Real Madrid-Barça",
            "Valencia-Depor",
            "Real Zaragoza-Sevilla",
            "Atletico Bilbao-Real Sociedad"
          ]
        }
      ],
      currentMatch: []
    };
  },
  created() {
    this.currentMatch = this.league[0].confrontation;
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.fas {
  font-size: 45px;
  color: #9c9c9c;
}
.cont {
  text-align: center;
  position: relative;
  background-color: #444;
  min-height: 702px;
  width: 100%;
}
head {
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-bottom: 15px;
}

head * {
  align-self: center;
}

head img {
  width: 90px;
  align-self: center;
}

.next {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  max-height: 400px;
}
.next ul {
  list-style: none;
}

li {
  margin: 15px auto;
}
.events {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  min-height: 75px;
  max-height: 400px;
}
.iconBox {
  width: 100%;
  position: absolute;
  bottom: 20px;
}
.controls {
  display: flex;
  justify-content: space-around;
}

.controls * {
  align-self: center;
}
</style>
