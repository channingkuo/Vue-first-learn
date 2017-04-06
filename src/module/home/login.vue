<template>
	<div id="home">
		<img src="../../assets/logo.png">
		<el-form :model="loginModel" :rules="formCheck" ref="loginModel" label-width="60px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
    			<el-input v-model="loginModel.username" auto-complete="off"></el-input>
  			</el-form-item>
			<el-form-item label="密码" prop="password">
    			<el-input type="password" v-model="loginModel.password" auto-complete="off"></el-input>
  			</el-form-item>
		</el-form>

		<div class="settings-row">
			<el-checkbox v-model="loginModel.isRememberPassword" class="remember-password">记住密码</el-checkbox>
			<el-button type="text" @click="setServerAddress">设置服务器</el-button>
		</div>

		<el-button type="info" class="login-button" @click="login('loginModel')">登录</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			var validateUsername = (rule, value, callback) => {
				if (value === '') {
		         callback(new Error('请输入用户名'));
		      }else{
					callback()
				}
			}
		   var validatePassword = (rule, value, callback) => {
		      if (value === '') {
		         callback(new Error('请输入密码'));
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
		methods: {
			login(formName){
				var isValid = false
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// TODO 登录
						console.log('username:' + this.loginModel.username)
						console.log('password:' + this.loginModel.password)
						console.log('remember password:' + this.loginModel.isRememberPassword)
					}
				})
			},
			setServerAddress: function(){
				// TODO 跳转到设置服务器页面
				console.log("设置服务器地址...")
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

.remember-password{
	padding: 10px 0;
}

.login-button{
	width: 100%;
}
</style>
