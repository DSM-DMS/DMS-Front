<template>
  <div id="apply-page-wrapper">
    <header-nav />
    <left>

    </left>
    <right>
      
    </right>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'

var Left = {
  template: `<div style="float:left; height:100%; width:33%"><slot></slot></div>`
}

var Right = {
  template: `<div style="float:right; height:100%; width:67%"><slot></slot></div>`
}

export default {
  name: 'Apply',
  components: {
    HeaderNav,
    Left,
    Right
  }
}
</script>

<style scoped>
#post-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>