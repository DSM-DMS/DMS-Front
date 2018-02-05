<template>
  <div class="sbj-question-wrapper">
    <div class="title">
      {{ question.title }}
    </div>
    <textarea class="sbj-content" v-model="dataQuestion.answer" placeholder="응답을 입력해주세요."></textarea>
  </div>
</template>

<script>
export default {
  name: 'SubjectiveQuestion',
  props: {
    question: {type: Object}
  },
  data: function () {
    return {
      dataQuestion: this.question
    }
  },
  watch: {
    dataQuestion: function (val) {
      this.$emit('update:question', val)
    }
  }
}
</script>

<style scoped>
.sbj-question-wrapper {
  width: 100%;
  color: #675094;
}

.title {
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  border-bottom: 2px solid #675094;
}

.sbj-content {
  background-color: white;
  padding: 30px 40px;
  width: 100%;
  color: black;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  height: 200px;
  margin-top: 20px;
  border-radius: 15px;
}

.sbj-content::placeholder {
  color: #a0a0a0;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
}
</style>

