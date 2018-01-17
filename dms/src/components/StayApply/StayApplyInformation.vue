<template>
  <div id="stay-apply-info-wrapper">
    <img :src="info.src">

    <div id="info-title">{{ info.title }}</div>

    <pre id="info-intro">{{ info.intro }}</pre>

    <div id="info-question">{{ info.title }}를 신청하시겠습니까?</div>
  </div>
</template>

<script>
export default {
  name: 'StayApplyInformation',
  props: {
    info: {type: Object}
  }
}
</script>

<style>
#stay-apply-info-wrapper {
  width: 400px;
  color: white;
  text-align: center;
}

#stay-apply-info-wrapper img {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 150px;
}

#info-title {
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
}

#info-intro {
  font-family: inherit;
  font-size: 20px;
  margin-bottom: 30px;
}

#info-question {
  font-size: 20px;
}
</style>




