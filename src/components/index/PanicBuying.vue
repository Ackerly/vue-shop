<template>
    <div class="wrap">
        <h2>section3</h2>
        <div class="content" v-for='item in panicbuying' :key="item.id" >
            <div class="left">
                <h2>{{item.title}}</h2>
                <div class="time">
                    <span class="time-num">00</span>
                    <span class="time-col">:</span>
                    <span class="time-num">00</span>
                    <span class="time-col">:</span>
                    <span class="time-num">00</span>
                </div>
                <p>Start at <span>{{item.startTime}}</span></p>
            </div>
            <div class="right">
                <img :src="item.imgPath" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .left{
        float: left;
        width: 50%;
        .time{
            .time-num{
                display: inline-block;
                text-align: center;
                padding: 1.6vw;
                color: #fff;
                border-radius: 0.5vw;
                background-color: #444;
                font-size: 13px;
                letter-spacing: 0.3vw;
            }
            .time-col{
                color: #333;
                width: 2vw;
                display: inline-block;
                text-align: center;
                font-weight: 700;
                font-size: 15px;
            }
        }
    }
    .right{
        width:50%;
        float: left;
    }
</style>

<script>
export default {
  props: {
    panicData: {
      type: Object
    }
  },
  data () {
    return {
      panicbuying: []
    }
  },
  watch: {
    panicData () {
      this.panicbuying = this.panicData.item
    }
  }
}
</script>
