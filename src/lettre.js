import React from "react";


//function Lettre() {
class Lettre extends React.Component {
  
  
  render() {

    const style = {
      color: ((this.props.winner === false) ? this.props.color : "yellow"),
      background: ((this.props.winner === false) ? this.props.backgd : "black"),
      fontSize: ((this.props.winner === false) ? "21px" : "30px"), 
    }

    console.log("winner "+this.props.winner);
    return (
          <p style={style} 
          class="lettre"
          onClick={() => this.props.onClick()}
            >
            { this.props.maLettre }
          </p>
    );
  }
}

export default Lettre;

/* return (
  <p style={style}
  className={this.props.maLettre === '_' ?
   (this.props.class  + "not rouge" ) :
   ( this.props.lettreSelectionne.includes(this.props.maLettre) ? 
   (
     (this.props.keyBoard === true ) ? (this.props.class +  " isSelected ") : (this.props.class)
   ):
     (this.props.class )
   ) 
    } 
  onClick={() => this.props.onClick()}
    >
    {this.props.keyBoard === true ? this.props.maLettre  : this.props.maLettre}
  </p>
);
*/