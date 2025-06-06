import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
<<<<<<< HEAD
import axios from 'axios'
import Swal from 'sweetalert2'
=======
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalPrice, clearCart } =
    useContext(CartContext) 
<<<<<<< HEAD
    const { isAuthenticated } = useContext(UserContext)
  const handleSimulateSuccess = () => {
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: 'Gracias por tu compra. Tu pedido está en camino. 🚀',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      clearCart() // Vaciar el carrito después de la compra simulada
    })
  }

=======
const { isAuthenticated } = useContext(UserContext) // Usamos isAuthenticated en lugar de token
 
  // Función para capitalizar el nombre
  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c

  return (
    <>
      <div className="container w-50">
        <h1 className="text-center display-3">Carrito de Compra</h1>
        <hr />
        

        {cart.length === 0 ? (
          <p className="text-center">El carrito está vacío 🛒</p>
        ) : (
          cart.map(pizza => (
            <div key={pizza.id} className="row mt-3">
              <div className="col">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col align-self-center">
<<<<<<< HEAD
                <h6>{pizza.name}</h6>
=======
                <h6>{capitalize(pizza.name)}</h6>
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c
              </div>
              <div className="col align-self-center">
                <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
              </div>
              <div className="col align-items-center">
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    -
                  </button>
                  <h6>{pizza.count}</h6>
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <hr />
        <h2 className="text-center m-3">
          Total: ${totalPrice.toLocaleString('es-CL')}
        </h2>

        {cart.length > 0 && (
          <div className="text-center">
            <button disabled={!isAuthenticated} className="btn btn-success m-2">
              Pagar
            </button>
<<<<<<< HEAD
            <button className="btn btn-primary m-2" onClick={handleSimulateSuccess}>
              Simular Compra
            </button>
=======
>>>>>>> abc47f84d94594a30216e748fbf68d10624aec1c
            <button className="btn btn-danger" onClick={clearCart}>
              Vaciar carrito 🗑️
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart