import React from 'react';
import { connect } from 'react-redux';
import { changeEstadosThunk, selectedEstado } from '../redux/actions/estados';
import { allMunicipiosThunk, selectedMunicipio } from '../redux/actions/municipios';
import PropTypes from 'prop-types';
import '../componentsCss/estados.css';

class Estados extends React.Component {
  constructor() {
    super();
    this.state = {
    }
    this.hendleClick = this.hendleClick.bind(this);
  }

  async componentDidMount() {
    const { allEstados } = this.props;
    allEstados();
  }

  async hendleClick({target}){
    const { value } = target;
    const { allStates, selectEstado, allMunicipios, selectMunicipio } = this.props;
    const verify = allStates.some((estado) => estado.sigla === value);
    selectEstado(value);
    selectMunicipio('Seleciona o município');
    
    if (verify === true) {
      allMunicipios(value);
    }
  }

  render() {
    const { allStates } = this.props;
    return(
      <div id='estado' className='classEstado'>
        Estado:
        <select name='estados' id='estados' onClick={ this.hendleClick }>
          <option key='selected' defaultValue='Seleciona o estado' >Seleciona o estado</option>
        { allStates.map((state) => (
          <option key={state.id} value={state.sigla}>{state.nome}</option>
          )) }
        </select>
      </div>
    )
  }
}

Estados.propTypes = {
  selectEstado: PropTypes.func.isRequired,
  allMunicipios: PropTypes.func.isRequired,
  allEstados: PropTypes.func.isRequired,
  selectMunicipio: PropTypes.func.isRequired,
  allStates: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sigla: PropTypes.string.isRequired })).isRequired,
}

const mapStateToProps = (state) => (
  {
    allStates: state.getEstados.estados,
    selected: state.getEstados.selected,
  }
);

const mapToDispatch = (dispatch) => ({
  allMunicipios: (estado) => dispatch(allMunicipiosThunk(estado)),
  allEstados: () => dispatch(changeEstadosThunk()),
  selectEstado: (estado) => dispatch(selectedEstado(estado)),
  selectMunicipio: (selected) => dispatch(selectedMunicipio(selected))
});

export default connect(mapStateToProps, mapToDispatch)(Estados);
