<template>
  <div id="app">
    <div id="nav"> <!-- public nav bar -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/books">Book List</router-link> |
      <router-link to="/labs">Demo Labs</router-link> |
      <router-link to="/date-picker">DatePicker Labs</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
