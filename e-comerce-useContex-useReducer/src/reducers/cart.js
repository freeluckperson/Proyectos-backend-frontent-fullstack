export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPE.ADD_TO_CART]: () => {
      const { id } = payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = [...state];
        newState[productInCartIndex].quantity++;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    },

    [CART_ACTION_TYPE.REMOVE_FROM_CART]: () => {
      const { id } = payload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    },

    [CART_ACTION_TYPE.CLEAR_CART]: () => {
      updateLocalStorage([]);
      return [];
    },
    default: () => state,
  };

  const handler =
    UPDATE_STATE_BY_ACTION[type] || UPDATE_STATE_BY_ACTION.default;
  return handler();
};
