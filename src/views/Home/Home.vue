<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-listen-trance></home-listen-trance>
  <home-recommend></home-recommend>
</div>
</template>

<script>
import HomeHeader from './Components/Header'
import HomeSwiper from './Components/Swiper'
import HomeIcons from './Components/Icons'
import HomeListenTrance from './Components/ListenTrance'
import HomeRecommend from './Components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeListenTrance,
    HomeRecommend
  }
}
</script>

<style lang="stylus" scoped>

</style>
