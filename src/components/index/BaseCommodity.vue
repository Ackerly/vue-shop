<template>
  <div class="commodity">
    <h2>section1</h2>
    <div class="list">
      <el-row>
        <el-col :span="12" v-for="item in list" :key="item.id">
          <div class="grid-content bg-purple">
            <img :src="item.imgPath" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="banner">
      <img :src="banner" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .banner{
    img{
      width: 100%;
    }
  }
</style>

<style lang="scss">
.el-row{
  .el-col{
    padding:10px 5px 5px 15px;
  }
  .grid-content {
    border-radius: 4px;
    background-color: #f9fafc;
    img{
      width:100%;
    }
  }
}

</style>

<script>
export default {
  props: {
    baseData: {
      type: Object
    }
  },
  data () {
    return {
      list: [],
      banner: ''
    }
  },
  watch: {
    baseData () {
      this.list = this.baseData.list
      this.banner = this.baseData.banner
    }
  }
}
</script>
