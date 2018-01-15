<template>
  <div id="apply-wrapper">
    <div class="apply-card-wrapper">
      <apply-stay :day="stay.day"/>
      <apply-extension :extension="extension"/>
    </div>

    <div class="apply-card-wrapper">
      <apply-goingout  @applySaturday="applySaturdayGoingout" 
                       @applySunday="applySundayGoingout"
                       @applyGoingout="applyGoingout" 
                       :goingout="goingout"/>
      <apply-survey/>
    </div>
  </div>
</template>

<script>
import ApplyStay from '@/components/ApplySection/ApplyStay'
import ApplyExtension from '@/components/ApplySection/ApplyExtension'
import ApplyGoingout from '@/components/ApplySection/ApplyGoingout'
import ApplySurvey from '@/components/ApplySection/ApplySurvey'

export default {
  name: 'ApplySection',
  components: {ApplyStay, ApplyExtension, ApplyGoingout, ApplySurvey},
  data: function () {
    return {
      stay: {
        day: '4'
      },
      goingout: {
        isSaturdayGoingout: false,
        isSundayGoingout: false
      },
      extension: {
        class: [
          '1층<br/>가온실',
          '1층<br/>나온실',
          '1층<br/>다온실',
          '1층<br/>라온실',
          '3층<br/>독서실',
          '4층<br/>독서실',
          '5층<br/>엶린교실'
        ],
        eleven: '',
        twelve: ''
      }
    }
  },
  methods: {
    applySaturdayGoingout: function () {
      this.goingout.isSaturdayGoingout = !this.goingout.isSaturdayGoingout
    },
    applySundayGoingout: function () {
      this.goingout.isSundayGoingout = !this.goingout.isSundayGoingout
    },
    applyGoingout: function () {
      let fd = new FormData()
      fd.append('sat', this.goingout.isSaturdayGoingout)
      fd.append('sun', this.goingout.isSundayGoingout)
      this.$http({
        method: 'POST',
        url: '/goingout',
        data: fd,
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      }).then(res => {
        if (res.status === 422) {
        }
        alert('신청 완료')
      }).catch(err => {
        console.log(err)
      })
    },
    getApplyState: function () {
      if (typeof (this.$cookie.getCookie('JWT')) === 'object' && !this.$cookie.getCookie('JWT')) {
      } else {
        this.$http({
          method: 'GET',
          url: '/goingout',
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        }).then(res => {
          this.goingout.isSaturdayGoingout = res.data.sat
          this.goingout.isSundayGoingout = res.data.sun
        }).catch(err => {
          console.log(err)
        })

        this.$http({
          method: 'GET',
          url: '/extension/11',
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        }).then(res => {
          console.log(res.data)
          this.extension.eleven = res.data.class_num
        }).catch(err => {
          console.log(err)
        })

        this.$http({
          method: 'GET',
          url: '/extension/12',
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        }).then(res => {
          this.extension.twelve = res.data.class_num
        }).catch(err => {
          console.log(err)
        })

        this.$http({
          method: 'GET',
          url: '/stay',
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        }).then(res => {
          this.stay.day = res.data.value
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  created: function () {
    this.getApplyState()
  },
  beforeUpdate: function () {
    this.getApplyState()
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1271px){
  #apply-wrapper {
    margin-top: 100vh;
  }
}

@media only screen and (max-width: 1270px){
  #apply-wrapper {
    margin-top: 0;
  }
}

.apply-text {
  font-size: 40px;
}

.apply-sub-text {
  font-size: 20px;
}

#apply-wrapper {
  font-family: 'NanumSquareRoundB';
  height: 850px;
  width: 100%;
  padding: 20px;
  background-color: #F9F7FC;
  display: table;
  cursor: default;
}

.apply-card-wrapper {
  width: 100%;
  height: 50%;
  position: relative;
}

.apply-card {
  width: calc(50% - 10px);
  height: calc(100% - 10px);
  display: table;
  position: fixed;
  will-change: transform;
}

#apply-wrapper .apply-card {
  float: left;
}
</style>
