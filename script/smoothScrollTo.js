/**
 * @description 左右方向的平滑滚动
 * 
 * @param {DOM} target 当前元素$('target')
 * @param {Number} lPosition 移动位置
 * @param {Number} scrollDuration 移动时间
 * @param {left|right} turn 移动方向(left, right)
 */

function smoothScrollTo(target, lPosition, scrollDuration, turn) {
    var scrollLeft = target.scrollLeft(),
        scrollStep = Math.PI / (scrollDuration / 15),
        cosParameter = scrollLeft / 2;

    var scrollCount = 0,
        scrollMargin,
        scrollInterval;
    if (turn === 'left') {
        scrollInterval = setInterval(function () {
            if (target.scrollLeft() > lPosition) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                if (scrollLeft - scrollMargin > 0) {
                    target.scrollLeft(scrollLeft - scrollMargin);
                }
            }
            else clearInterval(scrollInterval);
        }, 15);
    } else {
        scrollInterval = setInterval(function () {
            if (target.scrollLeft() < lPosition) {
                scrollCount = scrollCount + 1;
                scrollMargin = lPosition - lPosition * Math.cos(scrollCount * scrollStep);
                if (scrollMargin > 0) {
                    target.scrollLeft(scrollLeft + scrollMargin);
                } else {
                    target.scrollLeft(lPosition);
                }
            }
            else clearInterval(scrollInterval);
        }, 15);
    }
}

module.exports = smoothScrollTo;