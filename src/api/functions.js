const getAllState = async () => {
  try {      
    const answer = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const allSatates = await answer.json();
    return allSatates;
  } catch (error) {
    console.log(error.message);
  }
}

const getAllMunicipios = async (estado) => {
  try {
    const answer = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    const allMunicipio = await answer.json();
    return allMunicipio;
  } catch (error) {
    console.log(error.message);
  }
};

const getMunicipioCoordenate = async (idMunicipio) => {
  try {
    const answer = await fetch(`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${idMunicipio}/metadados`);
    const metadados = await answer.json();
    return metadados;
  } catch (error) {
    console.log(error.message);
  }
};

const getAllDistrito = async (idMunicipio) => {
  try {
    const answer = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${idMunicipio}/distritos`);
    const allDistrito = await answer.json();
    return allDistrito;
  } catch (error) {
    console.log(error.message);
  }
};

export { 
  getAllState,
  getAllMunicipios,
  getMunicipioCoordenate,
  getAllDistrito
}
