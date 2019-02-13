let util = {};

util.title = function (title) {
    title = title ? title + ' - FLOW 福禄官网' : 'FLOW 福禄官网';
    window.document.title = title;
};

export default util;
