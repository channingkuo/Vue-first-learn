<template>
	<div class="home">
		<div v-for="menu in menuList" class="menu" >
			{{menu.name}}
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuList : [
					{url: 'hello',name:'你好',order:1},
					{url: 'hello2',name:'你好2',order:2}
				]
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