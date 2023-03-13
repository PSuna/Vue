export default {
  template : `<div>
                <table id="list">
                    <tr>
                        <td style="width:50px;">글제목</td>
                        <td>{{ item.title }}</td>
                    </tr>
                    <tr style="height:300px;">
                        <td colspan="2">{{ item.content }}</td>
                    </tr>
                </table>
                
                <!--<button style="float:right;" v-on:click="boardList">목록</button>-->
                
                <router-link tag="button" style="float:right;" v-bind:to="{name:'boardList'}">목록</router-link>
            </div>`,
            // myBoardList.js에서
            // v-bind:to="{name : 'boardRead',params:{'item' : item}}"
            props : ['item'] // 파라미터로 넘긴값을 여기에 정의해야함
            
}