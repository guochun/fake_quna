<template>
  <div class="search">
    <input  class="searchCity" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables'
  .search
    background #eee
    height .7rem
    display flex
    text-align center
    justify-content center
    .searchCity
      box-sizing border-box
      width 7rem
      height .5rem
      display inline-block
      margin-top .1rem
      border-radius .6rem
      text-align center
      color #666
      padding 0 .1rem

</style>
