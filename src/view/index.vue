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
import bottomLine from '@/components/common/BaseLine'
import footer from '@/components/common/Footer'
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
    this.$api({
      method: 'post',
      url: '/index'
    }).then(response => {
      this.datas = response.data
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>
