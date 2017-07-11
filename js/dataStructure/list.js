/**
 * Created by HMX on 2017/7/7.
 */
'use strict';
class List {
    constructor() {
        this.listSize = 0;  // listSize是属性
        this.pos = 0;
        this.dataStore = []; // 初始化一个空数组来保存列表元素,即底层数据结构是数组
    }

    /**
     * @name  append()
     * @description  在列表的末尾添加新元素
     *     该方法给列表的下一个位置增加一个新的元素，
     *     这个位置刚好等于变量 listSize的值，新元素就位后，
     *     变量 listSize加 1，[]访问的时候元素个数直接就 ++了
     * @param element
     */
    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    /**
     * @name  find()
     * @description
     *     该方法通过对数组对象 dataStore进行迭代，查找给定的元素。
     *     如果找到，就返回该元素在列表中的位置，否则返回 -1
     *     -1 是在数组中找不到指定元素时返回的标准值
     * @param element
     * @returns {number}
     */
    find(element) {
        for (var i = 0, ii = this.dataStore.length; i < ii; ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    }
}

var names = new List();
names.append("Claython");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

console.log(names)


