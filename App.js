import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Formhandling from './Components/Formhandling';
import RenderingExamples from './Components/RenderingExamples';
import ListRendering from './Components/ListRendering';
import InputRefs from './Components/InputRefs';


function App() {
  return (
    <div className="App">
      <header className="ui container" style={{marginTop:'20px'}}>
        
        {/* <SearchBar/> */}
    <RenderingExamples/>
<ListRendering/>
<InputRefs/>
        {/* <Formhandling/> */}
      </header>
    </div>
  );
}

export default App;
