import React, { Component } from 'react';
import './index.css';
import './App.css';
import keysL from "./Img/keyLeft.png";
import InfoPerso from './InfoPerso';

class KeysLeft extends Component {

  displayCharImg1(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player1Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player1Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player3Choice.maison
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner1.maison
  }

  render() {
    return (
      <div className="left">
        <div className="blocBarVieL">
          <InfoPerso {...this.props} life={this.props.life} />
        </div>

        <div className="blocSortsL">
          <img className="maisonImage" src={this.displayCharImg1(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}></img>
        </div>

        <div className="blocTouchesL">
          <img src={keysL} alt="" />
        </div>
      </div>
    );
  }
}
export default KeysLeft;
