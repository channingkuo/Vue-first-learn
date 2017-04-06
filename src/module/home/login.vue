<template>
	<div id="home">
		<img src="../../assets/logo.png">
		<el-form :model="loginModel" :rules="formCheck" ref="loginModel" label-width="60px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username" class="input-padding">
    			<el-input v-model="loginModel.username" auto-complete="off"></el-input>
  			</el-form-item>
			<el-form-item label="密　码" prop="password" class="input-padding">
    			<el-input type="password" v-model="loginModel.password" auto-complete="off"></el-input>
  			</el-form-item>
		</el-form>

		<div class="settings-row">
			<el-checkbox v-model="loginModel.isRememberPassword" class="remember-password">记住密码</el-checkbox>
			<router-link :to="{ path: '/serverAddress' }">
				<el-button type="text">设置服务器</el-button>
			</router-link>
		</div>
		<el-button type="primary" class="login-button" @click="login('loginModel')">登录</el-button>
	</div>
</template>

<script>
	import { Loading } from 'element-ui'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			var validateUsername = (rule, value, callback) => {
				if (value === '') {
		         	callback(new Error('请输入用户名'))
		        }else{
					callback()
				}
			}
		    var validatePassword = (rule, value, callback) => {
		        if (value === '') {
		         	callback(new Error('请输入密码'))
		      	}else{
					callback()
				}
		   }
		   return {
		      	loginModel: {
					username: '',
		         	password: '',
					isRememberPassword: false
		      	},
		      	formCheck: {
					username: [
						{ validator: validateUsername, trigger: 'blur' }
					],
		         	password: [
		            	{ validator: validatePassword, trigger: 'blur' }
		         	]
		      	}
		   	}
		},
	    mounted: function() {
	        this.$nextTick(function() {
				var tmp = localStorage.isRememberPassword ? localStorage.isRememberPassword : false
	            this.loginModel.isRememberPassword = tmp == 'true' ? true : false

				this.loginModel.username = localStorage.username ? localStorage.username : ''
				this.loginModel.password = localStorage.password ? localStorage.password : ''
	        })
	    },
		methods: {
			login(formName){
				var remember = this.loginModel.isRememberPassword
				var username = this.loginModel.username
				var password = this.loginModel.password
				var router = this.$router

				this.$refs[formName].validate((valid) => {
					if (valid) {
						var loading = Loading.service({
							lock: true,
							text: 'Loading...'
						})
						// 登录
						this.checkLogin('api/Authentication/login', {
							uid: this.loginModel.username,
		                    pwd: this.loginModel.password
						}, function(resp){
							localStorage.isRememberPassword = remember
							if(remember){
								localStorage.username = username
								localStorage.password = password
							}

							localStorage.XrmAuthToken = resp.data.AuthToken;
		                    localStorage.UserId = resp.data.SystemUserId;

							loading.close()
							router.push({ path: '/application' })
						}, function(err){
							loading.close()
							Toast({
  								message: err.response.data
								// iconClass: 'icon icon-success',
  								// position: 'middle',
  								// duration: 3000
							})
						})
					}
				})
			},
			checkLogin: function(url, data, success, error){
				url = localStorage.XrmBaseUrl + url
				this.$http.post(url, data).then(response => {
					success(response)
				}, err => {
					error(err)
				})
			}
		}
	}
</script>

<style scoped>
#home {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
.settings-row{
	padding: 0 10px;
	margin-bottom: 20px;
	display: flex;
	display: -webkit-flex; /* Safari */
	flex-direction: row;
	-webkit-flex-direction: row;
	justify-content: space-between;
	-webkit-justify-content: space-between;
}

.input-padding{
	padding-right: 10px;
}

.remember-password{
	padding: 10px 0;
}

.login-button{
	width: 90%;
}
</style>
