<template>
  <header>
    <i class="el-icon-arrow-left" @click="$router.go(-1)"></i>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
  header {
    background-color: #F8FCFF;
    text-align: center;
    position: relative;
    height: 12vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 4vw;

    i {
      font-size: 1.2rem;
      cursor: pointer;
    }

    h1 {
      width: 100%;
      font-size: 1.2rem;
      text-align: center
    }
  }
</style>

<script>
export default {
  methods: {
    toIndex () {
      this.$router.push({
        path: '/',
        name: 'index'
      })
    }
  }
}
</script>
