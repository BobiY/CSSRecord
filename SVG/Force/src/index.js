import Vector from "./Vector";
import { defaultCount, subductionCoefficient, SVG_NS, CIRCLE_R, DISTANCE, COEFFICIENT_OF_ELASTICITY } from "./constant";
import Drag from "./Drag/index";
import Utils from "./Utils";
import Event from "./EventListener/index";
import Circle from "./SVGGraph/baseGraph/circle";
const event = Event.getInstance();
export default class Force{
    // root 根元素  eleCount 要生成的元素个数
    constructor(root, eleCount) {
        this.update = this.update.bind(this);
        this.count = 0;
        this.root = root;
        this.eleCount = eleCount;
        this.circle = [];
        this.paused = false;
        const boundBox = root.getBoundingClientRect();
        this.xRange = [0, boundBox.width];
        this.yRange = [0, boundBox.height];
        this.path = this.initPath();
        this.rootSVG = this.initRoot();
        this.rootSVG.appendChild(this.path);
        this.root.appendChild(this.rootSVG);
        this.initMoveEle(eleCount);
        this.initEvent();
        this.start();
    }

    // 初始化 SVG 元素
    initRoot() {
        const svg = this.rootSVG = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('width', "100%");
        svg.setAttribute('height', '100%');
        return svg;
    }
    // 初始化页面元素
    initMoveEle(num) {
        return new Array(num).fill(1).forEach( item => { this.createCircle() } )
    }

    // 初始化连线的 path
    initPath() {
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute("fill", "none");
        path.setAttribute('stroke', '#333');
        return path;
    }
    createCircle() {
        const pos = this.randomPos();
        const circle = new Circle({
            cx: pos.x,
            cy: pos.y,
            r: CIRCLE_R,
            fill: `hsl(${Math.random()*240}, ${50 + Math.random()*50}%, 60%)`
        });
        circle.addEvent('mousedown', () => {
            event.emit('end');
        })
        circle.addEvent('mousemove', () => {
            event.emit('start1', circle);
        });
        circle.addEvent('mouseup', () => {
            event.emit('start');
        })
        circle.s = new Vector(pos.x, pos.y);  // 初始位移向量
        circle.v = new Vector(); // 初始速度向量
        circle.a = new Vector(); // 初始加速度向量;
        circle.x = pos.x;  // 记录元素的横坐标
        circle.y = pos.y;  // 记录元素的纵坐标
        circle.idx = Math.random();

        this.circle.push(circle);
        this.rootSVG.appendChild(circle.getEle());

        // 初始化拖拽
        new Drag(circle);
    }
    initEvent() { // 注册时间，可以在其他地方调用
        event.addEvent('start', this.start, this);
        event.addEvent('start1', this.start1, this);
        event.addEvent('end', this.end, this);
    }
    randomPos() {
        const ins = Utils.getInstance().getRandom;
        return {
            x: ins(...this.xRange),
            y: ins(...this.yRange)
        }
    }

    // 计算两点之间力的合力
    calcF(originF,circle1, circle2) {
        const newPoints = Vector.formPoints(circle1, circle2);
        const len = newPoints.length();
        const dis = len - DISTANCE;
        // 基于弹簧模型
        const f = newPoints.normalize().multiply(dis*COEFFICIENT_OF_ELASTICITY);
        return originF.add(f);
    }

    // animate (动画)
    update() {
        this.count ++;
        var frameTime = +new Date();
        var t = frameTime - this.lastFrameTime;;
        this.lastFrameTime = frameTime;
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
        console.log(this.count)
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
        this.count = 0;
        this.lastFrameTime = +new Date();
        requestAnimationFrame(this.update);
    }
    // animate (动画)
    start1(ele) { // 鼠标拖动时执行的动画
        // 目前存在的问题是，拖动一次移动一次，停止拖拽则不动了
        this.lastFrameTime = +new Date();
        requestAnimationFrame(this.update1.bind(this, ele));
    }
    update1(ele) {
        var frameTime = +new Date();
        var t = frameTime - this.lastFrameTime;;
        t/=480;
        // ele 作为轴心元素 其他
        this.circle.forEach( item => {
            if( item.idx === ele.idx ) return;
            var originF = new Vector();
            this.circle.forEach( sub => {
                if ( item.idx === sub.idx ) return;
                originF = this.calcF(originF, item, sub);
            } );
            // 这里计算的是瞬时加速度，模拟极端时间内，物体做的是匀加速运动
            item.a = originF; // f = ma m=1(忽略质量对加速度的影响)
            item.v = item.v.add(item.a.multiply(t));
            item.s = item.s.add(item.v.multiply(t));
            item.setAttribute('cx', item.s.x);
            item.setAttribute('cy', item.s.y);
            item.x = item.s.x;
            item.y = item.s.y;
        } );
        this.link();
    }

    // 动画暂停
    paused() {
        this.paused = true;
    }
    
    // restart 暂停后重新执行
    restart() {
        this.paused = false;
        
    }

    // 动画终止
    end() {
        this.count = defaultCount+200;
        this.updateCount = defaultCount+200;
    }
}
