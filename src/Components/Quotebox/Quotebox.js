import React, {Component} from 'react';
import './Quotebox.css';

class Quotebox extends Component {
  render() {
    return(
      <div className='quotebox'>
        <h3>
          {this.props.quote}
        </h3>
      </div>
    )
  }

}

export default Quotebox;
