const initialState = {
    botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "BOTAO_CLICADO": {
            const newState = {...state};
            newState.botaoClicado = !newState.botaoClicado;
            // console.log(newState);
            return newState;
        }
        default: {
            return state;
        }
    }
}