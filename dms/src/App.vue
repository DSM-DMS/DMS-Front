<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () {
    this.$store.dispatch('authCheck')
  },
  beforeUpdate: function () {
    this.$store.dispatch('authCheck')
  }
}
</script>

<style>
@font-face{font-family:'NanumSquareB'; src:url('./assets/font/나눔스퀘어/NanumSquareB.woff') format('woff');}
@font-face{font-family:'NanumSquareRoundB'; src:url('./assets/font/나눔스퀘어라운드/nanumsquareroundb-webfont.woff') format('woff');}
@font-face{font-family:'NanumSquareRoundL'; src:url('./assets/font/나눔스퀘어라운드/nanumsquareroundl-webfont.woff') format('woff');}
@font-face{font-family:'RobotoThin'; src:url('./assets/font/Roboto/roboto-thin-webfont.woff') format('woff');}
@font-face{font-family:'Coolvetica'; src:url('./assets/font/coolvetica/coolvetica_rg-webfont.woff') format('woff');}

html, body{
  width: 100%;
  height: 100%;
  font-family: 'NanumSquareRoundB';
}

*{
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
