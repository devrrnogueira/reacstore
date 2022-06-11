import { useState, useEffect } from 'react'
import Dispatcher from './dispatcher'

let store = {}
const dispatcher = new Dispatcher()

function createStore(value) {
    store = value
}

function getStore(key) {
    return store[key]
}

function setStore(key, value) {
    store[key] = value
    dispatcher.emit('data', store)
}

function useStore(key) {
    const [value, setData] = useState(store[key])

    useEffect(() => {
        const fn = dispatcher.on('data', (data)=>{
            let value = data[key]

            if (Array.isArray(value)){
                setData(value)
            } else if (value instanceof Object) {
                setData({...value})
            } else {
                setData(value)
            }
        })

        return ()=>{
            window.setTimeout(()=>{
                dispatcher.off('data', fn)
            }, 1)
        }
    })

    return [value, (v)=>{setStore(key, v)}]
}

export {
    getStore,
    useStore,
    setStore,
    createStore
}