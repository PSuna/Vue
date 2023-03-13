import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'

export default new VueRouter({
  // hash => # + 경로 (server로 요청을 보내지 않고 페이지 이동)
  // url의 #뒤에 있는 내용은 읽을수가 없습니다.

  // history => #을 제외하고 SPA 구현하기 위한 모드
  // mode default값 : hash
  mode : 'hash',
  routes : [
    {
      path : '/',
      name : 'main',
      component : main
    },
    //boardList
    {
      path : '/boardList',
      name : 'boardList',
      component : myBoardList
    },
    //boardRead
    {
      // 이동할때 item이라는 매개변수를 붙여서 넘어갈거임 따라서 myBoardRead.js가 item을 읽어가야함
      path : '/boardRead/:item', 
      name : 'boardRead',
      component : myBoardRead,
      // route 옵션에서 props로 데이터를 받아올 수 있도록 설정
      // props 속성에 true 값을 넘기면 route params 값을 컴포넌트 props 로 받아올 수 있습니다.
      props : true 
    },
    //boardWrite
    {
      path : '/boardWrite',
      name : 'boardWrite',
      component : myBoardWrite
    }
  ]
});
