<template>
    <div class="bottom">
        <ul>
            <li>
                <font-awesome-icon icon="home" />
            </li>
            <li>
                <font-awesome-icon icon="th-large" />
            </li>
            <li>
                <font-awesome-icon icon="shopping-cart" />
            </li>
            <li>
                <router-link to="/login">
                <font-awesome-icon icon="user" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .bottom{
        position: fixed;
        width: 100%;
        bottom: 0;
        background: #fff;
        ul{
            display: flex;
            li{
                list-style-type: none;
                flex:1;
            }
        }
    }
</style>
