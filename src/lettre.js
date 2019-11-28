import React from "react";


//function Lettre() {
class Lettre extends React.Component {
  
  render(props) {
    return (
          <p 
          className={this.props.class} 
          onClick={() => this.props.onClick()}
            >
            {this.props.keyBoard === true ? this.props.maLettre  : this.props.maLettre}
          </p>
    );
  }i
}

export default Lettre;
