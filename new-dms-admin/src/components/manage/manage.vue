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
          <div @click="tableChangeView" :class="{ 'chk-btn': tableCase, 'dis-chk-btn': wrtieCase }" id="look-up" class="btn">{{navTitle}}</div>
          <div @click="wrtieChangeView" :class="{ 'chk-btn': wrtieCase, 'dis-chk-btn': tableCase }" id="writing" class="btn">글작성</div>
        </nav>
        <div id="content">
          <component id="view" :is="view" @modify-table="modifyChangeView" @lookUp="lookUpChangeView" @uploadComplete="tableChangeView" :modifyPostId="postId" :modifyPostTitle="postTitle" :modifyPostContent="postContent"
          :modifyCase="modifyChk" :lookUpPostId="postId" :url="thisUrl"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import table from './child/manage-table.vue'
import write from './child/manage-writing.vue'
import lookUp from './child/manage-look-up.vue'

export default {
  created: function () {
    this.routing()
  },
  data: function () {
    return {
      view: table,
      tableCase: true,
      wrtieCase: false,
      lookUpCase: false,
      postId: '',
      postTitle: '',
      postContent: '',
      modifyChk: true,
      thisUrl: '',
      navTitle: ''
    }
  },
  methods: {
    routing: function () {
      let category = this.$route.params.category
      this.thisUrl = category
      switch (category) {
        case 'notice':
          this.navTitle = '공지사항'
          break
        case 'rule':
          this.navTitle = '기숙사규칙'
          break
        case 'faq':
          this.navTitle = '자주하는 질문'
          break
      }
    },
    tableChangeView: function () {
      if (this.tableCase === true) {
      } else {
        this.tableCase = true
        this.wrtieCase = false
        this.view = table
      }
    },
    wrtieChangeView: function () {
      this.modifyChk = false
      if (this.wrtieCase === true) {
      } else {
        this.tableCase = false
        this.wrtieCase = true
        this.view = write
      }
    },
    lookUpChangeView: function (postId) {
      this.view = lookUp
      this.lookUpCase = true
      this.postId = postId
      console.log(postId)
    },
    goBack: function (view) {
      this.$router.go(-1)
    },
    modifyChangeView: function (postId, title, content) {
      this.modifyChk = true
      console.log('슈졍')
      if (this.wrtieCase === true) {
      } else {
        this.tableCase = false
        this.wrtieCase = true
        this.view = write
      }
      this.postId = postId
      this.postTitle = title
      this.postContent = content
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
  width: 9vw;
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
  overflow-y:auto;
}

#content::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: white
}

#content::-webkit-scrollbar
{
	width: 10px;
	background-color: white;
}

#content::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: gray
}

#view {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>