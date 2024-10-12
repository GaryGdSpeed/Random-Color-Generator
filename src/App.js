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
      event.target.style.backgroundColor = newColor;
    };

  }

  return (
    <main id="mainApp">
      <div id='profileContainer'>
        <button className='profileButton'><a href='https://www.instagram.com/urban.chaos007/' target='_blank'><i class="fa-brands fa-instagram profile"></i></a></button>
        <button className='profileButton'><a href='https://www.tiktok.com/@urbanchaos2024?lang=en' target='_blank'><i class="fa-brands fa-tiktok profile"></i></a></button>
      </div>
      
      <div id="buttonContainer">
        <button id="button" onClick={changeColor}>Change Color</button>
      </div>
    </main>
  );
}

export default App;