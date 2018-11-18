import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './App.css';
import logo from './logoHPC.png';
import gryf from './Img/gryf.png'
import serredaigle from './Img/aigle.png'
import pouf from './Img/pouf.png'
import serpentard from './Img/serpentard.png'
import character0 from './Img/Characters/character0.jpeg'
import harry from './Img/Characters/character1.jpeg'
import harrydead from './Img/Characters/character1_died.jpeg'
import cedric from './Img/Characters/character2.jpeg'
import cedricdead from './Img/Characters/character2_died.jpeg'
import malfoy from './Img/Characters/character3.jpeg'
import malfoydead from './Img/Characters/character3_died.jpeg'
import luna from './Img/Characters/character4.jpeg'
import lunadead from './Img/Characters/character4_died.jpeg'
import hermione from './Img/Characters/character5.jpeg'
import hermionedead from './Img/Characters/character5_died.jpeg'
import norbert from './Img/Characters/character6.jpeg'
import norbertdead from './Img/Characters/character6_died.jpeg'
import severus from './Img/Characters/character7.jpeg'
import severusdead from './Img/Characters/character7_died.jpeg'
import sybill from './Img/Characters/character8.jpeg'
import sybilldead from './Img/Characters/character8_died.jpeg'

const players = {
    "Harry Potter":{
        name : "Harry Potter",
        avatar : harry,
        avatarDead : harrydead,
        maison : gryf,
        sprites : "harryDisplay",
        border : "red solid thick",
        color : "red",
    },
    "Cedric Diggory":{
        name : "Cedric Diggory",
        avatar : cedric,
        avatarDead : cedricdead,
        maison : pouf,
        sprites : "cedricDisplay",
        border : "yellow solid thick",
        color : "yellow",
    },
    "Drago Malfoy":{
        name : "Drago Malfoy",
        avatar : malfoy,
        avatarDead : malfoydead,
        maison : serpentard,
        sprites : "dragoDisplay",
        border : "green solid thick",
        color : "green",
    },
    "Luna Lovegood":{
        name : "Luna Lovegood",
        avatar : luna,
        avatarDead : lunadead,
        maison : serredaigle,
        sprites : "lunaDisplay",
        border : "blue solid thick",
        color : "blue",
    },
    "Hermione Granger":{
        name : "Hermione Granger",
        avatar : hermione,
        avatarDead : hermionedead,
        maison : "/Images/gryf.png",
        sprites : "hermioneDisplay",
        border : "red solid thick",
        color : "red",
    },
    "Norbert Dragonneau":{
        name : "Norbert Dragonneau",
        avatar : norbert,
        avatarDead : norbertdead,
        maison : pouf,
        sprites : "norbertDisplay",
        border : "yellow solid thick",
        color : "yellow",
    },
    "Severus Snape":{
        name : "Severus Snape",
        avatar : severus,
        avatarDead : severusdead,
        maison : serpentard,
        sprites : "severusDisplay",
        border : "green solid thick",
        color : "green",
    },
    "Sybill Trelawney":{
        name : "Sybill Trelawney",
        avatar : sybill,
        avatarDead : sybilldead,
        maison : serredaigle,
        sprites : "sybillDisplay",
        border : "blue solid thick",
        color : "blue",
    },
}

class ChoiceCharacter extends Component {

    constructor(){
        super()
        this.state={
            player1Choice : {
                name : "0",
                avatar : character0,
                border : "black double thick",
            },
            player2Choice : {
                name : "0",
                avatar : character0,
                border : "black double thick",
            },
            player3Choice : {
                name : "0",
                avatar : character0,
                border : "black double thick",
            },
            player4Choice : {
                name : "0",
                avatar : character0,
                border : "black double thick",
            },

            borderChosenCharColor1 : "black",
            borderChosenCharColor2 : "black",
            borderChosenCharColor3 : "black",
            borderChosenCharColor4 : "black",
            borderChosenCharColor5 : "black",
            borderChosenCharColor6 : "black",
            borderChosenCharColor7 : "black",
            borderChosenCharColor8 : "black",

        }
    }


