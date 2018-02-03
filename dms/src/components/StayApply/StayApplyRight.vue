<template>
  <div id="stay-apply-right-wrapper">
    <div id="stay-apply-form">
      <stay-apply-information :info="informations[0]" />
      <div id="airplane-button" @click="stayApply"></div>
    </div>
  </div>
</template>

<script>
import StayApplyInformation from '@/components/StayApply/StayApplyInformation'
export default {
  name: 'StayApplyRight',
  components: {
    StayApplyInformation
  },
  data: function () {
    return {
      informations: [
        {
          title: '금요귀가',
          src: require('@/assets/Stay_application/icon/ic_fri_home.png'),
          intro:
          '금요귀가를 신청하신 경우\n' +
          '금요일 일과 종료 후 오후 8시 30분\n' +
          '이후 귀가하여 일요일 오전 8시 30분\n' +
          '이후 기숙사로 귀사 가능합니다.'
        },
        {
          title: '토요귀가',
          src: require('@/assets/Stay_application/icon/ic_sat_home.png'),
          intro:
          '토요귀가를 신청하신 경우\n' +
          '토요일 오후 9시 이전에 귀가하여\n' +
          '일요일 오전 8시 30분 이후\n' +
          '기숙사로 귀사 가능합니다.'
        },
        {
          title: '토요귀사',
          src: require('@/assets/Stay_application/icon/ic_sat_dor.png'),
          intro:
          '토요귀사를 신청하신 경우\n' +
          '금요일 일과 종료 후 오후 8시 30분\n' +
          '이후 귀가하여 금요일 오전 8시 30분\n' +
          '이후 기숙사로 귀사 가능합니다.'
        },
        {
          title: '잔류',
          src: require('@/assets/Stay_application/icon/ic_stay.png'),
          intro:
          '잔류를 신청하신 경우\n' +
          '주말동안 기숙사에 남게 됩니다.'
        }
      ]
    }
  },
  props: {
    stay: {type: Number}
  },
  methods: {
    stayApply: function () {
      let fd = new FormData()
      fd.append('value', this.stay)
      this.$http.post('/stay', fd, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 201) {
          alert('주말잔류 신청을 성공하였습니다.')
        } else if (response.status === 204) {
          alert('주말잔류 신청 가능 시간이 아닙니다.')
        }
      }).catch(() => {
        alert('주말잔류 신청을 실패하였습니다.')
      })
    }
  }
}
</script>

<style scoped>
#stay-apply-right-wrapper {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/Stay_application/background/background.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#stay-apply-form {
  position: relative;
  width: 400px;
  height: 580px;
  top: 50%;
  left: 0;
  margin: 0 auto;
  transform: translate(0, -50%);
}

#airplane-button {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  bottom: 0;
  margin-top: 70px;
  background-image: url('../../assets/Stay_application/ic_enter.png');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

#airplane-button:hover {
  animation: jelly 1s;
}

@keyframes jelly {
  10% {
      transform: none;
  } 20% {
      transform: skewX(-15deg) skewY(-15deg);
  } 30% {
      transform: skewX(5.51876deg) skewY(5.51876deg);
  } 40% {
      transform: skewX(-2.03045deg) skewY(-2.03045deg);
  } 50% {
      transform: skewX(0.74704deg) skewY(0.74704deg);
  } 60% {
      transform: skewX(-0.27485deg) skewY(-0.27485deg);
  } 70% {
      transform: skewX(0.10112deg) skewY(0.10112deg);
  } 80% {
      transform: skewX(-0.0372deg) skewY(-0.0372deg);
  } 90% {
      transform: skewX(-0.01369deg) skewY(-0.01369deg);
  } 100% {
      transform: none;
  }
}

</style>
