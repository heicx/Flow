<template>
	<div class="header-nav" v-if="!isHide">
    <div class="container clearfix">
      <ul class="nav-list">
        <li v-for='(item, index) in list' :key='index' :class='{"active": item.link == $route.path}'>
          <router-link :to='item.link'>{{item.name}}</router-link>
        </li>
      </ul>
      <a class="nav-btn" href="/#/shop">现在购买</a>
    </div>
	</div>
</template>

<script>

export default {
  props: ['isHide'],
  data() {
    return {
      list: [
        {
          name: '核心技术',
          link: '/tech'
        },
        {
          name: '产品规格',
          link: '/spec'
        }
      ]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    checkoutOrder (arrGoods) {
      let oOrder = {};
      let orderId = (new Date()).getTime();

      oOrder = {
        id: orderId,
        g: arrGoods
      }

      sessionStorage.setItem('gs', encodeURIComponent(JSON.stringify(oOrder)));
      this.$router.push(`/checkout/${orderId}`);
    }
  },
  components: {
  }
}
</script>

<style lang="sass"></style>