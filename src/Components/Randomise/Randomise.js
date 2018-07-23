import React, {Component} from 'react';
import './Randomise.css';

class Randomise extends Component {
  render() {
    return(
      <div className='randombutton' onClick={this.props.handleClick}>
        <h3>Randomise!</h3>
      </div>
    )
  }
}

export default Randomise;
