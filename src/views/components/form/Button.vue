<template>
    <button class="btn" :class="ui" :type="type">
        <span :class="['content', {'hide' : isLoading} ]">
            <ion-icon class="icon" v-if="icon !== ''" :name="icon"></ion-icon>
            <span v-if="title">{{ title }}</span>
        </span>
        <svg width="25px" v-show="isLoading" height="25px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" class="material-spinner"><circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" class="path"></circle></svg>
        <span class="tooltip top" v-if="tooltip !== ''">{{ tooltip }}</span>
    </button>
</template>


<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            tooltip: {
                type: String,
                default: ''
            },
            ui: {
                type: String,
                default: ''
            },
            isLoading:{
                type: Boolean,
                default: false
            },
            type:{
                type:String,
                default: 'button'
            }
        },
    }
</script>