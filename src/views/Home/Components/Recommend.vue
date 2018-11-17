<template>
  <div class="recommend">
    <div class="recommend-context">
      <div class="recommend-title">
        <span class="hot-list">
          <i class="iconfont hot-list-icon">&#xe65a;</i>
          本周热门榜单
        </span>
        <span class="all-list">
          全部榜单
          <span class="iconfont ">&#xe658;</span>
        </span>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hot-item">
            <img  class='hot-img' src="http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_250x250_4addcc26.jpg" alt="">
            <div class="hot-sale">深圳欢乐谷</div>
            <div class="hot-list-price"><span>¥87.5</span>起</div>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      swiperOption: {
        slidesPerView: "auto",
        scrollbar:'.swiper-scrollbar'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend >>> .swiper-slide
    margin-right .1rem
    width 2rem
  .recommend >>> .swiper-slide:first-child
    margin-left .2rem
  .recommend >>> .swiper-slide:last-child
    margin-right .2rem
  .recommend >>> .swiper-scrollbar
    bottom 0px
  .recommend >>> .swiper-container
    height 3.06rem
    overflow hidden
  .recommend >>> .swiper-scrollbar-drag
    background rgba(175,175,175,0.5)
  .recommend >>> .swiper-scrollbar
    height 3px
  .recommend
    height 220px
    display flex
    background #f5f5f5;
    align-items center
    .recommend-context
      height 200px
      background #fff
      width 100%
    .recommend-title
      height .94rem
      display flex
      justify-content space-between
      align-items center
      overflow hidden
      .hot-list-icon
        font-size .5rem
        color orange
      .hot-list
        font-size .32rem
        line-height .44rem
        margin-left .2rem
      .all-list
         margin-right .5rem
         font-size  .24rem
    .hot-item
      width 2rem
      height 0
      padding-bottom 2rem
      .hot-img
        width 100%
      .hot-sale
        text-align center
        margin-top .1rem
      .hot-list-price
        text-align center
        margin-top .1rem
        span
          color #ff8300

</style>
