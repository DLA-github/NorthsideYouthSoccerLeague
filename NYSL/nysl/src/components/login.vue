<template>
<div class="cont">
  <head>
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
  </head>
  <h2>Chat</h2>
  <div>
    <p>For acces to our Chat, please log in.</p>
  </div>
  <div class="next">
    <ul>
      <li>
        <label for>User :</label>
        <input type="text" id="log" required>
      </li>
      <li>
        <label for>Pass :</label>
        <input type="text" id="pass" required>
      </li>
    </ul>
  </div>
  <div class="log">
    <button>Go</button>
  </div>
  <div>
    <router-link to="/chat/reg">Or create Account</router-link>
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
.fas {
  font-size: 45px;
  color: #9c9c9c;
}
label {
  color: black;
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
}
.next ul {
  list-style: none;
}

li {
  margin: 15px auto;
}

.log {
  display: flex;
  justify-content: center;
}

button {
  background-color: #9c9c9c;
  color: black;
  min-width: 50px;
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