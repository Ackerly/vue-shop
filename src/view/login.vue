<template>
  <div>
    <v-header>
      登录页
    </v-header>
    <section>
      <el-input v-model="account" placeholder="请输入账户"></el-input>
      <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      <p data-v-7589b93f="" class="tip">Tip : 账号密码随便输</p>
      <el-button type="primary" @click="login">登录</el-button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #app {
    margin-top: 0
  }
</style>

<style lang="scss">
  section {
    &>div {
      margin-top: 20px;
    }

    .el-input__inner {
      width: 80%;
    }

    .tip {
      width: 80%;
      margin: 20px auto 0 auto;
      text-align: left;
    }

    .el-button {
      width: 80%;
      margin: 20px auto 0 auto;
    }
  }
</style>

<script>
import header from '@/components/common/Header'
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  components: {
    'v-header': header
  },
  methods: {
    // 登录按钮
    login () {
      if (this.account !== '' && this.password !== '') {
        this.$message('登录成功,存储token,跳转网页')
        this.$store.commit('CHANGE_TOKEN', 1)
        this.$store.commit('userName', this.account)
        // 登录成
      } else {
        this.$message('账号密码不能为空')
      }
      setTimeout(() => {
        this.$router.push({
          path: 'user',
          name: 'user',
          params: {
            id: this.account
          }
        })
        // this.$router.replace({
        //   path: 'user'
        // })
      }, 1000)
    }
  }
}
</script>
