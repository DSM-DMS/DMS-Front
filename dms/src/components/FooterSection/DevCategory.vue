<template>
  <div class="category">
    <p class="category-title">{{ data.title }}</p>
    <p class="category-member" :key="index" v-for="(member, index) in data.members">{{ member }}</p>
    <dev-category-member/>
  </div>
</template>

<script>
export default {
  name: 'DevCategory',
  props: ['data']
}
</script>

<style>
.category-title{
  color: #4D7E99;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
}
.category-member{
  color: #5E97B7;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>
