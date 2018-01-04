<template>
  <div>
      <div class="survey-list-thead">
        <span style="display : inline-block; width : 23vw;">제목</span>
        <span style="display : inline-block; width : 31vw;">기간</span>
        <span style="display : inline-block; width : 10.5vw;">삭제</span>
        <span style="display : inline-block; width : 5vw">다운로드</span>
      </div>
      <div class="survey-list-tbody">
        <div class="survey-list-tr" v-for="surveyList in surveyLists">
            <span class="survey-list-title">{{ surveyList.title }}</span>
            <span class="survey-list-term">{{ dateSplit(surveyList.start_date) }} ~ {{ dateSplit(surveyList.end_date) }}</span>
            <span class="survey-list-delete"><img src="../../assets/icon/ic_delete.png" class="survey-list-btn" @click="deleteSurvey(surveyList.id)"></span>
            <span class="survey-list-download"><img src="../../assets/icon/ic_download.png" class="survey-list-btn"></span>
        </div>
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
  },
  methods: {
    deleteSurvey: function (id) {
      var surveyId = new FormData()
      surveyId.append('survey_id', id)
      console.log(id)
      this.$axios({
        method: 'DELETE',
        url: '/admin/survey',
        data: surveyId,
        headers: {'Authorization': 'JWT ' + this.$getCookie('JWT')}
      })
      .then((response) => {
        if (response.status === 200) {
          this.fetchSurveyList()
        } else if (response.status === 204) {
          alert('삭제에 실패했습니다')
        }
      })
      .catch((ex) => {
        console.log('ERROR!!!!', ex)
        alert('삭제에 실패했습니다')
      })
    },
    fetchSurveyList: function () {
      this.$axios.get('/admin/survey', {
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        }
      })
      .then((response) => {
        this.surveyLists = response.data
      })
      .catch((ex) => {
        console.log('ERROR!!!! : ', ex)
      })
    },
    dateSplit: function (date) {
      return date.split(' ')[0]
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
  cursor: pointer;
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
