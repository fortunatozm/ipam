import React from 'react';
import '../componentsCss/header.css';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div id='headerGeral'>
        <header>
          <h2 className='sombreado'>
            IPAM - Instituto de Pesquisa Ambiental da Amazônia
          </h2>
          <hr/>
        </header>
      </div>
    )
  }
}

export default Header;