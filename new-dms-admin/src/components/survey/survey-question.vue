<template>
    <div class="survey-question">
        <div class="underbar-question">
            <span class="survey-title">{{surveyTitle}}</span>
            <span class="survey-question-form-add-btn-group">
              <span>객관식</span><img src="../../assets/icon/ic_plus.png" class="survey-question-form-add-btn" @click="multifulChoiceBtn()"/>
              <span>주관식</span><img src="../../assets/icon/ic_plus.png" class="survey-question-form-add-btn" @click="descriptiveBtn()"/>
            </span>
        </div>
            
        <div class="survey-question-form">
          <component :is="surveyQuestionForm" v-for="(surveyQuestion, index) in surveyList" :key="index" :isObjective="surveyQuestion.is_objective" :index="index" @submitQuestion="surveyQuestionGet" @multifulTitleGet="multifulTitleEmit" @multifulTextGet="multifulTextEmit" class="survey-question-add-component"></component>
        </div>
        <div class="survey-question-edit-btn-group">
          <button @click="surveyQuestionSubmit">등록</button>
          <button @click="surveyEditCancel">취소</button>
        </div>
        <component :is="'modal'" v-if="isModal" @modalClose="modalToggle"></component>
    </div>
</template>

<script>
import surveyQuestionForm from './child/survey-question-form'
import modal from './child/modal'
import eventBus from './eventBus'

export default {
  name: 'Survey',
  components: { surveyQuestionForm, modal },
  props: ['surveyTitle', 'surveyId'],
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
      isModal: false
    }
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
      this.$axios.post('/admin/survey/question', JSON.stringify({
        id: this.surveyId,
        survey_list: this.surveyList
      }),
        {
          headers: {
            'Authorization': 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then((response) => {
        eventBus.$on('changeView', 'SurveyList')
      })
      .catch((ex) => {
        console.log('ERROR!!!! : ', ex)
        this.modalToggle()
      })
    },
    surveyQuestionGet: function (title, index) {
      this.surveyList[index].title = title
    },
    multifulTitleEmit: function (title, index) {
      this.surveyList[index].title = title
    },
    multifulTextEmit: function (text, index) {
      this.surveyList[index].choice_paper.push(text)
      console.log(this.surveyList[index].choice_paper)
    },
    surveyEditCancel: function () {
      eventBus.$emit('change-view', 'surveyMain')
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
