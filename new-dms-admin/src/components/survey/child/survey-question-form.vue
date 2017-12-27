<template>
    <div>
        <div v-if="isObjective === true">
          
        </div>
        <div v-else>
          <p><span>질문 제목 : </span><input type="text" v-model="title"></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'survey-question-form',
  props: {
    isObjective: { type: Boolean },
    index: { type: Number }
  },
  data: function () {
    return {
      title: '',
      choice_paper: []
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
      console.log(this.title)
      this.$emit('submitQuestion', this.title, this.is_objective, this.choice_paper, this.index)
    }
  }
}
</script>