<template>
  <div class="guess-likes">
    <div class="guess-like-title">
      <i></i>
      <span>猜你喜欢</span>
    </div>
    <div class="guess-like-list">
        <div class="guess-like-item" v-for="item of  guessLikeList" :key="item.id">
          <div class="like-img-wrapper">
              <img  class="guess-like-img" :src="item.url">
          </div>
          <div class="guess-like-info" >
            <div class="guess-like-name">{{item.content}}</div>
            <div class="guess-like-price">
              <span>¥{{item.price}}</span>
              起
            </div>
            <div class="guess-like-pos">{{item.pos}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGuessLike',
  props: {
    guessLikeList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .guess-like-title
    line-height 0.94rem
    margin-left .2rem
    span
      font-size .35rem
  .guess-like-item
    display flex
    height 0
    overflow hidden
    padding-bottom 2.74rem
    border-bottom  1px solid  rgba(210,210,210,.5)
    display flex
    margin-top .3rem
  .like-img-wrapper
    margin-left 0.34rem
    .guess-like-img
      width 100px
  .guess-like-info
    flex 1
    margin-left .24rem
    .guess-like-name
      margin-top .24rem
      font-size .40rem
    .guess-like-price
        margin-top .32rem
        font-size .24rem
       span
        font-size .35rem
        color #ff8300
    .guess-like-pos
       margin-top .24rem
       margin-right .24rem
       text-align end
</style>
