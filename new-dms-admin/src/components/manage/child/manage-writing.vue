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
  props: ['modifyPostId', 'modifyPostTitle', 'modifyPostContent', 'modifyCase'],
  data: function () {
    return {
      title: '',
      content: '',
      modifyId: '',
      config: {
        toolbar: [
          { name: 'forms', items: [ 'Checkbox', 'Radio', 'Button' ] },
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
      let formData = new FormData()
      formData.append('title', this.title)
      formData.append('content', this.content)
      this.$axios.post('/admin/notice', formData,
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response === 201) {
          console.log('공지사항 업로드 성공')
          alert('공지사항 업로드 성공')
        }
      })
      .catch(e => {
        console.log('Error', e)
      })
    },
    patchPosts: function () {
      console.log('patch')
      let formData = new FormData()
      formData.append('id', this.modifyId)
      formData.append('title', this.title)
      formData.append('content', this.content)
      this.$axios.patch('/admin/notice', formData,
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response === 200) {
          console.log('공지사항 수정 성공')
        }
      })
      .catch(e => {
        console.log('ERROR ==>', e)
      })
    },
    finished: function () {
      if (this.modifyCase) {
        console.log('수정')
        this.patchPosts()
      } else {
        console.log('제출')
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