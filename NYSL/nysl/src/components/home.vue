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
        <router-link :to="'/match' + match">{{match}}</router-link>
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
      currentMatch: []
    };
  },
  created() {
    //let now = new Date();
    let first = true;
    let now = Date.parse("Jun 22, 2019");
    this.league.map(a => {
      let date = Date.parse(a.date);
      if (now < date && first == true) {
        first = false;
        this.currentMatch = a.confrontation;
        console.log(this.currentMatch);
        return;
      }
    });
  },
  computed: {
    league() {
      return this.$store.state.league;
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
