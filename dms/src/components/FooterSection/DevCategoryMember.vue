<template>
  <p class="category-member">{{ member }}</p>
</template>

<script>
export default {
  name: 'DevCategoryMember',
  props: ['member']  
}
</script>

<style>
.category-member{
  color: #5E97B7;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>
