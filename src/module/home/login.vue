<template>
	<div id="home">
		<img src="../../assets/logo.png">
		<div class="input-style">
  			<el-input placeholder="请输入用户名" v-model="username">
    			<template slot="prepend">用户名</template>
  			</el-input>
		</div>
		<div class="input-style">
  			<el-input placeholder="请输入密码" v-model="password">
    			<template slot="prepend">密码</template>
  			</el-input>
		</div>
		<div class="settings-row">
			<el-checkbox v-model="isRememberPassword" class="remember-password">记住密码</el-checkbox>
			<el-button type="text" @click="setServerAddress">设置服务器</el-button>
		</div>
		<el-button type="info" class="login-button" @click="login">登录</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				isRememberPassword: false
			}
		},
		methods:{
			checklogin: function(){
				if(this.username === ""){
					console.log("用户名不能为空!")
				}
				if(this.password === ""){
					console.log("密码不能为空!")
				}
			},
			setServerAddress: function(){

			},
			login: function(){
				this.checklogin()
				console.log(this.isRememberPassword)
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

.input-style{
	margin-bottom: 20px;
}

.settings-row{
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
