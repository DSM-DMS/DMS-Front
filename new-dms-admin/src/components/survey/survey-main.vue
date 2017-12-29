<template>
  <div class="survey-editor">
    <div class="underbar-title">
      <input class="survey-title" type="text" v-model="title" placeholder="설문의 제목을 쓰세요">
    </div>
    <p class="survey-date"><span>시작 날짜 : </span><br/><input type="date" v-model="start_date"></p><br />
    <p class="survey-date"><span>종료 날짜 : </span><br/><input type="date" v-model="end_date"></p><br />
    <p class="description-describe">설문 조사 설명 : </p>
    <textarea class="description-text" name="" id="" cols="60" rows="3" v-model="description" fixed></textarea>
    <div class="survey-target">
      <p>대상 학년</p>
      <label for="first-grade">1 학년</label><input type="checkbox" id="first-grade" value="1" v-model="target">
      <label for="second-grade">2 학년</label><input type="checkbox" id="second-grade" value="2" v-model="target">
      <label for="third-grade">3 학년</label><input type="checkbox" id="third-grade" value="3" v-model="target">
    </div>
    <div class="survey-btn-list">
      <button @click="surveyNext">다음</button>
      <button @click="surveyWriteCancel">취소</button>
    </div>
  </div>
</template>

<script>
import eventBus from './eventBus'

export default {
  name: 'survey-submit',
  data: function () {
    return {
      Authorization: '',
      title: '',
      start_date: '',
      end_date: '',
      description: '',
      target: []
    }
  },
  created: function () {
    // this.Authorization = getCookie('JWT');
  },
  methods: {
    surveyNext: function () {
      this.$axios.post('/admin/survey', JSON.stringify({
        title: this.title,
        start_date: this.start_date,
        end_date: this.end_date,
        target: this.target
      }),
        {
          headers: {
            'Authorization': '1312312312312',
            'Content-type': 'application/json'
          }
        })
      .then((response) => {
        console.log(response)
        this.title = ''
        this.start_date = ''
        this.end_date = ''
        this.target = []
        this.$axios.get('/survey', {
          'Authorization': '1312312312312'
        })
          .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
              if (this.title === response.data[i].title && this.start_date === response.data[i].start_date && this.end_date === response.data[i].end_date) {
                eventBus.$emit('survey-question-upload', response.data[i].id, response.data[i].title)
              }
            }
          })
      })
      console.log('Authorization : ' + this.Authorization)
      console.log('title : ' + this.title)
      console.log('start_date : ' + this.start_date)
      console.log('end_date : ' + this.end_date)
      console.log('target : ' + this.target)
      eventBus.$emit('change-view', 'surveyQuestion')
    },
    surveyWriteCancel: function () {
      eventBus.$emit('change-view', 'test')
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
  width : 100%;
  border-bottom : 2px solid grey;
}
.survey-title {
  border : none;
  font-size: 30px;
  margin-bottom:.7vh;
  margin-left : 1vw;
  display:block;
  background-color: transparent;
}
.survey-date {
  margin-left : 1vw;
  font-size : 15px;
  margin-bottom: 0;
}
.survey-date > input {
  margin-top:1vh;
  width : 30vw;
  font-size : 15px;
}
.survey-target {
  font-size : 15px;
  margin-left : 1vw;
}
.survey-target > input {
  margin-right: 2vw; 
}
.survey-btn-list {
  margin-top:4vh;
  text-align : center;
}
.survey-btn-list > button {
  background-color: #675094;
  border : 1px solid #c8c8c8;
  border-radius: 1px;
  padding : 1.2vh 1.7vw 1.2vh 1.7vw;
  color:white;
  border-radius: 20px;
}
.description-describe {
  margin-left : 1vw;
  font-size : 15px;
}
.description-text {
  margin-left : 1vw;
  width: 98%;
  resize: none;
}
</style>
