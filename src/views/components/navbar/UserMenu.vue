<template>
    <div class="UserMenu" v-click-outside="hideDropDown">
        <div class="image" @click="extend">
            <img :src="account.avatar" alt="">
            <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div v-show="extand" class="drop-down">
            <div class="languages">
                <div class="flag" v-for="(language,index) in Languages" :key="index">
                    <img :src="language.src" alt="aa" :class="{'active': language.isActive}">
                </div>
            </div>
            <div class="info">
                <span class="title">{{account.first_name}}</span>
                <span class="subtitle">administrator</span>
            </div>
            <div class="footer" @click="logout">
                <ion-icon name="log-in-outline"></ion-icon>
                <span>Logout</span>
            </div>
        </div>
    </div>
</template>
<script>
import AuthRepository from '../../../repositories/AuthRepository'
import { mapState } from "vuex";
export default {
    data(){
        return{
            extand: false,
            // user= '',

        }
    },
    methods:{
        extend(){
            this.extand = ! this.extand;
        },
        hideDropDown(){
           this.extand = false; 
        },
        logout(){
             AuthRepository.removeApiToken()
            this.$router.push({ path: '/auth/login'})
        }
    },
    computed: {
      ...mapState({
        account: (state) => state.auth.account,
        Languages: (state) => state.static.languages,
      })
    }
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
        background-color: #ffff;
        border-radius: 7px;
        border: 1px solid #f0f0f0;
        top: 60px;
        padding: 0 15px;
        right: 5px;
        .languages{
            display: flex;
            align-items: center;
            height: 70px;
            border-bottom: 2px solid #f0f0f0;
            
            .flag{
                width: 35px;
                margin: 5px;
                
                img{
                    cursor: pointer;
                    border-radius: 12px;
                    width: 100%;
                    filter: opacity(0.5);
                    
                    &.active{
                        filter: opacity(1)
                    }
                    
                }
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
@media only screen and (max-width: 768px){
    .UserMenu{
        .drop-down{
            min-width: 320px;
            background-color: #212b4b;
            border: 1px solid #2c3655;
            .languages{
                border-bottom: 2px solid #2c3655;
            }
            .info{
                border-bottom: 2px solid #2c3655;
                .title{
                    color: #fff;
                }
                .subtitle{
                    color: #bbbbbb;
                }
            }
        }
    }
}


</style>