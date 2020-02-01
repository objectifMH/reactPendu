import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Mot from "./mot";
import Alphabet from "./alphabet";


var tabMots = ['Apple', 'Banana','militante', 'Marcelo' ,"psg" , "matelo" , "handball" , "football" , "ESPAgne", 
"Metallurgie",
"Metamorphose",
"Montgolfiere",
"Kaleidoscope",
"Conquistador",
"Conspirateur",
"Citrouille",
"Controverse",
"Coquelicot",
"Dissimuler",
"Flibustier",
"Forestiere",
"Grenouille",
"Impossible",
"Labyrinthe",
"Maharadjah"
];
var leMot = "";
const tabSelect = [] ;
var leMotChech ="";

//function App() {
  class App extends React.Component {
    constructor(props) {
      super(props);

      leMot = this.recupereMot();
      leMotChech = this.initialiseLePendu();

      this.state = { isTrouve: false ,
      leMotAChercher: leMotChech ,
      compteur: 0,
      isSelectionner: [] , 
      isGagne: false, 
      };
  }

  initialiseLePendu() {
      var res = ""; 
        for( let i=0 ; i<leMot.length ; i++)
        {
          res = '_' + res ;
        }
        return res;
      }

  recupereMot() {
    return  tabMots[Math.floor( Math.random() * tabMots.length) ].toUpperCase() ;
  }
  
  remplace(mot , char , ind) {
    var res ="";
    for ( let i=0 ; i < mot.length ; i++)
    {
     res = (i === ind) ? (res + char) : (res+mot.charAt(i));
    }
    return res; 
  }
  
  reinitialiser() {
    //on pioche un nouveau mot au hasard dans le tableau 
    leMot= this.recupereMot();
    leMotChech = this.initialiseLePendu();
      
    //on remet notre tableau a 0
    tabSelect.splice(0,tabSelect.length)

    //on fixe nos states aux valeurs initiales 
    this.setState({
      isTrouve: false ,
      leMotAChercher: leMotChech ,
      compteur: 0,
      isSelectionner: [] , 
      isGagne: false,  
    });

  }

  handleClick(i) {
    //console.log(leMot+ " "  + i);
    var res = this.state.leMotAChercher;
    //console.log("debut " +this.state.isSelectionner+ " "+tabSelect);

    if ( leMot.includes(i)){
      for ( let ind=0 ; ind< leMot.length ; ind++)
      {
        if ( leMot.charAt(ind) === i )
        {
          res = this.remplace(res, i, ind);
          console.log("dans le if " + res);
        }
       }
      }
    var cmpt = this.state.compteur + 1 ; 

    if ( !tabSelect.includes(i))
    {
      tabSelect.push(i);
    }
      

    this.setState({
          leMotAChercher: res,
          compteur: cmpt,
          isSelectionner: tabSelect, 
        }, //setState est asynchrone 
          ()=>{
            console.log( this.state.isSelectionner + " " +cmpt +" " + this.state.compteur + " "+ res + " "+this.state.leMotAChercher);
          })
    }

  render(){

    var winner = false ;
    if ( this.state.leMotAChercher === leMot)
          {
            winner = true ;
            
            //alert("Félicitations");
          }

    return (
      <div className="App">
        <p>Nombre d'essai(s) : {this.state.compteur}</p>
        <Mot motRecherche={this.state.leMotAChercher} winner={winner} />
        {
            !winner && 
            <Alphabet  motRecherche={leMot}  lettreSelectionne={this.state.isSelectionner} 
            gagne={this.state.isGagne}
            onClick={(i) => this.handleClick(i)}/>
        } 
        {
          winner && 
          <button onClick={() => this.reinitialiser()}>
            Recommencer 
          </button>
        }
        
      </div>
    );
    
  }
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