    borderActivation = (nom) => {
        if (nom === "Harry Potter")
            this.setState( () => {
                return (this.state.borderChosenCharColor1 === "red")? {borderChosenCharColor1 : "black"} : {borderChosenCharColor1 : "red"}}
            )
        if (nom === "Cedric Diggory")
            this.setState( () => {
                return (this.state.borderChosenCharColor2 === "yellow")? {borderChosenCharColor2 : "black"} : {borderChosenCharColor2 : "yellow"}}
            )
        if (nom === "Drago Malfoy")
            this.setState( () => {
                return (this.state.borderChosenCharColor3 === "green")? {borderChosenCharColor3 : "black"} : {borderChosenCharColor3 : "green"}}
            )
        if (nom === "Luna Lovegood")
            this.setState( () => {
                return (this.state.borderChosenCharColor4 === "blue")? {borderChosenCharColor4 : "black"} : {borderChosenCharColor4 : "blue"}}
            )
        if (nom === "Hermione Granger")
            this.setState( () => {
                return (this.state.borderChosenCharColor5 === "red")? {borderChosenCharColor5 : "black"} : {borderChosenCharColor5 : "red"}}
            )
        if (nom === "Norbert Dragonneau")
            this.setState( () => {
                return (this.state.borderChosenCharColor6 === "yellow")? {borderChosenCharColor6 : "black"} : {borderChosenCharColor6 : "yellow"}}
            )
        if (nom === "Severus Snape")
            this.setState( () => {
                return (this.state.borderChosenCharColor7 === "green")? {borderChosenCharColor7 : "black"} : {borderChosenCharColor7 : "green"}}
            )
        if (nom === "Sybill Trelawney")
            this.setState( () => {
                return (this.state.borderChosenCharColor8 === "blue")? {borderChosenCharColor8 : "black"} : {borderChosenCharColor8 : "blue"}}
            )
    }


    chooseCharacter = (choice, nom) => {

        if (this.state.player1Choice.name === "0" && this.state.player2Choice.name !== nom && this.state.player3Choice.name !== nom && this.state.player4Choice.name !== nom){
            this.setState({player1Choice: choice})
            this.borderActivation(nom)
          }
        if (this.state.player1Choice.name !== "0" && this.state.player2Choice.name !== nom && this.state.player3Choice.name !== nom && this.state.player4Choice.name !== nom && choice === this.state.player1Choice){
            this.setState({player1Choice : {name : "0",avatar : character0, border : "black double thick",}})
            this.borderActivation(nom)
            return
          }
        if (this.state.player1Choice.name !== "0" && this.state.player2Choice.name === "0" && this.state.player1Choice.name !== nom && this.state.player3Choice.name !== nom && this.state.player4Choice.name !== nom){
            this.setState({player2Choice: choice})
            this.borderActivation(nom)
          }
        if (this.state.player2Choice.name !== "0" && choice === this.state.player2Choice && this.state.player1Choice.name !== nom && this.state.player3Choice.name !== nom && this.state.player4Choice.name !== nom){
            this.setState({player2Choice : {name : "0",avatar : character0, border : "black double thick",}})
            this.borderActivation(nom)
            return
          }
        if (this.props.homeData.nbrJoueurs === "inline-block" && this.state.player1Choice.name !== "0" && this.state.player2Choice.name !== "0" && this.state.player3Choice.name === "0" && this.state.player1Choice.name !== nom && this.state.player2Choice.name !== nom && this.state.player4Choice.name !== nom){
            this.setState({player3Choice: choice})
            this.borderActivation(nom)
          }
        if (this.props.homeData.nbrJoueurs === "inline-block" && this.state.player3Choice.name !== "0" && choice === this.state.player3Choice && this.state.player1Choice.name !== nom && this.state.player2Choice.name !== nom && this.state.player4Choice.name !== nom){
            this.setState({player3Choice : {name : "0",avatar : character0, border : "black double thick",}})
            this.borderActivation(nom)
            return
          }
        if (this.props.homeData.nbrJoueurs === "inline-block" && this.state.player1Choice.name !== "0" && this.state.player2Choice.name !== "0" && this.state.player3Choice.name !== "0" && this.state.player4Choice.name === "0" && this.state.player1Choice.name !== nom && this.state.player2Choice.name !== nom && this.state.player3Choice.name !== nom){
            this.setState({player4Choice: choice})
            this.borderActivation(nom)
          }
        if (this.props.homeData.nbrJoueurs === "inline-block" && this.state.player4Choice.name !== "0" && choice === this.state.player4Choice && this.state.player1Choice.name !== nom && this.state.player2Choice.name !== nom && this.state.player3Choice.name !== nom){
            this.setState({player4Choice : {name : "0",avatar : character0, border : "black double thick",}})
            this.borderActivation(nom)
            return
          }

    }

    displayChosenName = (name) =>{
        return (name === "0")? "?" : name
    }

