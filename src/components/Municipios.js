import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allDistritosThunk } from '../redux/actions/distritos';
import { centroidThunk, selectedMunicipio } from '../redux/actions/municipios';
import '../componentsCss/municipios.css';

class Municipios extends React.Component {
  constructor() {
    super();
    this.hendleClick = this.hendleClick.bind(this);
  }

  async hendleClick({target}){
    const { value } = target;
    console.log(value);
    const { municipios, allDistritos, centroid, selectMunicipio } = this.props;
    const verify = municipios.some((municipio) => municipio.nome === value);
    const muniSelected = municipios.find((municipio) => municipio.nome === value);

    selectMunicipio(value);
    
    if (verify === true) {
      const { id } = muniSelected;
      allDistritos(id);
      centroid(id);
    }
  }

  render() {
    const { selected, municipios } = this.props;
    return (
      <div id='municipio' className='classMunicipio'>
        { selected === 'Seleciona o estado' ? 'você precisa selecionar o estado: ' : `${selected}: ` }
        <select name='estados' disabled={selected === 'Seleciona o estado' ? true : false} onClick={this.hendleClick} >
          <option key='selected' defaultValue='Seleciona o município' >Seleciona o município</option>
        { municipios.map((municipio) => (
          <option key={municipio.id} value={municipio.nome}>{municipio.nome}</option>
          )) }
        </select>
      </div>
    )
  }
}

Municipios.propTypes = {
  allDistritos: PropTypes.func.isRequired,
  centroid: PropTypes.func.isRequired,
  selectMunicipio: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  municipios: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sigla: PropTypes.string })
  ).isRequired,
}


const mapStateToProps = (state) => (
  {
    estados: state.getEstados.estados,
    selected: state.getEstados.selected,
    municipios: state.getMunicipios.municipios,
  }
);
  
const mapToDispatch = (dispatch) => ({
  centroid: (idMunicipio) => dispatch(centroidThunk(idMunicipio)),
  allDistritos: (idMunicipio) => dispatch(allDistritosThunk(idMunicipio)),
  selectMunicipio: (selected) => dispatch(selectedMunicipio(selected))
});

export default connect(mapStateToProps, mapToDispatch)(Municipios);
