/**
 * Created by HMX on 2017/5/26.
 * 说明：随机 js 集
 */
'use strict';
class Random {
    constructor(){}

    /**
     * 随机抽取数组中的任意一个值，并返回这个值
     * @param arr 数组  [1, 5, 6, 7, 10, 63, 44, 32, 12, 26]
     * @return    数组中任意的一个值  6 或 32 或 12 或 7 等等
     */
    arrayExtract(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /**
     * 随机抽取指定范围内的整数值
     * @param start  开始整数
     * @param end    结束整数
     * @returns {Number}  范围内的任意一个值
     * @example  new Random().integerRange(1, 29)
     * @explain  取 1 至 29 中的任意一个值，可能是 1 或 5 或 12 或 29 等。
     */
    integerRange(start, end) {
        return parseInt(Math.random()*(end-start+1) + start);
    }
}

