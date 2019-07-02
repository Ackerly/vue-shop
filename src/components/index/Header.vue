<template>
    <header>
        <div class="top">
            <h1>电商联盟</h1>
            <div class="search">
                <el-input></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div class="carousel">
            <el-carousel>
                <el-carousel-item v-for='item in carousel' :key="item.id">
                    <img :src="item.imgPath" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="service">
            <ul>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <span>自营品牌</span>
                </li>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <span>无忧退货</span>
                </li>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <span>48小时快速退款</span>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        .top{
            position: relative;
            margin-bottom: 15px;
            overflow: hidden;
            h1{
                color: #ccc;
                font-size: 22px;
            }
        }
        .search{
          text-align: right;
          margin-right: 2%;
        }
        .carousel{
            margin-top:10px;
            position: relative;
        }
        .service{
                border-bottom: 1px solid #dadce0;
                padding:20px 0;
            ul{
                display: flex;
                list-style-type: none;
                padding:0;
                justify-content: space-around;
                li{
                    font-size: 14px;
                }
            }
        }
    }
</style>

<style lang="scss">
  header{
    .el-input{
        width:auto;
        .el-input__inner{
            width:210px;
            height:34px;
            line-height:34px;
            border-right:0;
            border-radius: 4px 0 0 4px;
        }
    }
    .el-button{
        padding: 9px 15px;
        margin-left:-5px;
        border-radius: 0 4px 4px 0;
    }
    .el-carousel{
        .el-carousel__container{
            height:300px;
        }
        img{
            width:100%;
            height:300px;
        }
    }
    .service{
        .el-icon-circle-check-outline{
            color:red;
        }
    }
  }
</style>

<script>
export default {
  props: {
    carouselData: {
      type: Array
    }
  },
  data () {
    return {
      carousel: []
    }
  },
  watch: {
    carouselData () {
      this.carousel = this.carouselData
    }
  }
}
</script>
