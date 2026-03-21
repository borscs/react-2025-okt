import {useNavigate} from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();
	
	function navigationHandler() {
		
		navigate('/products');
	}
	
	return (
		<>
			<h1>My Home Page</h1>
			<p>
				Go to <button onClick={navigationHandler}>The list of Products</button>
			</p>
		</>
	)
}

export default HomePage;
