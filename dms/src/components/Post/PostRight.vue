<template>
  <div id="post-right-wrapper">
    <div id="post-list-wrapper">
      <div id="post-category-wrapper">
        <div :style="{opacity: category ==='notice' ? '0.9' : '0.5'}"
             @click="changeCategory('notice')" 
             id="post-notice-category" 
             class="post-category">공지사항</div>
        <div :style="{opacity: category ==='rule' ? '0.9' : '0.5'}" 
             @click="changeCategory('rule')"
             id="post-rule-category" 
             class="post-category">기숙사 규정</div>
        <div :style="{opacity: category ==='faq' ? '0.9' : '0.5'}" 
             @click="changeCategory('faq')"
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
          <post-list-contents :post="post" :no="index" :key="post.id" v-for="(post, index) in posts" @selectedPost="selectedPost(post.id)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postListContents from '@/components/Post/PostListContents'

export default {
  name: 'PostRight',
  props: {
    category: { type: String },
    posts: { type: Array }
  },
  components: { postListContents },
  methods: {
    changeCategory: function (category) {
      this.$emit('update:category', category)
    },
    selectedPost: function (id) {
      this.$emit('selectedPost', id)
    }
  }
}
</script>

<style scoped>
#post-right-wrapper{
  box-sizing: border-box;
  background-image: url('../../assets/Question/bg_notice.svg');
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
  height: 70px;
}

.post-category{
  width: calc(100% / 3);
  height: 70px;
  float: left;
  text-align: center;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  line-height: 70px;
}

#post-list{
  width: 100%;
  height: calc(100% - 70px);
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
</style>
