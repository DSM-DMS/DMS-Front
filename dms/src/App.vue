<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate: function () {
    if (navigator.userAgent.match(/iPhone/) || navigator.userAgent.match(/iPad/)) {
      this.$router.push('https://itunes.apple.com/us/app/dms-for-dsm/id1328234395?l=ko&ls=1&mt=8')
    } else if (navigator.userAgent.match(/Android/)) {
      this.$router.push('https://play.google.com/store/apps/details?id=teamdms.dms_kotlin')
    }
    this.$store.dispatch('getData')
  },
  beforeUpdate: function () {
    this.$store.dispatch('getData')
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
  scroll-behavior: smooth;
}

#app {
  width: 100%;
  height: 100%;
  min-width: 1350px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: gray; 
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

textarea {
   resize: none;
}
</style>
