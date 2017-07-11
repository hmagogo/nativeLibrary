/**
 * Created by HMX on 2017/6/16.
 */
var a = {};

/**
 * 第一个参数: 目标对象
 * 第二个参数: 需要定义的属性或方法的名字。
 * 第三个参数: 目标属性所拥有的特性。（descriptor）
 */
Object.defineProperty(a, "b",{
    set:function(newValue){
        console.log("设置新值为 " + newValue);
    },
    get:function(){
        console.log("哈哈，你取不到");
    }
});

a.b = 1;   // 这时走的是 set 方法，控制台会打印：设置新值为 1
console.log(a.b);  // 这时走的是 get 方法，控制台会打印：哈哈，你取不到