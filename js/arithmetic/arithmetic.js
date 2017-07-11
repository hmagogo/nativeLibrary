/**
 * Created by HMX on 2017/7/7.
 * 说明：算法集合，以数字 (Number)类型为主
 */

/**
 * @name toMax
 * @description
 *     将数组里面的数值从 小到大 进行排序
 *     这种方式叫 插入排序，原理是逐个检测，最大的往最后丢！每次减少一次检测!
 * @param arr
 * @returns {Array.<T>}
 * @example  toMax([12, 55, 5, 30, 70, 20]) => [5, 12, 20, 30, 55, 70]
 */
function toMax(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    })
}

/**
 * @name toMin
 * @description  将数组里面的数值从 大到小 进行排序。原理和 toMax描述一样。
 * @param arr
 * @returns {Array.<T>}
 * @example  toMax([12, 55, 5, 30, 70, 20]) => [70, 55, 30, 20, 12, 5]
 */
function toMin(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    })
}

/**
 * @name colon  (冒泡排序)
 * @description 原理在于逐个双双检测，交换两两之间的大小关系，其实最终的目的也是逐轮把最大数丢最后面.
 * @param arr
 * @returns {Array.<T>}
 * @example  colon([12, 55, 5, 30, 70, 20]) => [5, 12, 20, 30, 55, 70]
 */
function colon(arr) {
    for (var i = 0, ii = arr.length; i < ii; i++) {
        for (var k = 0, kk = ii-i-1, temp; k < kk; k++) {
            console.log(k)
            if (arr[k] > arr[k+1]) {
                temp = arr[k+1];
                arr[k+1] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}

console.log(colon([12, 55, 5, 30, 70, 20]))

/**
 * @name triangle  (杨辉三角)
 * @description 这是一个杨辉三角例子
 * @param row   行数
 * @returns     数组  [[1],[1, 1],[1, 2, 1],[1, 3, 3, 1],[1, 4, 6, 4, 1]]
 * @example   triangle(5)  列出 5行的杨辉三角，最后以数组形式返回
 *            [1]
 *          [1, 1]
 *        [1, 2, 1]
 *      [1, 3, 3, 1]
 *    [1, 4, 6, 4, 1]
 */
function triangle(row) {
    var arrys = new Array();
    for (var i = 0, ii = row; i < ii; i++) {
        var arrSon = [];
        for (var k = 0, kk = i + 1; k < kk; k++) {
            if (i === 0 || k === 0 || k === i) {
                arrSon.push(1);
            } else {
                arrSon.push(arrys[i-1][k-1] + arrys[i-1][k]);
            }
        }
        // console.log(arrSon);
        arrys.push(arrSon)
    }
    return arrys;
}
