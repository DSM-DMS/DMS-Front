<template>
  <div>
    <div id="point-title">
        상벌점 조회
    </div>
    <div id="point-list">
      <div class="point" :class="point.pointType ? 'plus' : 'minus'"  v-for="(point, index) in points" :key="index">
        <div class="point-reason">
          <div>
            {{ dateFormatting(point.time) }}
          </div>
          <div>
            {{ point.reason }}
          </div>
        </div>
        <div class="point-value">
          {{ pointFormatting(point.point, point.pointType) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PointCheck',
  data: function () {
    return {
      points: [
      ]
    }
  },
  methods: {
    dateFormatting: function (date) {
      let formatted = date.split('-')
      return formatted[0] + '년 ' + formatted[1] + '월 ' + formatted[2] + '일'
    },
    pointFormatting: function (point, plus) {
      return plus ? '+' + point + '점' : '-' + point + '점'
    }
  },
  mounted: function () {
    this.$http.get('/student/info/point-history', {
      headers: {
        Authorization: 'JWT ' + this.$cookie.getCookie('JWT')
      }
    })
    .then(response => {
      if (response.status === 200) {
        this.points = response.data.reverse()
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
#point-title {
  color: #589ac6;
  width: 100%;
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

#point-list {
  width: 90%;
  margin: auto;
  height: 400px;
  margin: 30px;
  overflow-y: scroll;
  font-weight: normal;
}

/* Track */
#point-list::-webkit-scrollbar-track {
  background: #e3e3e3; 
  border-radius: 15px;
}
 
/* Handle */
#point-list::-webkit-scrollbar-thumb {
  background: #589ac6; 
  border-radius: 15px;
}

/* Handle on hover */
#point-list::-webkit-scrollbar-thumb:hover {
  background: #589ac6;   
}

.point {
  width: 90%;
  height: 80px;
  padding: 5px 30px 5px 30px;
  border-radius: 15px;
  margin: 20px;
}

.point-reason {
  float: left;
  height: 100%;
}

.point-reason > div {
  height: 50%;
  font-size: 18px;
  line-height: 33px;
  color: #666666;
}

.point-value {
  float: right;
  height: 100%;
  font-size: 35px;
  line-height: 66px;
}

.minus {
  border: 2px solid #fa3522;
  color: #fa3522;
}

.plus {
  border: 2px solid #3795d1;
  color: #3795d1;
}
</style>

