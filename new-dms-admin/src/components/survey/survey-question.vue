<template>
    <div class="survey-question">
        <div class="underbar-question">
            <header class="survey-title">설문조사</header>
        </div>
        <div>
            <button @click="multifulChoiceBtn()">객관식</button><button @click="descriptiveBtn()">주관식</button>
        </div>
        <component :is="surveyQuestionForm" v-for="(surveyQuestion, index) in surveyList" :key="index" :isObjective="surveyQuestion.is_objective" :index="index" @submitQuestion="surveyQuestionGet"></component>
        <button @click="surveyQuestionSubmit">등록</button>
        <button>취소</button>
    </div>
</template>

<script>
import surveyQuestionForm from './child/survey-question-form'
// import eventBus from './event-bus'

export default {
  name: 'Survey',
  components: { surveyQuestionForm },
  data: function () {
    return {
      surveyList: [],
      // { Authorization: '',
      //   id: '',
      //   title: '',
      //   is_objective: null,
      //   choice_paper: []}
      surveyQuestionForm: surveyQuestionForm
    }
  },
  created: function () {
    //   this.surveyList.Authorization = getCookie('JWT')
  },
  methods: {
    multifulChoiceBtn: function () {
      this.surveyList.push({
        title: '',
        is_objective: true,
        choice_paper: []
      })
      console.log(this.surveyList)
    },
    descriptiveBtn: function () {
      this.surveyList.push({
        title: '',
        is_objective: false,
        choice_paper: []
      })
      console.log(this.surveyList)
    },
    surveyQuestionSubmit: function () {
      // axios.post('/admin/survey/question', {
      //   Authorization: this.surveyList.Authorization,
      //   id: this.surveyList.id,
      //   title: this.surveyList.title,
      //   is_objective: this.surveyList.is_objective,
      //   choice_paper: this.surveyList.choice_paper
      // })
      // .then((response) => {
      //   EventBus.$on('changeView', 'SurveyList')
      // })s
    },
    surveyQuestionGet: function (title, isObjective, choicePaper, index) {
      // this.surveyList[index].title = title
      // this.surverList[index].is_objective = isObjective
      // this.surveyList[index].choicePaper = choicePaper
      console.log(title)
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
  font-family: 'Jeju Gothic', serif;
}
.survey-question {
    width : 95vw;
    border : 1px solid rgba(0,0,0,.125);
    margin : auto;
    background-color: white;
    border-radius: 2px;
    padding : 1vw;
}
.underbar-question {
    width : 93vw;
    border-bottom : 2px solid #007BD3;
}
.survey-title {
    margin-left : 1vw;
    font-size : 30px;
    margin-bottom : .7vh;
}
.survey-question-title {
    margin-left : 1vw;
    font-size : 20px;
}
.survey-question-text {
    width: 91.6vw;
    margin-left : 1vw;
}
</style>
