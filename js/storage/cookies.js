/**
 * Created by HMX on 2017/6/21.
 * 说明：cookies 操作库，需要引入 public.js
 */
!(function (global, factory) {
    if (typeof exports === 'object') {   // 提供 模板块写法 比如 CommonJS
        module.exports = factory();
    } else {
        global.Cookie = factory();  // 将 Cookie 赋给浏览器全局
    }
}(this, function () {
    'use strict';

    function Cookie(key, value, opts) {
        if (value === void 0) {
            return Cookie.get(key);
        } else if (value === null) {
            Cookie.remove(key);
        } else {
            Cookie.set(key, value, opts);
        }
    }

    /**
     * @name Cookie.get
     * @description  获取 cookie值，可通过密钥获取
     * @param key    cookie 名称
     * @param raw    true 获取没有编码的值  false 对编码的值进行解码
     * @returns {*}
     */
    Cookie.get = function (key, raw) {
        if (typeof key !== 'string' || !key) return null;

        key = '(?:^|; )' + escapeRe(key) + '(?:=([^;]*?))?(?:;|$)';

        var reKey = new RegExp(key);
        var res = reKey.exec(document.cookie);
        // decodeURIComponent函数可对 encodeURIComponent函数编码的 URI 进行解码。
        return res !== null ? (raw ? res[1] : decodeURIComponent(res[1])) : null;
    };

    /**
     * @name Cookie.remove
     * @description  删除指定的 cookie
     * @param key
     */
    Cookie.remove = function (key) {
        Cookie.set(key, '', { expires: new Date() });
    };

    /**
     * @name Cookie.set
     * @description 设置一个 Cookie
     * @param key     cookie 名称
     * @param value   cookie 值
     * @param raw     true 没有编码的值  false 编码该值
     * @param opts    cookie 选项
     */
    Cookie.set = function (key, value, raw, opts) {
        if (raw !== true) {
            opts = raw;
            raw = false;
        }
        opts = opts ? convert(opts) : convert({});

        // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
        //（比如 ;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号） http:// 会输出 http%3A%2F%2F
        // 但不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
        var _cookie = key + '=' + (raw ? value : encodeURIComponent(value)) + opts;
        document.cookie = _cookie;
    };

    /**
     * @name escapeRe
     * @description 转义特殊字符
     * @param str
     * @returns {XML|void|string|*}
     */
    function escapeRe(str) {
        // 根据指定的 regexp或者字符，进行替换。 $& 表示与 regexp相匹配的子串(字符)。 regexp 正规表达式
        return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
    }

    /**
     * @name convert
     * @description 将对象转换为cookie选项字符串
     * @param opts
     */
    function convert(opts) {
        var res = '';

        for (var key in opts) {
            // 判断 key 是否在 opts 中
            if (opts.hasOwnProperty(key)) {
                // 设置过期时间
                if (key === 'expires') {
                    var expires = opts[key];
                    if (typeof expires !== 'object') {
                        expires += typeof expires === 'number' ? 'D' : '';
                        expires = computeExpires(expires);
                    }
                    // toUTCString() 将日期转换为（UTC）字符串日期
                    opts[key] = expires.toUTCString();
                }

                res += ';' + key + '=' + opts[key];
            }
        }

        // 如果 path没有在 opts对象里，则设置跟路径 '/'
        if (!opts.hasOwnProperty('path')) {
            res += ';path=/';
        }

        return res;
    }

    /**
     * @name computeExpires
     * @description 将给定的字符串返回一个日期
     * @param str
     */
    function computeExpires(str) {
        var expires = new Date();
        var lastCh = str.charAt(str.length - 1);
        var value = parseInt(str, 10);

        switch (lastCh) {
            case 'Y': expires.setFullYear(expires.getFullYear() + value); break;
            case 'M': expires.setMonth(expires.getMonth() + value); break;
            case 'D': expires.setDate(expires.getDate() + value); break;
            case 'h': expires.setHours(expires.getHours() + value); break;
            case 'm': expires.setMinutes(expires.getMinutes() + value); break;
            case 's': expires.setSeconds(expires.getSeconds() + value); break;
            default: expires = new Date(str);
        }

        return expires;
    }

    return Cookie;
}));