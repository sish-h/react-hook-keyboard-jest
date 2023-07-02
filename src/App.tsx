import './App.css';
import useKeyPress from './components/UsekeyPress';

function App() {
  // Call our hook for each key that we'd like to monitor
  const mPress: boolean = useKeyPress("m");
  const cPress: boolean = useKeyPress("c");
  const enterPress: boolean = useKeyPress("Enter");
  return (
    <div className='App'>
      <div>Please press any key among M, C, and Enter and get emoji.</div>
      <div>
        {mPress && "😊"}
        {cPress && "😢"}
        {enterPress && "🤖"}
      </div>
    </div>
  );
}

export default App;
