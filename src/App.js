import logo from "./logo.svg";
import "./App.css";

import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <Fetch url="https://strapi-digitalocean-2-mawnc.ondigitalocean.app/api/books?populate=*" />
    </div>
  );
}

export default App;
