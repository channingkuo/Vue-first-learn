<template>
	<div class="accountDetail">
		<mt-header title="客户详情">
		  <router-link to="/account/list" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		这里是客户详情页面
		<input type="text" v-model="accName" />
		<mt-button @click="saveAccountDetail">保存</mt-button>
	</div>
</template>

<script>
	export default {
		methods: {
			saveAccountDetail () {
				this.tmpArr = JSON.parse(localStorage.accList)
				this.tmpArr.push({name:this.accName,id:this.accName})
				localStorage.accList= JSON.stringify(this.tmpArr)
				this.$router.go(-1)
			}
		},
		data() {
			return{
				accName: '',
				tmpArr:[]
			}
		},
		created(){
			console.log(this.$router)
		}
	}
</script>

<style>
	
</style>