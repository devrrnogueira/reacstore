# Reacstore

Simple react store

## Usage
```javascript

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, useStore } from './reactive'

createStore({
    count: 0
})

function MyComponent1(){
    const [ count ] = useStore('count')
    return (<h2>Component1: {count}</h2>)
}

function MyComponent2(){
    const [ count ] = useStore('count')
    return (<h2>Component2: {count}</h2>)
}

function App(){
    const [ count, setCount ] = useStore('count')

    function increment(){
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <MyComponent1 />
            <MyComponent2 />
            <button onClick={increment}>increment</button>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```
