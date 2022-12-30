import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';
import PropTypes from 'prop-types';
import '../componentsCss/mapa.css';


class Mapa extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    const { coordinate: {lat, long} } = this.props;
    return(
      <div id='mapa'>
        <Map
          provider={stamenTerrain}
          height={620}
          width={950}
          center={[lat, long]}
          zoom={6}
        >
          <ZoomControl />
          <Marker width={50} anchor={[lat, long]} />
        </Map>
      </div>
    );
  }
}

Mapa.propTypes = {
  coordinate: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
  })
}

const mapStateToProps = (state) => (
  {
    coordinate: state.getMunicipios.coordinate,
  }
);

export default connect(mapStateToProps)(Mapa);