/**
 * 
 * @desc  获取指定url参数数据
 * @param  {String} paramName
 * @return {String}
 */
function getUrlParamHash(paramName) {
    var matches = location.search.match(/([^\?\=\&]+\=[^\&]+)/g);
    if (matches) {
        var querys = {};
        matches.forEach(function (tmp) {
            var kv = tmp.split('=');
            kv[1] && (querys[kv[0]] = decodeURIComponent(kv[1]));
        });
        return paramName ? querys[paramName] : querys;
    }
}

module.exports = getUrlParamHash;