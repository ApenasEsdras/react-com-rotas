import React, {Component} from 'react';
import {Link} from 'react-router-dom/Link';

class Usuario extends Component{
  render(){
    return(
      <div>
        <p>
          <Link to="/">Ir para Home</Link>
        </p>
      </div>
    )
  }
}
export default Usuario;