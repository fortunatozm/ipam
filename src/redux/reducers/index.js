import { combineReducers } from 'redux';
import getEstados from './estados';
import getMunicipios from './municipios';
import getDistritos from './distritos';

const rootReducer = combineReducers({ 
  getEstados,
  getMunicipios,
  getDistritos,
});

export default rootReducer;