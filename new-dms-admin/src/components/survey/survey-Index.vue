<template>
  <div class="survey-index">
      <h1 class="DMS-Title">DSM Dormitory System</h1>
      <component :is="surveyView"></component>
  </div>
</template>

<script>
import surveyMain from './survey-main.vue'
import test from './test.vue'
import surveyQuestion from './survey-question'

import eventBus from './eventBus'

export default {
  name: 'survey',
  components: { test, surveyMain, surveyQuestion },
  data: function () {
    return {
      surveyView: surveyQuestion
    }
  },
  mounted: function () {
    eventBus.$on('change-view', (view) => {
      this.changeView(view)
    })
  },
  methods: {
    changeView: function (view) {
      this.surveyView = view
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
h1 {
  font-family: 'Jeju Gothic', serif;
}
.DMS-Title{
    margin-left: 4vw;
}

</style>
<style>
body{
  background: #F1F1F1;
}
#app {
  margin-top : 0;
  text-align : left;
}
</style>

