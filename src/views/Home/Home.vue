<template>
<div>
  <home-header :city="city"></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons :iconList="iconList" ></home-icons>
  <home-listen-trance></home-listen-trance>
  <home-recommend :recommendList="recommendList"></home-recommend>
  <home-guess-like :guessLikeList="guessLikeList"></home-guess-like>
</div>
</template>

<script>
import HomeHeader from './Components/Header'
import HomeSwiper from './Components/Swiper'
import HomeIcons from './Components/Icons'
import HomeListenTrance from './Components/ListenTrance'
import HomeRecommend from './Components/Recommend'
import HomeGuessLike from './Components/GuessLike'

export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      guessLikeList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeListenTrance,
    HomeRecommend,
    HomeGuessLike
  },
  methods: {
    getHomeInfo () {
      this.$axios.get('/api/home')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (result) {
      const data = result.data.data
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.guessLikeList = data.guessLikeList
    }

  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
