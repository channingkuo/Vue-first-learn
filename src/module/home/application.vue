<template>
	<div class="application">
		<div v-for="menu in menuList" class="menu" @click="goClick(menu.MenuUrl)">
			{{menu.MenuName}}
			<img v-if="menu.MenuIcon" :src="'data:image/png;base64,' + menu.MenuIcon" alt="">
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
            let apiUrl = "api/SystemMenu/GetMobileSystemMenu?lastQueryTime="
          	let  url = localStorage.XrmBaseUrl + apiUrl
          	let AuthToken= 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYXBwaWQiOiJYY3JtIn0..j07mxhiyg8UtSQab7z284w.XcyyGKYpDar9Im4EPlvRpCqzLTxBPVXfEneqj4ThqKHqv6c5rO5PMWFrC4AOC0ILcrEkv57mPntUaesHYmFTYO6KZEOo_4MJtD0GciHW21CIcxt_HG93elRgR3qP9OuBJtdxCDKSOZbAbkoYAJxOjhVWeq7QyuB6tYX2YSxCDMBiOXahfgPe30h4d8snwBEoNeX4uW0pvmKdQK_MjkAdzQ.OAGrV_AEectvPlY3eXE_Xw'
          	let config = {
          		 headers: {'Authorization': 'Basic ' + AuthToken}
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
                    console.log(this.menuList)
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
		margin:10px 15px;
	}
</style>