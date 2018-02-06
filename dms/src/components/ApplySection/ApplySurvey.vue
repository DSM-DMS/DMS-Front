<template>
  <div class="apply-card" id="survey-apply-wrapper" @click="$router.push('/apply/survey')">
    <div id="survey-apply-text-wrapper">
      <p class="apply-text">설문조사</p>
      <p class="apply-sub-text">작성된 설문조사에 응답하세요</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplySurvey'
}
</script>

<style>
.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}

#survey-apply-wrapper {
  background: url('../../assets/background/bg_poll.svg');
  background-size: 110% 110%;
  background-position: center center;
  background-repeat: no-repeat;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
  cursor: pointer;
}


#survey-apply-wrapper:hover{
  background-size: 120% 120%;
}

#survey-apply-text-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
}

#survey-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>

