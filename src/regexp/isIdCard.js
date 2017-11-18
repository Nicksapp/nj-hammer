/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
// function isIdCard(str) {
//     return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
// }

function isIdCard(str) {
    var len, arrSplit, result, y, m, d; // 1 male 0 female
    len = value.length;
    result = true;
    if (len === 15) {
        arrSplit = value.match(/^(?:\d{6})(\d{2})(\d{2})(\d{2})(?:\d{3})$/);
        if (!arrSplit) {
            result = false;
        }
        else {
            y = parseInt('19' + arrSplit[1], 10);
            m = parseInt(arrSplit[2], 10);
            d = parseInt(arrSplit[3], 10);
        }
    } else if (len === 18) {
        //检验18位身份证的校验码是否正确。
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10
        var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
            check = '10X98765432';

        for (var i = 0, temp = 0; i < 17; i++) {
            temp += value.charAt(i) * weight[i];
        }
        if (check.charAt(temp % 11) !== value.charAt(17).toUpperCase()) {
            result = false;
        }
        arrSplit = value.match(/^(?:\d{6})(\d{4})(\d{2})(\d{2})(?:\d{3})(?:[0-9]|X)$/i);
        if (!arrSplit) {
            result = false;
        } else {
            y = parseInt(arrSplit[1], 10);
            m = parseInt(arrSplit[2], 10);
            d = parseInt(arrSplit[3], 10);
        }
    } else {
        result = false;
    }
    var date = new Date(y, m - 1, d);
    if (y !== date.getFullYear() || m !== date.getMonth() + 1 || d !== date.getDate()) {
        result = false;
    }
    return result;
}

module.exports = isIdCard