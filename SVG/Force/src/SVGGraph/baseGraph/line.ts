import BaseGraph from "../IBaseGraph/BaseGraph";
import { ILineOption, PARAM } from "../IBaseGraph/line";
const SVG_NS = 'http://www.w3.org/2000/svg';
export default class Line implements BaseGraph {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    fill: string;
    stroke: string;
    strokeWidth: string;
    line: SVGElement | null;

    constructor(option: ILineOption) {
        const { x1, x2, y1, y2, fill='none', strokeWidth='2', stroke='#333' } = option;
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
    createCircle() {
        this.line = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttribute(item, `${this[item]}`) } )
    }
    setAttribute(name: string, value: any) {
        this.line.setAttribute(name, value);
    }

    getAttribute(name: string) {
        return this.line.getAttribute(name);
    }
}