export default{
  template : `<div>
                <table id="list">
                    <!-- HEADER -->
                    <tr>
                        <th style="width:50px;">순위</th>
                        <th>영화제목</th>
                        <th style="width:200px;">누적 관객수</th>
                        <th style="width:200px;">개봉날짜</th>
                        <th></th>
                    </tr>
                    <!-- DATA LIST -->
                    <tr v-for="item in object" v-bind:key="item.movieCd">
                        <td>{{ item.rank }}</td>

                        <!-- name : movieDetail(url), 파라미터에다가 item을 넣어줌 -->
                        <router-link tag="td" v-bind:to="{name : 'movieDetail',params:{'item' : item}}">{{item.movieNm}}</router-link>
                        <td>{{ item.audiAcc}} 명</td>
                        <td>{{item.openDt}}</td>

                        <td><button v-on:click="movieDelete(item.movieCd)">삭제</button></td>
                    </tr>
                </table>
            </div>`,
        data : function(){
          return {
            object : [] // 배열
          }
        },
        // 컴포넌트가 생성 될 때, 부모 컴포넌트의 데이터를 얻어 온다. 
        // boardList Reading
        created : function(){
          // this.$parent : new Vue가 가지고있는(정의해놓은) 함수를 가져옴
          this.object = this.$parent.getParentData(); // getter를 통해 부모 컴포넌트의 데이터를 가져옴
        },
        methods : {
            movieDelete : function(movieCd){
                for(let i = 0; i < this.object.length; i++){
                  if(this.object[i].movieCd == movieCd){
                    this.object.splice(i,1); // 지워줌
                  }
                }
                this.$parent.setParentData(this.object); // 삭제한후 변경된 데이터를 setter를 통해 부모컴포넌트의 데이터를 변경
            }
        }
}