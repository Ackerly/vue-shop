<template>
  <div class="warp">
    <v-header :carouselData="datas.carousel"></v-header>
    <base-commodity :baseData="datas.base"></base-commodity>
    <recommend-commodity :recommendData="datas.recommend"></recommend-commodity>
    <panic-buying :panicData="datas.panicbuying"></panic-buying>
    <bottom-line></bottom-line>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/index/Header.vue'
import baseCommodity from '@/components/index/BaseCommodity'
import recommendCommodity from '@/components/index/RecommendCommodity'
import panicBuying from '@/components/index/PanicBuying'
import bottomLine from '@/components/index/BottomLine'
import footer from '@/components/index/Footer'
export default {
  data () {
    return {
      datas: {
        carousel: [],
        base: {},
        recommend: {},
        panicbuying: {}
      }
    }
  },
  components: {
    'v-header': header,
    'base-commodity': baseCommodity,
    'recommend-commodity': recommendCommodity,
    'panic-buying': panicBuying,
    'bottom-line': bottomLine,
    'v-footer': footer
  },
  beforeCreate: function () {
    this.$http.get('/index').then(response => {
      this.datas.carousel = response.data.carousel
      this.datas.base = response.data.base
      this.datas.recommend = response.data.recommend
      this.datas.panicbuying = response.data.panicbuying
    })
  }
}
</script>
