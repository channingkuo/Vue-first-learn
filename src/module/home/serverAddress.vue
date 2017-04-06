<template>
    <div id="serverAddress">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <mt-button slot="left" @click="goBack">返回</mt-button>
            <mt-button slot="right" @click="saveServerAddress">保存</mt-button>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
