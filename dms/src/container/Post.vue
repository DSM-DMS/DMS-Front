<template>
  <div id="post-page-wrapper">
    <header-nav />
    <left>
      <post-left :selected="selectedId"
                 :category="category"/>
    </left>
    <right>
      <post-right :category="category"
                  @selectedPost="selectedPost"/>
    </right>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import PostLeft from '@/components/Post/PostLeft'
import PostRight from '@/components/Post/PostRight'

var Left = {
  template: `<div style="float:left; height:100%; width:33%"><slot></slot></div>`
}

var Right = {
  template: `<div style="float:right; height:100%; width:67%"><slot></slot></div>`
}

export default {
  name: 'Post',
  components: {
    HeaderNav,
    Left,
    Right,
    PostLeft,
    PostRight
  },
  data: function () {
    return {
      category: '',
      selectedId: ''
    }
  },
  methods: {
    routing: function () {
      this.category = this.$route.params.category
    },
    selectedPost: function (id) {
      this.selectedId = id
    }
  },
  created: function () {
    this.routing()
  }
}
</script>

<style scoped>
#post-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>