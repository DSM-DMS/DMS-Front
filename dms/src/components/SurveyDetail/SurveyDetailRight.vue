<template>
  <div id="survey-detail-right-wrapper">
    <div id="survey-form-wrapper">
      <survey-question v-for="question in questions" :key="question.id" :question.sync="question" />
      
      <div id="airplane-button" @click="submit"></div>
    </div>
  </div>
</template>

<script>
import SurveyQuestion from './SurveyQuestion/SurveyQuestion'

export default {
  name: 'SurveyDetailRight',
  components: {
    SurveyQuestion
  },
  data: function () {
    return {
      questions: []
    }
  },
  props: {
  },
  methods: {
    load: function () {
      this.$http.get('/survey/question', {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        },
        params: {
          'survey_id': this.$route.params.id
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.questions = response.data
        } else if (response.status === 204) {
          alert('존재하지 않는 설문조사입니다.')
        }
      }).catch(error => {
        console.log(error)
      })
    },
    submit: function () {
      let requests = []

      this.questions.forEach(question => {
        let fd = new FormData()
        fd.append('question_id', question['id'])
        fd.append('answer', question['answer'])
        let req = this.$http.post('/survey/question', fd, {
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        })
        requests.push(req)
      })

      this.$http.all(requests)
      .then(response => {
        let success = response.filter(res => {
          return res.status === 201
        })
        if (response.length === success.length) {
          alert('설문조사 제출에 성공하였습니다.')
        } else {
          alert('설문조사 제출에 실패하였습니다.')
        }
      }).catch(() => {
        alert('설문조사 제출에 실패하였습니다.')
      })
    }
  },
  beforeMount: function () {
    this.load()
  }
}
</script>

<style scoped>
#survey-detail-right-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/Survey_detail/background.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}

#survey-form-wrapper {
  width: 90%;
  height: 550px;
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 30px 60px;
  overflow-y: auto;
}

#airplane-button {
  margin: 50px auto;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-image: url('../../assets/Survey_detail/ic_enter.png');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

#airplane-button:hover {
  animation: jelly 1s;
}

@keyframes jelly {
  10% {
      transform: none;
  } 20% {
      transform: skewX(-15deg) skewY(-15deg);
  } 30% {
      transform: skewX(5.51876deg) skewY(5.51876deg);
  } 40% {
      transform: skewX(-2.03045deg) skewY(-2.03045deg);
  } 50% {
      transform: skewX(0.74704deg) skewY(0.74704deg);
  } 60% {
      transform: skewX(-0.27485deg) skewY(-0.27485deg);
  } 70% {
      transform: skewX(0.10112deg) skewY(0.10112deg);
  } 80% {
      transform: skewX(-0.0372deg) skewY(-0.0372deg);
  } 90% {
      transform: skewX(-0.01369deg) skewY(-0.01369deg);
  } 100% {
      transform: none;
  }
}

</style>
