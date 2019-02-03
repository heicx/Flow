import API from '../libs/request';
import * as types from './mutation-types';

// 用户登录
export const login = ({commit}, params) => {
    return API.post('login', params).then(ret => {
        commit(types.MALL_LOGIN, ret);
        return ret;
    })
}

// 用户注册
export const register = ({commit}, params) => {
    return API.post('register', params).then(ret => {
        return ret;
    })
}

// 退出登录
export const logout = ({commit}) => {
    return API.get('logout').then(ret => {
        commit(types.MALL_LOGOUT, ret);
    })
}

// 发送验证码
export const sendCaptcha = ({commit}, params) => {
    return API.post('sendCaptcha', params).then(ret => {
        return ret;
    })
}

// 校验登录状态
export const isLogin = ({commit}) => {
    return API.get('isLogin', {async: true}).then(data => {
        commit(types.MALL_LOGIN, data);
        return data;
    })
}

// 区县列表数据
export const cityList = ({commit}, params) => {
    return API.get('cityList', params).then(ret => {
        return ret;
    });
}

// 省市列表
export const areaList = ({commit}, params) => {
    return API.get('areaList', params).then(ret => {
        return ret;
    });
}

// 收货地址列表
export const addressList = ({commit}) => {
    return API.get('addressList').then(ret => {
        return ret;
    });
}

// 添加收货地址
export const addAddress = ({commit}, params) => {
    return API.post('addAddress', params).then(ret => {
        return ret;
    });
}

// 删除收货地址
export const delAddress = ({commit}, params) => {
    return API.post('delAddress', params).then(ret => {
        return ret;
    });
}

// 商品下单
export const checkoutOrder = ({commit}, params) => {
    return API.post('checkoutOrder', params).then(ret => {
        return ret;
    });
}

// 校验订单
export const checkOrder = ({commit}, params) => {
    return API.get('checkOrder', params).then(ret => {
        return ret;
    });
}

// 微信下单，生成支付码
export const payOrder = ({commit}, params) => {
    return API.post('payOrder', params).then(ret => {
        return ret;
    });
}

// 获取微信支付二维码
export const getQRImg = ({commit}) => {
    return API.get('getQRImg').then(ret => {
        return ret;
    });
}

// 微信支付订单查询
export const checkWechatOrder = ({commit}) => {
    return API.post('checkWechatOrder').then(ret => {
        return ret;
    });
}

// 订单列表
export const getOrderList = ({commit}) => {
    return API.get('orderList').then(ret => {
        return ret;
    });
}

// 取消订单
export const cancelOrder = ({commit}, params) => {
    return API.post('cancelOrder', params).then(ret => {
        return ret;
    })
}

// 用户信息
export const getUserInfo = ({commit}) => {
    return API.get('getUserInfo').then(ret => {
        return ret;
    })
}
