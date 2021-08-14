<template>
    <div>
        <navigation />
        <div class="content">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'panel'
    }
</script>
<style lang="scss" scoped>
.content{
    padding-top: 50px;
}
</style>