<template>
  <div class="apply-card" id="extension-apply-wrapper" @click="$router.push({name: 'apply', params: {category: 'extension'}})">
    <div id="extension-apply-content">
      <div id="extension-apply-text-wrapper">
        <p class="apply-text">연장학습 신청</p>
        <p class="apply-sub-text">추가 연장학습을 신청하세요</p>
      </div>
      <div id="extension-apply-img-wrapper">
        <div id="extension-apply-11-img-wrapper" class="apply-img">
          <time-button :light="!!extension.eleven" :eleven="true"/>
          <span class="extension-apply-class-text" id="extension-apply-11-class" v-html="extensionRoom[ extension.eleven - 1 ]"></span>
        </div>
        <div id="extension-apply-12-img-wrapper" class="apply-img">
          <time-button :light="!!extension.twelve" :eleven="false"/>
          <span class="extension-apply-class-text" id="extension-apply-12-class" v-html="extensionRoom[ extension.twelve - 1 ]"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeButton from './TimeButton'

export default {
  name: 'Applyextension',
  data: function () {
    return {
      extensionRoom: [
        '1층<br/>가온실',
        '1층<br/>나온실',
        '1층<br/>다온실',
        '1층<br/>라온실',
        '3층<br/>독서실',
        '4층<br/>독서실',
        '5층<br/>열린교실'
      ]
    }
  },
  computed: {
    extension: function () {
      return this.$store.getters.applyData.extension
    }
  },
  components: {
    TimeButton
  }
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
  background: url('../../assets/background/bg_study.svg');
  background-size: 110% 110%;
  background-position: center center;
  background-repeat: no-repeat;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
  cursor: pointer;
}

#extension-apply-wrapper:hover{
  background-size: 120% 120%;
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
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between
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

.apply-img{
  position: relative;
}
</style>

