let util = {};

util.title = function (title) {
    title = title ? title + ' - FLOW 福禄官网' : 'FLOW 福禄官网';
    window.document.title = title;
};

util.isMobile = function () {
    let ua = navigator.userAgent;
    return !!ua.match(/Android/i) || !!ua.match(/iPhone|iPad|iPod/i);
}

export default util;
