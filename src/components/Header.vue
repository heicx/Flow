<template>
	<div class="header-topbar">
		<div class="container clearfix">
			<div class="topbar-logo"></div>
			<div class="topbar-tabs">
				<router-link v-for='(item, index) in list' :key='index' :class='{"active": item.alias == $route.name}' :to='item.link' tag='a'>{{item.name}}{{$route.test}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '首页',
					alias: 'index',
					link: '/'
				},
				{
					name: '产品技术',
					alias: 'product',
					link: '/tech'
				},
				{
					name: '在线商城',
					alias: 'shop',
					link: '/shop'
				}
			]
		}
	},
    methods: {
	},
    computed: {
    },
    created () {
		console.log(this.$route.test)
    }
}
</script>