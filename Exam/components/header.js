export default{ // header.js에 있는 컴포넌트를 내보내겠다는 의미
  template : `
    <header>
     <h2>영화 검색 사이트</h2>
        <p>영화 검색 (오늘 날짜 : {{today}})</p>

        <!-- board.json 파일 읽어오는 부분 -->
        <!-- ajax, fetch 파일 읽고 화면 출력 -->
        <!-- v-on:change="loadData($event)" -->
        <input type="date" v-model="todayDate">

        <!-- 화면에 보여지는 게시글 json파일로 다운로드 -->
        <button v-on:click="movieList">검색</button>
    </header>`,

    props : ['parentData'], // 부모가 가진 모든 데이터를 가져옴
    data : function(){ // data : 데이터를 들고있는 함수 , 컴포넌트에서 data는 함수여야함
        return {
          // 변수 : 값
          todayDate : ''
        }
      },
    methods : {
       movieList : function(){ 
              //console.log(this.todayDate); 
              let y = this.todayDate.substr(0, 4); // year
              let m = this.todayDate.substr(5, 2); // month
              let d = this.todayDate.substr(8, 2); // day
              let today = y+m+d;
              //console.log(today);

               fetch("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+ today)
               .then(response => response.json())
               .then(data => { // data : board.json파일을 읽어온것
                this.parentData.dataArray = data.boxOfficeResult; // 부모가 가진 모든 데이터리스트중에서 dataArray를 가져와서 쓴다는말
                //console.log( this.parentData.dataArray);
                this.$emit('update:parentData', this.parentData); // 자식에서 부모컴포넌트로 변경된 데이터들을 전달 = 동기화

                 //<router-link to="/boardList"></router-link>
                 // +
                 // click 까지 진행
                 // = $router.push 로 함축할수있음
                 this.$router.push({name:'movieList'}); // location.href 와 비슷한 기능을함
                })
                .catch(err => console.log(err));
      }
    },
    computed :{
      today : function(){
        let date = new Date(); // 현재 날짜 및 시간
        let year = date.getFullYear();
        let month = new String(date.getMonth() + 1);
        let day = new String(date.getDate());
        //if (month.length == 1) month = "0" + month;
        //if (day.length == 1) day = "0" + day;
        let today = year +"년 " + month + "월 " + day + "일"; // 현재날짜
        return today;
      }
    }
}