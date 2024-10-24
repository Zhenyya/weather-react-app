import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Yevheniia Manko and is{" "}
          <a
            href="https://github.com/Zhenyya/forecast-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
