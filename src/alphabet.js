import React from "react";
import Lettre from "./lettre";

//function Alphabet() {
class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTrouve: false };
  }


  render() {
    return (
      <div>
        <Lettre maLettre="A" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("A")}/>
        <Lettre maLettre="B" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("B")}/>
        <Lettre maLettre="C" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("C")}/>
        <Lettre maLettre="D" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("D")}/>
        <Lettre maLettre="E" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("E")}/>
        <Lettre maLettre="F" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("F")}/>
        <Lettre maLettre="G" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("G")}/>
        <Lettre maLettre="H" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("H")}/>
        <Lettre maLettre="I" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("I")}/>
        <Lettre maLettre="J" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("J")}/>
        <Lettre maLettre="K" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("K")}/>
        <Lettre maLettre="L" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("L")}/>
        <Lettre maLettre="M" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("M")}/>
        <Lettre maLettre="N" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("N")}/>
        <Lettre maLettre="O" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("O")}/>
        <Lettre maLettre="P" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("P")}/>
        <Lettre maLettre="Q" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("Q")}/>
        <Lettre maLettre="R" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("R")}/>
        <Lettre maLettre="S" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("S")}/>
        <Lettre maLettre="T" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("T")}/>
        <Lettre maLettre="U" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("U")}/>
        <Lettre maLettre="V" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("V")}/>
        <Lettre maLettre="W" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("W")}/>
        <Lettre maLettre="X" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("X")}/>
        <Lettre maLettre="Y" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("Y")}/>
        <Lettre maLettre="Z" keyBoard={true} class={this.props.class} leMot={this.props.motRecherche}   onClick={() => this.props.onClick("Z")}/>

      </div>
    );
  }
}

export default Alphabet;
