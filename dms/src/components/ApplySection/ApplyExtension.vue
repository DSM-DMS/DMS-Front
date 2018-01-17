<template>
  <div class="apply-card" id="extension-apply-wrapper">
    <div id="extension-apply-content">
      <div id="extension-apply-text-wrapper">
        <p class="apply-text">연장학습 신청</p>
        <p class="apply-sub-text">추가 연장학습을 신청하세요</p>
      </div>
      <div id="extension-apply-img-wrapper">
        <div id="extension-apply-11-img-wrapper">
          <img v-if="!!extension.eleven" class="extension-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_eleven_light.png" />
          <img v-else class="extension-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_eleven.png" />
          <span class="extension-apply-class-text" id="extension-apply-11-class" v-html="extension.class[ extension.eleven - 1 ]"></span>
        </div>
        <div id="extension-apply-12-img-wrapper">
          <img v-if="!!extension.twelve" class="extension-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_twelve_light.png" />
          <img v-else class="extension-apply-img" src="../../assets/icon/ic_eleven_twelve/ic_twelve.png" />
          <span class="extension-apply-class-text" id="extension-apply-12-class" v-html="extension.class[ extension.twelve - 1 ]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Applyextension',
  props: ['extension']
}
</script>

<style>
.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}
#extension-apply-wrapper {
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

#extension-apply-wrapper:hover{
  background-size: 140%;
}

#extension-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#extension-apply-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
}

#extension-apply-text-wrapper:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

#extension-apply-img-wrapper {
  width: 450px;
  margin: 0 auto;
}

#extension-apply-11-img-wrapper {
  width: 200px;
  float: left;
  position: relative;
}

#extension-apply-12-img-wrapper {
  width: 200px;
  float: right;
  position: relative;
}

.extension-apply-class-text{
  position: absolute;
  right: 0;
  top: 0;
  text-align: left;
  font-weight: bold;
  color: white;
  font-size: 20px;
}

#extension-apply-11-class{
  width: 95px;
}

#extension-apply-12-class{
  width: 88px
}

.extension-apply-img {
  width: 100%;
  cursor: pointer;
}
</style>

