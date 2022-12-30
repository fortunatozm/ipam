const INITIAL_STATE = { municipios: [], coordinate: { lat: -15.7812, long: -47.7969 }, selected: 'Seleciona o município'};

const getMunicipios = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INSERTMUNICIPIOS':
      return { ...state, municipios: action.payload };
    case 'COORCENTROIDE':
      return { ...state, coordinate: action.payload };  
    case 'SELECTEDMUN':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default getMunicipios;