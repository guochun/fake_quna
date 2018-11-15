<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arrow-icon">&#xe600;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables.styl'
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        display block
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #fff;
      color #ccc
      border-radius .1rem
      height .64rem
      margin-left .2rem
      margin-top .12rem
      padding-left .2rem
      line-height .64rem
    .header-right
      width 1.24rem
      float left
      text-align center
      .arrow-icon
        font-size .24rem
        margin-left -.04rem

</style>
