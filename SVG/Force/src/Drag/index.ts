import Vector from "../Vector";
import Event from "../EventListener/index";

const event = Event.getInstance();
export default class Drag{
    ele: any;
    initX: number;
    initY: number;
    down: boolean;
    start: any;
    update: any;
    target: any;
    end: any;
    constructor(ele: any ) {
        this.initX = 0;
        this.initY = 0;
        this.target = null;
        this.down = false;
        this.ele = ele;
        this.mousedown = this.mousedown.bind(this);
        this.mousemove = this.mousemove.bind(this);
        this.mouseup = this.mouseup.bind(this);
        ele.addEventListener('mousedown', this.mousedown);
        document.addEventListener('mouseup', this.mouseup);
        document.addEventListener('mousemove', this.mousemove);
    }

    mousedown(e: any) {
        // 鼠标落下事件
        if(e.target !== this.ele.getEle()) {return ;}
        this.target = e.target;
        // 当触发鼠标落下事件时，将原有的动画直接停止
        // event.emit('end');
        if ( this.ele && this.ele.eventMap.has('mousedown') ) {
            this.ele.eventMap.get('mousedown').callback();
        }
        this.initX = e.layerX;
        this.initY = e.layerY;
        this.down = true;
    }

    mouseup(e: any) {
        // 鼠标抬起事件
        if(this.target !== this.ele.getEle()) {return ;}
        this.down = false;
        this.initY = 0;
        this.initX = 0;
        this.target = null;
        if ( this.ele && this.ele.eventMap.has('mouseup') ) {
            this.ele.eventMap.get('mouseup').callback();
        }
        // event.emit('start');
    }

    mousemove(e: any) {
        // 鼠标移动
        if ( !this.down  ) { return; }
        const dx = e.layerX - this.initX;
        const dy = e.layerY - this.initY;
        this.ele.x += dx;
        this.ele.y += dy;
        this.initX = e.layerX;
        this.initY = e.layerY;
        this.ele.setAttribute('cx', this.ele.x);
        this.ele.setAttribute('cy', this.ele.y);
        this.ele.s = new Vector(this.ele.x, this.ele.y);  // 放置 s 不更新使元素重回原来位置

        // 更新其他元素位置
        // event.emit('start1', this.ele);
        if ( this.ele && this.ele.eventMap.has('mousemove') ) {
            this.ele.eventMap.get('mousemove').callback();
        }
    }
}