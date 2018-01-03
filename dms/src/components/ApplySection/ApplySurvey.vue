<template>
  <div class="apply-card" id="survey-apply-wrapper">
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
  background: url('../../assets/background/bg_poll.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 120%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: 10px;
  margin-top: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
  cursor: pointer;
}


#survey-apply-wrapper:hover{
  background-size: 130%;
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
  z-index: 100;
}

#survey-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>

