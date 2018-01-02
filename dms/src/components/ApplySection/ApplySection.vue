<template>
  <div id="apply-wrapper">
    <div class="apply-card-wrapper">
      <apply-stay :apply="apply"/>
      <apply-extention/>
    </div>

    <div class="apply-card-wrapper">
      <apply-goingout/>
      <apply-survey/>
    </div>
  </div>
</template>

<script>
import ApplyStay from '@/components/FooterSection/ApplyStay'
import ApplyExtention from '@/components/FooterSection/ApplyExtention'
import ApplyGoingout from '@/components/FooterSection/ApplyGoingout'
import ApplySurvey from '@/components/FooterSection/ApplySurvey'

export default {
  name: 'ApplySection',
  components: {ApplyStay, ApplyExtention, ApplyGoingout, ApplySurvey},
  data: function () {
    return {
      apply: 'friday'
    }
  }
}
</script>

<style scoped>
#apply-wrapper {
  margin-top: 100vh;
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #F9F7FC;
  display: table;
  cursor: default;
}

.apply-card-wrapper {
  width: 100%;
  height: 50%;
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
