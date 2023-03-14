<template>
<div>
  <button @click="getData">데이터 호출</button>
  <table>
    <thead>
      <tr>
        <th>주소</th>
        <th>이미지</th>
        <th>홈페이지</th>
        <th>이름</th>
        <th>연락처</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in gimhaeArray" :key="item.idx">
        <td>{{item.address}}</td>
        <td><img :src=item.images[0] style="width:100px"></td>
        <td><a :href=item.homepage>{{item.homepage}}</a></td>
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>

export default{ 
  data(){
    return{
      gimhaeArray : {}
    };
  },
  methods : {
    getData(){
      fetch("https://cors-anywhere.herokuapp.com/https://www.gimhae.go.kr/openapi/tour/tourinfo.do")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.gimhaeArray = data.results;
          console.log(this.gimhaeArray);
        }).catch(err => console.log(err))
    }
  }
}
</script>