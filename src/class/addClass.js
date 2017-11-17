const hasClass = require('./hasClass');

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

module.exports = addClass;
