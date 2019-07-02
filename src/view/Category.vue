<template>
  <div class="warp">
    <v-header>
      商品分类
    </v-header>
    <section>
      <v-aside :datas="allData.aside"></v-aside>
      <router-view :datas="allData.aside"/>
    </section>
  </div>
</template>

<style lang="scss">
  .warp {
    width: 100%;
    height:100%;
    display: flex;
    flex-flow: column nowrap;
    section {
      display: flex;
      width: 100%;
      height: 100%;
      .aside {
        &>ul {
          li {
            padding:0.7rem 1rem;
            a {
              display: block;
              padding: 1rem 0;
              position: relative;
              font-size: 1.2rem
            }
          }
        }
      }
    }
  }
</style>

<script>
import header from '@/components/common/Header'
import aside from '@/components/category/Aside'
import main from '@/components/category/Main'
export default {
  components: {
    'v-header': header,
    'v-aside': aside,
    'v-main': main
  },
  data () {
    return {
      allData: {}
    }
  },
  created () {
    this.$api({
      method: 'post',
      url: '/category'
    }).then((res) => {
      this.allData = res.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
