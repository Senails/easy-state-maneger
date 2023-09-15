## Simple state maneger
### Install
```
npm i easy-state-maneger-react
```
##### State maneger for Vue (https://github.com/Senails/easy-state-maneger/tree/Vue)

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
