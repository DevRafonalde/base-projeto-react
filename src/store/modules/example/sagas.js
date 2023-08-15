import {call, put, all, takeLatest} from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";

const requisicao = () =>
    new Promise((resolve, reject) => {
        // toast.warning("Opa, aviso!");
        setTimeout(() => {
            resolve();
        }, 2000);
    });

function* exampleRequest() {
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch (e) {
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
