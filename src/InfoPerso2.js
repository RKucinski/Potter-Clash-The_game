import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Progress } from 'reactstrap';

class InfoPerso2 extends Component {

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

  displayCharImg2(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player2Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player2Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player4Choice.avatar
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner2.avatar
  }

  displayCharName2(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.choiceData.player2Choice.name
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.choiceData.player2Choice.name
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.choiceData.player4Choice.name
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.winner2.name
  }

  displayPlayerName2(nbrJoueurs, manche) {
    if (nbrJoueurs === "none")
      return this.props.homeData.namePlayer2
    if (nbrJoueurs === "inline-block" && manche === 1)
      return this.props.homeData.namePlayer2
    if (nbrJoueurs === "inline-block" && manche === 2)
      return this.props.homeData.namePlayer4
    if (nbrJoueurs === "inline-block" && manche === 3)
      return this.props.storedState.nameWinner2
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
            <CardTitle className="ColorPlayer">{this.displayPlayerName2(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}</CardTitle>
            <div className="CardPhoto align-items-end" style={{ justifyContent: "flex-end" }}>
              <CardSubtitle style={{ textAlign: "center" }} className="CharacterName">{this.displayCharName2(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}</CardSubtitle>
              <CardImg
                className="picture"
                src={this.displayCharImg2(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche)}
                alt="Card image cap"
              />
            </div>
            <div>
              <CardSubtitle className="Pointvie">{this.twistLifeDisplay()}/100</CardSubtitle>
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


export default InfoPerso2;
