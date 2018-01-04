<template>
  <div id="apply-wrapper">
    <div class="apply-card-wrapper">
      <apply-stay :day="stay.day"/>
      <apply-extention :extention="extention"/>
    </div>

    <div class="apply-card-wrapper">
      <apply-goingout  @applySaturday="applySaturdayGoingout" 
                       @applySunday="applySundayGoingout" 
                       :goingout="goingout"/>
      <apply-survey/>
    </div>
  </div>
</template>

<script>
import ApplyStay from '@/components/ApplySection/ApplyStay'
import ApplyExtention from '@/components/ApplySection/ApplyExtention'
import ApplyGoingout from '@/components/ApplySection/ApplyGoingout'
import ApplySurvey from '@/components/ApplySection/ApplySurvey'
import axios from 'axios'

export default {
  name: 'ApplySection',
  components: {ApplyStay, ApplyExtention, ApplyGoingout, ApplySurvey},
  data: function () {
    return {
      stay: {
        day: '4'
      },
      goingout: {
        isSaturdayGoingout: false,
        isSundayGoingout: false
      },
      extention: {
        class: [
          '1층<br/>가온실',
          '1층<br/>나온실',
          '1층<br/>다온실',
          '1층<br/>라온실',
          '3층<br/>독서실',
          '4층<br/>독서실',
          '5층<br/>연린교실'
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
      axios({
        method: 'post',
        url: 'dsm2015.cafe24.com:3001/goingout',
        data: {
          sat: this.goingout.isSaturdayGoingout,
          sun: this.goingout.isSundayGoingout
        }
      }).then(res => {
        alert('신청 완료')
      }).catch(err => {
        console.log(err)
      })
    }
  }
  // created () {
  //   axios({
  //     method: 'GET',
  //     url: 'http://dsm2015.cafe24.com:3001/goingout'
  //   }).then(res => {
  //     this.goingout.isSaturdayGoingout = res.data.sat
  //     this.goingout.isSundayGoingout = res.data.sun
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   axios({
  //     method: 'GET',
  //     url: 'http://dsm2015.cafe24.com:3001/extention/11'
  //   }).then(res => {
  //     this.extention.eleven = res.data.class
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   axios({
  //     method: 'GET',
  //     url: 'http://dsm2015.cafe24.com:3001/extention/12'
  //   }).then(res => {
  //     this.extention.twelve = res.data.class
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   axios({
  //     method: 'GET',
  //     url: 'http://dsm2015.cafe24.com:3001/stay'
  //   }).then(res => {
  //     this.stay.day = res.data.value
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
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
  width: calc(100% - 40px);
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
