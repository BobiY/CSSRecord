// 矩形

import BaseGraph from "../IBaseGraph/BaseGraph";
import { IOption, PARAM } from "../IBaseGraph/rect";
const SVG_NS = 'http://www.w3.org/2000/svg';
export default class Rect implements BaseGraph{
    x=0;
    y=0;
    width=300;
    height=300;
    fill='none';
    stroke='#333';
    strokeWidth='2';
    rect: SVGElement | null=null;
    constructor(option: IOption) {
        const { x, y, width, height, fill, stroke, strokeWidth } = option;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
        this.rect = null;

        // 初始化元素
        this.createRect();
    }

    createRect() {
        this.rect = document.createElementNS(SVG_NS, 'rect');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttr(item, `${this[item]}`) } )
    }

    setAttr(type: string, value: string) {
        this.rect.setAttribute(type, value);
    }
    
    getAttr(type: string) {
        return this.rect.getAttribute(type);
    }
}