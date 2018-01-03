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
        day: '1'
      },
      goingout: {
        isSaturdayGoingout: false,
        isSundayGoingout: false
      },
      extention: {
        eleven: {
          isApply: false,
          class: ''
        },
        twelve: {
          isApply: false,
          class: ''
        }
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
  //     url: 'dsm2015.cafe24.com:3001/goingout'
  //   }).then(res => {
  //     this.goingout.isSaturdayGoingout = res.sat
  //     this.goingout.isSundayGoingout = res.sun
  //   }).catch(err => {
  //     console.log(err)
  //   })
  //   axios({
  //     method: 'GET',
  //     url: 'dsm2015.cafe24.com:3001/goingout'
  //   }).then(res => {
  //     this.goingout.isSaturdayGoingout = res.sat
  //     this.goingout.isSundayGoingout = res.sun
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
}
</script>

<style scoped>
@media only screen and (min-width: 1025px){
  #apply-wrapper {
    height: calc(100vh - 40px);
    width: calc(100% - 40px);
    padding: 20px;
  }
  .apply-text {
    font-size: 40px;
  }

  .apply-sub-text {
    font-size: 20px;
  }
}

@media only screen and (max-width: 1024px){
  #apply-wrapper {
    height: calc(50vh - 20px);
    width: calc(100% - 20px);
    padding: 10px;
  }
  .apply-text {
    font-size: 30px;
  }

  .apply-sub-text {
    font-size: 10px;
  }
}

#apply-wrapper {
  margin-top: 100vh;
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
