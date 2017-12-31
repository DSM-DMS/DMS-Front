<template>
  <p class="category-title">{{ title }}</p>
</template>

<script>
export default {
  name: 'DevCategoryTitle',
  props: ['title']
}
</script>

<style>
.category-title{
  color: #4D7E99;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
}
</style>
