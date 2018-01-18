<template>
  <div id="stay-apply-left-wrapper">
    <div id="select-button-wrapper">
      <div class="stay-apply-button">
        <div v-for="button in buttons" class="stay-button" :key="button.id">
          <input type="radio" name="stay" :value="button.val" :id="button.id" v-model="staySelect" hidden>
          <label :for="button.id" class="stay-button-dot"></label>
          <div>{{ button.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StayApplyLeft',
  data: function () {
    return {
      buttons: [
        {
          id: 'stay-button-1',
          val: 1,
          text: '금요귀가'
        },
        {
          id: 'stay-button-2',
          val: 2,
          text: '토요귀가'
        },
        {
          id: 'stay-button-3',
          val: 3,
          text: '토요귀사'
        },
        {
          id: 'stay-button-4',
          val: 4,
          text: '잔류'
        }
      ]
    }
  },
  computed: {
    staySelect: {
      get: function () {
        return this.stay
      },
      set: function (val) {
        this.$emit('update:stay', Number(val))
      }
    }
  },
  mounted: function () {
    this.$http.get('/stay', {
      headers: {
        Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
      }
    })
    .then(response => {
      this.$emit('update:stay', response.data.value)
    }).catch(error => {
      console.log(error)
    })
  },
  props: {
    stay: {type: Number}
  }
}
</script>

<style scoped>
#stay-apply-left-wrapper {
  background-color: rgb(246, 99, 81);
  height: 100%;
  width: 100%;
}

#select-button-wrapper {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.stay-button {
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
}

.stay-button-dot {
  display: block;
  width: 20px;
  height: 20px;
  margin: auto;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
}

#select-button-wrapper input[type=radio][name=stay]:checked + label::before {
  display: block;
  content: '';
  border: 5px solid white;
  animation: selectAnimation .25s;
  padding: 15px;
  position: relative;
  left: calc(-100% / 2);
  top: calc(-100% / 2);
  border-radius: 50%;
}

@keyframes selectAnimation {
  from {
    padding: 40px;
    left: calc(-180%);
    top: calc(-180%);
  } to {
    padding: 15px;
    left: calc(-100% / 2);
    top: calc(-100% / 2);
  }
}

</style>
