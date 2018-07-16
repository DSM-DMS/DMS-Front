<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <router-view
      class="left"
      name="left"
      :applyStatus="applyStatus"
      @changeStayValue="val => applyStatus.stay = val"
      @changeClassValue="val => applyStatus.selectedClass = val"
    />
    <router-view
      class="right"
      name="right"
      :applyStatus="applyStatus"
      @changeTimeValue="val => applyStatus.selectedTime = val"
    />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'

export default {
  name: 'Apply',
  components: {
    HeaderNav
  },
  data: function () {
    return {
      applyStatus: {
        selectedClass: 0,
        selectedTime: 11,
        stay: this.$store.getters.applyData.stay
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

.left {
  float:left !important;
  height:100% !important;
  width:33% !important;
}

.right {
  float:right !important;
  height:100% !important;
  width:67% !important;
}
</style>