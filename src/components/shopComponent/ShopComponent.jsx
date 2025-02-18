import './shopStyle.css'
import { useContext } from "react";
import { CardComponent } from './cardComponent/CardComponent'
import { ProductContext } from '../../context/productContext/ProductContext';
import { CartContext } from '../../context/cartContext/CartContext';

export const ShopComponent = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CartContext)

  return (
    <>
      {products.map(product => (
        <CardComponent 
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        key={product.id}
        handleAdd={() => addProduct(product)}
        handleRemove={() => removeProduct(product.id)}
        />
      ))}
    </>
  )
}
