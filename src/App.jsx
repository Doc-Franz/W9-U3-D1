import "./App.css";
import TitleComponent from "./components/TitleComponent";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent title="U3 W9 D1" />
        <ButtonComponent buttonTitle="bottone 1" />
        <ButtonComponent buttonTitle="bottone 2" />
        <ButtonComponent buttonTitle="bottone 3" />
        <ImageComponent
          src="https://images.unsplash.com/photo-1732459996749-e39500ee6063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt="Image1"
        />
        <ImageComponent
          src="https://images.unsplash.com/photo-1732466285965-87c9caa258a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
          alt="Image2"
        />
      </header>
    </div>
  );
}

export default App;
