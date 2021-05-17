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

function removeShoppingCart(data) {
  const shoppings = shopInitialState.shopping;
  console.log(shoppings);
  const filtered = shoppings.filter((item) => {
    return item.product.id !== data.product.product.id;
  });
  //tu cos nie dziala
  console.log(filtered);
  setCookie(CARD, filtered);
  return filtered;
}

function increment(data) {
  let shoppings = shopInitialState.shopping;
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
  let shoppings = shopInitialState.shopping;
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
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some((item) => item.product.id === data.product.id);
  if (isExisted) {
    shoppings.forEach((item) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  } else {
    shoppings.push(data);
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

export default function reducer(state = shopInitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionShopping.ADD:
      state = {
        shopping: addShoppingCart(payload),
      };
      return state;
    case actionShopping.DELETE:
      state = {
        shopping: removeShoppingCart(payload),
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
