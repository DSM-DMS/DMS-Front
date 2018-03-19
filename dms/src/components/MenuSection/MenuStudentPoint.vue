<template>
  <div class="menu-student-point-info">
    {{ kind === 'goodPoint' ? '상점' : '벌점'  }} : {{ menuData[kind] ? menuData[kind] : '0' }}
  </div>
</template>

<script>
export default {
  props: {
    kind: { type: String }
  },
  computed: {
    menuData: function () {
      console.log(this.kind)
      return this.$store.getters.menuData
    }
  }
}
</script>

