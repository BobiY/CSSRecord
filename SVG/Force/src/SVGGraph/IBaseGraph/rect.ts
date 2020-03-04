
// 矩形的基本参数设置
export interface IOption{
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
    stroke: string;
    strokeWidth: string;
}

// 圆包含的必要参数
export const PARAM = ['x', 'y', 'width', 'height','fill', 'stroke'];