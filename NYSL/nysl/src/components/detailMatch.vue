<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <h2>{{teamA.name}}-{{teamB.name}}</h2>
  <div class="next">
    <div>
      <p>
        <router-link :to="'/team/t:'+ teamA.name">
          <img :src="teamA.logo" alt>
        </router-link>VS
        <router-link :to="'/team/t:'+ teamB.name">
          <img :src="teamB.logo" alt>
        </router-link>
      </p>
    </div>
  </div>
  <div>{{teamA.timeMatch}}</div>
  <div>{{teamA.Location}}</div>
  <div class="map">
    <iframe
      :src="teamA.maps"
      width="300"
      height="200"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
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
      teamA: {},
      teamB: {},
      id: this.$route.params.id,
      object: {}
    };
  },
  created() {
    let teams = this.id.split("-");
    let a = teams[0].split(":").pop();
    let b = teams[1];
    let result1 = this.teams.filter(team => team.name == a);
    this.teamA = result1[0];
    let result2 = this.teams.filter(team => team.name == b);
    this.teamB = result2[0];
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
.cont {
  text-align: center;
  position: relative;
  background-color: #444;
  min-height: 702px;
  width: 100%;
}
.map {
  padding: 15px;
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
  color: black;
}
.next img {
  width: 45px;
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
