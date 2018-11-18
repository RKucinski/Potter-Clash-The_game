import React, { Component } from 'react';
import './index.css';
import './App.css';
import keysR from "./Img/keyRight.png";
import InfoPerso2 from './InfoPerso2';

class KeysRight extends Component {

  displayCharImg2(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player2Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player2Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player4Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner2.maison
  }
  render() {
    return (
      <div className="right">
        <div className="blocBarVieR">
          <InfoPerso2 {...this.props} life={this.props.life} />
        </div>

        <div className="blocSortsR">
          <img className="maisonImage" src={this.displayCharImg2(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}></img>
        </div>

        <div className="blocTouchesR">
          <img src={keysR} alt="" />
        </div>
      </div>

    );
  }
}
export default KeysRight;
