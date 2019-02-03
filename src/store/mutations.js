import * as types from './mutation-types';

export default {
    [types.MALL_LOGIN] (state, ret) {
        if(ret && ret.status) {
            state.isLogin = true;
            state.user = ret.data;
            sessionStorage.setItem('_usr', true);
        }else {
            state.isLogin = false;
            state.user = {};
            sessionStorage.removeItem('_usr');
        }
    },
    [types.MALL_LOGOUT] (state, ret) {
        if(ret && ret.status) {
            state.isLogin = false;
            state.user = {};
            sessionStorage.removeItem('_usr');
        }
    }
}