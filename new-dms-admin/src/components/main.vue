<template>
<div id="main-page">
    <div class = "top">
        <div class = "logo"></div>
        <div id = "admin-account">
            <div class = "admin-create" @click="showAdminAccount()"><div class = "create-icon"></div>관리자 계정 생성</div>
            <div class = "admin-delete" @click="showAdminDelete()"><div class = "delete-icon"></div>관리자 계정 삭제</div>
            <div class = "student-delete" @click="showStudentDelete()"><div class="delete-icon"></div>학생 계정 삭제</div>
        </div>
    </div>
    <div id="contents">
        <div class = "download-contents">
            <div class = "select-icon">
                <div class = "select-inner">
                    <div class = "download-logo"></div>
                    Download
                </div>
            </div>
            <div class = "download-body">
                <div class = "select-box" v-for="item in downloadList" :key = "item.id" >
                    <div class = "select-content" @click='selectMode(item.title)'>
                        <div class = "select-box-logo"><img :src="item.logo"/></div>
                        <div class = "select-title">{{item.title}}</div>
                        <div class = "select-description">{{item.description}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "Management-contents">
            <div class = "select-icon">
                <div class = "select-inner">
                    <div class = "management-logo"></div>
                    Management
                </div>
            </div>
            <div class = "management-body">
                <div class = "select-box" v-for="item in manageList" :key = "item.id" >
                    <div class = "select-content" @click='selectMode(item.title)'>
                        <div class = "select-box-logo"><img :src="item.logo"/></div>
                        <div class = "select-title">{{item.title}}</div>
                        <div class = "select-description">{{item.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <admin-account v-if="isAdminAccount" @close="isAdminAccount = false" />
    <admin-delete v-if="isAdminDelete" @close="isAdminDelete = false" />
    <student-delete v-if="isStudentDelete" @close="isStudentDelete = false" />
</div>
</template>

<script>
import adminAccount from './adminAccount'
import adminDelete from './adminDelete'
import studentDelete from './studentDelete'
const fileSaver = require('file-saver')

export default {
  name: 'index',
  components: {
    adminAccount,
    adminDelete,
    studentDelete
  },
  data: function () {
    return {
      isAdminAccount: false,
      isAdminDelete: false,
      isStudentDelete: false,
      downloadList: [
        {
          logo: require('../assets/icon/ic_stay.png'),
          title: '잔류신청',
          description: '잔류신청 결과를 다운로드 합니다.',
          event: 'hello'
        },
        {
          logo: require('../assets/icon/ic_goingout.png'),
          title: '외출신청',
          description: '외출 신청 결과를 다운로드 합니다.'
        },
        {
          logo: require('../assets/icon/ic_broken.png'),
          title: '시설고장',
          description: '시설 고장 목록을 조회 합니다.'
        },
        {
          logo: require('../assets/icon/ic_eleven.png'),
          title: '11시연장',
          description: '연장 신청 목록을 다운로드 합니다.'
        },
        {
          logo: require('../assets/icon/ic_twelve.png'),
          title: '12시연장',
          description: '연장 신청 목록을 다운로드 합니다.'
        }
      ],
      manageList: [
        {
          logo: require('../assets/icon/ic_notice.png'),
          title: '공지사항',
          description: '공지사항을 작성, 관리합니다.',
          event: 'helo'
        },
        {
          logo: require('../assets/icon/ic_rule.png'),
          title: '기숙사규칙',
          description: '기숙사 규칙을 작성, 관리합니다. ',
          event: 'helo'
        },
        {
          logo: require('../assets/icon/ic_question.png'),
          title: '자주하는 질문',
          description: '자주하는 질문을 작성, 관리합니다.',
          event: 'helo'
        },
        {
          logo: require('../assets/icon/ic_poll.png'),
          title: '설문조사',
          description: '설문조사를 작성, 관리합니다.',
          event: 'helo'
        }
      ]
    }
  },
  methods: {
    changeView: function (view) {
      this.$router.push(view)
    },
    showAdminAccount: function () {
      this.isAdminAccount = !this.isAdminAccount
    },
    showAdminDelete: function (event) {
      this.isAdminDelete = !this.isAdminDelete
    },
    showStudentDelete: function (event) {
      this.isStudentDelete = !this.isStudentDelete
    },
    selectMode: function (mode) {
      if (mode === '잔류신청') {
        this.stay()
      }
      if (mode === '외출신청') {
        this.goingout()
      }
      if (mode === '시설고장') {
        this.facility()
      }
      if (mode === '11시연장') {
        this.extension_11()
      }
      if (mode === '12시연장') {
        this.extension_12()
      }
      if (mode === '공지사항') {
        this.changeView('/post/notice')
      }
      if (mode === '기숙사규칙') {
        this.changeView('/post/rule')
      }
      if (mode === '자주하는 질문') {
        this.changeView('/post/faq')
      }
      if (mode === '설문조사') {
        this.changeView('survey')
      }
    },
    stay: function (event) {
      this.$axios({
        methods: 'GET',
        url: '/v2/admin/excel/stay',
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        }
      })
      .then(res => {
        let blob = new Blob([res.data], {type: res.headers['content-type']})
        fileSaver.saveAs(blob, '잔류자명단.xlsx')
      })
    },
    goingout: function (event) {
      this.$axios({
        methods: 'GET',
        url: '/v2/admin/excel/goingout',
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        },
        responseType: 'arraybuffer'
      })
      .then(res => {
        let blob = new Blob([res.data], {type: res.headers['content-type']})
        fileSaver.saveAs(blob, '외출자명단.xlsx')
      })
    },
    facility: function () {
      this.changeView('facility')
    },
    extension_11: function (event) {
      this.$axios({
        methods: 'GET',
        url: '/v2/admin/excel/extension/11',
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        },
        responseType: 'arraybuffer'
      })
      .then(res => {
        let blob = new Blob([res.data], {type: res.headers['content-type']})
        fileSaver.saveAs(blob, '11시연장.xlsx')
      })
    },
    extension_12: function (event) {
      this.$axios({
        methods: 'GET',
        url: '/v2/admin/excel/extension/12',
        headers: {
          Authorization: 'JWT ' + this.$getCookie('JWT')
        },
        responseType: 'arraybuffer'
      })
      .then(res => {
        let blob = new Blob([res.data], {type: res.headers['content-type']})
        fileSaver.saveAs(blob, '12시연장.xlsx')
      })
    }
  }
}
</script>
<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  html, body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
  }

  /* 전체 페이지 */
  
  #main-page {
      width: 100vw;
      height: 100vh;
      position: relative;
      overflow: auto;
      background-image: url('../assets/background/bg_notice.png');
      background-size: cover;
      background-repeat: no-repeat;
  }


