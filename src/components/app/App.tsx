import { ComponentA } from "../ComponentA";
import { ComponentB } from "../ComponentB";
import { ComponentD } from "../ComponentD";
import './App.scss';

function App() {
  return (
    <div className="app content-position">
      <ComponentA />
      <ComponentD />
      <ComponentB />
    </div>
  );
}

export default App;
