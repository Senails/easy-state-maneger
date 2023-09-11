## Simple state meneger
### Install
```
npm i easy-state-meneger-react
```
##### State meneger for Vue (https://github.com/Senails/easy-state-meneger/tree/Vue)

### Example for React
```ts
import { createEasyStore } from "easy-state-meneger-react";

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
