import {useState} from "react";
import reactImage from "../assets/react-core-concepts.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

 function genRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max + 1));
}


export function Header() {
	const [radomNumber, setRadomNumber] = useState(genRandomInt(2));
	console.log('Header');
	return (
		<header>
			<img src={reactImage} alt="Stylized atom"/>
			<h1>React Essentials</h1>
			<p>
				{reactDescriptions[radomNumber]} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	)
}
