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
      }
    }
  },
  props: {
    iconList: Array
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
