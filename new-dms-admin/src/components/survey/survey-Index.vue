<template>
  <div class="survey-index">
      <div class="survey-index-header">
        <img src="../../assets/logo/logo.png">
        <span class="survey-back-wrapper">
          <img class="survey-back-button" src="../../assets/icon/ic_back.png" @click="goBack('main')">
        </span>
      </div>
      <div class="survey-main">
        <button class="survey-main-btn" @click="changeView('surveyList')" :class="{ FormClicked : surveyMainBtnClicked1 }">설문조사</button><button class="survey-main-btn" @click="changeView('surveyMain')" :class="{ FormClicked : surveyMainBtnClicked2 }">작성</button>
        <div class="survey-component">
          <component :is="surveyView" class="Component" :surveyTitle='surveyTitle' :surveyId='surveyId' ></component>
        </div>
      </div>
  </div>
</template>

<script>
import surveyMain from './survey-main.vue'
import surveyQuestion from './survey-question'
import surveyList from './survey-list'

import eventBus from './eventBus'

export default {
  name: 'survey',
  components: { surveyMain, surveyQuestion, surveyList },
  data: function () {
    return {
      surveyView: surveyList,
      surveyMainBtnClicked1: true,
      surveyMainBtnClicked2: false,
      surveyTitle: '',
      surveyId: ''
    }
  },
  mounted: function () {
    eventBus.$on('change-view', (view) => {
      this.changeView(view)
    })
    eventBus.$on('go-question', (view, title, id) => {
      this.surveyTitle = title
      this.surveyId = id
      this.changeView(view)
    })
  },
  methods: {
    changeView: function (view) {
      if (view === 'surveyList') {
        this.surveyMainBtnClicked1 = true
        this.surveyMainBtnClicked2 = false
      } else if (view === 'surveyMain') {
        this.surveyMainBtnClicked1 = false
        this.surveyMainBtnClicked2 = true
      }
      this.surveyView = view
    },
    goBack: function (view) {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
  text-align: left;
}
h1 {
  font-family: 'Jeju Gothic', serif;
}
.DMS-Title{
    margin-left: 4vw;
}
.survey-index-header {
  padding :2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.survey-index-header > img {
  width: 8vw;
}
.survey-back-button {
  height: 4.5vh;
  margin-left: 1.6vw;
}
.survey-back-wrapper {
  float: right;
  font-size: 15px;
  display: table;
  padding: 1vh 1vw 1vh 1vw;
  margin-right: 2vw;
  border-radius: 30px;
  cursor: pointer;
}
.survey-back-wrapper:hover{
  background-color: rgba(255, 255, 255, 0.3)
}
.survey-back-text {
  color: white;
  font-weight: bold;
  display: table-cell;
  vertical-align: middle;
  font-size: 24px;
}
.survey-main {
  width: 80vw;
  padding-left: 5.4vw;
}
.survey-main-btn {
  cursor: pointer;
  width: 8vw;
  height: 7.5vh;
  background: rgba(14, 5, 5, 0.185);
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: 'Jeju Gothic', serif;
  font-size: 20px;
  text-align: center;
}
.survey-main-btn:focus {
  outline: none;
}
.survey-component{
  width: 100%;
  height: 60vh;
  max-height: 60vh;
  background-color: rgba(255,255,255,0.88);
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 4vh 4vw 4vh 4vw;
}
.FormClicked {
  background-color: rgba(255,255,255,0.88);
}
</style>
<style>
html{
  width:100vw;
  height: 100vh;
}
body{
  background-image: url('../../assets/background/bg_notice.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#app {
  margin-top : 0;
}
</style>

