<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img  class="icon-img-content" :src="item.url">
          </div>
          <p class="icon-desc">{{item.content}}</p>
      </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '0001',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          content: '景点门票'
        },
        {
          id: '0002',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          content: '深圳必游'
        },
        {
          id: '0003',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          content: '游乐场'
        },
        {
          id: '0004',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          content: '海洋馆'
        },
        {
          id: '0005',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          content: '动植物园'
        },
        {
          id: '0006',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          content: '泡温泉'
        },
        {
          id: '0007',
          url: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          content: '打卡圣地'
        },
        {
          id: '0008',
          url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          content: '一日游'
        },
        {
          id: '0009',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          content: '东部华侨城'
        },
        {
          id: '0010',
          url: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          content: '全部游玩'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables.styl'
  @import '~@/assets/css/mixins.styl'
  .icon
    width 100%
  .icons >>> .swiper-container
    height 0
    padding-bottom 3.7rem
    overflow hidden
  .icons >>> .swiper-pagination-bullet
    width  6px
    height 6px
  .icons >>> .swiper-pagination
    bottom 0px
  .icons >>> .swiper-pagination-bullet-active
    background rgba(0,175,190,.8)
  .icon
    position relative
    float left
    overflow hidden
    height 0
    width 25%
    padding-bottom 1.8rem
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom .6rem
    box-sizing border-box
    padding  .2rem
    .icon-img-content
      width 55px
      display block
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height .6rem
    line-height .6rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
