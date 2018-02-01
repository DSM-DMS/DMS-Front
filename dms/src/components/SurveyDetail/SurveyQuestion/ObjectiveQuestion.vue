<template>
  <div class="obj-question-wrapper">
    <div class="title">
      {{ question.title }}
    </div>
    <div class="obj-form">
      <div class="radio-wrapper" v-for="choice in question['choice_paper']" :key="choice">
        <input class="radio-button" type="radio" :id="choice" hidden v-model="dataQuestion.answer" :value="choice">
        <label :for="choice" class="choice-label">
          <div class="radio-img"></div>
        </label>
        {{ choice }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectiveQuestion',
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
.obj-question-wrapper {
  width: 100%;
  color: #675094;
}

.title {
  height: 50px;
  font-size: 25px;
  line-height: 50px;
  border-bottom: 2px solid #675094;
}

.obj-form {
  width: 100%;
}

.radio-wrapper {
  margin: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  font-size: 20px;
}

.choice-label {
  width: 25px;
  height: 25px;
  background-image: url('../../../assets/Survey_detail/ic_check_box.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}

.radio-img {
  width: 15px;
  height: 15px;
  background-image: url('../../../assets/Survey_detail/ic_check.png');
  display: none;
  background-repeat: no-repeat;
  background-size: contain;
}

.radio-button:checked ~ .choice-label > .radio-img {
  display: inline-block;
}
</style>

