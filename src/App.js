import Die from './components/Die';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
// import { confettiDefaults } from 'react-confetti/dist/types/Confetti';
import Confetti from 'react-confetti'

function App() {

  //Create a tenzies state to check is the user has won or not
  const [tenzies, setTenzies] = useState(false);

  // create a state for storing the dice data;
  const [dice, setDice] = useState(allNewDice());


  useEffect(() => {
      let prev = dice[0];
      let check = true;
      for(let i=0; i<10; i++){
        if(!prev.isHeld || !dice[i].isHeld){
          check = false;
        }
        if(prev.value != dice[i].value){
          check = false;
        }
        
      }

      setTenzies(check);
  }, [dice])
  

  function generateNewDie(){
    return {
      value:(Math.floor(Math.random() * 6) + 1), 
      isHeld:false, 
      id:Math.random().toString(36).substr(2, 9)
    }
  }

  function allNewDice(){
      let allDiceNo = [];
      for(let i=0; i<10; i++){
        allDiceNo.push(generateNewDie());
      }
      return allDiceNo;
  }

  function rollDice(){
    // setDice(allNewDice());
    if(tenzies){
      setDice(allNewDice());
      setTenzies(false);
    }
    else{
      setDice(prevDice=>prevDice.map(die=>{
        return die.isHeld ? die:generateNewDie();
      }))
    }
    
  }

  function holdDice(id){
    setDice(prevDice=>prevDice.map(die=>{
      return die.id===id ? {...die, isHeld:!die.isHeld}:die;
    }))
  }

  // function holdDice(id){
  //   console.log(id);
  // }
  


  const diceElements = dice.map(die=><Die value={die.value} key={die.id} isHeld={die.isHeld}  holdDice={()=>holdDice(die.id)}/>)

  return (
    
    <div className='container'>
      
      <div className="sub_Container">

      


      {tenzies && <Confetti
      width={500}
      height={500} />}
        <div className="sub_Container_for_flex">


            <Header/>



            <div className="tiles">



                {diceElements}



            </div>

            

            <div className="button" >
                <p className='button_part' onClick={rollDice}>{tenzies?'New Game':'Roll'}</p>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
