import logo from "./logo.svg";
import "./App.css";

import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <Fetch url="http://localhost:1337/api/books?populate=*" />
    </div>
  );
}

export default App;
