import './navBarStyle.css'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext/CartContext'

export const NavBarComponent = () => {

    const { shopList } = useContext(CartContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand" href="#">MiTienda</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">Navegar</NavLink>
                            </li>
                            <li className='cartIcon'>
                                <NavLink to={'/carrito'} className="nav-link active" aria-current="page" href="#">
                                    <Badge badgeContent={shopList.length} color="primary">
                                        <ShoppingCart />
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='carrito'>
                        <NavLink to={'/carrito'} className="nav-link active" aria-current="page" href="#">
                            <Badge badgeContent={shopList.length} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
