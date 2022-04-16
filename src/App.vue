<template>
  <div id="nav">
    <router-link to="/">Föoldal</router-link> |
    <router-link to="/szolgaltatas">Szolgáltatások</router-link> |
    <router-link to="/arlista">Árlista</router-link> |
    <router-link to="/kapcsolat">Kapcsolat</router-link>
    <img id="logo" src="./assets/logo.png" >
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: black;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: black;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo{
  width: 100px;
  height: 100px;
}
</style>
