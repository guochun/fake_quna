<template>
  <div class="listen-trance">
    <div class="listen-trance-item">
      <i class="iconfont item-icon">&#xe601;</i>
      <span>附近</span>
    </div>
    <div class="listen-trance-item">
      <i class="iconfont item-icon">&#xe7a8;</i>
      <span>必游榜单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeListenTrance'
}
</script>

<style lang="stylus" scoped>
  .listen-trance
    border-top 1px solid rgba(240,240,240,.5)
    border-bottom 1px solid rgba(240,240,240,.5)
    display flex
    .listen-trance-item
      width 50%
      height 1rem
      display flex
      justify-content center
      align-items center
      border-left 1px solid rgba(240,240,240,.5)
    .item-icon
      margin-right 0.1rem
</style>
