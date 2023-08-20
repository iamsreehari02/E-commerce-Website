import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../components/CartSlice/CartSlice';



const store = configureStore({
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              // Ignore these action types
              ignoredActions: ['cart/addItem','cart/removeItem'],
              // Ignore these field paths in all actions
              ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
              // Ignore these paths in the state
              ignoredPaths: ['items.dates'],
            },
          }),
    reducer : {
        cart: CartReducer,
       
    },
   
    
})

export default store;