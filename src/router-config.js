import VueRouter from 'vue-router'
import Bus from './bus';

import Home from './views/Home.vue'
import Spec from './views/Spec.vue'
import Tech from './views/Tech.vue'
import Effect from './views/Effect.vue'
import Shop from './views/Shop.vue'

import NotFound from './views/NotFound.vue'

import Util from './libs/util';

let router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            // redirect: '/overview',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            name: 'index',
            path: '/effect',
            component: Effect,
            meta: {
                title: '电子烟的减害效果'
            }
        },
        {
            name: 'product',
            path: '/tech',
            component: Tech,
            meta: {
                title: '核心技术'
            }
        },
        {
            name: 'product',
            path: '/spec',
            component: Spec,
            meta: {
                title: '产品规格'
            }
        },
        {
            name: 'shop',
            path: '/shop',
            component: Shop,
            meta: {
                title: '在线商城'
            }
        },
        { 
            path: '*',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    }
});

router.beforeEach((to, from, next)=> {
    if(to.name === 'product' || to.name === 'spec') {
        Bus.$emit('showNav', true);
    } else {
        Bus.$emit('showNav', false);
    }

    Util.title(to.meta.title);

    next();
});

export default router;