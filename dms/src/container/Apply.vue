<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <left>
      <div :is="left[componentIdx]" :selectedClass.sync="selectedClass" :selectedTime="selectedTime" :stay.sync="stay"></div>
    </left>
    <right>
      <div :is="right[componentIdx]" :selectedClass="selectedClass" :selectedTime.sync="selectedTime" :stay="stay"></div>
    </right>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
const ExtensionApplyRight = () => import('@/components/ExtensionApply/ExtensionApplyRight')
const StayApplyLeft = () => import('@/components/StayApply/StayApplyLeft')
const StayApplyRight = () => import('@/components/StayApply/StayApplyRight')
const ExtensionApplyLeft = () => import('@/components/ExtensionApply/ExtensionApplyLeft')
const SurveyDetailRight = () => import('@/components/SurveyDetail/SurveyDetailRight')
const SurveyDetailLeft = () => import('@/components/SurveyDetail/SurveyDetailLeft')

var Left = {
  template: `<div style="float:left; height:100%; width:33%"><slot></slot></div>`
}

var Right = {
  template: `<div style="float:right; height:100%; width:67%"><slot></slot></div>`
}

export default {
  name: 'Apply',
  components: {
    HeaderNav,
    Left,
    Right
  },
  data: function () {
    return {
      left: [
        ExtensionApplyLeft,
        StayApplyLeft,
        SurveyDetailLeft
      ],
      right: [
        ExtensionApplyRight,
        StayApplyRight,
        SurveyDetailRight
      ],
      selectedClass: 0,
      selectedTime: 11,
      stay: 0,
      componentIdx: {}
    }
  },
  methods: {
    routing: function () {
      let name = this.$route.name

      if (name === 'surveyDetail') {
        this.componentIdx = 2
      } else {
        let category = this.$route.params.category
        if (category === 'extension') {
          this.componentIdx = 0
        } else if (category === 'stay') {
          this.componentIdx = 1
        }
      }
    }
  },
  beforeMount: function () {
    this.routing()
  },
  watch: {
    '$route': function () {
      this.routing()
    }
  }
}
</script>

<style scoped>
#apply-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>