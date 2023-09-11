## Simple state meneger for Vue
#### install
```
npm i easy-state-meneger-vue
```
##### state meneger for react (https://github.com/Senails/easy-state-meneger/tree/React)

#### example for vue
```ts  
const initState = {
    count: 0
}

export const {useSelector, updateStore} = createEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
        return state;
    });
}
```
```Vue
<script setup lang="ts">
    import { useSelector } from ".state";

    const count = useSelector((s)=>s.count);

</script>
<template>
    <button @click="Action">{{ count }}</button>
</template>
```
