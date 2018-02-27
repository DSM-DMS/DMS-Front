<template>
  <div id="dev-intro-developer-wrapper">
    <dev-category :key="index" v-for="(data, index) in category" :data="data"/>
  </div>
</template>

<script>
import DevCategory from '@/components/FooterSection/DevCategory'

export default {
  name: 'DeveloperIntro',
  components: {DevCategory},
  data: function () {
    return {
      category: [
        {title: 'App', members: ['조성빈', '이병찬', '윤정현', '이성현']},
        {title: 'Server', members: ['김성래', '인상민', '조민규']},
        {title: 'Web Front', members: ['김지수', '김 건', '서윤호', '김형규', '오인서', '윤효상']},
        {title: 'Desktop', members: ['김경식', '정원태', '김동현', '이종현', '류근찬']},
        {title: 'Design', members: ['윤여환', '김동규']}
      ]
    }
  }
}
</script>

<style>

</style>
