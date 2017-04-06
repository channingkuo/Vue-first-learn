<template>
	<div class="accountList">
		<mt-header title="客户列表">
		  <router-link to="/application" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div >这里是客户列表页面</div>
		<div v-for="acc in accountList" @click="goDetail('edgardong')">{{acc.name}}</div>
		<div  @click="goDetail('edgardong')">新增</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goDetail (accountId) {
				console.log(accountId)
				this.$router.push({name:'accountDetail',params:{accountId,accountId}})
			}
		},
		data() {
			return {
				accountList: []
			}
		},
		created(){
			this.accountList = JSON.parse(localStorage.accList)
			console.log(this.accountList)
		},
		activated(){
			this.accountList = JSON.parse(localStorage.accList)
			// console.log(this.accountList)			
		}
	}
</script>

<style>
	
</style>