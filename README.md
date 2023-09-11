## Simple state meneger
##### install
```
npm i easy-state-meneger-react
```
##### install for vue (https://github.com/Senails/easy-state-meneger/tree/Vue)
```
npm i easy-state-meneger-vue
```


##### example for react
```ts
import { createEasyStore } from "easy-state-meneger-react";

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
