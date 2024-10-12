
import './App.css';

function App() {

  const changeColor = event => {
    const mainApp = event.target.parentElement.parentElement;
    const currentColor = mainApp.style.backgroundColor;
    const newColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    mainApp.animate([
      {backgroundColor: currentColor},
      {backgroundColor: newColor}
    ], {
      duration: 1000,
      fill: "forwards",
      iterations: 1
    }).onFinish = () => {
      mainApp.style.backgroundColor = newColor;
      event.target.style.color = newColor;
    };

  }

  return (
    <main id="mainApp">
      <div id="buttonContainer">
        <button id="button" onClick={changeColor}>Change Color</button>
      </div>
    </main>
  );
}

export default App;