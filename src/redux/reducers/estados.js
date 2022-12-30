const INITIAL_STATE = { estados: [], selected: 'Seleciona o estado' };

const getEstados = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INSERTESTADOS':
      return { ...state, estados: action.payload };
    case 'SELECTED':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default getEstados;