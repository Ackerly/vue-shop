<template>
  <div class="recommend-commodiity">
    <h2>section2</h2>
    <el-row>
      <div class="warp">
        <el-col :span="6" v-for="item in recommends" :key="item.id">
          <div class="grid-content bg-purple">
            <img :src="item.imgPath" alt="">
          </div>
        </el-col>
      </div>
        <el-button icon="el-icon-arrow-left" circle class="left"></el-button>
        <el-button icon="el-icon-arrow-right" circle class="right"></el-button>
    </el-row>
  </div>
</template>

<style lang="scss">
.recommend-commodiity{
  .el-row{
    position: relative;
    height:343px;
    overflow: hidden;
    button{
      position: absolute;
      background: rgba(31,45,61,.11);
      border:0;
      color:#fff;
      &:hover{
        background: rgba(31,45,61,.23);
      }
      &.left{
        left:15px;
        top:50%;
        transform: translateY(-50%)
      }
      &.right{
        right:15px;
        top:50%;
        transform: translateY(-50%)
      }
    }
  }
}
</style>

<style lang="scss" scoped>
  .el-row{
    img{
      height:323px;
    }
  }
</style>

<script>
export default {
  props: {
    recommendData: {
      type: Object
    }
  },
  data () {
    return {
      recommends: []
    }
  },
  watch: {
    recommendData () {
      this.recommends = this.recommendData.item
    }
  }
}
</script>
