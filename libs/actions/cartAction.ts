export const actionShopping = {
  ADD: "ADD",
  CLEAR: "CLEAR",
  FETCH: "FETCH",
  DELETE: "DELETE",
  CHANGE: "CHANGE",
};

export const addShopping = (product, quantity) => (dispatch) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: {
      id: product.id,
      quantity: quantity,
      price: product.price,
    },
  });
};

export const fetchShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.FETCH,
  });
};

export const clearShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.CLEAR,
  });
};

export const deleteItem = (product) => (dispatch) => {
  return dispatch({
    type: actionShopping.DELETE,
    payload: {
      id: product.product.id,
    },
  });
};

export const changeQuantity = (product, quantity) => (dispatch) => {
  return dispatch({
    type: actionShopping.CHANGE,
    payload: {
      id: product.product.id,
      quantity: quantity,
      price: product.product.price,
    },
  });
};
