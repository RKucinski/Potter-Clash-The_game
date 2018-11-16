import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Progress } from 'reactstrap';



class InfoPerso extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // componentWillMount() {
  //   localStorage.getItem('ongoingGame') && this.setState({
  //     manche: JSON.parse(localStorage.getItem('ongoingGame')),
  //   })
  // }



  displayCharImg1(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player1Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player1Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player3Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner1.avatar
  }

  displayCharName1(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player1Choice.name
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player1Choice.name
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player3Choice.name
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner1.name
  }

  displayPlayerName1(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.homeData.namePlayer1
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.homeData.namePlayer1
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.homeData.namePlayer3
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.nameWinner1
  }

  twistLifeDisplay = () => {
    if (this.props.life === 1) return 0
    else return this.props.life
  }

  render() {
    return (
      <div>
        <Card className="Carte">
          <CardBody className="colorback">
            <CardTitle className="ColorPlayer">{this.displayPlayerName1(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}</CardTitle>
            <div className="CardPhoto align-items-end" style={{ justifyContent: "flex-start" }}>
              <CardImg
                className="picture"
                src={this.displayCharImg1(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}
                alt="Player"
              />
              <CardSubtitle style={{ textAlign: "center" }} className="CharacterName">{this.displayCharName1(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}</CardSubtitle>
            </div>
            <div>
              <CardSubtitle style={{ float: "right", paddingRight: "0px", paddingLeft: "10px" }} className="Pointvie">{this.twistLifeDisplay()}/100</CardSubtitle>
              <Progress multi>
                <Progress bar color="success" value={this.twistLifeDisplay()}></Progress>
                <Progress bar color="danger" value={100 - this.twistLifeDisplay()}></Progress>
              </Progress>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}


export default InfoPerso;