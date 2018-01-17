<template>
  <div class="apply-card" id="goingout-apply-wrapper">
    <div id="goingout-apply-content-wrapper">
      <div class="goingout-apply-content">
        <p class="apply-text">외출신청</p>
        <p class="apply-sub-text">외출예정 요일을 확인하세요</p>
        <div class="goingout-apply-btn" id="goingout-apply-btn">
          <p @click="apply" id="goingout-apply-btn-text">신청</p>
        </div>
      </div>
      <div class="goingout-apply-content">
        <img v-if="goingout.isSaturdayGoingout" @click="applySaturday" class="goingout-apply-img" src="../../assets/icon/ic_outing/ic_saturday_outing_light.png">
        <img v-else @click="applySaturday" class="goingout-apply-img" src="../../assets/icon/ic_outing/ic_saturday_outing.png">

        <img v-if="goingout.isSundayGoingout" @click="applySunday" class="goingout-apply-img" src="../../assets/icon/ic_outing/ic_sunday_outing_light.png">
        <img v-else @click="applySunday" class="goingout-apply-img" src="../../assets/icon/ic_outing/ic_sunday_outing.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyGoingout',
  props: ['goingout'],
  methods: {
    applySaturday: function () {
      this.$emit('applySaturday')
    },
    applySunday: function () {
      this.$emit('applySunday')
    },
    apply: function () {
      this.$emit('applyGoingout')
    }
  }
}
</script>

<style>
@media only screen and (min-width: 1201px){
  .goingout-apply-img {
    width: 8vw;
  }
}

@media only screen and (max-width: 1200px){
  .goingout-apply-img {
    width: 120px;
  }
}

.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}

#goingout-apply-wrapper {
  background: url('../../assets/background/bg_outing.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 130%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#goingout-apply-wrapper:hover{
  background-size: 140%;
}

#goingout-apply-wrapper:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: inherit;
  content: ' ';
}

#goingout-apply-content-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  width: 100%;
}

.goingout-apply-content{
  float: left;
  width: 50%;
  position: relative;
}

.goingout-apply-content:nth-child(n) {
  text-align: center;
  font-weight: bold;
  color: white;
}

.goingout-apply-btn{
  margin-top: 20px;
  font-size: 20px;
  width: 35%;
  height: 40px;
  border: 5px solid white;
  border-radius: 30px;
  display: table;
  position: absolute;
  left: 32%;
}

#goingout-apply-btn:hover{
  -webkit-transform:scale(0.9); /*  크롬 */
  -moz-transform:scale(0.9); /* FireFox */
  -o-transform:scale(0.9); /* Opera */
  transform:scale(0.9);
  transition: transform .35s;
  -o-transition: transform .35s;
  -moz-transition: transform .35s;
  -webkit-transition: transform .35s;
}

#goingout-apply-btn-text{
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
}

.goingout-apply-img {
  float: left;
  cursor: pointer;
}

.goingout-apply-img:first-child{
  margin-right: 30px;
}
</style>

