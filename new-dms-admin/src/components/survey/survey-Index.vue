<template>
  <div class="survey-index">
      <div class="survey-index-header">
        <img src="../../assets/logo/logo.png">
        <span class="survey-back-wrapper"><span class="survey-back-text">돌아가기</span><img class="survey-back-button" src="../../assets/icon/ic_back.png"></span>
      </div>
      <h1 class="DMS-Title">DSM Dormitory System</h1>
      <component :is="surveyView"></component>
  </div>
</template>

<script>
import surveyMain from './survey-main.vue'
import test from './test.vue'
import surveyQuestion from './survey-question'
import surveyList from './survey-list'

import eventBus from './eventBus'

export default {
  name: 'survey',
  components: { test, surveyMain, surveyQuestion, surveyList },
  data: function () {
    return {
      surveyView: surveyList
    }
  },
  mounted: function () {
    eventBus.$on('change-view', (view) => {
      this.changeView(view)
    })
  },
  methods: {
    changeView: function (view) {
      this.surveyView = view
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
h1 {
  font-family: 'Jeju Gothic', serif;
}
.DMS-Title{
    margin-left: 4vw;
}
.survey-index-header {
  padding :2vw;
}
.survey-index-header > img {
  width: 8vw;
}
.survey-back-button {
  height: 4.5vh;
}
.survey-back-wrapper {
  float: right;
  font-size: 15px;
}
.survey-back-text {
  color: white;
  font-weight: bold;
  display: 
}
</style>
<style>
body{
  background: #F1F1F1;
  background-image: url('../../assets/background/bg_notice.png')
}
#app {
  margin-top : 0;
  text-align : left;
}
</style>

