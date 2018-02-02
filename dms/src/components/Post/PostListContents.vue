<template>
<div class="post-list-content">
  <div>1</div>
  <div>{{ post.title }}</div>
  <div>{{ post.author }}</div>
</div>  
</template>

<script>
export default {
  name: 'PostListContents',
  props: ['post']
}
</script>

<style>
.post-list-content{
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
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
