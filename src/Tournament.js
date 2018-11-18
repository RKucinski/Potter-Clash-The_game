import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import character0 from './Img/Characters/character0.jpeg'
import reward from './Img/gobletReward.gif'

class Tournament extends Component {
    constructor() {
        super()
        this.state = {
            final: false,
            manche: 0,
            storedData: {
                winner1: { id: 'Player 1', avatar: character0 },
                looser1: { id: 'Player 1', avatar: character0 },
                winner2: { id: 'Player 2', avatar: character0 },
                looser2: { id: 'Player 2', avatar: character0 },
                winner3: { id: 'Player 3', avatar: character0 },
            },
        }
    }

    displayCup = () => {
        if (this.state.final) return "block"
        else return "none"
    }

    componentWillMount() {
        if (localStorage.getItem('ongoingMatch')) {
            this.setState({
                manche: JSON.parse(localStorage.getItem('ongoingMatch')) + 1,
            })
        }
        if (localStorage.getItem('ongoingGame')) {
            this.setState({
                storedData: JSON.parse(localStorage.getItem('ongoingGame')),
            })
        }
        else this.setState({ manche: this.state.manche + 1 })
    }


    componentDidMount() {
        this.props.getDataBack(this.state)
        localStorage.setItem('ongoingMatch', JSON.stringify(this.state.manche))
    }

    displayCharacter = (perso, winner) => {
        if (winner.name)
            if (perso.name !== winner.name) return perso.avatarDead
        return perso.avatar
    }




    render() {
        if (this.state.manche < 4)
            return (
                <div className="blocHomePage">
                    <div class="bloc-page-tournoi">
                        <div className="bloc-titre-tour">
                            <h1 className="titre-general">Tournament</h1>
                        </div>
                        <div id="tournoi">
                            <Container className="duel-firststep">
                                <Row>
                                    <Col md="2"></Col>
                                    <Col md="1"><img className="img-player-tour" src={this.displayCharacter(this.props.choiceData.player1Choice, this.state.storedData.winner1)} alt="" /></Col>
                                    <Col md="1"></Col>
                                    <Col md="1"><img className="img-player-tour" src={this.displayCharacter(this.props.choiceData.player2Choice, this.state.storedData.winner1)} alt="" /></Col>
                                    <Col md="1"></Col>
                                    <Col md="1"></Col>
                                    <Col md="1"><img className="img-player-tour" src={this.displayCharacter(this.props.choiceData.player3Choice, this.state.storedData.winner2)} alt="" /></Col>
                                    <Col md="1"></Col>
                                    <Col md="1"><img className="img-player-tour" src={this.displayCharacter(this.props.choiceData.player4Choice, this.state.storedData.winner2)} alt="" /></Col>
                                    <Col md="2"></Col>
                                </Row>
                            </Container>

                            <Container className="duel-semifinal">
                                <Row>
                                    <Col md="2"></Col>
                                    <Col md="1"> </Col>
                                    <Col md="1"><img className="img-player-tour" src={this.state.storedData.winner1.avatar} alt="" /></Col>
                                    <Col md="1"> </Col>
                                    <Col md="2"></Col>
                                    <Col md="1"> </Col>
                                    <Col md="1"><img className="img-player-tour" src={this.state.storedData.winner2.avatar} alt="" /></Col>
                                    <Col md="1"> </Col>
                                    <Col md="2"></Col>
                                </Row>
                            </Container>

                            <Container className="duel-final">
                                <Row>
                                    <Col md="3"></Col>
                                    <Col md="2"> </Col>
                                    <Col md="2"><img className="img-player-win-tour" src={this.state.storedData.winner3.avatar} alt="" /></Col>
                                    <Col md="2"> </Col>
                                    <Col md="3"></Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <NavLink to="./Game">
                                <button className="btn-start-tour">Fight now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        else if (this.state.manche === 4)
            return (
                <div className="blocHomePage">
                    <div class="bloc-page-tournoi">
                        <div className="bloc-titre-tour">
                            <h1 className="titre-general">Congratulations {this.state.storedData.nameWinner3} You Won!</h1>
                        </div>
                        <hr />
                        <Container className="duel-final">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="2"> </Col>
                                <Col md="2"><img className="img-player-win-tour-final" src={this.state.storedData.winner3.avatar} alt="" /></Col>
                                <Col md="2"> </Col>
                                <Col md="3"></Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col md="6">
                                    <img src={reward} alt="" />
                                </Col>
                            </Row>
                        </Container>
                        <div>
                            <NavLink to="./">
                                <button className="btn-start-p1p3" /*onClick={()=> localStorage.clear()}*/>Main menu</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    }
}
export default Tournament;
