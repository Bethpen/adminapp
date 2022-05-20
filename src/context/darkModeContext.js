import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://fakerapi.it/api/v1/products?_quantity=1'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      const { stuff } = data;
      if (stuff) {
        const newProducts = stuff.map((item) => {
          const { id, name, image, net_prices, taxes, prices } = item
          return {
            id: id,
            name: name,
            image: image,
            net_prices: net_prices,
            taxes: taxes,
            prices: prices
          }
        })
        setProducts(newProducts)
      } else (
        setProducts([])
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])


  return <AppContext.Provider value={{
    products,
  }
  }>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
