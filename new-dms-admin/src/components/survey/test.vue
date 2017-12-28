<template>
  <div>
      <button @click="changeView('SurveyMain')">
          asd
      </button>
  </div>
</template>
<script>
import eventBus from './eventBus'

export default {
  name: 'test',
  methods: {
    changeView: function (View) {
      eventBus.$emit('change-view', View)
    }
  }
}
</script>