<template>
  <div id="extension-apply-left-wrapper">
    <table id="button-table">
      <tr>
        <td class="class-button" @click="selectedClass = 0"><img :src="getImage(0)"></td>
        <td class="class-button" @click="selectedClass = 1"><img :src="getImage(1)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="selectedClass = 2"><img :src="getImage(2)"></td>
        <td class="class-button" @click="selectedClass = 3"><img :src="getImage(3)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="selectedClass = 4"><img :src="getImage(4)"></td>
        <td class="class-button" @click="selectedClass = 5"><img :src="getImage(5)"></td>
      </tr>
      <tr>
        <td class="class-button" @click="selectedClass = 6"><img :src="getImage(6)"></td>
        <td class="class-button" @click="selectedClass = 7"><img :src="getImage(7)"></td>
      </tr>
      <tr>
        <td colspan="2">
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
        ],
        [
          require('../../assets/Study_application/icon/ic_second.png'),
          require('../../assets/Study_application/icon_selected/ic_second_selected.png')
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
    applyCancel: function () {
      this.$http.delete('/student/apply/extension/' + this.selectedTime, {
        headers: {
          Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
        }
      })
      .then(response => {
        if (response.status === 200) {
          alert('연장학습 신청이 취소되었습니다.')
          this.$router.go(0)
        } else if (response.status === 204) {
          alert('연장학습 취소 가능 시간이 아닙니다.')
        }
      }).catch((err) => {
        console.log(err)
        alert('연장학습 신청 취소에 실패하였습니다.')
      })
    }
  },
  props: {
    applyStatus: { type: Object }
  },
  computed: {
    selectedClass: {
      get () {
        return this.applyStatus.selectedClass
      },
      set (val) {
        this.$emit('changeClassValue', val)
      }
    },
    selectedTime: {
      get () {
        return this.applyStatus.selectedTime
      }
    }
  }
}
</script>

<style scoped>
#extension-apply-left-wrapper {
  background-color: rgb(255, 188, 71);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#button-table {
  text-align: center;
  border-collapse: separate;
  border-spacing: 45px;
}

.class-button {
  width: 115px;
  height: 115px;
  cursor: pointer;
}

.class-button > img {
  width: 100%;
  height: 100%;
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

@media screen and (max-height: 800px) {
  .class-button {
    height: 90px;
    width: 90px;
  }

  #cancel-button {
    width: 90px;
  }

  #button-table {
    border-spacing: 25px;
  }
}
</style>


