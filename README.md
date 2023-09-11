## Simple state meneger

##### install
```
npm i easy-state-meneger
```
##### install for React  https://github.com/Senails/easy-state-meneger/tree/React  
```
npm i easy-state-meneger-react
```
##### install for Vue
```
npm i easy-state-meneger-vue
```

##### example
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
