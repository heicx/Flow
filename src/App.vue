<template>
  <div id="app" class="app-wrap">
		<app-header></app-header>
    <app-navigation :isHide='isHide'></app-navigation>
    <router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/Header.vue';
import appNavigation from './components/Navigation.vue';
import appFooter from './components/Footer.vue';
import Bus from './bus';

export default {
  name: 'app',
  data() {
    return {
      isHide: true
    }
  },
  mounted () {
    this.isHide = !(this.$route.name == 'product' || this.$route.name == 'spec');
  },
  created() {
    Bus.$on('showNav', (status)=> {
      this.isHide = !status;
    });

    // Bus.$on('navHideBtnEvent', (status)=> {
    //   this.navHide = status;
    // });
  },
  components: {
      appHeader,
      appNavigation,
      appFooter
  },
  methods: {
  }
}
</script>

<style src='./assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1400px;
}
</style>