import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use-size";

export default function Main(props) {
  const [die, setDie] = useState(allNewDice());
  const [dieValue, setDieValue] = useState();
  const [tenzies, setTenzies] = useState(false);
  const { height, width } = useWindowSize();

  useEffect(() => {
    const allHeld = die.every(ele => ele.isHeld);
    const firstNum = die[0].value;
    const allNumSame = die.every(ele => ele.value === firstNum);
    if(allHeld && allNumSame) {
      setTenzies(true);
    }
  },[die])
  function allNewDice() {
    const randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr.push(generateNewDie());
    }
    return randomArr;
  }

  function toggleClick(value, id) {
    if(!dieValue) setDieValue(value);
    setDie((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: (!dieValue || dieValue === die.value) } : die;
      })
    );
  }

  const dieElements = die.map((die, index) => (
    <Die
      value={die.value}
      key={index}
      id={die.id}
      toggle={toggleClick}
      isHeld={die.isHeld}
      valueChosen = {dieValue}
    />
  ));

  function roll() {
    if(tenzies) {
      setTenzies(old => !old)
      setDie(allNewDice());
      setDieValue();
    } else {
      setDie((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : generateNewDie();
      })
    );
    }
  }

  function generateNewDie () {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() *6),
      isHeld: false,
    }
  }

  return (
    <main className={props.darkMode ? "dark" : ""}>
      <div className="main--child">
      {tenzies && <ReactConfetti width = {width} height = {height}/>}
      <h3 className="box--title">Tenzies</h3>
      <p className="box--text">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="box--dices">{dieElements}</div>
      <button className={`box--roll ${tenzies ? "new" : ""}`} onClick={roll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      </div>
    </main>
  );
}
