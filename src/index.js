import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Mot from "./mot";
import Alphabet from "./alphabet";

<<<<<<< HEAD

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
=======
const leMot = "MELANIE";
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a

//function App() {
  class App extends React.Component {
    constructor(props) {
      super(props);

<<<<<<< HEAD
      leMot = this.recupereMot();
      leMotChech = this.initialiseLePendu();

      this.state = { isTrouve: false ,
      leMotAChercher: leMotChech ,
      compteur: 0,
      isSelectionner: [] , 
      isGagne: false, 
      };
  }
=======
      var leMotChech = this.initialiseLePendu();
      this.state = { isTrouve: false ,
      leMotAChercher: leMotChech ,
      compteur: 0,
      };

    //this.handleClick = this.handleClick.bind(this);

  
    }
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a

  initialiseLePendu() {
      var res = ""; 
        for( let i=0 ; i<leMot.length ; i++)
        {
<<<<<<< HEAD
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
=======
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
  
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a

  handleClick(i) {
    //console.log(leMot+ " "  + i);
    var res = this.state.leMotAChercher;
<<<<<<< HEAD
    //console.log("debut " +this.state.isSelectionner+ " "+tabSelect);
=======
    //console.log("debut " +res);
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a

    if ( leMot.includes(i)){
      for ( let ind=0 ; ind< leMot.length ; ind++)
      {
        if ( leMot.charAt(ind) === i )
        {
<<<<<<< HEAD
          res = this.remplace(res, i, ind);
          console.log("dans le if " + res);
=======
          res = this.remplace(res,i , ind);
          //console.log("dans le if " + res);
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
        }
       }
      }
    var cmpt = this.state.compteur + 1 ; 

<<<<<<< HEAD
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
=======
    this.setState({
          leMotAChercher: res,
          compteur: cmpt
        }, //setState est asynchrone 
          ()=>console.log(cmpt +" " + this.state.compteur + " "+ res + " "+this.state.leMotAChercher)
        
    )

>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
    }

  render(){

<<<<<<< HEAD
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
        
=======
    return (
      <div className="App">
        <p>Nbre d'essai(s) : {this.state.compteur}</p>
        <Mot class="lettre mot" motRecherche={this.state.leMotAChercher}/>
        <Alphabet class="lettre" motRecherche={leMot}  onClick={(i) => this.handleClick(i)}/>
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
      </div>
    );
    
  }
  
}

<<<<<<< HEAD
const rootElement = document.getElementById("root");
=======
const rootElement = document.getElementById("root");""
>>>>>>> 31ecd6f4b76fec97c8fd45c0af76b796c45d013a
ReactDOM.render(<App />, rootElement);
