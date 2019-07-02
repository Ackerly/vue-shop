<template>
  <aside>
    <ul>
      <li v-for="(item) in datas" v-bind:key="item.id">
        <a href="">{{item.title}}</a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  aside {
    flex: 3;
    overflow-y: auto;

    ul {
      overflow-y: auto;
      height: 100%;

      li {
        padding: 1rem 1rem;

        a {
          color: #666;
          text-decoration: none;
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
  }
}
</script>
