// 生成一个向量
interface IPoint{
    x: number;
    y: number;
}
export default class Vector {
    x: number;
    y: number;
    constructor(x=0,y=0) {
        this.x = x;
        this.y = y;
    }

    // 计算两个点形成的向量
    static formPoints(point1: IPoint, point2: IPoint) {
        return new Vector(point2.x - point1.x, point2.y - point1.y)
    }
    // 向量相加;
    add(point: IPoint) {
        return new Vector(this.x + point.x, this.y + point.y);
    }

    // 获取向量的长度
    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    
    // 向量标准化 ---》 将一个向量转换为单位向量
    normalize() {
        const length = this.length();
        return new Vector(this.x/length, this.y/length);
    }

    // 向量相乘
    multiply(scale: number) {
        // 乘法的思路是，先将初始向量单位化，然后在乘以新向量的长度，从而转换成新向量
        return new Vector(this.x*scale, this.y*scale)
    }
}