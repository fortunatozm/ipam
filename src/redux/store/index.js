import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// thun e applyMiddleware servem para redux funcionar com funções async
import thunk from 'redux-thunk';
// extension para ferramenta do redux no navegador funcionar
import { composeWithDevTools } from '@redux-devtools/extension';
// import reducer from '../reducers/countReduce';
import rootReducer from '../reducers';

// Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
