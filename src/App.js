// npo
import './App.css';
import Compo from './compo';

function App() {
  const divStyle ={
    backgroundColor: "green",
    fontSize:"150px"
    
  }

  const textHe = "compo text "
  return (
    <div className="App" style={divStyle}>
      <Compo  ourStyle ={divStyle}text={textHe}/>
      <h2> heading two</h2>
    </div>
  );
}

export default App;
