<template>
  <div>
      <div class="survey-list-thead">
        <span style="display : inline-block; width : 23vw;">제목</span>
        <span style="display : inline-block; width : 31vw;">기간</span>
        <span style="display : inline-block; width : 10.5vw;">삭제</span>
        <span style="display : inline-block; width : 5vw">다운로드</span>
      </div>
      <div class="survey-list-tbody">
        <div class="survey-list-tr">
            <span class="survey-list-title">DMS 개발 테스트</span>
            <span class="survey-list-term">2017.12.26 ~ 2017.12.30</span>
            <span class="survey-list-delete"><img src="../../assets/icon/ic_delete.png" class="survey-list-btn"></span>
            <span class="survey-list-download"><img src="../../assets/icon/ic_download.png" class="survey-list-btn"></span>
        </div>
        <!-- <div class="survey-list-tr" v-for="surveyList in surveyLists">
            <span class="survey-list-title">{{ surveyList.title }}</span>
            <span class="survey-list-term">{{ surveyList.start_date }} ~ {{ surveyList.end_date }}</span>
            <span class="survey-list-delete"><img src="../../assets/icon/ic_delete.png" class="survey-list-btn" @click="deleteSurvey(surveyList.id)"></span>
            <span class="survey-list-download"><img src="../../assets/icon/ic_download.png" class="survey-list-btn"></span>
        </div> -->
      </div>
  </div>
</template>

<script>

export default {
  name: 'surveyList',
  data: function () {
    return {
      surveyLists: []
    }
  },
  created: function () {
    this.fetchSurveyList()
    // this.$axios.get('/survey', {
    //   headers: {
    //     Authorization: 'JWT 1312312312312'
    //   }
    // })
    // .then((response) => {
    //   this.surveyLists = response.data
    // })
  },
  methods: {
    deleteSurvey: function (id) {
      this.$axios.delete('/admin/survey', {
        survey_id: id
      },
        {
          headers: {
            Authorization: 'JWT 1312312312312'
          }
        })
      .then((response) => {
        this.fetchSurveyList()
      })
      .catch((ex) => {
        console.log('ERROR!!!!', ex)
        alert('삭제에 실패했습니다')
      })
    },
    fetchSurveyList: function () {
      this.$axios.get('/survey', {
        headers: {
          'Authorization': 'JWT 1312312312312'
        }
      })
      .then((response) => {
        this.surveyLists = response.data
      })
      .catch((ex) => {
        console.log('ERROR!!!! : ', ex)
      })
    }
  }
}
</script>
<style scoped>
.survey-list-tbody{
    height: 50vh;
    overflow-y: scroll;
    margin-top: 2vh;
}
.survey-list-tr {
    display: flex;
    align-items: center;
    margin-top:1vh;
    margin-bottom:3.5vh;
}
.survey-list-title {
    font-weight: bold;
    display: inline-block;
    width: 23vw;
}
.survey-list-term {
    font-weight: bold;
    display: inline-block;
    width: 31vw;
}
.survey-list-delete {
    font-weight: bold;
    display: inline-block;
    width: 11.5vw;
}
.survey-list-download {
    font-weight: bold;
    display: inline-block;
    width: 5vw;
}
.survey-list-thead {
    color: #675094;
    font-weight: bold;
    border-bottom: 1px solid grey;
    padding-bottom: 3vh;
    width:95%;
}
.survey-list-table {
    width : 100%;
    height: 30vh;
    overflow-y: scroll;
}
.survey-list-btn {
    width: 3vw;
}
.underbar-survey-list {
    border-bottom: 1px solid grey;
}
.survey-list-tbody::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: white
}

.survey-list-tbody::-webkit-scrollbar
{
	width: 10px;
	background-color: white;
}

.survey-list-tbody::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: gray
}

</style>
