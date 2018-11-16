import React, { Component } from 'react';
  import './App.css';
import Grid from './grid.js';
import Player from './Player.js'
import KeysLeft from './KeysLeft';
import KeysRight from './KeysRight';
import VictoryMessage from './VictoryMessage';
import logo from './logoHPC.png'

class Game extends Component {
  constructor(props) {
    super(props)
    this.row = 10
    this.column = 10
    this.cellSize = 50

    this.state = {
      lifePoint1: 100,
      lifePoint2: 100,
      storedData: {
        winner1: { id: 'Player 1', avatar: "/Images/character0.jpeg" },
        looser1: { id: 'Player 1', avatar: "/Images/character0.jpeg" },
        winner2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
        looser2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
        winner3: { id: 'Player 3', avatar: "/Images/character0.jpeg" },
      },
      victory: false,
    }
  }

  processWinner = () => {

    if ((this.state.lifePoint2 === 0) && this.props.homeData.nbrJoueurs === "none") {
      this.setState({
        victory: true,
        lifePoint2: 1,
      })
      return
    }
    else if ((this.state.lifePoint1 === 0) && this.props.homeData.nbrJoueurs === "none") {
      this.setState({
        victory: true,
        lifePoint1: 1,
      })
      return
    }
    else if ((this.state.lifePoint2 === 0) && this.props.tournamentData.manche === 1) {
      this.setState({
        storedData: {
          winner1: this.props.choiceData.player1Choice,
          nameWinner1: this.props.homeData.namePlayer1,
          looser1: this.props.choiceData.player2Choice,
          winner2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
          looser2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
          winner3: { id: 'Player 3', avatar: "/Images/character0.jpeg" },
        },
        lifePoint2: 1,
        victory: true
      })
      return
    }
    else if (this.state.lifePoint1 === 0 && this.props.tournamentData.manche === 1) {
      this.setState({
        storedData: {
          winner1: this.props.choiceData.player2Choice,
          nameWinner1: this.props.homeData.namePlayer2,
          looser1: this.props.choiceData.player1Choice,
          winner2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
          looser2: { id: 'Player 2', avatar: "/Images/character0.jpeg" },
          winner3: { id: 'Player 3', avatar: "/Images/character0.jpeg" },
        },
        lifePoint1: 1,
        victory: true
      })
      return false
    }
    else if (this.state.lifePoint2 === 0 && this.props.tournamentData.manche === 2) {
      this.setState({
        storedData: {
          winner2: this.props.choiceData.player3Choice,
          nameWinner2: this.props.homeData.namePlayer3,
          looser2: this.props.choiceData.player4Choice,
          winner1: this.state.storedData.winner1,
          looser1: this.state.storedData.looser1,
          nameWinner1: this.state.storedData.nameWinner1,
          winner3: { id: 'Player 3', avatar: "/Images/character0.jpeg" },
        },
        lifePoint2: 1,
        victory: true
      })
      return false
    }
    else if (this.state.lifePoint1 === 0 && this.props.tournamentData.manche === 2) {
      this.setState({
        storedData: {
          winner2: this.props.choiceData.player4Choice,
          nameWinner2: this.props.homeData.namePlayer4,
          looser2: this.props.choiceData.player3Choice,
          winner1: this.state.storedData.winner1,
          looser1: this.state.storedData.looser1,
          nameWinner1: this.state.storedData.nameWinner1,
          winner3: { id: 'Player 3', avatar: "/Images/character0.jpeg" },
        },
        lifePoint1: 1,
        victory: true
      })
      return false
    }
    else if (this.state.lifePoint1 === 0 && this.props.tournamentData.manche === 3) {
      this.setState({
        storedData: {
          winner2: this.state.storedData.winner2,
          looser2: this.state.storedData.looser2,
          winner1: this.state.storedData.winner1,
          looser1: this.state.storedData.looser1,
          winner3: this.state.storedData.winner2,
          nameWinner3: this.state.storedData.nameWinner2,
          nameWinner2: this.state.storedData.nameWinner2,
          nameWinner1: this.state.storedData.nameWinner1,
        },
        lifePoint1: 1,
        victory: true
      })
      return false
    }
    else if (this.state.lifePoint2 === 0 && this.props.tournamentData.manche === 3) {
      this.setState({
        storedData: {
          winner2: this.state.storedData.winner2,
          looser2: this.state.storedData.looser2,
          winner1: this.state.storedData.winner1,
          looser1: this.state.storedData.looser1,
          winner3: this.state.storedData.winner1,
          nameWinner3: this.state.storedData.nameWinner1,
          nameWinner2: this.state.storedData.nameWinner2,
          nameWinner1: this.state.storedData.nameWinner1,
        },
        lifePoint2: 1,
        victory: true
      })
      return false
    }
    else return
  }


