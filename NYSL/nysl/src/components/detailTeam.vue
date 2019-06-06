<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <h2>{{this.currentTeam.name}}</h2>
  <div class="next">
    <div>
      <ul>
        <li>
          <img :src="this.currentTeam.logo" alt>
        </li>
        <li>{{this.currentTeam.location}}</li>
        <li>{{this.currentTeam.colors}}</li>
        <li>{{this.currentTeam.pos}}</li>
      </ul>
    </div>
    <div>
      <h4>Players</h4>
      <ul>
        <li v-for="player in currentTeam.players">{{player}}</li>
      </ul>
    </div>
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
      id: this.$route.params.id.split(":").pop(),
      currentTeam: {}
    };
  },
  created() {
    let result = this.teams.filter(team => team.name == this.id);
    this.currentTeam = result[0];
    console.log(this.id);
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
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

img {
  width: 100px;
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
  text-align: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  max-height: 450px;
  overflow: scroll;
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
