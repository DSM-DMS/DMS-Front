<template>
  <div class="apply-card" id="extention-apply-wrapper">
    <div id="extention-apply-content">
      <div id="extention-apply-text-wrapper">
        <p class="apply-text">연장학습 신청</p>
        <p class="apply-sub-text">추가 연장학습을 신청하세요</p>
      </div>
      <div id="extention-apply-img-wrapper">
        <div id="extention-apply-11-img-wrapper">
          <img v-if="extention.eleven.isApply" class="extention-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_eleven_light.png" />
          <img v-else class="extention-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_eleven.png" />
        </div>
        <div id="extention-apply-12-img-wrapper">
          <img v-if="extention.twelve.isApply" class="extention-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_twelve_light.png" />
          <img v-else class="extention-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_twelve.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyExtention',
  props: ['extention']
}
</script>

<style>
  .apply-text {
    font-size: 40px;
  }

  .apply-sub-text {
    font-size: 20px;
  }
#extention-apply-wrapper {
  background: url('../../assets/background/bg_study.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 130%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#extention-apply-wrapper:hover{
  background-size: 140%;
}

#extention-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#extention-apply-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 100;
}

#extention-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

#extention-apply-img-wrapper {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}

#extention-apply-11-img-wrapper {
  width: 40%;
  float: left;
}

#extention-apply-12-img-wrapper {
  width: 40%;
  float: right;
}

.extention-apply-img {
  width: 100%;
  cursor: pointer;
}
</style>

