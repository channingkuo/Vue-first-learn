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
                this.fetchDataFromDB(function(resp){

                }, function(err){

                })
            },
            loadData: function(){
                this.fetchDataFromDB(function(resp){

                }, function(err){

                })
            },
            fetchDataFromDB: function(success, error){

            },
            loadMore() {
                this.loading = true

                this.fetchDataFromDB(function(resp){

                }, function(err){

                })

                this.loading = false
            }
		}
	}
</script>

<style scoped>

</style>
