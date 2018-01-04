<template>
  <div id="manage">
    <div id="main">
      <div id="upper-part">
        <img id="logo" src="../../assets/logo/logo.png" alt="">
        <span class="back-wrapper">
          <img class="back-button" src="../../assets/icon/ic_back.png" @click="goBack('main')">
        </span>
      </div>

      <div id="table-cont">
        <nav>
          <div @click="changeView1" :class="{ 'chk-btn': case1, 'dis-chk-btn': case2 }" id="look-up" class="btn">{{ title }}</div>
          <div @click="changeView2" :class="{ 'chk-btn': case2, 'dis-chk-btn': case1 }" id="writing" class="btn">글작성</div>
        </nav>
        <div id="content">
          <component id="view" :is="view"></component>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import table from './child/manage-table.vue'
import write from './child/manage-writing.vue'

export default {
  comments: { table, write },
  data: function () {
    return {
      title: '공지사항',
      view: table,
      case1: true,
      case2: false
    }
  },
  methods: {
    changeView1: function () {
      if (this.case1 === true) {
      } else {
        this.case1 = true
        this.case2 = false
        this.view = table
      }
    },
    changeView2: function () {
      if (this.case2 === true) {
      } else {
        this.case1 = false
        this.case2 = true
        this.view = write
      }
    },
    goBack: function (view) {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
#manage * {
  font-family: 'Jeju Gothic', serif;
}
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/background/bg_notice.png');
}

#upper-part {
  padding :2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  width: 8vw;
}

#back {
  padding: 10px 20px 10px 40px;
  color: #fff;
  font-size: 19px;
  line-height: 1;
  display: table;
}

.back-button {
  height: 4.5vh;
  margin-left: 1.6vw;
}

.back-wrapper {
  float: right;
  font-size: 15px;
  display: table;
  padding: 1vh 1vw 1vh 1vw;
  margin-right: 2vw;
  border-radius: 30px;
  cursor: pointer;
}

.back-wrapper:hover{
  background-color: rgba(255, 255, 255, 0.3)
}

#table-cont {
  width: 80vw;
  padding-left: 5.4vw;
}

#table-cont >*{
  font-size: 15px;
}

#table-cont>nav {
  display:table;
}

.btn {
  cursor: pointer;
  width: 8vw;
  height: 7.5vh;
  display:table-cell;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgba(14, 5, 5, 0.185);
  font-family: 'Jeju Gothic', serif;
  font-size: 20px;
  vertical-align: middle;
}

.chk-btn {
  background-color: #fff;
  opacity: 0.9;
}

.dis-chk-btn {
  opacity: 0.5; 
}

#content {
  padding: 20px 15px 20px 15px;
  background-color: #fff;
  opacity: 0.9;
  width: 100%;
  height: 60vh;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 4vh 4vw 4vh 4vw;
}

#view {
  width: 100%;
  height: 100%;
}
</style>