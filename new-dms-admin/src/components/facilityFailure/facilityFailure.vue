<template>
  <div id="failure">
    <div id="main">
      <div id="upper-part">
        <img id="logo" src="../../assets/logo/logo.png" alt="">
        <span class="back-wrapper">
          <img class="back-button" src="../../assets/icon/ic_back.png" @click="goBack('main')">
        </span>
      </div>

      <div id="content-wrapper">
        <div id="failure-content">
          <component :is="componentId" :cardContent="detailCardData" :cardList="cardList" :currentIndex="currentDetailIndex" :cardListLength="cardListLength" @alertGoDetail="goDetail" @alertDeleteCard="deleteCard" @goBefore="detailCardBefore" @goAfter="detailCardAfter"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardTable from './child/failureCardTable'
import cardDetail from './child/failureDetailView'

export default {
  created: function () {
    this.getCardList()
  },
  data: function () {
    return {
      componentId: cardTable,
      detailCardData: {},
      cardList: [],
      url: 'admin/report/facility',
      currentDetailIndex: 0,
      cardListLength: 0
    }
  },
  methods: {
    goBack: function (view) {
      this.$router.go(-1)
    },
    goDetail: function (index) {
      this.currentDetailIndex = index
      this.detailCardData = this.cardList[this.currentDetailIndex]
      this.componentId = cardDetail
    },
    deleteCard: function (id) {
      if (confirm('삭제하시겠습니까?')) {
        var cardId = new FormData()
        cardId.append('report_id', id)
        this.$axios({
          method: 'DELETE',
          url: '/' + this.url,
          data: cardId,
          headers: {'Authorization': 'JWT ' + this.$getCookie('JWT')}
        })
        .then(response => {
          if (response.status === 200) {
            this.getCardList()
            alert('삭제 성공했습니다')
          } else if (response.status === 204) {
            alert('게시물이 없습니다')
          } else if (response.status === 403) {
            alert('권한없음')
          }
        })
        .catch(response => {
          alert('삭제에 실패했습니다')
          console.log(response)
        })
      }
      this.getCardList()
    },
    getCardList: function () {
      this.$axios.get('/' + this.url, {
        headers: {
          'Authorization': 'JWT ' + this.$getCookie('JWT')
        }
      })
      .then(response => {
        this.cardList = response.data.reverse()
        this.cardListLength = this.cardList.length
      })
      .catch(e => {
        console.log('error :' + e)
      })
    },
    detailCardAfter: function () {
      this.currentDetailIndex += 1
      this.detailCardData = this.cardList[this.currentDetailIndex]
    },
    detailCardBefore: function () {
      this.currentDetailIndex -= 1
      this.detailCardData = this.cardList[this.currentDetailIndex]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
#failure * {
  font-family: 'Jeju Gothic', serif;
  color: #000;
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
  border-radius: 30px;
  cursor: pointer;
}

.back-wrapper:hover{
  background-color: rgba(255, 255, 255, 0.3)
}

#content-wrapper {
  width: 90vw;
  height: 80vh;
  box-sizing: border-box;
  margin-left: 5vw;
}

#content-wrapper >*{
  font-size: 15px;
}

#failure-content {
  position: absolute;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0.9;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  padding: 4vh 4vw 4vh 4vw;
  box-sizing: border-box;
  text-align: center;
}
</style>