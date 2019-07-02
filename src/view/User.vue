<template>
  <div class="user">
    <header>
      <div class="header-icon">
        <font-awesome-icon icon="user-circle" />
      </div>
      <span>{{name}}</span>
    </header>
    <div class="main">
      <div class="order">
        <div class="my-order-left">
          <span>我的订单</span>
        </div>
        <div class="my-order-right">
          <span>全部订单</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="my-play">
        <span>
          <font-awesome-icon icon="wallet" />
          <span>代付款</span>
        </span>
        <span>
          <font-awesome-icon icon="truck-moving" />
          <span>待收货</span>
        </span>
        <span>
          <font-awesome-icon icon="tools" />
          <span>退换修</span>
        </span>
      </div>
      <div class="my-vip">
        <div class="option">
          <font-awesome-icon icon="crown" />
          <span>会员福利</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="option">
          <font-awesome-icon icon="wallet" />
          <span>我的优惠</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="service">
        <div class="option">
          <font-awesome-icon icon="gem" />
          <span>服务中心</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="option">
          <font-awesome-icon icon="qrcode" />
          <span>F码通道</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="option">
          <font-awesome-icon icon="cog" />
          <span>设置</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<style lang="scss" scoped>
  .user {
    background-color: #F8FCFF;

    header {
      height: 2rem;
      background-color: #FFAA00;
      background: url(../../static/carbg.png) center 0 #f37d0f;
      text-align: left;
      padding: 1rem;

      .header-icon {
        float: left;
        border: 2px solid #ffffff;
        border-radius: 50%;
        background: #fff;

        .fa-user-circle {
          font-size: 2rem;
          color: #FFAA00;
        }
      }

      span {
        float: left;
        height: 2rem;
        line-height: 2rem;
        margin-left: 1rem;
      }
    }

    .main {
      &>div {
        border: 1px solid #ccc;
        border-width: 1px 0;
      }

      .order {
        padding: 1rem;
        background: #fff;
        overflow: hidden;

        .my-order-left {
          float: left;
        }

        .my-order-right {
          float: right;
          color: rgba(0, 0, 0, 0.4);
        }
      }

      .my-play {
        display: flex;
        padding: 1rem;
        margin-bottom: 1rem;
        background: #fff;
        border: 1px solid #ccc;
        border-width: 1px 0;
        color: rgba(0, 0, 0, 0.4);

        >span {
          flex: 1;

          >span {
            display: block;
          }
        }
      }

      .option {
        display: flex;
        padding: 1rem;
        background: #fff;

        svg {
          flex: 2
        }

        span {
          flex: 10;
          text-align: left;
        }

        i {
          flex: 1;
        }
      }

      .my-vip {
        margin-bottom: 1rem;
      }
    }
  }
</style>

<script>
import footer from '@/components/common/Footer'
import store from '@/vuex/store.js' // vuex
export default {
  data () {
    return {
      name: ''
    }
  },
  components: {
    'v-footer': footer
  },
  created () {
    // let routerParams = this.$route.params.id
    this.name = store.state.login.username
  }
}
</script>
