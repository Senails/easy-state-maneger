import { createCopy, isEqual } from "./utils/index.js";


export function CreateStore(initialStore){
    let state = initialStore;
    let subscribersList= [];
    let unSubCountInList = 0;

    const CleanCancelSibscribers = (forceClean = false)=>{
        if (unSubCountInList>100 || forceClean){
            subscribersList = subscribersList.filter((e)=>!e.isCanceled);
            unSubCountInList = 0;
        }
    };

    return {
        subscribe(selectorCallback, onChangeCallback){
            const ID = Date.now();
            subscribersList.push({
                id: ID,
                onChangeCallback,
                selector: selectorCallback,
                isCanceled: false,
            })

            CleanCancelSibscribers();

            return {
                unSubscribe(){
                    const obj = subscribersList.find(({id})=>id === ID);
                    if (!obj) return;
                    obj.isCanceled = true;
                    unSubCountInList++;
                },
                getStore:(selectorCallback) => selectorCallback(state),
            }
        },
        updateStore(mutateCallback){
            const prevState = state;
            const newState = createCopy(state);
            mutateCallback(newState);
            state = newState;
    
            subscribersList.forEach((e)=>{
                if (e.isCanceled) return;
                if (!isEqual(e.selector(prevState),e.selector(newState))){
                    e.onChangeCallback();
                }
            });
            CleanCancelSibscribers(true);
        },
        getStore(){
            return state;
        },
    }
}