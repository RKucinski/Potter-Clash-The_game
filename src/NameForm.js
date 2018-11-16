import React, { Component } from "react";
import logo from './logoHPC.png';
import './App.css';
import { NavLink } from 'react-router-dom'


class NameFormPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePlayer1: " ",
      namePlayer2: " ",
      namePlayer3: " ",
      namePlayer4: " ",
      nbrJoueurs: "none"
    }
  }

  componentWillMount() {
    localStorage.clear()
  }

  changeNbrJoueurs4 = () => {
    this.setState({ nbrJoueurs: "inline-block" })
  }

  changeNbrJoueurs2 = () => {
    this.setState({ nbrJoueurs: "none" })
  }

  nameChangePlayer1 = (event) => {
    this.setState({ namePlayer1: event.target.value });
  }

  nameChangePlayer2 = (event) => {
    this.setState({ namePlayer2: event.target.value });
  }

  nameChangePlayer3 = (event) => {
    this.setState({ namePlayer3: event.target.value });
  }

  nameChangePlayer4 = (event) => {
    this.setState({ namePlayer4: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getDataBack(this.state)
    }
  }

  render() {
    return (
      <div className="blocHomePage">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="blocOpac">
          <h1 className="titre-general">Welcome Wizard !</h1>
          <div>
            <button onClick={this.changeNbrJoueurs2} className="btn-choose-nb-player">2 joueurs</button>
            <button onClick={this.changeNbrJoueurs4} className="btn-choose-nb-player">4 joueurs</button>
          </div>

          <div className="blocChooseName">
            <p className="chooseTitle">Player 1 : enter your name</p>
            <input
              type="text"
              value={this.state.namePlayer1}
              onChange={this.nameChangePlayer1}
              className="input-acc"
            />
            <p className="txtChooseName">Player : {this.state.namePlayer1}</p>
          </div>


          <div className="blocChooseName">
            <p className="chooseTitle">Player 2 : enter your name</p>
            <input
              type="text"
              value={this.state.namePlayer2}
              onChange={this.nameChangePlayer2}
              className="input-acc"
            />
            <p className="txtChooseName">Player : {this.state.namePlayer2}</p>
          </div>


          <div className="blocChooseName" style={{ display: this.state.nbrJoueurs }}>
            <p className="chooseTitle">Player 3 : enter your name</p>
            <input
              type="text"
              value={this.state.namePlayer3}
              onChange={this.nameChangePlayer3}
              className="input-acc"
            />
            <p className="txtChooseName">Player : {this.state.namePlayer3}</p>
          </div>

          <div className="blocChooseName" style={{ display: this.state.nbrJoueurs }}>
            <p className="chooseTitle">Player 4 : enter your name</p>
            <input
              type="text"
              value={this.state.namePlayer4}
              onChange={this.nameChangePlayer4}
              className="input-acc"
            />
            <p className="txtChooseName">Player : {this.state.namePlayer4}</p>
          </div>

          <NavLink to="/Character">
            <button className="btn-start-p1p3">Next Step</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NameFormPlayer;
