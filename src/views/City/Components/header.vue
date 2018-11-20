<template>
  <div class="header">
    <div class="header-title">
      <router-link to="/">
         <i class="iconfont header-back">&#xe624;</i>
      </router-link>
      城市选择
    </div>
    <div class="select-city">
       <div @click="handleSelectDomestic"  :class="{city: true, citySelect: isSelectDomestic}">境内</div>
       <div @click="handleSelecOverseas" :class="{city: true, citySelect: isSelectOverseas}">境外.港澳台</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {
      isSelectDomestic: true
    }
  },
  computed: {
    isSelectOverseas () {
      return !this.isSelectDomestic
    }
  },
  methods: {
    handleSelectDomestic () {
      this.isSelectDomestic = true
    },
    handleSelecOverseas () {
      this.isSelectDomestic = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/css/variables.styl"
  .header
    font-size .32rem
    height 1.48rem
    overflow hidden
    color  #fff
    background $bgColor
    .header-title
      line-height .76rem
      text-align center
      position relative
      .header-back
        position absolute
        left .15rem
        font-size .34rem
        font-weight 800
        color #fff
    .select-city
      width 5.44rem
      height .44rem
      font-size 0
      margin 0 auto
      .city
        width 50%
        display inline-block
        border 1px solid  #fff
        text-align center
        line-height .4rem
        box-sizing border-box
        font-size .24rem
        border-radius 2px
      .citySelect
        background #fff
        color $bgColor
</style>
