<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <left>
      <div :is="left[0]" :selectedClass.sync="selectedClass" :selectedTime="selectedTime"></div>
    </left>
    <right>
      <div :is="right[0]" :selectedClass="selectedClass" :selectedTime.sync="selectedTime"></div>
    </right>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import ExtensionApplyLeft from '@/components/ExtensionApply/ExtensionApplyLeft'
import ExtensionApplyRight from '@/components/ExtensionApply/ExtensionApplyRight'

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
        ExtensionApplyLeft
      ],
      right: [
        ExtensionApplyRight
      ],
      selectedClass: 0,
      selectedTime: 11
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
