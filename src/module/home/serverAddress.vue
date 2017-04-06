<template>
    <div id="serverAddress">
        <mt-header title="服务器地址">
            <router-link to="/home" slot="left" replace>
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="save" slot="right" @click="saveServerAddress('server')">保存</mt-button>
        </mt-header>

        <el-form :model="server" :rules="addressCheck" ref="server" label-width="90px" class="demo-ruleForm input-margin">
			<el-form-item label="服务器地址" prop="address" class="input-padding">
    			<el-input v-model="server.address" auto-complete="off"></el-input>
  			</el-form-item>
		</el-form>
    </div>
</template>

<script>
export default {
    data () {
        var validateAddress = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入服务器地址'))
            }else{
                callback()
            }
        }
        return {
            server: {
                address: ''
            },
            addressCheck: {
                address: [
                    { validator: validateAddress, trigger: 'blur' }
                ]
            }
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.server.address = localStorage.XrmBaseUrl ? localStorage.XrmBaseUrl : ''
        })
    },
    methods: {
        saveServerAddress: function(name){
            this.$refs[name].validate((valid) => {
                if (valid) {
                    var endStr = this.server.address.substr(this.server.address.length - 1, 1)
                    if(endStr != '/'){
                        this.server.address += '/'
                    }
                    localStorage.XrmBaseUrl = this.server.address
                    this.$router.go(-1)
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-margin{
    margin-top: 50px;
}

.input-padding{
	padding-right: 10px;
}
</style>
