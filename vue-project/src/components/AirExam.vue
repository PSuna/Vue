<template>
  <div>
    <p>수도권 미세먼지 농도</p>
    <button @click="loadAir">데이터 호출</button>
    <hr>
    <table>
      <thead>
        <tr>
          <th>지역</th>
          <th>미세먼지 농도/ 대기질</th>
          <th>초미세먼지 농도/ 대기질</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in airArray" :key="index"> <!--item.IDEX_MVL-->
          <td>{{item.MSRSTE_NM}}</td>
          <td>{{item.PM10}} / {{item.PM10 <= 100 ? "좋음" : "나쁨"}}</td>
          <td>{{item.PM25}} / {{item.PM25 <= 35 ? "좋음" : "나쁨"}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default{ 
  data(){
    return{
      airArray : {}
    };
  },
  methods : {
    loadAir(){
     fetch("http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99")
     .then(res=>res.json())
     .then(data => {
      console.log(data)
      this.airArray = data.RealtimeCityAir.row;
      console.log(this.airArray);
     })
    }
  }
  // computed : {
  //   pm10Status(){
  //     if(this.airArray[this.key].PM10 <= 100){
  //       return "좋음";
  //     }else
  //       return "나쁨";
  //   },
  //   pm25Status(){
  //     if(this.airArray[this.key].PM25 <= 35){
  //       return "좋음";
  //     }else{
  //       return "나쁨";
  //     }
  //   }
  // }
}
</script>