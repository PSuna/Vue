export default {
  template : `<div>
                <p style="width:700px;">제목 : {{ item.movieNm }}</p>
                <ul style="border : solid 1px black;">
                  <li>배우 : <span v-for="name in object.actors">{{name.peopleNm}}</span></li>
                  <li>감독 : <span v-for="name in object.directors">한글 - {{name.peopleNm}} / 영문 - {{name.peopleNmEn}}</span></li>
                  <li>장르 : <span v-for="genre in object.genres">{{genre.genreNm}}</span></li>
                  <li>상영시간 : {{object.showTm}}분</li>
                </ul>

                <router-link tag="button" style="float:right;" v-bind:to="{name:'movieList'}">목록</router-link>
            </div>`,
            
  props : ['item'], // 파라미터로 넘긴값을 여기에 정의해야함
  data : function(){
    return {
      object : {}
    }
  },
  created : function(){
      //console.log(this.item.movieCd);
      fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd='+this.item.movieCd)
               .then(response => response.json())
               .then(data => { // data : board.json파일을 읽어온것
                  this.object = data.movieInfoResult.movieInfo;
                  //console.log(this.object);
                })
                .catch(err => console.log(err));
  },
            
}
