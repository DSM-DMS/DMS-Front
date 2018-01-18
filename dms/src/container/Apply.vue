<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <left>
      <div :is="left[routing()]" :selectedClass.sync="selectedClass" :selectedTime="selectedTime" :stay.sync="stay"></div>
    </left>
    <right>
      <div :is="right[routing()]" :selectedClass="selectedClass" :selectedTime.sync="selectedTime" :stay="stay"></div>
    </right>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import ExtensionApplyLeft from '@/components/ExtensionApply/ExtensionApplyLeft'
import ExtensionApplyRight from '@/components/ExtensionApply/ExtensionApplyRight'
import StayApplyLeft from '@/components/StayApply/StayApplyLeft'
import StayApplyRight from '@/components/StayApply/StayApplyRight'

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
        StayApplyLeft
      ],
      right: [
        ExtensionApplyRight,
        StayApplyRight
      ],
      selectedClass: 0,
      selectedTime: 11,
      stay: 0
    }
  },
  methods: {
    routing: function () {
      let category = this.$route.params.category
      if (category === 'extension') {
        return 0
      } else if (category === 'stay') {
        return 1
      }
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
