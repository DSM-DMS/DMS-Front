<template>
  <div id="menu-wrapper" v-if="computedMenu" @click.self="$emit('close')">
    <div id="menu">
      <div id="menu-student-info">
        <div id="menu-student-number-info">
          학번: 20104
        </div>
        <div id="menu-student-name-info">
          <p id="menu-student-name">김동규 </p>
          <p id="menu-student-name-info-sub-text">님 환영합니다</p>
        </div>
        <div id="menu-student-point-info-wrapper">
          <div class="menu-student-point-info">
            <p>상점</p>
            <div class="menu-student-point">
              20
            </div>
          </div>
          <div class="menu-student-point-info">
            <p>벌점</p>
            <div class="menu-student-point">
              20
            </div>
          </div>
        </div>
      </div>
      <div id="menu-apply">
        <div class="menu-apply-btn">
          <img src="../../assets/Main_menu/ic_change_pw.png">
        </div>
        <div class="menu-apply-btn">
          <img src="../../assets/Main_menu/ic_report_broken.png">
        </div>
        <div class="menu-apply-btn">
          <img src="../../assets/Main_menu/ic_bug_report.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuSection',
  computed: {
    computedMenu: function () {
      return this.$store.getters.isMenu
    }
  }
}
</script>

<style>
#menu-wrapper{
  width: 100%;
  height: 100vh;
}
#menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  min-width: 300px;
  height: 100vh;
  float: right;
}

#menu-student-info{
  background-color: rgb(53, 147, 211);
  height: 30%;
  padding-top: 90px;
  color: white;
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
  padding-top: 3px;
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
  height: 70%;
  padding: 60px 50px;
  background-color: white;  
}

.menu-apply-btn{
  width: 100%;
  padding: 50px 20px 10px 20px;
}

.menu-apply-btn img{
  display: block  ;
  margin: 0 auto;
}
</style>