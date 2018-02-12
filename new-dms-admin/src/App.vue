<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(174, 174, 174); 
  border-radius: 15px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #f1f1f1; 
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f1f1f1;   
}
</style>
