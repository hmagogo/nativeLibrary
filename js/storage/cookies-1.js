/**
 * Created by HMX on 2017/6/14.
 * 说明：cookies 操作库，需要引入 public.js
 */
(function (global) {'use strict';

    global.$cookie = {
        put: function (key, value, options) {
            cookieWriter(key, value, calcOptions(options));
        }
    };


    // var defaults = this.defaults = {};

    function calcOptions(options) {
        return options ? options : {};
        // return options ? Object.assign({}, defaults, options) : defaults;
        // return options ? extend({}, defaults, options) : defaults;
    }

    /**
     * @name cookieWriter
     * @requires $document
     * @description  这是一个写入 cookie 的函数
     * @param {string} name Cookie name
     * @param {string=} value Cookie value (if undefined, cookie will be deleted)
     * @param {Object=} options Object with options that need to be stored for the cookie.
     */
    function cookieWriter($document) {
        /**
         * @name  buildCookie
         * @description 构建 cookie 函数
         * @param name     cookie 名
         * @param value    cookie 值
         * @param options  cookie 选项
         * @returns {string}
         */
        function buildCookie(name, value, options) {
            var path, expires;
            options = options || {};
            expires = options.expires;

            // 设置 cookies 路径
            path = isUndefined(options.path) ? '/' : options.path;

            if (isUndefined(value)) {
                expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
                value = '';
            }

            if (isString(expires)) {
                expires = new Date(expires);
            }
            // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
            //（比如 ;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号） http:// 会输出 http%3A%2F%2F
            // 但不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
            var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            str += path ? ';path=' + path : '';
            str += options.domain ? ';domain=' + options.domain : '';
            str += expires ? ';expires=' + expires.toUTCString() : '';  // toUTCString() 将日期转换为（UTC）字符串日期
            str += options.secure ? ';secure' : '';

            // 按照 http://www.ietf.org/rfc/rfc2109.txt 浏览器必须至少允许:
            // - 300 cookies
            // - 20 cookies per unique domain
            // - 4096 bytes per cookie
            var cookieLength = str.length + 1;
            if (cookieLength > 4096) {
                console.warn("Cookie '" + name +
                    "' possibly not set or overflowed because it was too large (" +
                    cookieLength + " > 4096 bytes)!");
            }

            return str;
        }

        return function (name, value, options) {
            $document.cookie = buildCookie(name, value, options);
        }
    }

})(window);