## Simple state meneger
##### install
```
npm i easy-state-meneger-vue
```
##### install React (https://github.com/Senails/easy-state-meneger/tree/React)
```
npm i easy-state-meneger-react
```

##### example for vue
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
import { Action, useSelector } from './Store';

    const count = useSelector((s)=>s.count);

</script>
<template>
    <button @click="Action">{{ count }}</button>
</template>
```
