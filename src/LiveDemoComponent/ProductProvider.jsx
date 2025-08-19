import { createContext, useContext, useReducer } from "react";
const contextproduct = createContext();
function Reducerfunc(productbox, action) {
  switch (action.type) {
    case "AddItem":
      return [...productbox, action.payload];
    case "ClearCart":
      return [];
  }

  return productbox;
}

function ProductProvider({ children }) {
  const intailstate = [];
  const [productbox, dispatch] = useReducer(Reducerfunc, intailstate);

  const addItem = (newItem) => {
    dispatch({ type: "AddItem", payload: newItem });
  };

  return (
    <contextproduct.Provider value={{ productbox, addItem, dispatch }}>
      {children}
    </contextproduct.Provider>
  );
}

export function useProduct() {
  return useContext(contextproduct);
}

export default ProductProvider;
