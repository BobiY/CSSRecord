import BaseGraph from "../IBaseGraph/BaseGraph";
import { IElipesOption, PARAM } from "../IBaseGraph/ellipes";
const SVG_NS = 'http://www.w3.org/2000/svg';
export default class Ellipes implements BaseGraph {
    cx: number=0;
    cy: number=0;
    rx: number=0;
    ry: number=0;
    fill: string= 'none';
    stroke: string='#333';
    strokeWidth: string='2';
    ellipse: SVGElement | null;

    constructor(option: IElipesOption) {
        const { cx, cy, rx, ry, fill='none', stroke='stroke', strokeWidth='2' } = option;
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = rx;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.createCircle()
    }
    createCircle() {
        this.ellipse = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttr(item, `${this[item]}`) } )
    }
    setAttr(name: string, value: any) {
        this.ellipse.setAttribute(name, value);
    }
    getAttr(name: string) {
        return this.ellipse.getAttribute(name);
    }
}