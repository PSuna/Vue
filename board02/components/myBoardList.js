export default{
  template : `<div>
                        <table id="list">
                            <!-- HEADER -->
                            <tr>
                                <th style="width:50px;">글번호</th>
                                <th>글제목</th>
                                <th style="width:50px;">조회수</th>
                                <th style="width:70px;"></th>
                            </tr>
                            <!-- DATA LIST -->
                            <!-- object : board.json 임 -->
                            <tr v-for="item in object" v-bind:key="item.no">
                                <td>{{ item.no }}</td>
                                <!--<td v-on:click="boardRead(item)">{{ item.title }}</td>-->
                                <!-- name : boardRead(url), 파라미터에다가 item을 넣어줌 -->
                                <router-link tag="td" v-bind:to="{name : 'boardRead',params:{'item' : item}}">{{item.title}}</router-link>
                                <td>{{ item.view }}</td>
                                <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
                            </tr>
                        </table>
                        <!-- <button style="float:right;" v-on:click="boardWrite">글쓰기</button>-->
                        <router-link tag="button" style="float:right;" v-bind:to="{name:'boardWrite'}">글쓰기</router-link>
                    </div>`,
        data : function(){
          return {
            object : []
          }
        },
        // 컴포넌트가 생성 될 때, 부모 컴포넌트의 데이터를 얻어 온다. 
        // boardList Reading
        created : function(){
          // this.$parent : new Vue가 가지고있는(정의해놓은) 함수를 가져옴
          this.object = this.$parent.getParentData();
        },
        methods : {
            boardDelete : function(no){
                for(let i = 0; i < this.object.length; i++){
                  if(this.object[i].no == no){
                    this.object.splice(i,1); // 지워줌
                  }
                }
                this.$parent.setParentData(this.object);
            }
        }
}