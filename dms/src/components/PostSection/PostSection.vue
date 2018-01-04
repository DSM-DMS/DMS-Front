<template>
  <div id="post-wrapper">
    <post-card :headerText="'Notice'" 
               :bodyText="'공지사항'" 
               :bodySubText="'사감부의 공지사항을 확인하세요'"
               :mainColor="'rgb(246, 99, 81)'" 
               :imgPath="require('../../assets/icon/ic_notice/ic_notice.png')"/>
    <post-card :headerText="'Rule'" 
               :bodyText="'기숙사 규정'" 
               :bodySubText="'기숙사 관련 규정을 확인하세요'"
               :mainColor="'rgb(255, 188, 71)'" 
               :imgPath="require('../../assets/icon/ic_notice/ic_rule.png')"/> 
    <post-card :headerText="'Question'" 
               :bodyText="'자주하는 질문'" 
               :bodySubText="'기숙사 관련 질문과 대답을 확인하세요'"
               :mainColor="'rgb(53, 147, 211)'" 
               :imgPath="require('../../assets/icon/ic_notice/ic_question.png')"/>
  </div>
</template>

<script>
  import PostCard from '@/components/PostSection/PostCard'

  export default {
    name: 'PostSection',
    components: {
      PostCard
    }
  }
</script>

<style>
  /*post-section*/

  #post-wrapper {
    font-family: 'NanumSquareRoundB';
    width: 100%;
    background-color: rgb(226, 226, 226);
    height: 600px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .post-card-wrapper {
    width: calc(100%/3);
    height: 100%;
    float: left;
  }

  .post-card {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    cursor: pointer;
    will-change: transform;
  }

  .post-card:hover {
    -webkit-transform: scale(1.05);
    /*  크롬 */
    -moz-transform: scale(1.05);
    /* FireFox */
    -o-transform: scale(1.05);
    /* Opera */
    transform: scale(1.05);
    transition: transform .35s;
    -o-transition: transform .35s;
    -moz-transition: transform .35s;
    -webkit-transition: transform .35s;
  }

  .post-card-header {
    width: 100%;
    height: 15%;
    display: table;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .post-card-header-text {
    text-align: center;
    color: white;
    font-size: 30px;
    display: table-cell;
    vertical-align: middle;
  }

  .post-card-body-wrapper {
    width: 100%;
    height: 85%;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: table;
  }

  .post-card-body {
    display: table-cell;
    vertical-align: middle;
  }

  .post-card-img-wrapper {
    width: 35%;
    margin: 0 auto;
  }

  .post-card-img {
    width: 100%;
    margin: 0 auto;
  }

  .post-card-body-text-wrapper:nth-child(n) {
    text-align: center;
    font-weight: bold;
  }

  .post-card-body-text {
    font-size: 30px;
    margin: 15px;
  }

  .post-card-body-sub-text {
    font-size: 15px;
  }
</style>
