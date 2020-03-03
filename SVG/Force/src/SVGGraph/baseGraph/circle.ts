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
    constructor(option: ICircleOption) {
        const { cx, cy, r, fill, stroke } = option;
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.stroke = stroke;
        this.circle = null;

        // 初始化元素
        this.createCircle();
    }

    createCircle() {
        this.circle = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttr(item, `${this[item]}`) } )
    }
    setAttr(type: string, value: string) {
        this.circle.setAttribute(type, value);
    }
    getAttr(type: string) {
        return this.circle.getAttribute(type);
    }
}