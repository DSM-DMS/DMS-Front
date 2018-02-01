<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <left>
      <div :is="left[componentIdx]" :selectedClass.sync="selectedClass" :selectedTime="selectedTime" :stay.sync="stay" :surveyInfo="surveyInfo"></div>
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
      componentIdx: {},
      surveyInfo: {
        'creation_time': '2017-12-26',
        'description': '설명!',
        'end_date': '2017-10-25',
        'id': 's3qldmc13opeflds',
        'start_date': '2017-10-24',
        'title': '내일 저녁 치킨먹기 찬반설문'
      }
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
  mounted: function () {
    this.routing()
  }
}
</script>

<style scoped>
#apply-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>