/**
 * Created by HMX on 2017/6/5.
 */
'use strict';
class usually {
    constructor() {
    }

    /**
     * 将字符串转换日期格式
     * 支持字符串格式：'2017/05/12 15:23:30', '2017-05-12 15:23:30', '20170512 15:23:30'
     */
    strToDate(str) {
        let toDate;
        switch ( str.substring(4, 5) ) {
            case '-':
                toDate = new Date(str.replace(/-/g, "/"));
                break;
            case '/':
                toDate = new Date(str);
                break;
            default:
                // '20170512 15:23:30'
                toDate = new Date(str.slice(0, 4) + '/' + str.slice(4, 6) + '/'+str.slice(6));
                break;
        }
        return toDate;
    }

}