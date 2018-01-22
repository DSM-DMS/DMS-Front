<template>
  <div style="min-width: 1200px;">
    <header-nav/>
    <menu-section :menuData="menuData"/>
    <main-section/>
    <apply-section :applyData="applyData"
                   @applySaturday="applySaturdayGoingout" 
                   @applySunday="applySundayGoingout"
                   @applyGoingout="applyGoingout" />
    <post-section/>
    <footer-section/>
  </div>
</template>

<script>

import HeaderNav from '@/components/HeaderNav/HeaderNav'
import MenuSection from '@/components/MenuSection/MenuSection'
import MainSection from '@/components/MainSection/MainSection'
import ApplySection from '@/components/ApplySection/ApplySection'
import PostSection from '@/components/PostSection/PostSection'
import FooterSection from '@/components/FooterSection/FooterSection'

export default {
  name: 'Main',
  components: {HeaderNav, MenuSection, MainSection, PostSection, ApplySection, FooterSection},
  data: function () {
    return {
      // 메뉴 부분 데이터
      menuData: {
        name: '',
        number: '',
        goodPoint: '',
        badPoint: ''
      },
      // 신청 부분 데이터
      applyData: {
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
    }
  },
  methods: {
    getStudentInfo: function () {
      if (this.$store.getters.isLogin) {
        this.$http({
          method: 'GET',
          url: '/mypage',
          headers: {
            Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
          }
        }).then(res => {
          this.menuData.name = res.data.name
          this.menuData.number = res.data.number
          this.menuData.goodPoint = res.data.good_point
          this.menuData.badPoint = res.data.bad_point

          this.applyData.stay.day = res.data.stay_value
          this.applyData.goingout.isSaturdayGoingout = res.data.goingout.sat
          this.applyData.goingout.isSundayGoingout = res.data.goingout.sun
          this.applyData.extension.eleven = res.data.extension_11 ? res.data.extension_11.class : null
          this.applyData.extension.twelve = res.data.extension_11 ? res.data.extension_12.class : null
        }).catch(err => {
          console.log(err)
        })
      }
    },
    applySaturdayGoingout: function () {
      this.applyData.goingout.isSaturdayGoingout = !this.applyData.goingout.isSaturdayGoingout
    },
    applySundayGoingout: function () {
      this.applyData.goingout.isSundayGoingout = !this.applyData.goingout.isSundayGoingout
    },
    applyGoingout: function () {
      let fd = new FormData()
      fd.append('sat', this.applyData.goingout.isSaturdayGoingout)
      fd.append('sun', this.applyData.goingout.isSundayGoingout)
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
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.getters.isLogin
    }
  },
  watch: {
    isLogin: function (val) {
      if (val) {
        this.getStudentInfo()
      }
    }
  }
}
</script>

<style>
img {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

html body{
  padding: 0;
  margin: 0;
  width: 100%;
}

</style>
