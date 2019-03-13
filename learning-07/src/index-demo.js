import { createStore } from 'redux'

/**
 * 来源：官网：https://github.com/reduxjs/redux
 * 
 * 第一步：定义reducer
 */
export default function () {

    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

    //第二步：根据reducer规则生成store
    let store = createStore(counter)

    //第三步：定义数据（即state)变化之后的派发规则
    store.subscribe(() => console.log("fn1......" + store.getState()))
    store.subscribe(() => console.log("fn2......." + store.getState()))

    //第四步：触发数据变化
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'DECREMENT' })

}