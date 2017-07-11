/**
 * Created by HMX on 2017/6/13.
 * 说明：网络协议请求
 */
'use strict';

function $http(requestConfig) {

}

function paramSerializer(params) {
    if (!params) return '';
    var parts = [];

    forEachSorted(params, function (key, value) {
        if (value === null || isUndefined(value)) return;
        if (_isArray(value)) {
            forEach(value, function (v) {
                parts.push(encodeUriQuery(key) + '=' +encodeUriQuery(serializeValue(v)))
            })
        }
    })
}

paramSerializer({'foo': ['bar', 'baz']});