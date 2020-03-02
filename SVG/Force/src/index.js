import Vector from "./Vector";
import { defaultCount, subductionCoefficient, SVG_NS, CIRCLE_R, DISTANCE, COEFFICIENT_OF_ELASTICITY } from "./constant";

export default class Force{
    // root 根元素  eleCount 要生成的元素个数
    constructor(root, eleCount) {
        const boundBox = root.getBoundingClientRect();
        this.update = this.update.bind(this);
        this.lastFrameTime = +new Date();
        this.count = 0;
        this.root = root;
        this.eleCount = eleCount;
        this.rootSVG = document.createElementNS(SVG_NS, 'svg'); 
        this.path = document.createElementNS(SVG_NS, 'path');
        this.rootSVG.appendChild(this.path);
        this.path.setAttribute("fill", "none");
        this.path.setAttribute('stroke', '#333');
        this.rootSVG.setAttribute('width', "100%");
        this.rootSVG.setAttribute('height', '100%');
        this.root.appendChild(this.rootSVG);
        this.xRange = [0, boundBox.width];
        this.yRange = [0, boundBox.height];
        this.circle = [];
        new Array(eleCount).fill(1).forEach( item => { this.createCircle() } )
        this.start();
    }
    createCircle() {
        const pos = this.randomPos();
        const circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttribute('cx', pos.x);
        circle.setAttribute('cy', pos.y);
        circle.setAttribute('r', CIRCLE_R);
        circle.setAttribute('fill', `hsl(${Math.random()*240}, ${50 + Math.random()*50}%, 60%)`);
        circle.s = new Vector(pos.x, pos.y);  // 初始位移向量
        circle.v = new Vector(); // 初始速度向量
        circle.a = new Vector(); // 初始加速度向量;
        circle.x = pos.x;  // 记录元素的横坐标
        circle.y = pos.y;  // 记录元素的纵坐标
        this.circle.push(circle);
        this.rootSVG.appendChild(circle);
    }
    randomPos() {
        return {
            x: Math.random()*(this.xRange[1] - this.xRange[0]),
            y: Math.random()*(this.yRange[1] - this.yRange[0])
        }
    }

    // 计算两点之间力的合力
    calcF(originF,circle1, circle2) {
        const newPoints = Vector.formPoints(circle1, circle2);
        const len = newPoints.length();
        const dis = len - DISTANCE;
        const f = newPoints.normalize().multiply(dis*COEFFICIENT_OF_ELASTICITY);

        return originF.add(f);
    }

    // animate (动画)
    update() {
        this.count ++;
        var frameTime = +new Date();
        var t = frameTime - this.lastFrameTime;;
        this.lastFrameTime = frameTime
        t/=500;  // 
        this.circle.forEach( item => {
            var originF = new Vector();
            this.circle.forEach( sub => {
                if ( item === sub ) return;
                originF = this.calcF(originF, item, sub);
            } );
            // 这里计算的是瞬时加速度，模拟极端时间内，物体做的是匀加速运动
            item.a = originF; // f = ma m=1(忽略质量对加速度的影响)
            item.v = item.v.add(item.a.multiply(t)).multiply(subductionCoefficient);
            item.s = item.s.add(item.v.multiply(t));
            item.setAttribute('cx', item.s.x);
            item.setAttribute('cy', item.s.y);
            item.x = item.s.x;
            item.y = item.s.y;
        } );
        this.link();
        if( this.count <= defaultCount ) {
            requestAnimationFrame(this.update)
        }
    }
    link() {
        // 连线的思路，点对点单条连线
        const path = [];
        this.circle.forEach( iA => {
            this.circle.forEach( iB => {
                if ( iA == iB ) {
                    return;
                } 
                path.push(`M ${iA.x} ${iA.y}`);
                path.push(`L ${iB.x} ${iB.y}`);
            } )
        } );
        this.path.setAttribute('d', path.join(","));
    }
    start() {
        requestAnimationFrame(this.update);
    }
}
