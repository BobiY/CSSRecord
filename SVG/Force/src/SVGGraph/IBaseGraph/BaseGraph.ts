export default class BaseGraph {
    fill: string; // 填充色
    stroke: string; // 描边色
    strokeWidth: string; // 描边宽度

    setAttribute: (type: string, value: any) => void; 
    getAttribute: (type: string) => any;
}