/* 로고 + 관리자 계정 박스 (탑바) */

  .top {
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
  }

/* 로고 */

  .logo {
    background-image: url('../assets/logo/logo.png');
    position: absolute;
    background-size: 80% 80%;
    width: 148px;
    height: 50px;
    background-repeat: no-repeat;
    margin-left: 50px;
  }


/* 관리자 계정 박스  */

  #admin-account {
    position: absolute;
    right: 30px;
    display: flex;
  }

  /* 관리자 계정 생성  */

  .admin-create {
      width:200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
  }

  .admin-create > .create-icon {
      background-image: url('../assets/icon/ic_return_account.png');
      background-size: 100% auto;
      width: 25px;
      height: 25px;
      margin-right: 15px;
      background-repeat: no-repeat;
  }

  /* 계정 초기화  */

  .admin-delete, .student-delete {
      width:200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      margin-left: 20px;
  }
  

  .admin-delete > .delete-icon {
      background-image: url('../assets/icon/ic_create_account.png');
      background-size: 100% auto; 
      width: 25px; 
      height: 25px;
      margin-right: 15px;
      background-repeat: no-repeat;
  }

   .student-delete > .delete-icon {
     background-image: url('../assets/icon/ic_create_account.png');
      background-size: 100% auto; 
      width: 25px; 
      height: 25px;
      margin-right: 15px;
      background-repeat: no-repeat;
   }


/* 다운로드 */

  .download-contents {
        margin-bottom: 50px;
    }

  .select-icon {
      width: 250px;
      height: 60px;
      position: relative;
      left: 0;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px;
  }

  .select-icon::after {
      width: 250px;
      border-radius: 70px;
      height: 60px;
      content: "";
      position: absolute;
      background-color: white;
      opacity: 0.5;
      z-index: 1;
  }

  .select-inner {
      position: absolute;
      z-index: 2;
      color: #675094;
      font-weight: bold;
      font-size: 27px;
      letter-spacing: -1px;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .download-logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-image: url('../assets/icon/ic_download2.png');
      background-size: cover;
      background-repeat: no-repeat;
  }


  .download-body {
      width: 1300px;
      height: 235px;
      overflow-x: scroll;
      overflow-y: hidden;
      align-items: center;
      white-space: nowrap;
      position: relative;
      display: inline-block;
      /* display: inline; */
  }

 /* 박스 */
  .select-box {
      width: 300px;
      height: 200px;
      border-radius: 8px;
      background-color: white;
      margin: 10px;
      white-space: nowrap;
      display: inline-block;
      position: relative;
  }

  .select-content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
  }

  .select-box-logo > img {
      width: 70px;
      height: 70px;
  }

  .select-title {
      font-size: 28px;
      font-weight: bold;
  }

  .select-description {
      font-size: 14px;
      font-weight: bold;
  }

  /* management */

  .management-logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-image: url('../assets/icon/ic_setting2.png');
      background-size: cover;
      background-repeat: no-repeat;
  }

  .management-body {
      width: 1300px;
      height: 235px;
      overflow: hidden;
      align-items: center;
      white-space: nowrap;
      display: inline-block;

  }

  #contents {
      width: 100%;
      height: calc(100% -150px);
      position: absolute;
  }
  
</style>
