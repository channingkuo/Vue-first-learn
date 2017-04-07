<template>
	<div id="channing-list">
	    <mt-header title="Channing" fixed>
		    <router-link to="/application" slot="left">
		        <mt-button icon="back"></mt-button>
		    </router-link>
	    </mt-header>

        <mt-loadmore :auto-fill="false"
                    :top-method="refresh"
                    :bottom-method="loadMore" 
                    :bottom-all-loaded="allLoaded" 
                    ref="RefreshAndLoadMore" 
                    @bottom-status-change="handleBottomChange" 
                    @top-status-change="handleTopChange" class="list-content">
            <div v-for="item in listData" class="item-content">
                <div class="image-div">
                    <img class="image-class" :src="baseUrl + '/WeChat_Photoes/' + item.wx_photos[0].new_image_urlName" />
                </div>
                <div class="item-text">
                    <h2>{{ item.new_title }}</h2>
                    <p>{{ item.new_content }}</p>
                </div>
            </div>
            <!--<div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus === 'pull'">下拉刷新</span>
                <span v-show="topStatus === 'drop'" class="rotate">释放刷新</span>
                <span v-show="topStatus === 'loading'">正在加载...</span>
            </div>-->
            <!--<div slot="bottom" class="mint-loadmore-bottom">
                <span v-show="bottomStatus === 'pull'">上拉加载更多</span>
                <span v-show="bottomStatus === 'drop'" class="rotate">释放加载</span>
                <span v-show="bottomStatus === 'loading'">正在加载...</span>
            </div>-->
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
                bottomStatus: '',
                pageIndex: 1,
                pageSize: 10,
                allLoaded: false,
                // queryValue: '',
                listData: [],
                baseUrl: localStorage.XrmBaseUrl
			}
		},
        created: function() {
            this.$nextTick(function() {
                this.loadData()
            })
        },
		methods: {
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status
            },
            refresh() {
                this.pageIndex = 1
                this.listData = []
                this.allLoaded = false
                this.loadData(true)
            },
            // searchClick: function(){
			// 	this.pageIndex = 1
			// 	this.listData = []
            //     this.loadData(false)
            // },
            loadData: function(isTopPull){
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
                        if(resp.data.length < this.pageSize){
                            this.allLoaded = true
                        }
                        loading.close()
                        for(var i = 0; i < resp.data.length; i++){
    						this.listData.push(resp.data[i])
    					}
                        if(isTopPull){
                            this.$refs.RefreshAndLoadMore.onTopLoaded()
                        }else{
                            this.$refs.RefreshAndLoadMore.onBottomLoaded()
                        }
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
            loadMore() {
				this.pageIndex += 1
                this.loadData(false)
            }
		}
	}
</script>

<style scoped>
.image-div{
    height: 100px;
    width: 100px;
    padding: 10px;
}

.image-class{
    height: 100px;
    width: 100px;
}

.list-content{
    margin-top: 40px;
}

.item-content{
    border-bottom: 1px solid rgb(212, 212, 212);
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
}

.item-text{
    padding: 20px 10px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;
}

h2{
    color: black;
    font-size: 20px;
}

p{
    margin-top: 10px;
    color: gray;
    font-size: 14px;
}
</style>
