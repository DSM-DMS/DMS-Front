<template>
  <div id="post-right-wrapper">
    <div id="post-list-wrapper">
      <div id="post-category-wrapper">
        <div :style="{opacity: selected==='notice' ? '0.9' : '0.5'}"
             @click="changeCategory('notice')" 
             id="post-notice-category" 
             class="post-category">공지사항</div>
        <div :style="{opacity: selected==='rule' ? '0.9' : '0.5'}" 
             @click="changeCategory('rule')"
             id="post-rule-category" 
             class="post-category">기숙사 규정</div>
        <div :style="{opacity: selected==='question' ? '0.9' : '0.5'}" 
             @click="changeCategory('question')"
             id="post-question-category" 
             class="post-category">자주하는 질문</div>
      </div>
      <div id="post-list">
        <div id="post-list-header">
          <div>#</div>
          <div>제목</div>
          <div>작성자</div>
        </div>
        <div id="post-container">
          <div class="post-list-content">
            <div>1</div>
            <div>상점은 어디서 활용할 수 있나요?</div>
            <div>사감부</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostRight',
  props: ['category'],
  data: function () {
    return {
      selected: this.category
    }
  },
  methods: {
    changeCategory: function (selectedCategory) {
      this.selected = selectedCategory
    }
  }
}
</script>

<style scoped>
#post-right-wrapper{
  box-sizing: border-box;
  background-image: url('../../assets/Question/background.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}

#post-list-wrapper{
  width: 900px;
  height: 70vh;
}

#post-category-wrapper{
  width: 400px;
  height: 10%;
}

.post-category{
  width: calc(100% / 3);
  height: 100%;
  display: inline-block;
  float: left;
  text-align: center;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  cursor: pointer;
}

#post-list{
  width: 100%;
  height: 90%;
  opacity: 0.9;
  background-color: white;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 50px 70px 50px 70px;
}

#post-list-header{
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 15%;
  color: rgb(53, 147, 211);
  border-bottom: 1.5px solid gray;
  font-size: 20px;
  padding: 20px;
}

#post-list-header div:nth-child(1){
  flex-basis: 20%;
  display: inline-block;
}

#post-list-header div:nth-child(2){
  flex-basis: 60%;
  display: inline-block;
}

#post-list-header div:nth-child(3){
  flex-basis: 20%;
  display: inline-block;
}

#post-container{
  width: 100%;
  height: 85%;
  padding: 20px;
  overflow-x: auto;
    overflow-y: auto;
}

.post-list-content{
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
}

.post-list-content div:nth-child(1){
  flex-basis: 20%;
  display: inline-block;
}

.post-list-content div:nth-child(2){
  flex-basis: 60%;
  display: inline-block;
}

.post-list-content div:nth-child(3){
  flex-basis: 20%;
  display: inline-block;
}
</style>
