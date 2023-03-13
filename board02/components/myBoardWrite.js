export default{
   template : `<div>
                <table id="list">
                    <tr>
                        <td>글제목</td>
                        <td><input type="text" style="width:90%; " v-model="title"></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea style="width:100%;" v-model="content"></textarea>
                        </td>
                    </tr>     
                </table>
                <!--<button style="float:right;" v-on:click="boardList">목록</button>-->

                <router-link tag="button" style="float:right;" v-bind:to="{name:'boardList'}">목록</router-link>
                <button style="float:right;" v-on:click="boardSave">저장</button>
              </div>`,
            data : function(){
                return {
                    title : '',
                    content : '',
                    object : []
                }
            },
            // 컴포넌트가 생성 될 때, 부모 컴포넌트의 데이터를 얻어 온다.
            created : function(){
                // this.$parent : new Vue가 가지고있는(정의해놓은) 함수를 가져옴
                this.object = this.$parent.getParentData(); // getter를 통해 부모 컴포넌트의 데이터를 가져옴
            },
            methods : {
                boardSave : function(){

                    // 화면에 뿌려져있는 dataAray를 받아옴 = getter를 통해 부모 컴포넌트의 데이터를 가져옴
                    let dataList = this.$parent.getParentData();

                    let no = 1;
                    if(dataList.length != 0){ // 0건이 아니라면

                        // ex) 데이터가 총 3건 => length 3 => 배열[3] => 4번째
                        // index는 0부터 시작이므로 => length - 1
                        // 데이터 리스트에 저장되어있는 가장 마지막 인덱스의 값을 가져옴
                        let index = dataList.length-1; // index는 0부터 시작이므로

                        // index를 활용하여 마지막 게시판 no를 가지고 온 뒤 + 1 
                        // => 추가할 마지막 게시판 번호
                        no = parseInt(dataList[index].no)+1;
                    }

                    let boardInfo = {
                        'no' : no,
                        'title' : this.title,
                        'content' : this.content,
                        'view' : '1'
                    }

                    //this.dataArray['board'].push(boardInfo);
                    dataList.push(boardInfo);
                    this.$parent.setParentData(dataList); // setter를 통해 부모가 가진 dataArray 변수에 저장
                    
                    //<router-link to="/boardList"></router-link>
                    // +
                    // click 까지 진행
                    // = $router.push 로 함축할수있음
                    this.$router.push({name : 'boardList'}) // 해당 url(boardList)로 이동함
                }
            }
}