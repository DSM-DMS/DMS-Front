<template>
<div id="container">
    <table id="table-content">
        <thead class="table-head">
            <tr>
                <th id="num">#</th>
                <th id="content-title">제목</th>
                <th id="writer">작성자</th>
                <th class="icons">수정</th>
                <th class="icons">삭제</th>
                <th class="icons">프리뷰</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="post in posts">
                <td>{{ number }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.author }}</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
const qs = require('query-string')

export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created: function () {
    this.fetchTable()
  },
  methods: {
    deleteTable: function (id) {
      this.$axios.delete('/admin/notice', qs.stringify({
        table_id: id
      }),
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response.status === 200) {
          this.fetchTable()
        } else if (response.status === 403) {
          alert('삭제에 실패했습니다')
        }
      })
      .catch(ex => {
        console.log('ERROR!!!!', ex)
        alert('삭제에 실패했습니다')
      })
    },
    fetchTable: function () {
      let self = this
      self.$axios.get('/notice', {
        headers: {
          'Authorization': 'JWT ' + this.$getCookie('JWT')
        }
      })
    .then(response => {
      self.posts = response.data
    })
    .catch(e => {
      console.log('error :' + e)
    })
    }
  }
}
</script>

<style scoped>
#container {
    justify-content: center;
    align-items: center;
    width: 100%;
}

#table-content {
    border-collapse: collapse;
    border-spacing: 0px;
    width: 100%;
    height: 95%;
    font-size: 20px;
    text-align: left;
}

.table-head {
    float: left;
    width: 100%;
}

.table-head th {
    padding-bottom: 10px;
    border-bottom: 3px solid #675094; 
    color: #675094;
}

.table-head tr{
    display:table;
    width: 100%;
    margin-bottom: 20px;

}

#table-content tr td:not(:nth-child(2)), #table-content tr th:not(:nth-child(2)){
    width: 15%;
}

#table-content tr td:nth-child(2), #table-content tr th:nth-child(2) {
    width: 25%;
}

#table-content tbody{
    overflow:auto;
    float:left;
    width:100%;
    height:80%
}

#table-content tbody::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: lightgray;
}

#table-content tbody::-webkit-scrollbar
{
	width: 12px;
	background-color: lightgray;
}

#table-content tbody::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #fff;
}

#table-content tbody>tr{
    display:table;
    width:100%;
    height: 20%;
}

.icon {
    width: 35px;
    height: 35px;
}
</style>
