/**
 * Created by HMX on 2017/6/12.
 * 说明：使用 js 实现 java 中的 map 方法
 */
'use strict';
class Map {
    constructor () {
        // 声明一个容器，存储对象
        this.container = {};
    }

    /**
     * @description  将 key-value 放入 map 中
     * @param key     键
     * @param value   值
     * @example  new Map().put('key1', 'key1的测试值')
     * @explain  将传入的 value 绑定到 key1 这个键中。
     * @returns {*}   出错异常
     */
    put(key, value) {
        try {
            if (key !== null && key !== '') {
                this.container[key] = value;
            }
        } catch (e) {
            return e;
        }
    }

    /**
     * @description 获取该 key 的值
     * @param key   键
     * @returns  该 key 的值
     * @example  new Map().get('key1')
     */
    get(key) {
        try {
            return this.container[key];
        } catch (e) {
            return e;
        }
    }

    /**
     * @description 判断 map 中所以的 key，是否包含指定的 key
     * @param key 键
     * @returns  Boolean  包含返回 true
     */
    containsKey(key) {
        try {
            for (var p in this.container) {
                if (p === key) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            return e;
        }
    };

    /**
     * @description 判断 map 中所以的 key 的值，是否包含指定的 value
     * @param value  值
     * @returns Boolean  包含返回 true
     */
    containsValue(value) {
        try {
            for (var p in this.container) {
                if (this.container[p] === value) {
                    return true;
                }
            }
            return false;
        }
        catch (e) {
            return e;
        }
    }

    /**
     * @description 删除 map 中指定的 key
     * @param key   要删除的键
     * @returns {*} 出错异常
     */
    remove(key) {
        try {
            delete this.container[key];
        } catch (e) {
            return e;
        }
    }

    /**
     * @description 清空 map，会对整个 map 中的数据删除，谨慎使用
     * @returns {*} 出错异常
     */
    clear() {
        try {
            delete this.container;
            this.container = {};
        } catch (e) {
            return e;
        }
    }

    /**
     * @description 判断 map 是否为空
     * @returns {boolean}
     */
    isEmpty() {
        if (this.getKeys().length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @description 返回 map 中所以的 key，并组成数组类型返回
     * @returns {Array}
     */
    getKeys() {
        var keys = new Array();
        for (var p in this.container) {
            keys.push(p);
        }
        return keys;
    }

    /**
     * @description 获取 map 的大小
     * @returns {Number}
     */
    getSize() {
        return this.getKeys().length;
    }

    /**
     * @description 返回 map 中的所有 key 里面的 value，并组成数组类型返回
     * @returns {Array}
     */
    getValues() {
        var values = new Array();
        var keys = this.getKeys();
        for (var i = 0; i < keys.length; i++) {
            values.push(this.container[keys[i]]);
        }
        return values;
    }
}