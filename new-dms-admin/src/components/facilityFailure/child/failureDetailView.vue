<template>
  <div id="detail-view-wrapper">
    <div id="facility-detail-top">
      <span class="content-title">상세 설명</span>
    </div>
    <div id="detail-box">
      <div class="arrow-wrapper">
        <img id="detail-left-arrow" class="detail-arrow-btn" src="../../../assets/icon/ic_left_arrow.png" alt="" @click="goBefore" v-show="leftArrowDisplay">
      </div>
      <div id="detail-view-content-wrapper">
        <div id="detail-profile">
          <div id="author-name"> {{cardContent.author}} </div>
          <p>{{cardContent.room}}호</p>
        </div>
        <div id="detail-explain">
          <div id="detail-title-wrapper">
            <span id="detail-title-head"> 제목 : </span>
            <span id="detail-title"> {{cardContent.title}} </span>
          </div>
          <div id="detail-content-wrapper">
            <span id="detail-content-head"> 내용 : </span>
            <div id="detail-content"> {{cardContent.content}} </div>
          </div>
        </div>
      </div>
      <div class="arrow-wrapper">
        <img id="detail-right-arrow" class="detail-arrow-btn" src="../../../assets/icon/ic_right_arrow.png" alt="" @click="goAfter" v-show="rightArrowDisplay">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardContent', 'currentIndex', 'cardListLength'],
  data: function () {
    return {
      rightArrowDisplay: true,
      leftArrowDisplay: true
    }
  },
  created: function () {
    this.checkDisplayArrow(this.currentIndex, this.cardListLength)
  },
  updated: function () {
    this.checkDisplayArrow(this.currentIndex, this.cardListLength)
  },
  methods: {
    goBefore: function () {
      this.$emit('goBefore')
    },
    goAfter: function () {
      this.$emit('goAfter')
    },
    checkDisplayArrow: function (index, length) {
      if (index === 0) {
        this.leftArrowDisplay = false
        this.rightArrowDisplay = true
        if ((index + 1) === length) {
          this.rightArrowDisplay = false
        }
        console.log(this.leftArrowDisplay, this.rightArrowDisplay)
      } else if ((index + 1) === length) {
        this.leftArrowDisplay = true
        this.rightArrowDisplay = false
        if (index === 0) {
          this.leftArrowDisplay = false
        }
      } else {
        this.rightArrowDisplay = true
        this.leftArrowDisplay = true
      }
    }
  }
}
</script>

<style scoped>
#detail-view-wrapper {
  height: 100%;
}

.content-title {
  font-size: 20px;
  color: #675094;
  padding: 15px 90px;
  border-bottom: 1px solid #675094;
}

#detail-box{
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  top: 50px;
  height: 70%;
}

.detail-arrow-btn{
  position: relative;
  top: 50%;
  width: 30px;
  padding: 15px;
  transform: translateY(-50%);/*이 div의 높이 만큼 올려준다*/
}

.detail-arrow-btn:hover {
  cursor: pointer;
}

.arrow-wrapper{
  display: inline-block;
  height: 100%;
  width: 60px;
}

#detail-view-content-wrapper {
  margin: 0 auto;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #616161;
  width: 70%;
  height: 100%;
  font-size: 0;
  font-weight: 300;
}

#detail-profile {
  display: inline-block;
  background-color: #675094;
  color: #fff;
  height: 100%;
  width: 25%;
  vertical-align: top;/* 두개의 인라인 블록을 만들 때 생기는 빈 여백 없애기*/
  font-size: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

#author-name {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 5px solid #fff;
  text-align: center;
  line-height: 100px;
  font-size: 25px;
  margin-top: 40%;
  
}

#detail-explain {
  display: inline-block;
  height: 100%;
  width: 75%;
  font-size: 20px;
  text-align: left;
}

#detail-explain>div {
  margin-top: 50px;
}

#detail-explain span{
  margin-left: 20px;
  vertical-align: top;
}

#detail-content {
  margin-left: 20px;
  display: inline-block;
  overflow-y: auto;
  overflow-x: hidden;
  width: 80%;
}

</style>
