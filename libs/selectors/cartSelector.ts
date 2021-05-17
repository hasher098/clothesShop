import { createSelector } from "reselect";

const authSelector = (state) => state.shopping;

export const cartContentSelector = createSelector(
  authSelector,
  (state) => state.shopping
);
