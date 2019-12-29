import { Subject } from 'rxjs';

export class ObservableArray<T> extends Array<T> {

    changes = new Subject<ObservableArray<T>>();

    constructor(...items: T[]) {
        super(...items);
        Object.defineProperty(this, "changes", {
            enumerable: false,
            writable: false,
            // value: this.changes,
        })
        const proxy = new Proxy(this, {
            set: (target: ObservableArray<T> | any, p: number | symbol | string, v: any) => {
                target[p] = v;
                this.changes.next(target);
                return true;
            },
        });
        return proxy;
    }
}
