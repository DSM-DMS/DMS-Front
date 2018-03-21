<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="user-profile">{{cardData.author}}</div>
      <div class="user-inform">
        <span class="room-num"> {{cardData.room}} 호</span>
        <br>
        <span class="failure-explain">{{cardData.content}}</span>
      </div>
    </div>
    <div class="overlay-view">
      <div class="failure-detail" @click="clickToDetailPage">
        <img class= "overlay-detail-icon" src="../../../assets/icon/ic_detail_black.png" alt="자세히">
        <p class="overlay-detail-text">자세히 보러가기</p>
      </div>
      <div class="failure-delete" @click="deleteCard">
        <img class="overlay-delete-icon" src="../../../assets/icon/ic_delete_white.png" alt="">
        <p class="overlay-delete-text">삭제</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['cardData', 'index'],
    data: function () {
      return {
      }
    },
    methods: {
      clickToDetailPage: function () {
        this.$emit('goDetail', this.index)
      },
      deleteCard: function () {
        this.$emit('deleteCard', this.cardData.id)
      }
    }
  }
</script>

<style scoped>
  .card-wrapper {
    box-sizing: border-box;
    display: inline-block;
    border-radius: 5px;
    width: 400px;
    height: 150px;
    background-color: #fff;
    box-shadow: 1px 1px 5px 1px #616161;
    margin-bottom: 20px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card-wrapper:hover .overlay-view, .card-wrapper:hover .card{
    opacity: 0.9;
  }

  .user-profile {
    position: relative;
    top: 50%;
    transform: translateY(-50%);/*이 div의 높이 만큼 올려준다*/
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 5px solid black;
    text-align: center;
    line-height: 100px;
    font-size: 25px;
    font-weight: bold;
    color: #000;
    vertical-align: top;
    margin-left: 20px;
  }

  .user-inform {
    position: relative;
    top: 50%;
    transform: translateY(-50%);/*이 div의 높이 만큼 올려준다*/
    left: 20px;
    display: inline-block;
    width: 200px;
    height: 100px;
  }

  .room-num {
    margin-bottom: 20px;
    font-size: 28px;
  }

  .failure-explain {
    display: inline-block;
    margin-top: 10px; 
    width: 200px;
    overflow: hidden;
  }

  .overlay-view {
    position: relative;
    background-color: #fff;
    top: -100%;
    width: 400px;
    height: 150px;
    border-radius: 5px;
    opacity: 0;
    transition: .5s ease;
    font-size: 0;
  }

  .failure-detail {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 80%;
    height: 100%;
  }

  .failure-detail:hover {
    cursor: pointer;
  }

  .overlay-detail-icon {
    width: 30px;
    height: 30px;
    margin-top: 40px;
  }

  .overlay-detail-text{
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }

  .failure-delete {
    display: inline-block;
    text-align: center;
    width: 20%;
    height: 100%;
    background: red;
    opacity: 0.9;
  }

  .failure-delete:hover {
    cursor: pointer;
  }
  .overlay-delete-icon {
    margin-top: 30px;
    width: 35px;
    height: 40px
  }

  .overlay-delete-text {
    color: #fff;
    font-size: 17px;
    letter-spacing: 1px;
    font-weight: lighter;
  }
</style>
