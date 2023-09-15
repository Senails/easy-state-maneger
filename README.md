## Simple state maneger

### Install
```
npm i easy-state-maneger
```
##### install for React  (https://github.com/Senails/easy-state-maneger/tree/React)
```
npm i easy-state-maneger-react
```
##### install for Vue (https://github.com/Senails/easy-state-maneger/tree/Vue)
```
npm i easy-state-maneger-vue
```

### Example
```javascript
import { CreateStore } from './index.js'

const initState = {
    value1: 123,
    value2: "text",
    value3: {
        val1: 1,
    },
}

const { subscribe, updateStore, getStore} = CreateStore(initState);

console.log(getStore());
// {
//     value1: 111,
//     value2: "text",
//     value3: {
//         val1: 1,
//     },
// }

subscribe((store) => store.value3.val1, 
()=>{
    console.log("store.value3.val1 changed"); 
})

updateStore((store)=>{
    store.value1 = 222;
    store.value2 = "text222";
});
// 

updateStore((store)=>{
    store.value3.val1 = 2;
});

// store.value3.val1 changed
```

### Example for React
```ts
import { createEasyStore } from "easy-state-maneger-react";

const initState = {
    count: 0
}
export const {useSelector, updateStore} = createEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
    });
}
```

```tsx
import { Action, useSelector } from "./state";

export function App() {
    const count = useSelector((s)=>s.count);

    return (
        <div className="App">
            <button onClick={Action}>{count}</button>
        </div>
    );
}
```

#### Example for Vue
```ts
import { createEasyStore } from "easy-state-maneger-vue";

const initState = {
    count: 0
}

export const {useSelector, updateStore} = createEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
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
