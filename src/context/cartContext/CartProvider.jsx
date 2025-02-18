import { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({children}) => {

    const initState = []

    const shopReducer = (state = initState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Product':
                return [...state, action.payload]
            case '[CART] Remove Product':
                return state.filter(product => product.id !== action.payload)
            case '[CART] Increment Quantity':
                return state.map(product => {
                    const cant = product.quantity + 1
                    if(product.id == action.payload) return {...product, quantity: cant}
                    return product
                })
            case '[CART] Decrement Quantity':
                return state.map(product => {
                    const cant = product.quantity - 1
                    if(product.id == action.payload && product.quantity > 1) return {...product, quantity: cant}
                    return product
                })
                break;
            default:
                console.error('Ha ocurrido un error en el Reducer. CartProvider.jsx 39')
                console.error('No se ha ejecutado cualquier tipo de accion valida')
                return state
        }
    }

    const [shopList, dispatch] = useReducer(shopReducer, initState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CART] Add Product',
            payload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            payload: id
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            payload: id
        }
        dispatch(action)
    }


  return (
    <CartContext.Provider value={{shopList, addProduct, removeProduct, incrementQuantity, decrementQuantity}}>
        {children}
    </CartContext.Provider>
  )
}
