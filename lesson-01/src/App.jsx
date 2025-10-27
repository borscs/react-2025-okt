import {CORE_CONCEPTS, EXAMPLES} from "./assets/data";
import {CoreComponent} from "./components/CoreComponent";
import {Header} from "./components/Header";
import TabButton from "./components/TabButton";
import {useState} from "react";


function App() {
	
	const [selectedTopic, setSelectedTopic] = useState('valami');
	
	
	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	};
	
	let tabContent = <p>Please select a topic.</p>;
	
	if (EXAMPLES[selectedTopic]) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
			</div>
		);
	}
	
	
	return (
		<div>
			<Header/>
			<main>
				<section id="core-components">
					<h2>Time to get started!</h2>
					<ul>
						{CORE_CONCEPTS.map((item, i) => (
							<CoreComponent
								key={i}
								title={item.title}
								description={item.description}
								image={item.image}/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleClick('components')}>Components</TabButton>
						<TabButton onSelect={handleClick.bind(null, 'jsx')}>JSX</TabButton>
						<TabButton onSelect={handleClick.bind(null, 'props')}>Props</TabButton>
						<TabButton onSelect={handleClick.bind(null, 'state')}>State</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
