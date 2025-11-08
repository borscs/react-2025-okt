import {useRef, useState} from "react";

export default function Player() {
	const playerName = useRef();
	const [enteredInput, setEnteredInput] = useState(null);
	// const [submit, setSubmit] = useState(false);
	
	// console.log('userState');
	
	// function handleChange(event) {
	// 	setSubmit(false);
	// 	setEnteredInput(event.target.value);
	// }
	
	function handleSubmit() {
		// setSubmit(true);
		setEnteredInput(playerName.current.value);
		playerName.current.value = '';
	}
	
  return (
    <section id="player">
      <h2>Welcome {enteredInput ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
