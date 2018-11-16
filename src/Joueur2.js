import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Progress} from 'reactstrap';
import Hermione from './Img/Hermione-granger.jpg'


class Joueur2 extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
       <img className="pictureImg" src={Hermione} />
     </div>
    )
  }
}


export default Joueur2;