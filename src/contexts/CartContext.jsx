import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const appId = import.meta.env.VITE_APP_ID;
    const orgId = import.meta.env.VITE_ORG_ID;

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.timbu.cloud/products?organization_id=${orgId}&reverse_sort=false&page=1&size=30&Appid=${appId}&Apikey=${apiKey}`
        );
        console.log(response.data.items);
        setProducts(response.data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   fetch(
  //     'https://api.timbu.cloud/products?organization_id=afcdbe3fe39c4c3d921c1e2edd46b0a9&reverse_sort=false&page=1&size=30&Appid=QH3R2FP5H8EW8BD&Apikey=7f8c864f9e4a4b2a8dc3a0f8e8656f6820240712173551219779'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    const isAlreadyInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );

    if (isAlreadyInCart) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleItemAddRemove = (item) => {
    addItemToCart(item);
  };

  const isInCart = (productId) => {
    cartItems.some((item) => item.id === productId);
  };
  const formatAmount = (amount) => {
    return `N${amount.toLocaleString()}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        handleItemAddRemove,
        isInCart,
        formatAmount,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
