import {take, select, call} from "redux-saga/effects";
import {getCart} from "../reducers/index";
import {api} from "../services";
import * as actions from "../actions/cart";

export function* checkout() {
  while (true) {
    try {
      let cart = yield select(getCart);
      yield call(api.buyProducts, cart);
      yield put(actions.checkoutSuccess(cart));
    } catch (error) {
      yield put(actions.checkoutFailure(error));
    }
  }
}

export function* watchCheckout() {
  yield take(actions.CHECKOUT_REQUEST);
  yield call(checkout);
}
