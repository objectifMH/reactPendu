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
<<<<<<< HEAD
=======

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    //this.changeTrouve = this.changeTrouve.bind(this);
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
  }


  render() {
<<<<<<< HEAD

=======
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
    return (
      <Repeat numTimes={this.props.motRecherche.length}>
        {index => (
          <Lettre
<<<<<<< HEAD
            backgd="yellow"
            color={this.props.motRecherche.charAt(index) === '_' ? "red" : "green"}
            lettreSelectionne={this.props.motRecherche.charAt(index)}
            class={this.props.class}
            maLettre={this.props.motRecherche.charAt(index)}
            keyBoard={false} 
            winner={this.props.winner}
=======
            
            class={this.props.class}
            maLettre={this.props.motRecherche.charAt(index)}
            keyBoard={false} 
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
            
          />
        )}
      </Repeat>
    );
  }
}

export default Mot;
