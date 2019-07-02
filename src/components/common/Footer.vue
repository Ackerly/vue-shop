<template>
  <div class="bottom">
    <ul>
      <li>
        <font-awesome-icon icon="home" @click="toHome" />
      </li>
      <li>
        <font-awesome-icon icon="th-large" @click="toCategory"/>
      </li>
      <li>
        <font-awesome-icon icon="shopping-cart" />
      </li>
      <li>
        <font-awesome-icon icon="user" @click="toLogin" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #ccc;

    ul {
      display: flex;

      li {
        list-style-type: none;
        flex: 1;
        padding: 1rem 0;

        a {
          color: #2c3e50;
        }

        a:active {
          color: #2c3e50;
        }
      }
    }
  }
</style>

<script>
export default {
  methods: {
    toHome () {
      this.$router.push({
        path: '/'
      })
    },
    toCategory () {
      this.$router.push({
        path: '/category'
      })
    },
    toLogin () {
      this.$router.push({
        path: '/user'
      })
    }
  }
}
</script>
