import { Outlet } from "react-router";
import Header from "./components/Header";
import Animate from "./components/Animation"
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <Header />
      <Animate />
      <Button />
      <Outlet />
    </div>
  );
}

export default App;