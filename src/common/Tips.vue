<template>
	<div class="toast-wrapper">
        <div class="toast-tips" :class="{'on': isToastTips}"><label>{{toastTipsText}}</label></div>
	</div>
</template>

<script>
    export default {
        props: ['isToastTips', 'toastTipsText']
    }
</script>

<style lang="scss" scoped>
.toast-tips {
    opacity: 0;
    position: fixed;
    top: auto;
    bottom: 88px;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity .3s ease;
    text-align: center;
    margin-top: -19px;

    color: #715821;
    font-size: 14px;
    height: 38px;
    z-index: 100;
    &.on {
        opacity: 1;
        // display: block;
    }

    label {
        background: #f5dfa0;
        background: linear-gradient(#f9ecc0,#f5dfa0);
        border: 1px solid #dcba67;
        box-shadow: 0 1px 3px rgba(0,0,0,.15);
        padding: 0 13px;
        line-height: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 8px;
    }
}
</style>
