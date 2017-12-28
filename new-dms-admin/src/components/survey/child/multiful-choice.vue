<template>
    <div>
        <div id="choise-form">
          <input type="text" v-model="title" placeholder="질문 제목을 입력하세요.">
          <ul>
              <li v-for="i in choicePaper">{{i}}</li>
          </ul>
        </div>
      <span>객관식 항목</span>
      <input type="text" v-model="multifulAnswerText">
      <button @click="formAppend">항목 추가</button>
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
      this.choicePaper.push(this.multifulAnswerText)
      console.log(this.choicePaper[this.formLength])
      this.formLength++
      this.multifulAnswerText = ''
    }
  }
}
</script>