    setTournament = () => {
        if (this.props.homeData.nbrJoueurs === "inline-block") return "/Tournament"
        return "/Game"
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getDataBack(this.state)
        }
    }

    render () {
        return (
            <div className="ChoiceCharacter">
              <img src={logo} className="App-logo" alt="logo" />
                <h1 className="titre-page-choose">Choix du personnage</h1>


                <div className="choixpersonnages">
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Harry Potter"], "Harry Potter")}
                                style={{
                                    backgroundImage: harry,
                                    borderColor: this.state.borderChosenCharColor1,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Harry Potter"].name}</h5>
                        </div>

                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Cedric Diggory"], "Cedric Diggory")}
                                style={{
                                    backgroundImage: cedric,
                                    borderColor: this.state.borderChosenCharColor2,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Cedric Diggory"].name}</h5>
                        </div>

                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Drago Malfoy"], "Drago Malfoy")}
                                style={{
                                    backgroundImage: malfoy,
                                    borderColor: this.state.borderChosenCharColor3,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Drago Malfoy"].name}</h5>
                        </div>


                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Luna Lovegood"], "Luna Lovegood")}
                                style={{
                                    backgroundImage: luna,
                                    borderColor: this.state.borderChosenCharColor4,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Luna Lovegood"].name}</h5>
                        </div>


                    </div>
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                    <div  className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Hermione Granger"], "Hermione Granger")}
                                style={{
                                    backgroundImage: hermione,
                                    borderColor: this.state.borderChosenCharColor5,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Hermione Granger"].name}</h5>
                        </div>

                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Norbert Dragonneau"], "Norbert Dragonneau")}
                                style={{
                                    backgroundImage: norbert,
                                    borderColor: this.state.borderChosenCharColor6,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Norbert Dragonneau"].name}</h5>
                        </div>

                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Severus Snape"], "Severus Snape")}
                                style={{
                                    backgroundImage: severus,
                                    borderColor: this.state.borderChosenCharColor7,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Severus Snape"].name}</h5>
                        </div>

                        <div className="bloc-choix-perso">
                            <button
                                className="choice"
                                onClick={() => this.chooseCharacter(players["Sybill Trelawney"], "Sybill Trelawney")}
                                style={{
                                    backgroundImage: sybill,
                                    borderColor: this.state.borderChosenCharColor8,
                                }}
                            ></button>
                            <h5 className="text-names-choose">{players["Sybill Trelawney"].name}</h5>
                        </div>
                      </div>
                    </div>


                <div className="personnagesChoisis">
                    <div>
                        <div className="img-choose-select">
                            <h2 className="name-choose-select1">{this.props.homeData.namePlayer1}</h2>
                            <img
                                src={this.state.player1Choice.avatar}
                                style={{border: this.state.player1Choice.border}}
                                alt=""
                            />
                            <h6 className="name-choose-select2">{this.displayChosenName(this.state.player1Choice.name)}</h6>
                        </div>
                        <div className="img-choose-select">
                            <h2 className="name-choose-select1">{this.props.homeData.namePlayer2}</h2>
                            <img
                                src={this.state.player2Choice.avatar}
                                style={{border: this.state.player2Choice.border}}
                                alt=""
                            />
                            <h6 className="name-choose-select2">{this.displayChosenName(this.state.player2Choice.name)}</h6>

                        </div>
                    </div>
                    <div style={{display: this.props.homeData.nbrJoueurs}}>
                        <div className="img-choose-select">
                            <h2 className="name-choose-select1">{this.props.homeData.namePlayer3}</h2>
                            <img
                                src={this.state.player3Choice.avatar}
                                style={{border: this.state.player3Choice.border}}
                                alt=""
                            />
                            <h6 className="name-choose-select2">{this.displayChosenName(this.state.player3Choice.name)}</h6>
                        </div>
                        <div className="img-choose-select">
                            <h2 className="name-choose-select1">{this.props.homeData.namePlayer4}</h2>
                            <img
                                src={this.state.player4Choice.avatar}
                                style={{border: this.state.player4Choice.border}}
                                alt=""
                            />
                            <h6 className="name-choose-select2">{this.displayChosenName(this.state.player4Choice.name)}</h6>
                        </div>
                    </div>
                </div>
                    <div>
                        <NavLink to={this.setTournament()}>
                            <button
                                className="btn-page-choose"
                            >Play</button>
                        </NavLink>
                    </div>
            </div>
        )
    }
}

export default ChoiceCharacter
