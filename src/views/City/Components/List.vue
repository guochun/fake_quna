<template>
  <div class="list" ref="wrapper">
    <div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="hot-city-list">
          <div class="hot-city-row" v-for="(row, index) of getHotCityRow" :key="index" >
            <div class="hot-city" v-for="(city, index) of row" :key="index">{{city}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">字母顺序</div>
        <div class="char-list">
          <div class="char-row">
            <div class="char">A</div>
            <div class="char">B</div>
            <div class="char">C</div>
            <div class="char">D</div>
            <div class="char">E</div>
            <div class="char">F</div>
          </div>
          <div class="char-row">
            <div class="char">A</div>
            <div class="char">B</div>
            <div class="char">C</div>
            <div class="char">D</div>
            <div class="char">E</div>
            <div class="char">F</div>
          </div>
          <div class="char-row">
            <div class="char">A</div>
            <div class="char">B</div>
            <div class="char">C</div>
            <div class="char">D</div>
            <div class="char">E</div>
            <div class="char">F</div>
          </div>
          <div class="char-row">
            <div class="char">A</div>
            <div class="char">B</div>
            <div class="char">C</div>
            <div class="char">D</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
          <div class="city-row">
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
            <div class="city">阿坝藏族羌族自治州</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ListHeader',
  data () {
    return {
      hotCityList: [
        '北京',
        '上海',
        '三亚',
        '香港',
        '杭州',
        '广州',
        '成都',
        '深圳',
        '苏州',
        '桂林',
        '西安',
        '厦门'
      ]
    }
  },
  computed: {
    getHotCityRow () {
      const hotCitys = []
      this.hotCityList.forEach(function (item, index) {
        const row = Math.floor(index / 3)
        if (!hotCitys[row]) {
          hotCitys[row] = []
        }
        hotCitys[row].push(item)
      })
      return hotCitys
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  .list
    position absolute
    top 2.18rem
    left 0
    right 0
    border-bottom 0
    overflow hidden
    .border-topbottom
      &::before
        border-color #ccc
      &::after
        border-color  #ccc
    .area
      .title
        line-height .8rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
      .hot-city-list
        width 100%
        .hot-city-row:.hot-city:nth-child(4n)
          border-bottom  none
        .hot-city-row
          border-bottom  1px solid  #ccc
          .hot-city
            box-sizing border-box
            height .9rem
            line-height .9rem
            width 33.333333%
            display inline-block
            border-right 1px solid #ccc
            text-align  center
          .hot-city:nth-child(3n)
            border-right none
      .char-list
        width 100%
        padding .4rem 0
        .char-row
          .char
            width 16.66666%
            line-height .9rem
            height .9rem
            display inline-block
            text-align center
      .city-list
        width 100%
        .city-row:last-child
          border-bottom  none
        .city-row
          height .9rem
          line-height .9rem
          border-bottom  1px solid #ccc
          .city
            box-sizing border-box
            width 25%
            display inline-block
            border-right 1px solid #ccc
            text-align  center
            ellipsis()
          .city:nth-child(4n)
            border-right none
</style>
