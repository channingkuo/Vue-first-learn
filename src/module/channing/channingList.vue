<template>
	<div id="channing-list">
	    <mt-header title="Channing">
		    <router-link to="/application" slot="left">
		        <mt-button icon="back"></mt-button>
		    </router-link>
	    </mt-header>

        <!-- <el-input placeholder="请输入查询条件" icon="search" v-model="queryValue" :on-icon-click="searchClick"></el-input> -->

        <!-- <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <li v-for="(item, index) in listData">
                <p>{{ item.new_title }}</p>
                <p>{{ item.new_content }}</p>
                <img v-for="img in item.wx_photos" :src="baseUrl + img.new_image_urlName" />
            </li>
        </ul> -->
        <div v-for="item in listData">
            <img class="image-class" :src="baseUrl + '/WeChat_Photoes/' + item.wx_photos[0].new_image_urlName" />
            <h2>{{ item.new_title }}</h2>
            <p>{{ item.new_content }}</p>
        </div>
	</div>
</template>

<script>
	import { Loading } from 'element-ui'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
                // pageIndex: 1,
                // pageSize: 10,
                // loading: false,
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

                let apiUrl = 'api/WxTakePhotoDemo/DataForView?entityId='
	          	let url = localStorage.XrmBaseUrl + apiUrl
	          	let config = {
	          		 headers: {'Authorization': 'Basic ' + localStorage.XrmAuthToken}
	          	}
                console.log(this.listData)
	            this.$http.get(url, config)
	                .then((resp) => {
                        loading.close()
                        for(var i = 0; i < resp.data.length; i++){
    						this.listData.push(resp.data[i])
    					}
                        console.log(this.listData)
	                }, (err) => {
                        loading.close()
    					Toast({
    						message: err.response.data
    						// iconClass: 'icon icon-success',
    						// position: 'middle',
    						// duration: 3000
    					})
	                })
            }
            // loadMore() {
            //     this.loading = true
			// 	this.pageIndex += 1
            //     this.loadData()
            // }
		}
	}
</script>

<style scoped>
.image-class{
    width: 200px;
}
</style>
