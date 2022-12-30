const INITIAL_STATE = { distritos: []};
// , selectedM: 'Seleciona o estado' 

const getDistritos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INSERTDISTRITOS':
      return { ...state, distritos: action.payload };
    // case 'SELECTED':
    //   return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default getDistritos;