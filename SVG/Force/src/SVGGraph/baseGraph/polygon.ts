import BaseGraph from "../IBaseGraph/BaseGraph";
import { IPolyLineOption, PARAM } from "../IBaseGraph/polyline";
const SVG_NS = 'http://www.w3.org/2000/svg';
// 折线

export default class Polygon implements BaseGraph {
    fill: string;
    stroke: string;
    strokeWidth: string;
    polygon: SVGElement | null;
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
        this.polygon = document.createElementNS(SVG_NS, 'circle');

        // 设置圆的必要参数参数
        PARAM.forEach( (item: string) => { this.setAttribute(item, `${this[item]}`) } )
    }
    setAttribute(name: string, value: any) {
        if ( name === 'points' ) {
            this.setPoints(value);
            return ;
        }
        this[name] = value;
        this.polygon.setAttribute(name, value);
    }

    getAttribute(name: string) {
        if( name === 'points' ) {
            return this.getPoints();
        }
        return this.polygon.getAttribute(name);
    };
    setPoints(points: number[][]) {
        this.points.push(...points);
        const p = this.points.join(' ');
        this.setAttribute('points', p);
    }

    getPoints() {
        return this.points;
    }
}