const setCookie = require('./setCookie');

function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

module.exports = removeCookie;