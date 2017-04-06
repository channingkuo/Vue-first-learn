<template>
	<div id="notice-list">
	    <mt-header title="公告通知">
		    <router-link to="/application" slot="left">
		        <mt-button icon="back"></mt-button>
		    </router-link>
	    </mt-header>

        <el-input placeholder="请输入查询条件" icon="search" v-model="queryValue" :on-icon-click="searchClick"></el-input>

        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in listData">{{ item }}</li>
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
                this.loadData()
            })
        },
		methods: {
            searchClick: function(){
				this.listData = []
                this.loadData()
            },
            loadData: function(){
                this.fetchDataFromDB(function(data){
					this.loading = false
					for(var i = 0; i < data.length; i++){
						this.listData.push(data[i])
					}
                }, function(err){
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
				var loading = Loading.service({
					lock: true,
					text: '正在加载...'
				})

				let apiUrl = ""
	          	let url = localStorage.XrmBaseUrl + apiUrl
	          	let config = {
	          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
	          	}
	            this.$http.get(url, config)
	                .then((resp) => {
	                    loading.close()
						success(resp.data)
	                }, (err) => {
	                	loading.close()
						error(err.response.data)
	                })
            },
            loadMore() {
                this.loading = true
				this.pageIndex += 1
                this.loadData()
            }
		}
	}
</script>

<style scoped>

</style>