  displayVictoryMessage = () => {
    if (this.props.homeData.nbrJoueurs === "none" && this.state.lifePoint1 === 1) {
      return <VictoryMessage winner={this.props.homeData.namePlayer2} {...this.props} />
    }
    if (this.props.homeData.nbrJoueurs === "none" && this.state.lifePoint2 === 1) {
      return <VictoryMessage winner={this.props.homeData.namePlayer1} {...this.props} />
    }
    if (this.state.lifePoint2 === 1 || this.state.lifePoint1 === 1) {
      if (this.props.tournamentData.manche === 1)
        return <VictoryMessage winner={this.state.storedData.nameWinner1} {...this.props} />
      if (this.props.tournamentData.manche === 2)
        return <VictoryMessage winner={this.state.storedData.nameWinner2} {...this.props} />
      if (this.props.tournamentData.manche === 3)
        return <VictoryMessage winner={this.state.storedData.nameWinner3} {...this.props} />
    }
  }

  reduceLifeOne = () => {
    if (this.state.lifePoint1 === 0) return
    this.setState((state) => ({
      lifePoint1: this.state.lifePoint1 - 25
    }))
  }

  reduceLifeTwo = () => {
    if (this.state.lifePoint2 === 0) return
    this.setState((state) => ({
      lifePoint2: this.state.lifePoint2 - 25
    }))
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('ongoingGame', JSON.stringify(nextState.storedData))
    this.processWinner()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getDataBack(this.state)
    }
  }

  randomBackground() {
    const backgrounds = [
      "url('http://www.dundjinni.com/forums/uploads/supercaptain/lava_test.jpg')",
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Pwy5jv3CJ04no7hhyyzQ8gVc8WQxHL7b8TZN0D_C1Hxb2FITuw')",
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl63iDNzkjN3dtjpwVv2HyibM3THHnSaoj_y6Noa-sZCS761B')",
      "url('https://assets.geekinsider.com/wp-content/uploads/2015/02/Great_Glacier-300x300.jpg')"
    ]

    return backgrounds[Math.floor((Math.random() * 4) + 0)];
  }

  componentWillMount() {
    localStorage.getItem('ongoingGame') && this.setState({
      storedData: JSON.parse(localStorage.getItem('ongoingGame')),
    })
    this.setState({ background: this.randomBackground() })
  }


  render() {
    return (
      <div className="container">

        <KeysLeft className="KeysLeft" {...this.props} storedState={this.state.storedData} life={this.state.lifePoint1} />

        <div className="App">
           <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           </header>
          <div className="Grid-wrapper" style={{ width: this.column * this.cellSize + "px" }}>
            {this.displayVictoryMessage()}
            <Grid row={this.row} column={this.column} cellSize={this.cellSize} background={this.state.background} />
            <Player victory={this.state.victory} storedState={this.state.storedData} manche={this.props.tournamentData.manche} {...this.props} cellSize={this.cellSize} looseLife1={this.reduceLifeOne} looseLife2={this.reduceLifeTwo} />
          </div>

        </div>

        <KeysRight className="KeysRight" {...this.props} storedState={this.state.storedData} life={this.state.lifePoint2} />

      </div>
    )
  }
}
export default Game;
