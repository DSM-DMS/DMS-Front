<template>
  <div id="main-section">
    <main-title/>
    <meal/>
    <div id="social-wrapper">
      <social-btn :imgPath="require('../../assets/icon/ic_git_facebook/ic_facebook.png')"/>
      <social-btn :imgPath="require('../../assets/icon/ic_git_facebook/ic_github.png')"/>
    </div>
  </div>
</template>

<script>
import MainTitle from './MainTitle'
import Meal from './Meal'
import SocialBtn from './SocialBtn'

export default {
  name: 'MainSection',
  components: {MainTitle, Meal, SocialBtn}
}
</script>


<style>
#main-section {
  background: url('../../assets/background/bg_main.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: table;
  position: fixed;
  z-index: -1;
  top: 0;
}

#social-wrapper {
  cursor: pointer;
  position: absolute;
  right: 100px;
  bottom: 50px;
}

#social-wrapper img:first-child {
  margin-right: 50px;
}
</style>
