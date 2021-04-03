import {takeEvery, call, put} from "redux-saga/effects";
import {getCart} from "../reducers/index";
import {api} from "../services";
import * as actions from "../actions/products";

export function* watchGetProducts() {
  yield takeEvery(actions.GET_PRODUCTS, getAllProducts);
}

export function* getAllProducts() {
  let products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}
