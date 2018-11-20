<template>
  <div class="swiper-outer-wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item .id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: '2000',
        loop: true

      }
    }
  },
  props: {
    swiperList: Array
  },
  computed: {
    showSwiper () {
      return this.swiperList.length > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  .swiper-outer-wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .swiper-outer-wrapper >>> .swiper-pagination-bullet
    width  6px
    height 6px
  .swiper-outer-wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 26.667%
    .swiper-img
      width 100%
</style>
