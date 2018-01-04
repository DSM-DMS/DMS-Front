<template>
  <div>
    <input id="title-input" placeholder="제목"/>
    <div id="app">
      <ckeditor v-model="content" :config="config" @blur="onBlur($event)" @focus="onFocus($event)"/>
    </div>
    <button id="submit">작성완료</button>
  </div>
</template>

<script>
import Ckeditor from 'vue-ckeditor2'

// const qs = require('query-string')

export default {
  components: { Ckeditor },
  data: function () {
    return {
      content: '',
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
        height: 200
      }
    }
  },
  methods: {
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
  margin-top: 3vh;
  height: 40px;
  width: 100px;
  border: none;
  background-color: #675094;
  color: #fff;
  border-radius: 20px;
}
</style>
