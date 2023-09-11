export type  Store = { [key: string]: any };

export type Selector<T> = (store: T)=> any;

export declare function CreateStore<T extends Store>(initialStore: T):{
    subscribe(selectorCallback: Selector<T>, onChangeCallback: ()=>void ):{
        unSubscribe(),
        getStore():any,
    },
    updateStore(mutateCallback: (copy:T)=> void),
    getStore():T,
}