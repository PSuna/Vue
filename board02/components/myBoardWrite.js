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
            created : function(){
                // this.$parent : new Vue가 가지고있는(정의해놓은) 함수를 가져옴
                this.object = this.$parent.getParentData();
            },
            methods : {
                boardSave : function(){
                    let dataList = this.$parent.getParentData(); // 화면에 뿌려져있는 dataAray를 받아옴

                    let no = 1;
                    if(dataList.length != 0){
                        // 데이터가 총 3건 => length 3 => 배열[3] => 4번째
                        // length - 1
                        let index = dataList.length-1;
                        // index를 활용하여 마지막 게시판 no를 가지고 온 뒤 + 1 
                        // => 마지막 게시판 번호
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
                    this.$parent.setParentData(dataList); // 부모가 가지고있는 dataList를 바꿔줌
                    this.$router.push({name : 'boardList'}) // 해당 url(boardList)로 이동함
                    }
            }
}