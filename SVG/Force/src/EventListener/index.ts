// 时间监听分发体系
interface IListener{
    eventName: string;  // 注册事件名称
    callback: (...rest: any[]) => void; // 事件执行的回调函数
    content: any; // callback 执行的 this 的环境
}
export default class Event {
    static instance: Event;
    static getInstance() {
        if( !Event.instance ) {
            Event.instance = new Event();
        }
        return Event.instance;
    }
    listener: Map<string, IListener>;
    constructor() {
        this.listener = new Map();
    }

    addEvent(name: string, callback: any, content: any) {
        const event: IListener = {
            eventName: name,
            callback,
            content
        }
        this.listener.set(name, event);
    }

    emit(name: string, ...rest: any[]) {
        const event = this.listener.get(name) || {
            eventName: "",
            callback: () => false,
            content: null
        };
        event.callback.bind(event.content)( ...rest);
    }

    remove(name: string) {
        if (this.listener.has(name)) {
            return this.listener.delete(name);
        }
        return true;
    }

    replace(name: string, callback: any, content: any) {
        this.addEvent(name, callback, content);
        return true;
    }
}

/**
 * Event.addListener('end', () => {}, 'content');
 * Event.emit('end', paramList);
 */