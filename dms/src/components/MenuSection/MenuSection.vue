<template>
  <div id="menu-wrapper" @click.self="$emit('close')">
    <div id="menu" :style="{right: computedMenu ? '0px' : '-300px'}">
      <div id="menu-student-info">
        <div id="menu-student-number-info">
          학번: {{ menuData.number }}
        </div>
        <div id="menu-student-name-info">
          <p id="menu-student-name">{{ menuData.name }} </p>
          <p id="menu-student-name-info-sub-text">{{ menuData.name ? '님 환영합니다' : '로그인을 해주세요' }}</p>
        </div>
        <div id="menu-student-point-info-wrapper">
          <div class="menu-student-point-info">
            <p>상점</p>
            <div class="menu-student-point">
              {{ menuData.goodPoint ? menuData.goodPoint : '0' }}
            </div>
          </div>
          <div class="menu-student-point-info">
            <p>벌점</p>
            <div class="menu-student-point">
              {{ menuData.badPoint ? menuData.badPoint : '0' }}
            </div>
          </div>
        </div>
      </div>
      <div id="menu-apply">
        <div class="menu-apply-btn" v-for="button in menuButtons" :key="button.id" @click="menuButton(button.id)">
          <img :src="button.img">
        </div>
      </div>
    </div>
    <menu-modal v-if="menuModal.isShow" @close="menuModal.isShow = false; computedMenu = true" :modalData="menuModal"/>
  </div>
</template>

<script>
import MenuModal from './MenuModal'

export default {
  name: 'MenuSection',
  props: {
    menu: {type: Boolean}
  },
  data: function () {
    return {
      menuModal: {
        isShow: false,
        idx: 0
      },
      menuButtons: [
        {
          id: 0,
          img: require('../../assets/Main_menu/ic_change_pw.png')
        },
        {
          id: 1,
          img: require('../../assets/Main_menu/ic_report_broken.png')
        },
        {
          id: 2,
          img: require('../../assets/Main_menu/ic_bug_report.png')
        }
      ]
    }
  },
  methods: {
    menuButton: function (idx) {
      this.menuModal.isShow = true
      this.menuModal.idx = idx
    }
  },
  computed: {
    computedMenu: {
      get: function () {
        return this.menu && !this.menuModal.isShow
      },
      set: function (val) {
        this.$emit('update:menu', val)
      }
    },
    menuData: function () {
      return this.$store.getters.menuData
    }
  },
  watch: {
    computedMenu: function (val) {
      if (val) {
        this.$store.dispatch('getData')
      }
      this.$emit('update:menu', val)
    }
  },
  components: {
    MenuModal
  }
}
</script>

<style>
#menu-wrapper{
  width: 100%;
}

#menu{
  position: fixed;
  z-index: 11;
  top: 0;
  right: -300px;
  min-width: 300px;
  width: 300px;
  height: 100vh;
  float: right;
  /* 색 수정 하세요 */
  border-left: 1px solid rgb(200, 200, 200);
  transition: .4s right ease-out;
}

#menu-student-info{
  background-color: rgb(53, 147, 211);
  padding-top: 90px;
  color: white;
  min-height: 250px;
}

#menu-student-number-info{
  position: absolute;
  left: 0;
  top: 30px;
  width: 50%;
  height: 30px;
  background-color: white;
  text-align: center;
  color: rgb(53, 147, 211);
  font-size: 17px;  
  padding-top: 5px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}

#menu-student-name-info{
  text-align: center;
  height: 20%;
}

#menu-student-name{
  font-size: 30px;
  display: inline-block;
}

#menu-student-name-info-sub-text{
  font-size: 15px;
  display: inline-block;
}

#menu-student-point-info-wrapper{
  width: 100%;
  height: 80%;
  padding: 30px 60px 0 60px;
}

#menu-student-point-info-wrapper .menu-student-point-info:last-child{
  float: right;
}

.menu-student-point-info{
  width: 70px;
  text-align: center; 
  float: left;
}

.menu-student-point{
  border: 3px solid white;
  border-radius: 100%;
  padding: 15px;  
  font-size: 25px;
  margin-top: 5px;
}
#menu-apply{
  height: calc(100% - 250px);
  padding: 60px 50px;
  background-color: white;  
  display: flex;
  flex-flow: column nowrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: auto;
}

.menu-apply-btn{
  width: 100%;
  cursor: pointer;
  padding: 15px;
}

.menu-apply-btn img{
  display: block  ;
  margin: 0 auto;
}
</style>