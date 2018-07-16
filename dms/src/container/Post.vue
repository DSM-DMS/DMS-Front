<template>
  <div id="post-page-wrapper">
    <header-nav />
    <post-left
      :selected="selectedId"
      :category="category"
      class="left"
    />
    <post-right
      :category.sync="category"
      :posts="posts"
      @selectedPost="val => selectedId = val"
      class="right"
    />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import PostLeft from '@/components/Post/PostLeft'
import PostRight from '@/components/Post/PostRight'

export default {
  name: 'Post',
  components: {
    HeaderNav,
    PostLeft,
    PostRight
  },
  data: function () {
    return {
      selectedId: '',
      posts: []
    }
  },
  methods: {
    getPosts: function () {
      return this.$http.get('/post/' + this.category, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(res => {
        this.posts = res.data.reverse()
      }).catch(error => {
        this.posts = []
        console.log(error)
      })
    }
  },
  computed: {
    category: {
      get () {
        return this.$route.params.category
      },
      set (val) {
        this.$router.replace({ name: 'post', params: { category: val } })
      }
    }
  },
  watch: {
    category (val) {
      this.getPosts().then(() => {
        this.selectedId = ''
      })
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<style scoped>
#post-page-wrapper {
  width: 100%;
  height: 100%;
}

.left {
  float:left !important;
  height:100% !important;
  width:33% !important;
}

.right {
  float:right !important;
  height:100% !important;
  width:67% !important;
}
</style>