<template>
	<div class="application">
	<mt-header title="应用">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>


		<div v-for="menu in menuList" class="menu" @click="goClick(menu.MenuUrl)">
			<img v-if="menu.MenuIcon" :src="'data:image/png;base64,' + menu.MenuIcon" class="menuIcon">
			<div class="menuName">{{menu.MenuName}}</div>			
		</div>
	</div>
</template>

<script>
	import { Loading } from 'element-ui'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				menuList : []
			}
		},
		created() {

			var loading = Loading.service({
				lock: true,
				text: '正在加载数据...'
			})

            let apiUrl = "api/SystemMenu/GetMobileSystemMenu?lastQueryTime="
          	let  url = localStorage.XrmBaseUrl + apiUrl
          	let config = {
          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
          	}
          	
            this.$http.get(url,config)
                .then((data) => {
                    var menus = data.data.SystemMenuList;
                    for (var i = 0; i < menus.length; i++) {
                        var pMenu = menus[i];

                        for (var j = 0; j < pMenu.Children.length; j++) {
                            var cMenu = pMenu.Children[j];
                            this.menuList.push(cMenu);
                        }
                    }
                    loading.close()
                }, (err) => {
                	loading.close()                	
                	Toast({
							message: err.response.data
						// iconClass: 'icon icon-success',
							// position: 'middle',
							// duration: 3000
					})
                })             
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
		margin: 10px 0;
		max-width: 33%;
		min-width: 33%;
		display: inline-block;
		text-align: center;
	}
	.menuIcon{
		width: 54px;
		height: 54px;
	}
	.menuName{
		margin-top: 8px;
		font-size: 14px;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
	}
</style>