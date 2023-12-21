import { useState } from "react";

import "./App.css";
import Buttonplus from "./components/Buttonplus";
import Buttonmoin from "./components/Buttonmoin";
import Counter from "./components/Counter";
import Buttonzero from "./components/Buttonzero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const zero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Header />
      <div className="card">
        <Buttonmoin decrement={decrement} />

        <div className="reset">
          <Counter value={counter} />
          <Buttonzero zero={zero} />
        </div>

        <Buttonplus increment={increment} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
