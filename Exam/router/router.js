import main from '../components/main.js'
import movieList from '../components/movieList.js'
import movieDetail from '../components/movieDetail.js'

export default new VueRouter({
  routes : [
    {
      path : '/',
      name : 'main',
      component : main
    },
    //movieList
    {
      path : '/movieList',
      name : 'movieList',
      component : movieList
    },
    //movieDetail
    {
      path : "/movieDetail",
      name : 'movieDetail',
      component : movieDetail,
      props : true
    }
  ]
})