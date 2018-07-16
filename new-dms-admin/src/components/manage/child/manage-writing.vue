<template>
  <div id="container">
    <input id="title-input" placeholder="제목" v-model="title"/>
    <div id="app">
      <ckeditor v-model="content" 
      :config="config" 
      @blur="onBlur($event)" 
      @focus="onFocus($event)"/>
    </div>
    <button id="submit" @click="finished">작성 완료</button>
  </div>
</template>

<script>
import Ckeditor from 'vue-ckeditor2'

export default {
  watch: {
    modifyCase: function (newVal) {
      if (newVal) {
        this.modifyId = this.modifyPostId
        this.content = this.modifyPostContent
        this.title = this.modifyPostTitle
      } else {
        this.modifyId = ''
        this.content = ''
        this.title = ''
      }
    }
  },
  created () {
    if (this.modifyCase) {
      this.modifyId = this.modifyPostId
      this.content = this.modifyPostContent
      this.title = this.modifyPostTitle
    }
  },
  components: { Ckeditor },
  props: ['modifyPostId', 'modifyPostTitle', 'modifyPostContent', 'modifyCase', 'category'],
  data: function () {
    return {
      title: '',
      content: '',
      modifyId: '',
      config: {
        toolbar: [
          { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ] },
          { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
          { name: 'links', items: [ 'Link', 'Unlink' ] },
          { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'PageBreak', 'Iframe' ] },
          '/',
          { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
          { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
          { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
          { name: 'about', items: [ 'About' ] }
        ],
        height: 300
      }
    }
  },
  methods: {
    onBlur (editor) {
      console.log(editor)
    },
    onFocus (editor) {
      console.log(editor)
    },
    submitPosts: function () {
      console.log('submit')
      this.$axios.post('/v2/admin/post/' + this.category,
        {
          title: this.title,
          content: this.content
        },
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response.status === 201) {
          console.log(this.category.toUpperCase() + ' 업로드 성공')
          alert(this.category.toUpperCase() + ' 업로드 성공')
          this.$emit('uploadComplete')
        }
      })
      .catch(e => {
        console.log('Error', e)
      })
    },
    patchPosts: function () {
      this.$axios.patch('/v2/admin/post/' + this.category + '/' + this.modifyId,
        {
          category: this.category,
          title: this.title,
          content: this.content,
          post_id: this.modifyId
        },
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response.status === 200) {
          alert('수정 성공')
          console.log(this.category + '수정 성공')
          this.$emit('uploadComplete')
        }
      })
      .catch(e => {
        console.log('ERROR ==>', e)
      })
    },
    finished: function () {
      if (this.title === '' || this.content === '') {
        alert('제목 혹은 내용이 없습니다')
        return
      }
      if (this.modifyCase) {
        this.patchPosts()
      } else {
        this.submitPosts()
      }
    }
  }
}
</script>

<style scoped>
#title-input {
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #675094;
  font-size: 30px;
  padding-bottom: 20px;
}

#app {
  margin-top: 3vh;
  width: 100%;
}

#submit {
  position: relative;
  top:20px;
  margin-bottom: 10px;
  height: 12%;
  width: 13%;
  border: none;
  background-color: #675094;
  color: #fff;
  border-radius: 50px;
  font-size: 20px;
  margin: auto;
}
</style>