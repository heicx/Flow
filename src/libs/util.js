let util = {};

util.title = function (title) {
    title = title ? 'FLOW福禄官网 - ' + title : 'FLOW福禄官网';
    window.document.title = title;
};

util.isMobile = function () {
    let ua = navigator.userAgent;
    return !!ua.match(/Android/i) || !!ua.match(/iPhone|iPad|iPod/i);
}

export default util;
