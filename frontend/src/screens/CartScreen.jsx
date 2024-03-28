import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart  , removeFromCart} from '../slices/cartSlice';


function CartScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkOutHandler = () => {
        navigate('/login?redirect=shipping');
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const addToCartHandler = (product,qty) => {
        dispatch(addToCart({...product,qty}));
    }


    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <h1 className="text-2xl font-semibold my-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message>
                    Your cart is empty <Link to="/" className="text-blue-500">Go Back</Link>
                </Message>
            ) : (
                <div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="p-2">Image</th>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Price</th>
                                    <th className="p-2">Quantity</th>
                                    <th className="p-2">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item._id} className="border-b">
                                        <td className="p-2">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover"
                                            />
                                        </td>
                                        <td className="p-2">
                                            <Link to={`/product/${item._id}`} className="text-blue-500">{item.name}</Link>
                                        </td>
                                        <td className="p-2">${item.price}</td>
                                        <td className="p-2">
                                            <select
                                                value={item.qty}
                                                onChange={(e) => addToCartHandler(item,Number(e.target.value))}
                                                className="border rounded p-1"
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="p-2">
                                            <button
                                                onClick={() => removeFromCartHandler(item._id)}
                                                className="text-red-500"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between my-4">
                        <h2 className="text-lg font-semibold">
                            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                        </h2>
                        <h2 className="text-lg font-semibold">
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
                        </h2>
                    </div>
                    <div>
                        <button
                            onClick={() => {checkOutHandler}}
                            className="btn btn-primary"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartScreen;
