<template>
  <div id="menu-modal-wrapper" @click.self="$emit('close')">
    <div id="menu-modal" :is="modals[modalData.idx]">
    </div>
  </div>
</template>

<script>
import PasswordChange from '@/components/MenuSection/MenuModal/PasswordChange'
import FacilityReport from '@/components/MenuSection/MenuModal/FacilityReport'
import BugReport from '@/components/MenuSection/MenuModal/BugReport'

export default {
  name: 'LoginModal',
  data: function () {
    return {
      modals: [
        PasswordChange,
        FacilityReport,
        BugReport
      ]
    }
  },
  methods: {
  },
  props: {
    modalData: {type: Object}
  }
}
</script>

<style scoped>
#menu-modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
}

#menu-modal {
  background-color: white;
  width: 600px;
  border-radius: 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
</style>
