<template>
	<div class="application">
		<div v-for="menu in menuList" class="menu" @click="goClick(menu.url)">
			{{menu.name}}
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				menuList : []
			}
		},
		created() {
			this.menuList = [
					{url: 'hello',name:'你好2222',order:1},
					{url: 'hello2',name:'你好2',order:2}
				];
		},
		methods: {
			goClick: function (url) {
				alert(url);
			}
		}
	}	
</script>

<style scoped>
	.home{
		/*background-color: #09f;*/
	}
	.menu{
		margin:10px 15px;
	}
</style>