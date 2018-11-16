import React, { Component } from 'react';
import Game from './Game.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ChoiceCharacter from './ChoiceCharacter.js';
import './App.css';
import Tournament from './Tournament';
import NameFormPlayer from './NameForm'
import Credits from './Credits.js';


class App extends Component {

    constructor(){
        super()
        this.state={
            choiceData: {},
            gameData : {},
            homeData : {},
            tournamentData : {},
        }
    }

callBackChoice = (data) => {
    this.setState({choiceData: data})
}
callBackGame = (data) => {
    this.setState({gameData: data})
}
callBackHome = (data) => {
    this.setState({homeData: data})
}
callBackTournament = (data) => {
    this.setState({tournamentData: data})
}

    render() {
        return (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={()=><NameFormPlayer getDataBack={this.callBackHome}/>}/>
                <Route exact path="/Character" render={()=><ChoiceCharacter num="2" getDataBack={this.callBackChoice} homeData={this.state.homeData}/>}/>
                <Route exact path="/Tournament" render={()=><Tournament getDataBack={this.callBackTournament} gameData={this.state.gameData} choiceData={this.state.choiceData} homeData={this.state.homeData}  />} />
                <Route exact path="/Game" render={()=><Game getDataBack={this.callBackGame} tournamentData={this.state.tournamentData} choiceData={this.state.choiceData} homeData={this.state.homeData} />} />
                <Route exact path="/Credits" render={()=><Credits tournamentData={this.state.tournamentData} choiceData={this.state.choiceData} homeData={this.state.homeData} gameData={this.state.gameData} />} />
              </Switch>
            </BrowserRouter>
        )
    }
}

export default App;