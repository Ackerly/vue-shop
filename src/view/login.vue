<template>
    <div>
        <header>
            <i class="el-icon-arrow-left"></i>
            <h1>
                用户登录
            </h1>
        </header>
        <section>
            <el-input v-model="input" placeholder="请输入账户"></el-input>
            <el-input v-model="input" placeholder="请输入密码"></el-input>
            <el-button type="primary">登录</el-button>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    #app{
        margin-top:0
    }
    header{
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
        i{
            font-size: 1.2rem;
            cursor: pointer;
        }
        h1{
            width: 100%;
            font-size: 1.2rem;
            text-align: center
        }
    }
</style>

<style lang="scss">
    section{
        .el-input__inner{
            width:80%;
            margin:20px auto 0 auto;
        }
        .el-button{
            width:80%;
            margin:20px auto 0 auto;
        }
    }
</style>
