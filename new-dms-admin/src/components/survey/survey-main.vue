<template>
  <div class="survey-editor">
    <div class="underbar-title">
      <input class="survey-title" type="text" v-model="title" placeholder="설문의 제목을 쓰세요">
    </div>
    <div class="survey-main">
      <p class="survey-date"><span>시작 날짜 : </span><br/><input type="date" v-model="start_date"></p><br />
      <p class="survey-date"><span>종료 날짜 : </span><br/><input type="date" v-model="end_date"></p><br />
      <p class="description-describe">설문 조사 설명 : </p>
      <textarea class="description-text" name="" id="" cols="60" rows="3" v-model="description"></textarea>
      <div class="survey-target">
        <p>대상 학년</p>
        <label for="first-grade">1 학년</label><input type="checkbox" id="first-grade" value="1" v-model="target">
        <label for="second-grade">2 학년</label><input type="checkbox" id="second-grade" value="2" v-model="target">
        <label for="third-grade">3 학년</label><input type="checkbox" id="third-grade" value="3" v-model="target">
      </div>
    </div>
    
    <div class="survey-btn-list">
      <button @click="surveyNext">다음</button>
    </div>
    <component :is="'modal'" v-if="isModal" @modalClose="modalToggle"></component>
  </div>
</template>

<script>
import eventBus from './eventBus'
import modal from './child/modal'

const qs = require('query-string')

export default {
  name: 'survey-submit',
  data: function () {
    return {
      Authorization: '',
      title: '',
      start_date: '',
      end_date: '',
      description: '',
      target: [],
      isModal: false
    }
  },
  components: { modal, eventBus },
  methods: {
    surveyNext: function () {
      this.$axios.post('/admin/survey', qs.stringify({
        description: this.description,
        title: this.title,
        start_date: this.start_date,
        end_date: this.end_date,
        target: this.target
      }),
        {
          headers: {
            'Authorization': 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then((response) => {
        eventBus.$emit('survey-question-upload', response.data, this.title)
        eventBus.$emit('change-view', 'surveyQuestion')
      })
      .catch((ex) => {
        console.log('ERROR!!!! : ', ex)
        this.modalToggle()
      })
    },
    modalToggle: function () {
      this.isModal = !this.isModal
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);

* {
  font-family: 'Jeju Gothic', serif;
}
.underbar-title {
  width : 80vw;
  border-bottom : 2px solid grey;
}
.survey-title {
  border : none;
  font-size: 30px;
  margin-bottom:2vh;
  margin-left : 1vw;
  display:block;
  background-color: transparent;
}
.survey-main {
  height: 23vw;
  overflow-y: auto;
}
.survey-date {
  margin-left : 1vw;
  font-size : 22px;
  margin-bottom: 0;
}
.survey-date > input {
  margin-top:1vh;
  width : 30vw;
  font-size : 18px;
}
.description-describe {
  margin-left : 1vw;
  font-size : 23px;
}
.description-text {
  margin-left : 1vw;
  width: 77vw;
  resize: none;
}
.survey-target {
  font-size : 20px;
  margin-left : 1vw;
}
.survey-target > input {
  margin-right: 2vw; 
}
.survey-btn-list {
  padding-top: 7vh;
  text-align : center;
}
.survey-btn-list > button {
  background-color: #675094;
  border : 1px solid #c8c8c8;
  border-radius: 1px;
  padding : 1.2vh 1.7vw 1.2vh 1.7vw;
  color:white;
  border-radius: 20px;
  cursor: pointer;
}
.survey-btn-list > button:focus {
  outline: none;
}
</style>
