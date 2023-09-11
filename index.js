import { computed, onUnmounted, ref } from "vue";
import { CreateStore } from "easy-state-meneger";


export function createEasyStore(initialStore){
    const {subscribe, updateStore, getStore} = CreateStore(initialStore);

    return {
        useSelector(selectorCallback){
            const retrt = ref(false);
            const forceRender = ()=>{retrt.value = !retrt.value;};
            const { unSubscribe, getStore } = subscribe(selectorCallback, forceRender);
            onUnmounted(()=>{unSubscribe()});
        
            return computed<T>(()=>retrt.value?getStore(selectorCallback):getStore(selectorCallback));
        },
        subscribe,
        updateStore,
        getStore,
    }
}