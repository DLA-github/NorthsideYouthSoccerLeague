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
  <h2>STANDING</h2>
  <div class="next">
    <ol>
      <li v-for="pos in standing">
        <router-link :to="'/team/t:'+ pos.name">{{pos.name}}</router-link>
      </li>
    </ol>
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
      standing: []
    };
  },
  created() {
    this.standing = this.teams.sort((a, b) => {
      return a.pos - b.pos;
    });
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
  color: #9c9c9c;
}
a {
  text-decoration: none;
  color: white;
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
  align-items: center;
  background-color: #aaa;
  margin: 20px;
  box-sizing: border-box;
  max-height: 400px;
  overflow: auto;
}
.next ol li {
  color: black;
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

.controls * {
  align-self: center;
}
</style>