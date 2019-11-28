import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Mot from "./mot";
import Alphabet from "./alphabet";

const leMot = "MELANIE";

//function App() {
  class App extends React.Component {
    constructor(props) {
      super(props);

      var leMotChech = this.initialiseLePendu();
      this.state = { isTrouve: false ,
      leMotAChercher: leMotChech ,
      compteur: 0,
      };

    //this.handleClick = this.handleClick.bind(this);

  
    }

  initialiseLePendu() {
      var res = ""; 
        for( let i=0 ; i<leMot.length ; i++)
        {
          res = '?' + res ;
        }
       // console.log(res);
        return res;
      }
  
  remplace(mot , char , ind) {
    var res ="";
    //console.log("mot dans  remplace "+mot );
    for ( let i=0 ; i < mot.length ; i++)
    {
      //console.log(i + " "+mot.charAt(i));
     res = (i === ind) ? (res + char) : (res+mot.charAt(i));
    }
    //console.log("apres remplace > " + res);
    return res; 
  }
  

  handleClick(i) {
    //console.log(leMot+ " "  + i);
    var res = this.state.leMotAChercher;
    //console.log("debut " +res);

    if ( leMot.includes(i)){
      for ( let ind=0 ; ind< leMot.length ; ind++)
      {
        if ( leMot.charAt(ind) === i )
        {
          res = this.remplace(res,i , ind);
          //console.log("dans le if " + res);
        }
       }
      }
    var cmpt = this.state.compteur + 1 ; 

    this.setState({
          leMotAChercher: res,
          compteur: cmpt
        }, //setState est asynchrone 
          ()=>console.log(cmpt +" " + this.state.compteur + " "+ res + " "+this.state.leMotAChercher)
        
    )

    }

  render(){

    return (
      <div className="App">
        <p>Nbre d'essai(s) : {this.state.compteur}</p>
        <Mot class="lettre mot" motRecherche={this.state.leMotAChercher}/>
        <Alphabet class="lettre" motRecherche={leMot}  onClick={(i) => this.handleClick(i)}/>
      </div>
    );
    
  }
  
}

const rootElement = document.getElementById("root");""
ReactDOM.render(<App />, rootElement);
