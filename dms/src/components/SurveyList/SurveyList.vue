<template>
  <div class="survey-wrapper" @click="$router.push({name: 'surveyDetail', params: {id: survey.id}, data: {survey: survey}})">
    <div class="survey-title">
      {{ survey.title }}
      <img class="question-mark" :src="require('@/assets/Survey/ic_question.png')" :alt="survey.description">
    </div>
    <div class="survey-date-table">
        <div>작성일</div>
        <div>{{ survey.creation_time }}</div>
    </div>
    <div class="survey-date-table">
        <div>마감일</div>
        <div>{{ survey.end_date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyList',
  props: {
    survey: {type: Object}
  }
}
</script>

<style scoped>
.survey-wrapper {
  width: 400px;
  height: 180px;
  background-color: white;
  border-radius: 15px;
  margin: 30px;
  padding: 30px 40px;
  cursor: pointer;
}

.survey-title {
  height: 40px;
  border-bottom: 2px solid rgb(103, 80, 148);
  color: rgb(103, 80, 148);
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-mark {
   width: 25px;
   height: 25px;
}

.survey-date-table {
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

