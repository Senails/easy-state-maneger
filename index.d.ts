export type  Store = { [key: string]: any };
export type Selector<T> = (store: T)=> any;

export declare function createEasyStore<T extends Store>(initialStore: T):{
    useSelector(selectorCallback: Selector<T>):any,
    subscribe(selectorCallback: Selector<T>, onChangeCallback: ()=>void ):{
        unSubscribe():void,
        getStore():any,
    },
    updateStore(mutateCallback: (copy:T)=> void),
    getStore():T,
}