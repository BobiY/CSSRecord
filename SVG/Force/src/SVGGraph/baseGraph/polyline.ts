import BaseGraph from "../IBaseGraph/BaseGraph";
import { IPolyLineOption, PARAM } from "../IBaseGraph/polyline";
const SVG_NS = 'http://www.w3.org/2000/svg';
// 折线

export default class PolyLine implements BaseGraph {
    fill: string;
    stroke: string;
    strokeWidth: string;
    polyline: SVGElement | null;
    points: number[][];

    constructor(option: IPolyLineOption) {
        const { fill, stroke, strokeWidth, points=[] } = option;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.points = points;
        this.createPolyline();
    }

    createPolyline() {
        this.polyline = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttr(item, `${this[item]}`) } )
    }
    setAttr(name: string, value: any) {
        if ( name === 'points' ) {
            this.setPoints(value);
            return ;
        }
        this[name] = value;
        this.polyline.setAttribute(name, value);
    }

    getAttr(name: string) {
        if( name === 'points' ) {
            return this.getPoints();
        }
        return this.polyline.getAttribute(name);
    };
    setPoints(points: number[][]) {
        this.points.push(...points);
        const p = this.points.join(' ');
        this.setAttr('points', p);
    }

    getPoints() {
        return this.points;
    }
}