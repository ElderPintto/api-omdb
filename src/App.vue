<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
body {
  color: aliceblue;
  background: #2d3436;
  font-family: 'Muli', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 40px
}

a {
  color: aliceblue;;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 200px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
