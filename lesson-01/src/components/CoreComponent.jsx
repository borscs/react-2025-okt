

export function CoreComponent(props) {
	console.log('CoreComponent');
	return (
		<li>
			<img src={props.image} alt={props.title}/>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	)
}
