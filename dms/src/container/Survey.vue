<template>
  <div id="survey-page-wrapper">
    <header-nav />
    <div id="survey-list-wrapper">
      <span id="survey-table">
        <survey-list v-for="survey in surveyList" :key="survey.id" :survey="survey" />
      </span>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import SurveyList from '@/components/SurveyList/SurveyList'

export default {
  name: 'Survey',
  components: {
    HeaderNav,
    SurveyList
  },
  data: function () {
    return {
      surveyList: []
    }
  },
  methods: {
    load: function () {
      this.$http.get('/survey', {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        this.surveyList = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount: function () {
    this.load()
  }
}
</script>


<style scoped>
#survey-page-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../assets/Survey/background.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#survey-list-wrapper {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#survey-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 80%;
  height: 75%;
  overflow-y: auto;
}
</style>
