import React, { createContext, useEffect, useReducer } from 'react'
import MainContainer from './components/MainContainer'
import { reducerFn } from './reducerFn'

const initialValue = {
  cart: []
}
export const ProductContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, initialValue)
  const cartToLS = JSON.parse(localStorage.getItem("cart")) || []

useEffect(() => {
  dispatch({type:"REFRESH", payload: cartToLS})
}, [])
  return (
    <>
      <ProductContext.Provider value={[state, dispatch]}>
      <MainContainer />
      </ProductContext.Provider>
    </>
  )
}

export default App