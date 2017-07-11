/**
 * Created by HMX on 2017/6/19.
 * 说明：存放公用 js，提供全局使用
 */
'use strict';

var _toString = Object.prototype.toString;

/**
 * @name _isArray
 * @description 判断引入的是否为一个数组.
 */
var _isArray = Array.isArray;

/**
 * @name  isUndefined
 * @description 判断引用的值是否未定义.
 * @returns {boolean} True: `value` is undefined.  false: `value` is defined.
 */
function isUndefined(value) { return typeof value === 'undefined'; }

/**
 * @name isObject
 * @description 判断引用的值是否为对象，注意，JavaScript数组是对象
 * @param {*} value Reference to check.
 * @returns {boolean} True：`value` is an `Object` but not `null`.
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}

/**
 * @name isString
 * @description 判断引入的是否为字符串 `String`.
 * @returns {boolean} True: `value` is a `String`.
 */
function isString(value) {return typeof value === 'string';}

/**
 * @name isFunction
 * @description 判断引入的是否为函数.
 * @returns {boolean} True: is `function`.
 */
function isFunction(value) {return typeof value === 'function';}

/**
 * @name isDate
 * @description 判断引入的值是否为日期类型
 * @returns {boolean} True if `value` is a `Date`.
 */
function isDate(value) { return _toString.call(value) === '[object Date]'; }

/**
 * @name isRegExp
 * @description 判断引入的值是否为正则表达式
 * @returns {boolean} True is `RegExp`.
 */
function isRegExp(value) {
    return _toString.call(value) === '[object RegExp]';
}

// function isElement(node) {
//     return !!(node &&
//     (node.nodeName  // We are a direct element.
//     || (node.prop && node.attr && node.find)));
// }


function forEach(obj, iterator, context) {
    var key, length;
    if (obj) {
        if (_isArray(obj)) {
            for (key = 0, length = obj.length; key < length; key++) {
                iterator.call(context, obj[key], key, obj);
            }
        }
    }
    return obj;
}

function forEachSorted(obj, iterator, context) {
    var keys = Object.keys(obj).sort();  // 获取对象的键，并进行排序后返回
    for (var i = 0, ii = keys.length; i < ii; i++) {
        iterator.call(context, keys[i], obj[keys[i]]);
    }
    return keys;
}


function baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        // 如果 obj 不是对象，并且不是方法，则跳过当前循环
        if (!isObject(obj) && !isFunction(obj)) continue;
        var keys = Object.keys(obj);  // 遍历对象的 key，将 key以数组返回
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];

            if (deep && isObject(src)) {
                if (isDate(src)) {
                    dst[key] = new Date(src.valueOf());
                } else if (isRegExp(src)) {
                    dst[key] = new RegExp(src);
                } else if (src.nodeName) {          // 如果是 Dom节点，则克隆该节点
                    dst[key] = src.cloneNode(true); // 克隆并返回它的节点副本。 true 递归克隆当前节点的所有子孙节点。false 克隆当前节点
                }
                // else if (isElement(src)) {
                //     dst[key] = src.clone();
                // }
                else {
                    if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
                    baseExtend(dst[key], [src], true);
                }
            } else {
                dst[key] = src;
            }
        }
    }
    return dst;
}