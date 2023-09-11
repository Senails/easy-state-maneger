## Simple state meneger
##### install
```
npm i easy-state-meneger-react
```
##### install for Vue (https://github.com/Senails/easy-state-meneger/tree/Vue)
```
npm i easy-state-meneger-vue
```


##### example for react
```tsx
import { Action, useSelector } from "./State";

export function App() {
    const count = useSelector((s)=>s.count);

    return (
        <div className="App">
            <button onClick={Action}>{count}</button>
        </div>
    );
}
```

```ts
const initState = {
    count: 0
}
export const {useSelector, updateStore} = CreateEasyStore(initState);

export function Action(){
    updateStore((state)=>{
        state.count++;
        return state;
    });
}
```  
