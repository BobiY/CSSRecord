function Vector(x,y){  // 生成一个矢量
    this.x = x || 0;
    this.y = y || 0;
}
Vector.prototype = {
    constructor:Vector,
    square:function(){
        return this.x * this.x + this.y * this.y; 
    },
    length:function(){
        return Math.sqrt(this.square()); 
    },
    add:function(q){
        return new Vector(this.x + q.x,this.y+q.y); 
    },
    minus:function(q){
        return new Vector(this.x - q.x,this.y-q.y);  
    },
    multipy:function(scale){
        return new Vector(this.x*scale,this.y*scale);  
    },
    normalize:function(length){
        if(length === undefined){
            length = 1;
        }
        // 先求出这个方向上的单位向量，再求出这个方向上的力
        // 只需要这条先上的一小段表示这个弹簧力
        return this.multipy(length / this.length());
    }
};
Vector.fromPoints = function(p1,p2){
    return new Vector(p2.x - p1.x, p2.y - p1.y);
};