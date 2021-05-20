import { getCookie, setCookie } from "../useCookie";
import { actionShopping } from "../actions/cartAction";
const CARD = "CARD";

const shopInitialState = {
  shopping: getCookie(CARD),
};

function clear() {
  let shoppings = [];
  setCookie(CARD, shoppings);
  return shoppings;
}

function increment(data) {
  let shoppings = getCookie(CARD);
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

function decrement(data) {
  let shoppings = getCookie(CARD);
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity -= 1;
      }
      return item;
    });
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

function getShopping() {
  return getCookie(CARD);
}

function addShoppingCart(data) {
  let shoppings = getCookie(CARD);
  console.log(data);
  let isExisted = shoppings.some((item) => item.id === data.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.id === data.id) {
        item.quantity += data.quantity;
      }
      return item;
    });
  } else {
    shoppings.push({ id: data.id, quantity: data.quantity });
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

function removeItemFromCart(data) {
  let shopping = getCookie(CARD);

  let filteredData = shopping.filter((item) => item.id !== data.id);
  console.log(filteredData);
  setCookie(CARD, filteredData);
  return filteredData;
}

function changeQuantity(data) {
  let shopping = getCookie(CARD);
  let isExisted = shopping.some((item) => item.id === data.id);
  if (isExisted) {
    shopping.forEach((item) => {
      if (item.id === data.id) {
        item.quantity = data.quantity;
      }
      return item;
    });
  }

  setCookie(CARD, shopping);
  return shopping;
}

export default function reducer(state = shopInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionShopping.CHANGE:
      state = {
        shopping: changeQuantity(payload),
      };
      return state;
    case actionShopping.ADD:
      state = {
        shopping: addShoppingCart(payload),
      };
      console.log(state);
      return state;
    case actionShopping.DELETE:
      state = {
        shopping: removeItemFromCart(payload),
      };
      return state;
    case actionShopping.CLEAR:
      state = {
        shopping: clear(),
      };
      return state;
    case actionShopping.FETCH:
    default:
      state = {
        shopping: getShopping(),
      };
      return state;
  }
}
