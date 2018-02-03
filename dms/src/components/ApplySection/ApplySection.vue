<template>
  <div id="apply-wrapper">
    <div class="apply-card-wrapper">
      <apply-stay :day="applyData.stay.day"/>
      <apply-extension :extension="applyData.extension"/>
    </div>

    <div class="apply-card-wrapper">
      <apply-goingout :goingout="applyData.goingout"/>
      <apply-survey/>
    </div>
  </div>
</template>

<script>
import ApplyStay from '@/components/ApplySection/ApplyStay'
import ApplyExtension from '@/components/ApplySection/ApplyExtension'
import ApplyGoingout from '@/components/ApplySection/ApplyGoingout'
import ApplySurvey from '@/components/ApplySection/ApplySurvey'

export default {
  name: 'ApplySection',
  components: {ApplyStay, ApplyExtension, ApplyGoingout, ApplySurvey},
  computed: {
    applyData: function () {
      return this.$store.getters.applyData
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1271px){
  #apply-wrapper {
    margin-top: 100vh;
    height: 100vh;
  }
}

@media only screen and (max-width: 1270px){
  #apply-wrapper {
    margin-top: 0;
    height: 850px;
  }
}

.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}

#apply-wrapper {
  font-family: 'NanumSquareRoundB';
  width: 100%;
  padding: 20px;
  background-color: #F9F7FC;
  display: table;
  cursor: default;
}

.apply-card-wrapper {
  width: 100%;
  height: 50vh;
  position: relative;
}

.apply-card {
  width: calc(50% - 10px);
  height: calc(100% - 10px);
  display: table;
  position: fixed;
  will-change: transform;
}

#apply-wrapper .apply-card {
  float: left;
}
</style>
