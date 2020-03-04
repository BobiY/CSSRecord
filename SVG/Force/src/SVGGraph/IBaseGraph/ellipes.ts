
export interface IElipesOption {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
}

// 圆包含的必要参数
export const PARAM = ['cx', 'cy', 'rx', 'ry', 'fill', 'stroke'];