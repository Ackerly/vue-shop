<template>
  <div class="main">
    <h2>{{_datas.title}}</h2>
    <ul>
      <el-row>
        <el-col :span="12" v-for="(k,i) in _datas.list" :key='i'>
          <li>
            <img v-lazy="k.imgPath" alt="">
          </li>
        </el-col>
      </el-row>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    flex: 10;
    background-color: #f7f7f7;
    overflow-y: auto;
    h2{
      margin: 0;
      text-align: left;
      padding:1rem 0 0 1.5rem
    }
    ul {
      list-style-type: none;
      li{
        margin:0.8rem;
        img{
          width: 100%;
        }
      }
    }
  }
</style>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    // 获取当前aside栏选择的是第几个
    tabIndex () {
      return this.$store.state.category.tabIndex
    },
    _datas () {
      const _datas = {
        list: [],
        title: ''
      }
      return this.datas[this.tabIndex] || _datas
    }
  }
}
</script>
