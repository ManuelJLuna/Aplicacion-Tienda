import Swal from 'sweetalert2'
import { ProductContext } from './ProductContext'
import { useEffect, useState } from 'react'


export const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([])
    
    const URL_BASE = 'https://fakestoreapi.com/products'
    
    const fetchProductsData = async () => {
      try {      
        const r = await fetch(URL_BASE)
        const data = await r.json()
        setProducts(data)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Ha ocurrido un error al cargar los productos. Pruebe nuevamente mas tarde'
        })
        console.error(err)
        return console.error('Ha ocurrido un error al llamar a la API. ShopComponent.jsx 10')
      }
    }
    
    useEffect(() => {
      fetchProductsData()
    }, [])
    
    return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
