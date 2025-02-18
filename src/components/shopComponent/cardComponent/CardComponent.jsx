import { useContext, useEffect, useState } from 'react'
import './cardStyle.css'
import { CartContext } from '../../../context/cartContext/CartContext'

export const CardComponent = ({id, image, title, description, price, handleAdd, handleRemove}) => {

  const { shopList } = useContext(CartContext)

    const [added, setAdded] = useState(false)

    const addProduct = () => {
      added ? handleRemove() : handleAdd()
      setAdded(!added)
    }

    const checkAdded = () => {
      const boolean = shopList.some(product => product.id == id)
      setAdded(boolean)
    }

    useEffect(() => {
      checkAdded()
    }, [])
    

  return (
    <div className='card'>

        <div className='imgCont'>
        <img src={image} alt={title} />
        </div>

        <div className='cardContent'>

            <h4>{title}</h4>
            <p className='desc'>{description}</p>
            <p className='price'>${price}</p>

        {
        added
        ? <button className='cardButton removeButton' onClick={addProduct}>Remover del carrito</button>
        : <button className='cardButton addButton' onClick={addProduct}>Añadir al carrito</button>
        }
        </div>


    </div>
  )
}
