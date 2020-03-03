// 工具函数

export default class Utils {
    constructor() {
        this.getColor = this.getColor.bind(this);
    }
    getRandom(...rest) {  // 获取范围内的随机数
        // 必须传参数，而且参数只能是两个
        if( !rest || rest.length !==2 ) {
            return 0;
        }
        return Math.random()*(rest[1] - rest[0]) + rest[0];
    }
    getColor(colorCount) { // 获取几种随机颜色
        if( !isFinite(colorCount) ) {
            return [];
        }
        return Array(colorCount).fill(0).map( item => `hsl(${this.getRandom(0, 360)}, 100%, 60%)` )
    }
}