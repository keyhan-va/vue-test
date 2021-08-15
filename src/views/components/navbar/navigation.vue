<template>
    <div class="navbar">
        <div class="left-menu">
            <img class="logo" src="/images/logo/whiteLogo.png" alt="">
            <BaseMenu></BaseMenu>
        </div>
        <div class="right-menu">
            <UserMenu :languages="languages" :userData="user"></UserMenu>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            languages:[
                {title: "Iran" , flage: "ddddddd"}
            ],
            user:{
                firstName: "Alshimist",
                lastName: "Valieh",
                role: "administrator",
                avatar: "/images/users/1.jpg"
            }
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