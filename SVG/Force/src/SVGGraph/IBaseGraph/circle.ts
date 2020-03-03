// 圆形类的接口

// 圆包含的必要参数
export const PARAM = ['cx', 'cy', 'r', 'fill', 'stroke'];
// 配置接口
export interface ICircleOption{
    cy: number;
    cx: number;
    r: number;
    fill?: string;
    stroke?: string;
}