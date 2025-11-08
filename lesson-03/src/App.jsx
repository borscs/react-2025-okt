import Player from './components/Player.jsx';
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
	      <TimeChallenge targetTime={1} title={'Easy'}/>
	      <TimeChallenge targetTime={5} title={'Not Easy'}/>
	      <TimeChallenge targetTime={10} title={'Getting tough'}/>
	      <TimeChallenge targetTime={15} title={'Pros only'}/>
      
      </div>
    </>
  );
}

export default App;
