<template>
    <div>
        <div id="choise-form">
            <ul>
                <li v-for="i in formLength">asd</li>
            </ul>
        </div>
        <button @click="formAppend">항목 추가</button>
    </div>
</template>
<script>
export default {
  name: 'mulitiful-choice',
  props: ['surveyList'],
  data: function () {
    return {
      formLength: 0
    }
  },
  methods: {
    formAppend: function () {
      this.formLength++
    }
  }
}
</script>