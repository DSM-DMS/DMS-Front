<template>
    <div>
        <div v-if="isObjective === true">
          <component :is="mulifulChoice"></component>
        </div>
        <div v-else>
          <p><span>질문 제목 : </span><input type="text" v-model="title"></p>
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
      choice_paper: [],
      mulifulChoice: mulifulChoice
    }
  },
  watch: {
    title: function (val) {
      if (val.length >= 2) {
        this.submitQuestion()
      }
    }
  },
  methods: {
    submitQuestion: function () {
      this.$emit('submitQuestion', this.title, this.is_objective, this.index)
    }
  }
}
</script>