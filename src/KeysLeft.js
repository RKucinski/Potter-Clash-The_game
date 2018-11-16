import React, { Component } from 'react';
import './index.css';
import './App.css';
import keysL from "./Img/keyLeft.png";
import InfoPerso from './InfoPerso';

class KeysLeft extends Component {

  render() {
    return (
      <div className="left">
        <div className="blocBarVieL">
          <InfoPerso {...this.props} life={this.props.life} />
        </div>

        <div className="blocSortsL">
          <img className="maisonImage" src={this.props.choiceData.player1Choice.maison}></img>
        </div>

        <div className="blocTouchesL">
          <img src={keysL} alt="" />
        </div>
      </div>
    );
  }
}
export default KeysLeft;
