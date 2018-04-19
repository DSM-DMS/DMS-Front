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
      <tr v-for="(post,index) in posts" :key="index">
        <td>{{ index+1 }}</td>
        <td @click="lookUpPost(post.id)" class="hoverItems">{{ post.title }}</td>
        <td>{{ post.author }}</td>
        <td><img @click="modifyTable(post.id)" class="icon hoverItems" src="../../../assets/icon/ic_edit.png" alt=""></td>
        <td><img @click="deleteTable(post.id)" class="icon hoverItems" src="../../../assets/icon/ic_delete.png" alt=""></td>
        <td><img @click="previewTable(post.id)" class="icon hoverItems" src="../../../assets/icon/ic_preview.png" alt=""></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>

export default {
  created: function () {
    this.fetchTable()
  },
  props: ['url'],
  data: function () {
    return {
      posts: [],
      errors: [],
      post_content: {},
      modify_post: {
        title: [],
        content: []
      }
    }
  },
  methods: {
    fetchTable: function () {
      let self = this
      self.$axios.get('/' + this.url, {
        headers: {
          'Authorization': 'JWT ' + this.$getCookie('JWT')
        }
      })
    .then(response => {
      self.posts = response.data.reverse()
    })
    .catch(e => {
      console.log('error :' + e)
    })
    },
    modifyTable: function (postId) {
      this.$axios.get('/' + this.url + '/' + postId, {
        headers: {
          'Authorization': 'JWT ' + this.$getCookie('JWT')
        }
      })
      .then(response => {
        this.post_content = response.data
        this.$emit('modify-table', postId, this.post_content.title, this.post_content.content)
      })
      .catch(e => {
        console.log('ERROR ==> ' + e)
      })
    },
    deleteTable: function (id) {
      if (confirm('삭제하시겠습니까?')) {
        var tableId = new FormData()
        tableId.append('id', id)
        this.$axios({
          method: 'DELETE',
          url: '/admin/' + this.url,
          data: tableId,
          headers: {'Authorization': 'JWT ' + this.$getCookie('JWT')}
        })
        .then(response => {
          if (response.status === 200) {
            this.fetchTable()
          } else if (response.status === 204) {
            alert('존재하지 않는 게시글입니다')
          }
        })
        .catch(ex => {
          alert('삭제에 실패했습니다')
        })
      }
    },
    lookUpPost: function (postId) {
      this.$emit('lookUp', postId)
    },
    previewTable: function (postId) {
      let formData = new FormData()
      formData.append('id', postId)
      this.$axios.post('/admin/preview/' + this.url, formData,
        {
          headers: {
            Authorization: 'JWT ' + this.$getCookie('JWT')
          }
        })
      .then(response => {
        if (response === 201) {
          console.log('프리뷰 설정 성공')
        }
      })
      .catch(e => {
        console.log('ERROR ==> ' + e)
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
    width: 10%;
}

#table-content tr td:nth-child(2), #table-content tr th:nth-child(2) {
    width: 50%;
}

#table-content tbody{
    overflow-y:auto;
    float:left;
    width:100%;
    height:80%
}

#table-content tbody::-webkit-scrollbar-track
{
  border-radius: 10px;
	background-color: white
}

#table-content tbody::-webkit-scrollbar
{
	width: 10px;
	background-color: white;
}

#table-content tbody::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: gray
}

#table-content tbody>tr{
    display:table;
    width:100%;
    height: 20%;
}

.hoverItems:hover {
  cursor: pointer;
}

.icon {
    width: 35px;
    height: 35px;
}
</style>