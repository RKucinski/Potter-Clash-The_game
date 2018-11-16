import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Progress} from 'reactstrap';
import Potter from './Img/harry-potter.jpg';


class Joueur1 extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
       <img className="pictureImg" src={Potter} />
      </div>
    )
  }
}


export default Joueur1;