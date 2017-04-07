<template>
	<div id="notice-list">
	    <mt-header title="公告通知">
		    <router-link to="/application" slot="left">
		        <mt-button icon="back"></mt-button>
		    </router-link>
	    </mt-header>

        <el-input placeholder="请输入查询条件" icon="search" v-model="queryValue" :on-icon-click="searchClick"></el-input>

        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <li v-for="(item, index) in listData">{{ index }}</li>
        </ul>
	</div>
</template>

<script>
	import { Loading } from 'element-ui'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
                pageIndex: 1,
                pageSize: 10,
                loading: false,
                queryValue: '',
                listData: []
			}
		},
        mounted: function() {
            this.$nextTick(function() {
                this.loadData(false)
            })
        },
		methods: {
            searchClick: function(){
				this.pageIndex = 1
				this.listData = []
                this.loadData(false)
            },
            loadData: function(isLoadMore){
				if(!isLoadMore){
					var loading = Loading.service({
						lock: true,
						text: '正在加载...'
					})
				}
                this.fetchDataFromDB(function(data){
					if(!isLoadMore){
						loading.close()
					}
					this.loading = false
					for(var i = 0; i < data.length; i++){
						this.listData.push(data[i])
					}
					// console.log(this.listData)
                }, function(err){
					if(!isLoadMore){
						loading.close()
					}
					this.loading = false
					Toast({
						message: err
						// iconClass: 'icon icon-success',
						// position: 'middle',
						// duration: 3000
					})
                })
            },
            fetchDataFromDB: function(success, error){
				let apiUrl = 'api/Notice/list?queryValue=' + this.queryValue + '&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize
	          	let url = localStorage.XrmBaseUrl + apiUrl
	          	let config = {
	          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
	          	}
	            this.$http.get(url, config)
	                .then((resp) => {
						success(resp.data)
	                }, (err) => {
						error(err.response.data)
	                })
            },
            loadMore() {
                this.loading = true
				this.pageIndex += 1
                this.loadData(true)
            }
		}
	}
</script>

<style scoped>

</style>
