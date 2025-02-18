import { useContext } from 'react'
import './cartStyle.css'
import { CartContext } from '../../context/cartContext/CartContext'
import Swal from 'sweetalert2'

export const CartComponent = () => {

  const {shopList, removeProduct, incrementQuantity, decrementQuantity} = useContext(CartContext)

  const calculateTotal = () => {
    return shopList.reduce( (total, item) => total + item.price * item.quantity, 0 ).toFixed(2)
  }
  const handlePurchase = () => {
    const productsPurchased = shopList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: '¡La compra se ha realizado con exito!',
      html: `<p>Has comprado:</p> <pre>${productsPurchased}</pre> <p>Por $${calculateTotal()}</p> <p>Muchas gracias por comprar</p>`
    })
  }

  return (
    <>
      <table className="table center">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shopList.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>
              <button onClick={() => decrementQuantity(item.id)} className='btn btn-outline-primary'>-</button>
              <button className='btn btn-primary m5'>{item.quantity}</button>
              <button onClick={() => incrementQuantity(item.id)} className='btn btn-outline-primary'>+</button>
            </td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td><button className='btn btn-danger' onClick={() => removeProduct(item.id)}>Remover</button></td>
          </tr>
          ))}
          <tr>
          <th><b>TOTAL:</b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2 center">
        <button className="btn btn-primary" type="button" onClick={handlePurchase}>Comprar</button>
      </div>
    </>
  )
}
