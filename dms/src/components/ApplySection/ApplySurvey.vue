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
<<<<<<< HEAD
  background-size: 110% 110%;
=======
  background-size: 140%;
>>>>>>> 2a0916f7cf0ed4eb312a92762eb5950b1f3ad8f5
  background-position: center center;
  background-repeat: no-repeat;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
  cursor: pointer;
}


#survey-apply-wrapper:hover{
<<<<<<< HEAD
  background-size: 120% 120%;
=======
  background-size: 150%;
>>>>>>> 2a0916f7cf0ed4eb312a92762eb5950b1f3ad8f5
}

#survey-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
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

