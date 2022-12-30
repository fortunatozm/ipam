import { getAllDistrito } from '../../api/functions';
export const allDistritos = (distritos) => ({
  type: 'INSERTDISTRITOS',
  payload: distritos,
});

export const allDistritosThunk = (idMunicipio) => async (dispatch) => {
  dispatch(allDistritos(await getAllDistrito(idMunicipio)));
};