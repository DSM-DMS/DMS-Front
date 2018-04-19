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
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
