<template>
  <div id="survey-detail-left-wrapper">
    <div id="survey-info-wrapper">
      <div id="survey-title">
        {{ surveyInfo.title }}
      </div>
      <table id="survey-date-table">
        <tr>
          <td>작성일</td>
          <td>{{ surveyInfo.creation_time }}</td>
        </tr>
        <tr>
          <td>마감일</td>
          <td>{{ surveyInfo.end_date }}</td>
        </tr>
      </table>
      <div id="survey-description">
        {{ surveyInfo.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyDetailLeft',
  data: function () {
    return {
    }
  },
  computed: {
  },
  props: {
    surveyInfo: {type: Object}
  }
}
</script>

<style scoped>
#survey-detail-left-wrapper {
  background-color: #675094;
  height: 100%;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}

#survey-info-wrapper {
  color: white;
  font-weight: bold;
  width: 80%;
  height: 550px;
}

#survey-info-wrapper > * {
  margin-top: 15px;
  margin-bottom: 15px;
}

#survey-title {
  width: 100%;
  text-align: center;
  font-size: 25px;
  height: 30px;
}

#survey-date-table {
  width: 70%;
  margin: auto;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

#survey-date-table td {
  width: 50%;
}

#survey-description {
  font-size: 20px;
  height: 350px;
  width: 85%;
  margin: auto;
  overflow-y: auto;
}
</style>
