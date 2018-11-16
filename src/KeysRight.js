import React, { Component } from 'react';
import './index.css';
import './App.css';
import keysR from "./Img/keyRight.png";
import InfoPerso2 from './InfoPerso2';

class KeysRight extends Component {

  render() {
    return (
      <div className="right">
        <div className="blocBarVieR">
          <InfoPerso2 {...this.props} life={this.props.life} />
        </div>

        <div className="blocSortsR">
          <img className="maisonImage" src={this.props.choiceData.player2Choice.maison}></img>
        </div>

        <div className="blocTouchesR">
          <img src={keysR} alt="" />
        </div>
      </div>

    );
  }
}
export default KeysRight;
