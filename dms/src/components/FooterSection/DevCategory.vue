<template>
  <div class="category">
    <dev-category-title/>
    <dev-category-member/>
  </div>
</template>

<script>
import DevCategoryTitle from './DevCategoryTitle'
import DevCategoryMember from './DevCategoryMember'

export default {
  name: 'DevCategory',
  components: {DevCategoryTitle, DevCategoryMember}  
}
</script>

<style>

</style>
