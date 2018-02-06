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
        <img @click="applySaturday" class="goingout-apply-img" :src="satImg">
        <img @click="applySunday" class="goingout-apply-img" :src="sunImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyGoingout',
  props: {
    goingout: {type: Object}
  },
  data: function () {
    return {
      outData: this.goingout
    }
  },
  computed: {
    satImg: function () {
      return this.outData.isSaturdayGoingout ? require('@/assets/icon/ic_outing/ic_saturday_outing_light.png') : require('@/assets/icon/ic_outing/ic_saturday_outing.png')
    },
    sunImg: function () {
      return this.outData.isSundayGoingout ? require('@/assets/icon/ic_outing/ic_sunday_outing_light.png') : require('@/assets/icon/ic_outing/ic_sunday_outing.png')
    }
  },
  watch: {
    goingout: function (val) {
      this.outData = val
    }
  },
  methods: {
    applySaturday: function () {
      this.outData.isSaturdayGoingout = !this.outData.isSaturdayGoingout
    },
    applySunday: function () {
      this.outData.isSundayGoingout = !this.outData.isSundayGoingout
    },
    apply: function () {
      let fd = new FormData()
      fd.append('sat', this.outData.isSaturdayGoingout)
      fd.append('sun', this.outData.isSundayGoingout)
      this.$http({
        method: 'POST',
        url: '/goingout',
        data: fd,
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      }).then(res => {
        if (res.status === 201) {
          alert('주말외출 신청에 성공하였습니다.')
        } else {
          alert('주말외출 신청에 실패하였습니다.')
        }
      }).catch(() => {
        alert('주말외출 신청에 실패하였습니다.')
      })
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
  background: url('../../assets/background/bg_outing.svg');
  background-size: 110% 110%;
  background-position: center center;
  background-repeat: no-repeat;
  -moz-transition: background-size 250ms ease;
  -o-transition: background-size 250ms ease;
  -webkit-transition: background-size 250ms ease;
  transition: background-size 250ms ease;
}

#goingout-apply-wrapper:hover{
  background-size: 120% 120%;
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

