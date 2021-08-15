<template>
    <div class="base-menu" v-click-outside="hideDropDown">
        <div class="head" @click="close">
            <ion-icon name="menu-outline"></ion-icon>
            <span>Menu</span>
            <span class="line"></span>
        </div>
        <div v-show="showMenu" class="drop-down">
            <div class="serach-container">
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" name="mobile" id="mobile" class="form-control" placeholder="search ..." autocomplete="off" v-model="search" />
            </div>
            <div class="menu row">
                <div class="left">
                    <div class="menu-item" v-for="(item,index) in filteredList" :key="index" @click="showSubList(item.id)" :class="{'selected': isSelected(item)}">
                        <img class="icon" src="/images/icon/folder.png" alt="">
                        <span class="title">{{item.name}}</span>
                    </div>
                </div>
                <div class="right">
                    <div class="sub-item" v-for="(item,index) in subItems" :key="index">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                        <span class="title">{{item.name}}</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: "",
            subItems:[],
            showMenu: false,
            items:[
                {name: "Chart and Reports" , id: 1 , paren_id: null},
                {name: "live map" , id: 10 , paren_id: 1},
                {name: "user reports" , id: 11 , paren_id: 1},
                {name: "trafic report" , id: 12 , paren_id: 1},

                {name: "Producers" , id: 2 , paren_id: null},
                {name: "live state" , id: 13 , paren_id: 2},
                {name: "user state" , id: 14 , paren_id: 2},
                {name: "trafic state" , id: 15 , paren_id: 2},

                {name: "Task" , id: 3 , paren_id: null},
                {name: "Drivers" , id: 4 , paren_id: null},
            ]
        }
    },
    computed: {
        filteredList() {
            this.subItems = [];
            this.selected = null;
            return this.items.filter(list => {
                return list.paren_id == null && list.name.toLowerCase().includes(this.search.toLowerCase()) 
            })
        }
    },
    methods:{
        showSubList(id){
            this.selected = id;
            this.subItems = this.items.filter(list => {
                return list.paren_id == id
            })
        },
        close(){
            this.showMenu = !this.showMenu;
        },
        hideDropDown(){
           this.showMenu = false; 
        },
        isSelected(item){
            return item.id == this.selected;
        }
    }
}
</script>

<style lang="scss" scoped>

.base-menu{
    padding: 0 20px;
    position: relative;
    .head{
        height: 100%;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        cursor: pointer;
        .line{
            width: 20px;
            height: 1px;
            background-color: #242c44;
            rotate: 90deg;
        }
        ion-icon{
            font-size: 25px;
        }
    }
    .drop-down{
        width: 400px;
        height: 300px;
        position: absolute;
        background-color: #fff;
        border-radius: 7px;
        border: 1px solid #f0f0f0;
        padding: 0 20px;
        top: 47px;

        .serach-container{
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            align-items: center;
            ion-icon{
                font-size: 25px;
                padding: 8px;
            }
            input{
                background-color: #eef1fc !important;
            }
        }
        .menu{
            padding: 20px;
            .left{
                .menu-item{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    &.selected{
                        background-color: #eeeeee;
                        border-radius: 7px;
                    }
                    margin: 5px;
                    .icon{
                        width: 40px;
                    }
                    .title{
                        padding: 0 10px;
                    }
                }
            }
            .right{
                padding: 0 8px;
                .sub-item{
                    display: flex;
                    align-items: center;
                    height: 27px;
                }
            } 
        }
    }
}
@media only screen and (max-width: 768px){
.base-menu{
    .drop-down{
        width: 320px;
        background-color: #212b4b;
        left: -80px;
        .serach-container{
            border-bottom: 1px solid #2c3655;
            ion-icon{
                color: #fff;
            }
            input{
                background-color: #eef1fc !important;
            }
        }
        .menu{
            .left{
                .menu-item{
                    &.selected{
                        background-color: #56638d;
                    }
                    .title{
                        color: #fff;
                    }
                }
            }
            .right{
                .sub-item{
                    color: #fff;
                }
            } 
        }
    }
}
}

</style>