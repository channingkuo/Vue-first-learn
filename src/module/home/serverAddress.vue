<template>
    <div id="serverAddress">
        <mt-header title="服务器地址">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="save" slot="right">保存</mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
