// 圆形
import { ICircleOption, PARAM } from "../IBaseGraph/circle";
import BaseGraph from "../IBaseGraph/BaseGraph";
const SVG_NS = 'http://www.w3.org/2000/svg';
export default class Circle implements BaseGraph{
    cx=0;
    cy=0;
    r=0;
    fill='none';
    stroke='#333';
    strokeWidth='2';
    circle: SVGElement | null=null;
    eventMap: Map<string, any>;
    constructor(option: ICircleOption) {
        const { cx, cy, r, fill, stroke } = option;
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.circle = null;
        this.eventMap = new Map();
        // 初始化元素
        this.createCircle();
    }

    createCircle() {
        this.circle = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttribute(item, `${this[item]}`) } )
    }
    setAttribute(type: string, value: string) {
        this.circle.setAttribute(type, value);
    }
    getAttribute(type: string) {
        return this.circle.getAttribute(type);
    }
    addEvent(name: string, value: any) {
        const event = {
            name: name,
            callback: value,
            content: this
        }
        this.eventMap.set(name, event);
    }
    addEventListener(name: string, callback: any) {
        console.log(name)
        this.circle.addEventListener(name, callback);
    }
    getEle() {
        return this.circle;
    }
}