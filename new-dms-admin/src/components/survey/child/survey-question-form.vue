<template>
    <div>
        <div v-if="isObjective === true">
          <component :is="mulifulChoice" @multifulTitle="multifulTitleGet" @multifulText="multifulTextGet"></component>
        </div>
        <div v-else>
          <p><span>질문 제목 : </span><input type="text" v-model="title" @blur="surveyQuestionEmit"></p>
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
      console.log(this.title)
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