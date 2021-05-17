export const actionShopping = {
  ADD: "ADD",
  CLEAR: "CLEAR",
  FETCH: "FETCH",
  DELETE: "DELETE",
};

export const addShopping = (product) => (dispatch) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: {
      product: product,
      quantity: 1,
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
      product,
    },
  });
};
