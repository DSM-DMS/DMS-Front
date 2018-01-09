<template>
    <div>
        <div v-if="isObjective === true">
          <component :is="mulifulChoice" @multifulTitle="multifulTitleGet" @multifulText="multifulTextGet"></component>
        </div>
        <div v-else>
          <p><span class="not-multiful-choice-list-title">주관식 제목 : </span><input class="not-multiful-choice-list-input" type="text" v-model="title" @blur="surveyQuestionEmit" placeholder="질문 제목을 입력하세요."></p>
        </div>
    </div>
</template>

<script>
import mulifulChoice from './multiful-choice'

export default {
  name: 'survey-question-form',
  components: { mulifulChoice },
  props: {
    isObjective: { type: Boolean },
    index: { type: Number }
  },
  data: function () {
    return {
      title: '',
      mulifulChoice: mulifulChoice
    }
  },
  methods: {
    submitQuestion: function () {
      this.$emit('submitQuestion', this.title, this.index)
    },
    surveyQuestionEmit: function () {
      if (this.title !== '') {
        this.submitQuestion()
      }
    },
    multifulTitleGet: function (title) {
      this.$emit('multifulTitleGet', title, this.index)
    },
    multifulTextGet: function (text) {
      this.$emit('multifulTextGet', text, this.index)
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
  font-family: 'Jeju Gothic', serif;
}
.not-multiful-choice-list-title {
  color: #675094;
  font-weight: 550;
  font-size: 20px;
}
.not-multiful-choice-list-input {
  border: none;
  padding: 1.4vh 1vw 1.4vh 1vw;
  border-radius: 10px;
  width: 30vw;
}
</style>
