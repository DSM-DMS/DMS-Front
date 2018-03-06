<template>
    <div>
        <div id="choise-form">
          <span class="multiful-choice-title">객관식 제목 : </span><input class="multiful-choice-title-form" type="text" v-model="title" placeholder="질문 제목을 입력하세요." @blur="formTitleAppend">
          <ul>
              <li v-for="i in choicePaper" class="multiful-choice-list">{{i}}</li>
          </ul>
        </div>
      <span class="multiful-choice-list-title">객관식 항목 : </span>
      <input class="multiful-choice-list-input" type="text" v-model="multifulAnswerText" placeholder="항목을 입력하세요">
      <span class="multiful-choice-list-btn-wrapper" @click="formAppend">항목 추가  <img class="multiful-choice-list-btn" src="../../../assets/icon/ic_plus2.png"></span>
    </div>
</template>
<script>
export default {
  name: 'multiful-choice',
  data: function () {
    return {
      formLength: 0,
      title: '',
      choicePaper: [],
      multifulAnswerText: ''
    }
  },
  methods: {
    formAppend: function () {
      if (this.multifulAnswerText !== '') {
        this.choicePaper.push(this.multifulAnswerText)
        this.$emit('multifulText', this.multifulAnswerText, this.formLength)
        this.multifulAnswerText = ''
        this.formLength++
      }
    },
    formTitleAppend: function () {
      if (this.title !== '') {
        this.$emit('multifulTitle', this.title)
      }
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
* {
  font-family: 'Jeju Gothic', serif;
}
.multiful-choice-title {
  color: #675094;
  font-weight: 550;
  font-size: 20px;
}
.multiful-choice-title-form {
  border: none;
  padding: 1.4vh 1vw 1.4vh 1vw;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
}
.multiful-choice-list {
  font-size: 19px;
  margin-top:2vh;
}
.multiful-choice-list-title {
  color: #675094;
  font-weight: 550;
  font-size: 20px;
}
.multiful-choice-list-input {
  border: none;
  padding: 1.4vh 1vw 1.4vh 1vw;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
}
.multiful-choice-list-btn-wrapper {
  margin-left:1vw;
  display: inline-flex;
  align-items: center;
  color: #675094;
  cursor: pointer;
}
.multiful-choice-list-btn {
  width:1vw;
  margin-left:.5vw;
}
</style>
