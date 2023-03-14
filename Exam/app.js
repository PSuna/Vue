// 단일 파일 컴포넌트 = 부모 컴포넌트 역할을 할것임
// 헤더는 고정
import myHeader from './components/header.js' // 공통부분은 여기에 포함

// ★ router로 옮겨서 사용 ★
import router from './router/router.js'

 // this.$data : 부모가 가진 모든 data를 자식쪽에서 가져옴 
 //부모의 데이터에다가 불러온 데이터를 저장해야하므로 sysnc를 씀 , = 자식과 부모의 데이터가 동기화
let template = `
    <div>
    
        <my-header v-bind:parentData.sync="this.$data"></my-header>

        <!-- router가 렌더링 될 부분 정의-->
        <!-- ★★ 각 컴포넌트들이 공통적으로 사용할 부분을 정의 ★★ -->
        <router-view></router-view>

    </div>`

    // Vue 객체를 정의
    new Vue({
        el : '#app',
        template : template,
        data : {
            dataArray : {}     // 파일에서 읽은 데이터
        },
        components : {
            // 공통으로 사용할 기능을 headerComponent로 이동
            'my-header' : myHeader
        },
        methods : {
          // data를 주고 받을 수 있도록 데이터 관련 함수
          getParentData : function(){ // getter
            return this.dataArray['dailyBoxOfficeList']
          },
          setParentData : function(dataList){ // setter
            this.dataArray['dailyBoxOfficeList'] = dataList
          }
        },
        router // 라우터
    })
    