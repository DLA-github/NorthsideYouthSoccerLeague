<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <div class="page">
    <ul>
      <li>
        <router-link to="/class">|| Standing |</router-link>
      </li>
      <li>
        <router-link to="/class/sched">| Schedule |</router-link>
      </li>
      <li>
        <router-link to="/class/res">| Results ||</router-link>
      </li>
    </ul>
  </div>
  <h2>Schedule</h2>
  <div class="next">
    <ul>
      <li v-for="a in league" class="day">
        <a
          :href="'#info'+ a.match"
          class="collapsed"
          data-toggle="collapse"
          aria-expanded="false"
        >Current Match: {{a.match}}--> date: {{a.date}}</a>

        <div :id="'info'+ a.match" class="collapse" aria-expanded="false" style="height: 0px;">
          <span>Matches for that day</span>
          <ul>
            <li v-for="b in a.confrontation" class="match">
              <router-link :to="'/match' + b">{{b}}</router-link>
            </li>
          </ul>
        </div>
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
  computed: {
    league() {
      return this.$store.state.league;
    }
  },
  created() {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: #9c9c9c;
}
a {
  text-decoration: none;
  color: black;
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
}
head {
  display: flex;
  justify-content: flex-start;
  color: white;
}

head * {
  align-self: center;
}

.page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.page ul li {
  display: inline-block;
  color: #9c9c9c;
}

.next {
  display: flex;
  justify-content: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  max-height: 400px;
  overflow: scroll;
}
.next ul li {
  text-decoration: none;
  color: black;
}
.next ul {
  list-style: none;
}

li {
  margin: 15px auto;
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
.day {
  background-color: bisque;
  color: black;
}
.match {
  background-color: black;
}
.match a {
  text-decoration: none;
  color: whitesmoke;
}

.controls * {
  align-self: center;
}
</style>
