import { getAllState } from '../../api/functions';

export const changeEstados = (estados) => ({
  type: 'INSERTESTADOS',
  payload: estados,
});

export const selectedEstado = (selected) => ({
  type: 'SELECTED',
  payload: selected,
});

export const changeEstadosThunk = () => async (dispatch) => {
  dispatch(changeEstados(await getAllState()));
};