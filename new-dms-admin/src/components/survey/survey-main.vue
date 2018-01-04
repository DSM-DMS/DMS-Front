<template>
  <div class="survey-editor">
    <div class="underbar-title">
      <input class="survey-title" type="text" v-model="title" placeholder="설문의 제목을 쓰세요">
    </div>
    <div class="survey-main">
      <p class="survey-date-wrapper">
        <span class="survey-date"><span>시작 날짜 : </span><input type="date" v-model="start_date"></span>
        <span class="survey-date"><span>종료 날짜 : </span><input type="date" v-model="end_date"></span>
      </p>
      <p class="description-describe">설문 조사 설명 : </p>
      <textarea class="description-text" name="" id="" cols="60" rows="7" v-model="description" placeholder="설명을 입력해주세요."></textarea>
      <div class="survey-target">
        <span>대상 학년 : </span>
        <label for="first-grade" @click='targetingToggle(1)'>1 학년 <img class="checkbox-btn" :src="firstGrade ? require('../../assets/icon/ic_true.png'): require('../../assets/icon/ic_false.png')"></label><input class="targetInput" type="checkbox" id="first-grade" value="1" v-model="target">
        <label for="second-grade" @click='targetingToggle(2)'>2 학년<img class="checkbox-btn" :src="secondGrade ? require('../../assets/icon/ic_true.png'): require('../../assets/icon/ic_false.png')"></label><input class="targetInput" type="checkbox" id="second-grade" value="2" v-model="target">
        <label for="third-grade" @click='targetingToggle(3)'>3 학년<img class="checkbox-btn" :src="thirdGrade ? require('../../assets/icon/ic_true.png'): require('../../assets/icon/ic_false.png')"></label><input class="targetInput" type="checkbox" id="third-grade" value="3" v-model="target">
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

// const qs = require('query-string')

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
      isModal: false,
      firstGrade: false,
      secondGrade: false,
      thirdGrade: false
    }
  },
  components: { modal, eventBus },
  methods: {
    surveyNext: function () {
      var formData = new FormData()
      formData.append('description', this.description)
      formData.append('title', this.title)
      formData.append('start_date', this.start_date)
      formData.append('end_date', this.end_date)
      for (var i = 0; i < this.target.length; i++) {
        this.target[i] = Number(this.target[i])
      }
      formData.append('target', this.target)
      this.$axios.post('/admin/survey', formData,
        {
          headers: {
            'Authorization': 'JWT ' + this.$getCookie('JWT'),
            'Content-Type': 'multipart/form-data'
          }
        })
      .then((response) => {
        eventBus.$emit('go-question', 'surveyQuestion', this.title, response.data)
      })
      .catch((ex) => {
        console.log('ERROR!!!! : ', ex)
        this.modalToggle()
      })
    },
    modalToggle: function () {
      this.isModal = !this.isModal
    },
    targetingToggle: function (grade) {
      if (grade === 1) {
        this.firstGrade = !this.firstGrade
      } else if (grade === 2) {
        this.secondGrade = !this.secondGrade
      } else if (grade === 3) {
        this.thirdGrade = !this.thirdGrade
      }
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
  width: 60%;
}
.survey-main {
  height: 23vw;
  overflow-y: auto;
}
.survey-date-wrapper {
  margin-top: 5vh;
}
.survey-date-wrapper:nth-child(1) > span > input {
  margin-right: 7vw;
}
.survey-date {
  font-size : 22px;
  margin-bottom: 0;
}
.survey-date > span {
  color: #675094;
}
.survey-date > input {
  margin-top:1vh;
  width : 25vw;
  padding-left: .7vw;
  font-size : 18px;
  border:none;
  border-radius: 8px;
}
.description-describe {
  font-size : 23px;
  color :#675094;
  padding-bottom: 2.2vh;
  border-bottom: 1.6px solid #675094;
  margin-top: 3vh;
}
.description-text {
  width: 77.7vw;
  resize: none;
  border: none;
  padding: 2vh 1vw 2vh 1vw;
  border-radius: 10px;
  font-size: 16px;
}
.survey-target {
  margin-top: 3vh;
  font-size : 20px;
  color: #675094;
}
.survey-target > span {
  margin-right: 3vw;
}
.survey-target > label {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw 1vh;
}
.targetInput {
  display: none;
}
.checkbox-btn {
  width: 1vw;
  margin-left: 1vw;
}
.survey-btn-list {
  padding-top: 5vh;
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
