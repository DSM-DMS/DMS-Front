<template>
  <div id="menu-modal-wrapper" @click.self="$emit('close')">
    <div id="menu-modal" :is="modals[modalData.idx]" @close="$emit('close')">
    </div>
  </div>
</template>

<script>
import PasswordChange from '@/components/MenuSection/MenuModal/PasswordChange'
import FacilityReport from '@/components/MenuSection/MenuModal/FacilityReport'
import BugReport from '@/components/MenuSection/MenuModal/BugReport'
import PointCheck from '@/components/MenuSection/MenuModal/PointCheck'

export default {
  name: 'LoginModal',
  data: function () {
    return {
      modals: [
        PasswordChange,
        FacilityReport,
        BugReport,
        PointCheck
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
}

#menu-modal {
  background-color: white;
  width: 500px;
  border-radius: 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
</style>
