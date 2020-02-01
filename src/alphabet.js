import React from "react";
import Lettre from "./lettre";

//function Alphabet() {
class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTrouve: false, 
      myColor: "darkgrey"
     };
  }


  render() {
    console.log(this.props.lettreSelectionne);
    return (
      <div>
        <div>
        <Lettre maLettre="A"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("A")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("A")}/>
        <Lettre maLettre="B"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("B")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("B")}/>
        <Lettre maLettre="C"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("C")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("C")}/>
        <Lettre maLettre="D"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("D")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("D")}/>
        <Lettre maLettre="E"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("E")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("E")}/>
        <Lettre maLettre="F"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("F")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("F")}/>
        <Lettre maLettre="G"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("G")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("G")}/>
        <Lettre maLettre="H"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("H")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("H")}/>
        <Lettre maLettre="I"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("I")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("I")}/>
        <Lettre maLettre="J"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("J")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("J")}/>
        <Lettre maLettre="K"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("K")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("K")}/>
        <Lettre maLettre="L"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("L")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("L")}/>
        <Lettre maLettre="M"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("M")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("M")}/>
        <Lettre maLettre="N"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("N")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("N")}/>
        <Lettre maLettre="O"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("O")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("O")}/>
        <Lettre maLettre="P"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("P")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("P")}/>
        <Lettre maLettre="Q"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("Q")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("Q")}/>
        <Lettre maLettre="R"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("R")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("R")}/>
        <Lettre maLettre="S"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("S")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("S")}/>
        <Lettre maLettre="T"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("T")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("T")}/>
        <Lettre maLettre="U"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("U")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("U")}/>
        <Lettre maLettre="V"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("V")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("V")}/>
        <Lettre maLettre="W"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("W")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("W")}/>
        <Lettre maLettre="X"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("X")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("X")}/>
        <Lettre maLettre="Y"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("Y")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("Y")}/>
        <Lettre maLettre="Z"  class={this.props.class} leMot={this.props.motRecherche}   lettreSelectionne={this.props.lettreSelectionne} color={this.state.myColor} backgd={( this.props.lettreSelectionne.includes("Z")) ? "grey" : ""} winner={false} onClick={() => this.props.onClick("Z")}/>

      </div>

      </div>
      
    );
  }
}

export default Alphabet;
