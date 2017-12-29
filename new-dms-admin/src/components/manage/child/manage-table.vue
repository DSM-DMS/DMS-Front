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

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>

            <tr>
                <td>1</td>
                <td>제목</td>
                <td>ㅅㄱㅅ</td>
                <td><img class="icon" src="../../../assets/icon/ic_edit.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_delete.png" alt=""></td>
                <td><img class="icon" src="../../../assets/icon/ic_preview.png" alt=""></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created: function () {
    let self = this
    console.log('Hello')
    this.$axios.get('http://dsm2015.cafe24.com:3001/notice')
      .then(function (response) {
        self.posts = response.data
      })
      .catch(function (e) {
        console.log(e)
      })
    console.log(this.posts)
  },
  computed: {
    reverse: function () {
      return this.posts.reverse()
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
    margin: 0 auto;
    margin-top: 40px;
    border-collapse: collapse;
    border-spacing: 0px;
    width: 90%;
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
