<template>
    <div class="UserMenu">
        <div class="image" @click="extend">
            <img :src="userData.avatar" alt="">
            <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div v-show="extand" class="drop-down">
            <div class="languages">
                <div class="flag" v-for="(language,index) in languages" :key="index">
                    {{language.title}}
                </div>
            </div>
            <div class="info">
                <span class="title">{{userData.firstName}}</span>
                <span class="subtitle">{{userData.role}}</span>
            </div>
            <div class="footer">
                <ion-icon name="log-in-outline"></ion-icon>
                <span>Logout</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            extand: false,

        }
    },
    methods:{
        extend(){
            this.extand= ! this.extand;
        }
    },
    props: {
        languages:{
            type: Array,
            require:false,
        },
        userData:{
            type: Object,
            require: true,
        }
    },
}
</script>
<style lang="scss" scoped>

.UserMenu{
    .image{
        cursor: pointer;
        height: 40px;
        width: 80px;
        background-color: #3e4a73;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // padding: 0 5px;
        border-radius: 7px;
        position: relative;
        img{
            padding: 3px;
            width: 30px;
            height: 30px;
            border-radius: 50px;
            margin-left: 8px;
        }
        ion-icon{
            margin-right: 10px;
            color: white;
        }
    }
    
    .drop-down{
        position: absolute;
        min-height: 200px;
        min-width: 380px;
        background-color: #fff;
        border-radius: 7px;
        border: 1px solid rgb(235, 235, 235);
        top: 60px;
        padding: 0 15px;
        right: 5px;
        .languages{
            display: flex;
            align-items: center;
            height: 70px;
            border-bottom: 2px solid #f0f0f0;
            .flag{
                cursor: pointer;
            }
        }
        .info{
            height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: 2px solid #f0f0f0;
            cursor: pointer;
            margin-top: 5px;
            .title{
                color: black;
                font-size: 20px;
            }
            .subtitle{
                color: #bbbbbb;
                font-size: 18px;
            }
        }
        .footer{
            height: 70px;
            display: flex;
            align-items: center;
            color: red;
            cursor: pointer;
            margin-top: 5px;
            ion-icon{
                font-size: 28px;
                padding: 5px;
            }
        }

    }
}


</style>