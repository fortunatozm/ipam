import { getAllMunicipios, getMunicipioCoordenate } from '../../api/functions';

export const allMunicipios = (municipios) => ({
  type: 'INSERTMUNICIPIOS',
  payload: municipios,
});

export const centroid = (coorcentroide) => ({
  type: 'COORCENTROIDE',
  payload: coorcentroide,
});

export const selectedMunicipio = (selected) => ({
  type: 'SELECTEDMUN',
  payload: selected,
});

export const allMunicipiosThunk = (estado) => async (dispatch) => {
  dispatch(allMunicipios(await getAllMunicipios(estado)));
};

export const centroidThunk = (idMunicipio) => async (dispatch) => {
  const metadados = await getMunicipioCoordenate(idMunicipio);
  dispatch(centroid({lat: metadados[0].centroide.latitude, long: metadados[0].centroide.longitude}));
};
