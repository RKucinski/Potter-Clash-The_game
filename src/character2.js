import React, { Component } from 'react'
import './App.css'

class Character2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    determinateSens(sens) {
        if (this.props.homeData.nbrJoueurs === "none") {
            if (sens === 0) return this.props.choiceData.player2Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player2Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player2Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player2Choice.sprites + "3"
        }
        if (this.props.tournamentData.manche === 1 || !this.props.manche) {
            if (sens === 0) return this.props.choiceData.player2Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player2Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player2Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player2Choice.sprites + "3"
        }
        if (this.props.tournamentData.manche === 2 && this.props.homeData.nbrJoueurs === "inline-block") {
            if (sens === 0) return this.props.choiceData.player4Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player4Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player4Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player4Choice.sprites + "3"
        }
        if (this.props.tournamentData.manche === 3 && this.props.homeData.nbrJoueurs === "inline-block") {
            if (sens === 0) return this.props.storedState.winner2.sprites + "0"
            if (sens === 1) return this.props.storedState.winner2.sprites + "1"
            if (sens === 2) return this.props.storedState.winner2.sprites + "2"
            if (sens === 3) return this.props.storedState.winner2.sprites + "3"
        }
    }

    render() {

        return (
            <div className={this.determinateSens(this.props.sensTir2)} style={{
                top: this.props.posTop2 + 'px',
                left: this.props.posLeft2 + 'px',
                height: this.props.cellSize + "px",
                width: this.props.cellSize + "px",
            }} >
            </div>
        )
    }
}

export default Character2