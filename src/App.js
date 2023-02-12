import Die from './components/Die';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {

  ;

  // create a state for storing the dice data;
  const [dice, setDice] = useState(allNewDice());

  function rollDice(){
    setDice(allNewDice());
  }

  function allNewDice(){
      let allDiceNo = [];
      for(let i=0; i<10; i++){
        allDiceNo.push({value:(Math.floor(Math.random() * 6) + 1), isHeld:true, id:Math.random().toString(36).substr(2, 9)});
      }
      return allDiceNo;
  }
  
  function holdDice(id){
    console.log(id);
  }
  


  const diceElements = dice.map(die=><Die value={die.value} key={die.id} isHeld={die.isHeld}  holdDice={()=>holdDice(die.id)}/>)

  return (
    
    <div className='container'>
      
      <div className="sub_Container">
        <div className="sub_Container_for_flex">


            <Header/>



            <div className="tiles">



                {diceElements}



            </div>

            

            <div className="button" >
                <p className='button_part' onClick={rollDice}>Press</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
