import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../componentsCss/distritos.css';

class Distrito extends React.Component {
  render(){
    const { distritos, selectedMuni }  = this.props;
    if (distritos.length > 0 && selectedMuni != 'Seleciona o município') {
      const { municipio: { microrregiao } } = distritos[0];
      return (
        <div id='distrito'>
          <div className='classDistrito'>
            <b>Microrregião: </b>{ microrregiao.nome }
          </div>
          <div className='classDistrito margin'>
            <b>Mesorregião: </b>{ microrregiao.mesorregiao.nome }
          </div>
          <div className='classDistrito'>
            <b>UF: </b>{ microrregiao.mesorregiao.UF.nome }
          </div>
          <div className='classDistrito'>
            <b>Região: </b>{ microrregiao.mesorregiao.UF.regiao.nome }
          </div>
        </div>
      )
    }
  }
}

Distrito.propTypes = {
  selectedMuni: PropTypes.string,
  distritos: PropTypes.arrayOf(PropTypes.shape ({
    length: PropTypes.number,
    municipio: PropTypes.shape({
      microrregiao: PropTypes.shape({
        nome: PropTypes.string,
        mesorregiao: PropTypes.shape({
          nome: PropTypes.string,
          UF: PropTypes.shape({
            nome: PropTypes.string,
            regiao: PropTypes.shape({
              nome: PropTypes.string,
            })
          })
        })
      })
    })
  })
  )
}

const mapStateToProps = (state) => (
  {
    distritos: state.getDistritos.distritos,
    selectedMuni: state.getMunicipios.selected,
  }
);

export default connect(mapStateToProps)(Distrito);