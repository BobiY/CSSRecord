function find(arr,item){
    for(var i=0; i<arr.length; i++){
        if(arr[i].source === item){
            return arr[i]
        }
    }
    return null;
}
function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}

function deepClone(source,uniqueList){
    if(!isObject(source)) return source;

    if(!uniqueList) uniqueList = [];    //   初始化数据

    var target = Array.isArray(source) ? [] : {};

    var uniqueData = find(uniqueList,source);
    if(uniqueData) return uniqueData.target;


    uniqueList.push({
        source:source,
        target:target
    });

    for(var key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(isObject(source[key])){
                target[key] = deepClone(source[key], uniqueList)      //   传入数组
            }else{
                target[key] = source[key];
            }
        }
    }
    return target;
}
var a = {
    name:"key1",
    eat:[
        "苹果",
        "香蕉"
    ]
}
a.d = a;
b = deepClone(a);
//    console.log(b);
a.eat[2] = "桃";
console.log(a);
console.log(b);