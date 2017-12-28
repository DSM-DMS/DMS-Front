<template>
    <div class="survey-question">
        <div class="underbar-question">
            <span class="survey-title">{{title}}</span>
            <span class="survey-question-form-add-btn-group">
              <span>객관식</span><img src="../../assets/icon/ic_plus.png" class="survey-question-form-add-btn" @click="multifulChoiceBtn()"/>
              <span>주관식</span><img src="../../assets/icon/ic_plus.png" class="survey-question-form-add-btn" @click="descriptiveBtn()"/>
            </span>
        </div>
            
        <div class="survey-question-form">
          <component :is="surveyQuestionForm" v-for="(surveyQuestion, index) in surveyList" :key="index" :isObjective="surveyQuestion.isObjective" :choicePaper="choicePaper" :index="index" @submitQuestion="surveyQuestionGet" class="survey-question-add-component"></component>
        </div>
        <div class="survey-question-edit-btn-group">
          <button @click="surveyQuestionSubmit">등록</button>
          <button>취소</button>
        </div>
        
    </div>
</template>

<script>
import surveyQuestionForm from './child/survey-question-form'
import eventBus from './eventBus'

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

      // survey_id: '',
      // Authorization: '',
      // surveyTitle: '',
      surveyQuestionForm: surveyQuestionForm,
      id: '',
      title: ''
    }
  },
  mounted: function () {
    eventBus.$on('survey-question-upload', (id, title) => {
      this.id = id
      this.title = title
    })
  },
  created: function () {
    //   this.surveyList.Authorization = getCookie('JWT')
    // eventBus.$on('survey-question-upload', (id, title) => {
    //   this.survey_id = id
    //   this.surveyTitle = title
    // })
  },
  methods: {
    multifulChoiceBtn: function () {
      this.surveyList.push({
        title: '',
        isObjective: true,
        choicePaper: []
      })
      console.log(this.surveyList)
    },
    descriptiveBtn: function () {
      this.surveyList.push({
        title: '',
        isObjective: false,
        choicePaper: []
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
      // })
    },
    surveyQuestionGet: function (title, choicePaper, index) {
      this.surveyList[index].title = title
      this.surveyList[index].choicePaper = choicePaper
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
  font-family: 'Jeju Gothic', serif;
}
.underbar-question {
  width : 100%;
  border-bottom : 2px solid grey;
  display: flex;
  justify-content: space-between;
}
.survey-question-form-add-btn {
  cursor: pointer;
  width: 1.7vw;
  height: 1.7vw;
}
.survey-question-form-add-btn-group {
  display: table;
}
.survey-question-form-add-btn-group > span {
  display: table-cell;
  vertical-align: middle;
  padding-left: 3.5vw;
  padding-right: 1.3vw;
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
.survey-question-form {
  height: 48vh;
  overflow-y: auto; 
}
.survey-question-edit-btn-group {
  margin-top:4vh;
  text-align : center;
}
.survey-question-edit-btn-group > button {
  background-color: #675094;
  border : 1px solid #c8c8c8;
  border-radius: 1px;
  padding : 1.2vh 1.7vw 1.2vh 1.7vw;
  color:white;
  border-radius: 20px;
}
.survey-question-add-component {
  margin-top: 2vh;
  padding-bottom: 2vh;
  border-bottom:1px solid grey;
}
</style>
