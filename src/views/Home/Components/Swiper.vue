<template>
  <div class="swiper-outer-wrapper">
    <swiper :options="swiperOption">
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

      },
      swiperList: [
        {
          id: '0001',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/68/c66e4cde1ee62602.jpg_750x200_e9b97acd.jpg'
        },
        {
          id: '0002',
          url: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        },
        {
          id: '0003',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/ec/f6967f24afeef202.jpg_750x200_9415719f.jpg'
        },
        {
          id: '0004',
          url: 'http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg'
        },
        {
          id: '0005',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/d4/7fa0b173c269f802.jpg_750x200_b8d88f51.jpg'
        },
        {
          id: '0006',
          url: 'http://img1.qunarzz.com/piao/fusion/1811/ce/77e115fea8f99102.jpg_750x200_a2d0fcd2.jpg'
        },
        {
          id: '0007',
          url: 'http://img1.qunarzz.com/piao/fusion/1809/ae/7518c2fbc1415202.jpg_750x200_09bbe391.jpg'
        }
      ]
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
