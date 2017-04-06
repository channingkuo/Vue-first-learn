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
          	// let AuthToken= 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYXBwaWQiOiJYY3JtIn0..j07mxhiyg8UtSQab7z284w.XcyyGKYpDar9Im4EPlvRpCqzLTxBPVXfEneqj4ThqKHqv6c5rO5PMWFrC4AOC0ILcrEkv57mPntUaesHYmFTYO6KZEOo_4MJtD0GciHW21CIcxt_HG93elRgR3qP9OuBJtdxCDKSOZbAbkoYAJxOjhVWeq7QyuB6tYX2YSxCDMBiOXahfgPe30h4d8snwBEoNeX4uW0pvmKdQK_MjkAdzQ.OAGrV_AEectvPlY3eXE_Xw'
          	// let config = {
          	// 	 headers: {'Authorization': 'Basic ' + AuthToken}
          	// }
          	
            this.$http.get(url)
                .then((data) => {
                    var menus = data.data.SystemMenuList;
                    for (var i = 0; i < menus.length; i++) {
                        var pMenu = menus[i];

                        for (var j = 0; j < pMenu.Children.length; j++) {
                            var cMenu = pMenu.Children[j];
                            this.menuList.push(cMenu);
                        }
                    }
                    console.log(this.menuList)
                    loading.close()
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