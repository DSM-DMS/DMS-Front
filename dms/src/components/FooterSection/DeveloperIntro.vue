<template>
  <div id="dev-intro-developer-wrapper">
    <dev-category :key="index" v-for="(data, index) in category" :data="data"/>
  </div>
</template>

<script>
import DevCategory from './DevCategory'

export default {
  name: 'DeveloperIntro',
  components: {DevCategory},
  data: function () {
    return {
      category: [
        {title: 'App', members: ['이병찬', '윤정현', '이성현']},
        {title: 'Server', members: ['조민규', '인상민']},
        {title: 'Web Front', members: ['서윤호', '김 건', '김형규', '오인서', '윤효상']},
        {title: 'Desktop', members: ['김동현', '이종현', '류근찬']},
        {title: 'Design', members: ['김동규']}
      ]
    }
  }
}
</script>

<style>

</style>
