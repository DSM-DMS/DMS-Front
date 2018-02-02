<template>
  <div class="question-wrapper" :is="component" :question="question" @update:question="(question) => $emit('update:question', question)" />
</template>

<script>
const ObjectiveQuestion = () => import('./ObjectiveQuestion')
const SubjectiveQuestion = () => import('./SubjectiveQuestion')

export default {
  name: 'SurveyQuestion',
  props: {
    question: {type: Object}
  },
  computed: {
    component: function () {
      if (this.question['is_objective']) {
        return ObjectiveQuestion
      } else {
        return SubjectiveQuestion
      }
    }
  }
}
</script>

<style scoped>
.question-wrapper {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
