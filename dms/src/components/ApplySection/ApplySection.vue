<template>
  <table id="apply-wrapper">
    <tr class="apply-card-wrapper">
      <td>
        <apply-stay :day="applyData.stay"/>
      </td>
      <td>
        <apply-extension :extension="applyData.extension"/>
      </td>
    </tr>

    <tr class="apply-card-wrapper">
      <td>
        <apply-goingout :goingout="applyData.goingout"/>
      </td>
      <td>
        <apply-survey/>
      </td>
    </tr>
  </table>
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
@media (min-height: 851px), screen and (min-width: 1271px){
  #apply-wrapper {
    margin-top: 100vh;
    height: 100vh;
  }
}

@media (max-height: 850px), screen and (max-width: 1270px){
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
  cursor: default;
}

.apply-card-wrapper {
  width: 100%;
  height: 50vh;
}

.apply-card-wrapper > td {
  width: 50%;
  padding: 10px;
  overflow: hidden;
}

.apply-card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
