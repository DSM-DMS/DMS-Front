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
          <div id="cancel-button" @click="applyCancel">취소</div>
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
      ]
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
    },
    applyCancel: function (val) {
      this.$http.delete('/extension/' + String(this.selectedTime), {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 200) {
          alert('연장학습 신청이 취소되었습니다.')
          this.$router.go(0)
        }
      }).catch(() => {
        alert('연장학습 신청 취소에 실패하였습니다.')
      })
    }
  },
  props: {
    selectedClass: {type: Number},
    selectedTime: {type: Number}
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
  transform: translate(-50%, -50%);
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

#cancel-button {
  height: 50px;
  width: 100px;
  margin: 0 auto;
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 8px;
  background-color: white;
  color: rgb(255, 188, 71);
  cursor: pointer;
}
</style>


