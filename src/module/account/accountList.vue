<template>
	<div class="accountList">
		<mt-header title="客户列表" fixed>
		  <router-link to="/application" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<!-- <div >这里是客户列表页面</div> -->
		<div class="content">
			<mt-loadmore ref="loadmore" :top-method="refresh" :auto-fill="true" 
			:bottom-method="loadMoreData" :distance-index="2" :bottom-distance="300"
			@top-status-change="handleTopChange" 
			:bottom-all-loaded="allLoaded">
				<div v-for="acc in accountList" @click="goDetail('edgardong')" class="acc">
					<div class="acc-title">{{acc.new_title}}</div>
					<p class="acc-content">
							<img class="content-avatar" :src="baseUrl + '/WeChat_Photoes/' + acc.wx_photos[0].new_image_urlName" >
						{{acc.new_content}}
					</p>
				</div>
				<div slot="top" class="mint-loadmore-top">
			      <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">释放刷新...</span>
			      <span v-show="topStatus === 'loading'">加载中...</span>
			    </div>
			</mt-loadmore>
		</div>

		<!-- <div  @click="goDetail('edgardong')">新增</div> -->
	</div>
</template>

<script>
	export default {
		methods: {
			goDetail (accountId) {
				// console.log(accountId)
				this.$router.push({name:'_accountDetail',params:{accountId,accountId}})
			},
			refresh(){
				this.pageIndex = 1
				this.allLoaded = false
				this.loadData()
				this.$refs.loadmore.onTopLoaded()
			},
			loadMoreData(){
				this.pageIndex += 1				
				this.loadData()
				this.$refs.loadmore.onBottomLoaded()
			},
			handleTopChange(status){
				this.topStatus = status;
			},
			loadData(){
				let apiUrl = 'api/Vue/VueList?pageSize=' + this.pageSize + '&pageIndex=' + this.pageIndex + '&entityId='
		      	let url = localStorage.XrmBaseUrl + apiUrl
		      	let config = {
		          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
		          	}
		        this.$http.get(url, config)
		            .then((resp) => {
		                for(var i = 0; i < resp.data.length; i++){   
		                	if (this.pageIndex === 1) {
								this.accountList = resp.data
		                	}else{
								this.accountList.push(resp.data[i])
		                	}              	
						}
						console.log(this.accountList)
						if (resp.data.length < this.pageSize) {
							this.allLoaded = true;// 若数据已全部获取完毕
						}
		            }, (err) => {
		                
		            })
				}
		},
		data() {
			return {
				accountList: [],
				pageSize:10,
				pageIndex:1,
				baseUrl:localStorage.XrmBaseUrl,
				topStatus:'',
				allLoaded:false
			}
		},
		created(){
			this.loadData()
		},
		activated(){
			// this.accountList = JSON.parse(localStorage.accList)
			// console.log(this.accountList)			
		}
	}
</script>

<style scoped>
	.content{
		margin-top: 40px;
	}
	.acc{
		padding: 10px 15px;
		border-bottom: 1px solid #555;
	}
	.acc-title{
		text-align: center;
	}
	.content-avatar{
		width: 80px;
		height: 80px;
	}
</style>