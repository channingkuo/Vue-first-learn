<template>
	<div id="channing-list">
	    <mt-header title="Channing" fixed>
		    <router-link to="/application" slot="left">
		        <mt-button icon="back"></mt-button>
		    </router-link>
	    </mt-header>

        <mt-loadmore :top-method="loadMore" @top-status-change="handleTopChange" class="list-content">
            <div v-for="item in listData">
                <img class="image-class" :src="baseUrl + '/WeChat_Photoes/' + item.wx_photos[0].new_image_urlName" />
                <h2>{{ item.new_title }}</h2>
                <p>{{ item.new_content }}</p>
            </div>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
	</div>
</template>

<script>
	import { Loading } from 'element-ui'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
                topStatus: '',
                pageIndex: 1,
                pageSize: 10,
                loading: false,
                // queryValue: '',
                listData: [],
                baseUrl: ''
			}
		},
        mounted: function() {
            this.$nextTick(function() {
                this.baseUrl = localStorage.XrmBaseUrl
                this.loadData()
            })
        },
		methods: {
            handleTopChange(status) {
                this.topStatus = status;
            },
            // searchClick: function(){
			// 	this.pageIndex = 1
			// 	this.listData = []
            //     this.loadData(false)
            // },
            loadData: function(){
				var loading = Loading.service({
					lock: true,
					text: '正在加载...'
				})

                let apiUrl = 'api/Vue/VueList?pageSize=' + this.pageSize + '&pageIndex=' + this.pageIndex + '&entityId='
	          	let url = localStorage.XrmBaseUrl + apiUrl
	          	let config = {
	          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
	          	}
	            this.$http.get(url, config)
	                .then((resp) => {
                        this.loading = false
                        loading.close()
                        for(var i = 0; i < resp.data.length; i++){
    						this.listData.push(resp.data[i])
    					}
	                }, (err) => {
                        this.loading = false
                        loading.close()
    					Toast({
    						message: err.response.data
    						// iconClass: 'icon icon-success',
    						// position: 'middle',
    						// duration: 3000
    					})
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
.image-class{
    width: 200px;
}

.list-content{
    margin-top: 40px;
}
</style>
