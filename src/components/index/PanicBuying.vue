<template>
  <div class="wrap">
    <h2>section3</h2>
    <div class="content" v-for='item in panicbuying' :key="item.id">
      <div class="left">
        <h2>{{item.title}}</h2>
        <div class="time">
          <p>距离开始还有</p>
          <span class="time-num">{{item.hh}}</span>
          <span class="time-col">:</span>
          <span class="time-num">{{item.mm}}</span>
          <span class="time-col">:</span>
          <span class="time-num">{{item.ss}}</span>
        </div>
        <p>开始时间： <span>{{item.startTime}}</span></p>
      </div>
      <div class="right">
        <img :src="item.imgPath" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    overflow: hidden;

    .left {
      float: left;
      width: 50%;

      .time {
        .time-num {
          display: inline-block;
          text-align: center;
          padding: 1.6vw;
          color: #fff;
          border-radius: 0.5vw;
          background-color: #444;
          font-size: 13px;
          letter-spacing: 0.3vw;
        }

        .time-col {
          color: #333;
          width: 2vw;
          display: inline-block;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
        }
      }
    }

    .right {
      width: 50%;
      float: left;

      img {
        width: 90%;
      }
    }
  }
</style>

<script>
export default {
  props: ['panicData'],
  data () {
    return {
      panicbuying: '',
      timer: []
    }
  },
  methods: {
    countTime: function (timeDistance, data) {
      if (timeDistance <= 0) {
        clearTimeout(this.timeout)
      }
      let time = timeDistance
      // 时
      let Hour = Math.floor(timeDistance / 3600000)
      timeDistance -= Hour * 3600000
      // 分
      let Minute = Math.floor(timeDistance / 60000)
      timeDistance -= Minute * 60000
      // 秒
      let Second = Math.floor(timeDistance / 1000)
      data.hh = Hour
      data.mm = Minute
      data.ss = Second
      let distance = time - 1000
      let _this = this
      this[data.id] = setTimeout(() => {
        _this.countTime(distance, data)
      }, 1000)
    }
  },
  watch: {
    panicData () {
      this.panicbuying = this.panicData.item
      let data = this.panicbuying
      for (let i = 0; i < data.length; i++) {
        let now = new Date()
        let startTime = data[i].startTime
        let start = new Date(startTime)
        let timeDistance = startTime - now
        data[i].startTime = start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds()
        this.countTime(timeDistance, data[i])
      }
    }
  },
  beforeDestroy () {
    for (let i = 0; i < this.panicbuying.length; i++) {
      clearTimeout(this[this.panicbuying[i].id])
      this[this.panicbuying[i].id] = null
    }
  }
}
</script>
