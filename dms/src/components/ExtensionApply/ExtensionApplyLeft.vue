<template>
  <div id="extension-apply-left-wrapper">
    <table id="button-table">
      <tr>
        <td class="class-button" @click="classSelect(0)"><img :src="getImage(0)"></td>
        <td class="class-button" @click="classSelect(1)"><img :src="getImage(1)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="classSelect(2)"><img :src="getImage(2)"></td>
        <td class="class-button" @click="classSelect(3)"><img :src="getImage(3)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="classSelect(4)"><img :src="getImage(4)"></td>
        <td class="class-button" @click="classSelect(5)"><img :src="getImage(5)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="classSelect(6)"><img :src="getImage(6)"></td>
        <td>
          <div id="toggle-button">
            <input type="checkbox" hidden name="time" id="toggle-time" v-model="thisTime" v-bind:true-value="12" v-bind:false-value="11">
            <div id="toggle-slider">
              <div id="toggle-text11">11시</div>
              <label for="toggle-time" id="toggle-switch"></label>
              <div id="toggle-text12">12시</div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExtensionApplyLeft',
  data: function () {
    return {
      classImages: [
        [
          require('../../assets/Study_application/icon/ic_gaon.png'),
          require('../../assets/Study_application/icon_selected/ic_gaon_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_naon.png'),
          require('../../assets/Study_application/icon_selected/ic_naon_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_daon.png'),
          require('../../assets/Study_application/icon_selected/ic_daon_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_laon.png'),
          require('../../assets/Study_application/icon_selected/ic_laon_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_third.png'),
          require('../../assets/Study_application/icon_selected/ic_third_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_fourth.png'),
          require('../../assets/Study_application/icon_selected/ic_fourth_selected.png')
        ],
        [
          require('../../assets/Study_application/icon/ic_fifth.png'),
          require('../../assets/Study_application/icon_selected/ic_fifth_selected.png')
        ]
      ],
      thisTime: this.selectedTime
    }
  },
  methods: {
    getImage: function (classNum) {
      if (this.selectedClass === classNum) {
        return this.classImages[classNum][1]
      } else {
        return this.classImages[classNum][0]
      }
    },
    classSelect: function (val) {
      this.$emit('update:selectedClass', val)
    }
  },
  props: {
    selectedClass: {type: Number},
    selectedTime: {type: Number}
  },
  watch: {
    thisTime: function (val) {
      this.$emit('update:selectedTime', val)
    }
  }
}
</script>

<style scoped>
#extension-apply-left-wrapper {
  background-color: rgb(255, 188, 71);
  height: 100%;
  width: 100%;
}

#button-table {
  text-align: center;
  border-collapse: separate;
  border-spacing: 60px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}

.class-button {
  width: 120px;
  height: 120px;
  cursor: pointer;
}

.class-button > img {
  width: 130px;
  height: 130px;
}

#toggle-button {
  width: 100px;
  height: 40px;
  border-radius: 30px;
  overflow: hidden;
}

#toggle-slider {
  width: 160px;
  height: 40px;
  background-color: rgb(188, 188, 188);
}

#toggle-slider > div, #toggle-slider > label {
  float: left;
}

#toggle-slider {
  position: relative;
  left: 0;
  transition: left .8s;
  color: white;
  line-height: 40px;
  text-align: center;
}

#toggle-time:checked + #toggle-slider{
  left: -60px;
}

#toggle-text11 {
  width: 60px;
  height: 40px;
}

#toggle-switch {
  width: 40px;
  height: 40px;
  border: 5px solid rgb(188, 188, 188);
  background-color: white;
  border-radius: 50%;
}

#toggle-text12 {
  width: 60px;
  height: 40px;
}
</style>


