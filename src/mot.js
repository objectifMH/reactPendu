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
  }


  render() {

    return (
      <Repeat numTimes={this.props.motRecherche.length}>
        {index => (
          <Lettre
            backgd="yellow"
            color={this.props.motRecherche.charAt(index) === '_' ? "red" : "green"}
            lettreSelectionne={this.props.motRecherche.charAt(index)}
            class={this.props.class}
            maLettre={this.props.motRecherche.charAt(index)}
            keyBoard={false} 
            winner={this.props.winner}
            
          />
        )}
      </Repeat>
    );
  }
}

export default Mot;
