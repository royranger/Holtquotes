import React, { Component } from 'react';
import './App.css';
import quotes from './quotes';
import Quotebox from '../Components/Quotebox/Quotebox';
import Randomise from '../Components/Randomise/Randomise';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const numQuotes = Object.keys(quotes).length;
    const randomID = Math.floor(Math.random()*numQuotes);
    this.setState({
      quote: quotes[`${randomID}`]
    });


  }


  render() {
    return (
      <div className="container">
        <h1>The Wisdom of Captain Holt</h1>
        <div className='imgflex'>
          <img
            src={require('./holtpic.jpg')}
            />
        </div>
        <Quotebox quote={this.state.quote}/>
        <Randomise handleClick={this.handleClick}/>

      </div>
    );
  }
}

export default App;
