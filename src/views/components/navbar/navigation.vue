<template>
    <div class="navbar">
        <div class="left-menu">
            <img class="logo" src="/images/logo/whiteLogo.png" alt="">
            <BaseMenu></BaseMenu>
        </div>
        <div class="right-menu">
            <UserMenu></UserMenu>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style lang="scss">
.navbar{
    position: fixed;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #161e38;

    .left-menu{
        display: flex;
        align-items: center;
        .logo{
            width: 80px;
            // height: 30px;
        }
    }

    .right-menu{
        padding: 0 10px;
    }
}
</style>