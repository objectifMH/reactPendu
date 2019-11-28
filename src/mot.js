import React from "react";
import Lettre from "./lettre";

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

//function Mot() {
class Mot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTrouve: false };

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    //this.changeTrouve = this.changeTrouve.bind(this);
  }


  render() {
    return (
      <Repeat numTimes={this.props.motRecherche.length}>
        {index => (
          <Lettre
            
            class={this.props.class}
            maLettre={this.props.motRecherche.charAt(index)}
            keyBoard={false} 
            
          />
        )}
      </Repeat>
    );
  }
}

export default Mot;
