import { Navigate, Route, Routes } from 'react-router-dom'
import './appStyles.css'
import { NavBarComponent } from './components/navbarComponent/NavBarComponent'
import { ShopComponent } from './components/shopComponent/ShopComponent'
import { CartComponent } from './components/cartComponent/CartComponent'
import { ProductProvider } from './context/productContext/ProductProvider'
import { CartProvider } from './context/cartContext/CartProvider'

export const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
            <NavBarComponent/>
            <Routes>
                <Route path='/' element={<ShopComponent/>}></Route>
                <Route path='/carrito' element={<CartComponent/>}></Route>
                <Route path='/*' element={<Navigate to='/'/>}></Route>
            </Routes>
            </CartProvider>
        </ProductProvider>
    )
}
