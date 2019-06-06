<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <h2>TEAMS</h2>
  <div>
    <input type="text" placeholder="Search Team/Player">
  </div>
  <div class="next">
    <ul>
      <li>
        <router-link to="/team/t:TEAM A">TEAM A</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM B">TEAM B</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM C">TEAM C</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM D">TEAM D</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM E">TEAM E</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM F">TEAM F</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM G">TEAM G</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM H">TEAM H</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM I">TEAM I</router-link>
      </li>
      <li>
        <router-link to="/team/t:TEAM J">TEAM J</router-link>
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
export default {};
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
  position: relative;
  text-align: center;
  background-color: #444;
  min-height: 702px;
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

.controls * {
  align-self: center;
}
</style>