import { useEffect, useState } from "react";
import { CreateStore } from "easy-state-meneger";

export function createEasyStore(initialStore){
    const {subscribe, updateStore, getStore} = CreateStore(initialStore);

    return {
        useSelector(selectorCallback){
            const [state,setState] = useState(false);
            const forceRender = ()=>{setState(!state)};
            const { unSubscribe, getStore } = subscribe(selectorCallback,forceRender);
            useEffect(()=>()=>unSubscribe());
            return getStore(selectorCallback);
        },
        subscribe,
        updateStore,
        getStore,
    }
}