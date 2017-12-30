<template>
  <div id="manage">
    <div id="main">

      <div id="upper-part">
        <img id="logo" src="../../assets/logo/logo.png" alt="">
        <span id="back">
          <span id="back-text">돌아가기</span>
          <img id="back-icon" src="../../assets/icon/ic_back.png" alt="">
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 32px;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 70px 3vh 70px;
}

#logo {
  width: 100px;
}

#back {
  padding: 10px 20px 10px 40px;
  color: #fff;
  font-size: 19px;
  line-height: 1;
  display: table;
}

#back-icon {
  width: 15px;
}

#back:hover {
  border-radius: 40px;
  background-color: #e4e5e8;
}

#back-text {
  display: table-cell;
  vertical-align: middle;
  padding-right: 30px;
}

#table-cont {
  font-size: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

#table-cont >*{
  font-size: 15px;
}

#table-cont>nav {
  display: flex;
}

.btn {
  display: inline;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 30px 20px 30px;
  background-color: #fff;
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
  width: 80vw;
  height: 60vh;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

#view {
  width: 100%;
  height: 100%;
}
</style>