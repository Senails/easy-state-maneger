import { computed, onUnmounted, ref } from "vue";
import { CreateStore } from "easy-state-meneger";


export function createEasyStore(initialStore){
    const {subscribe, updateStore, getStore} = CreateStore(initialStore);

    return {
        useSelector(selectorCallback){
            const reff = ref(false);
            const forceRender = ()=>{reff.value = !reff.value;};
            const { unSubscribe, getStore } = subscribe(selectorCallback, forceRender);
            onUnmounted(()=>{unSubscribe()});
        
            return computed(()=>reff.value?getStore(selectorCallback):getStore(selectorCallback));
        },
        subscribe,
        updateStore,
        getStore,
    }
}