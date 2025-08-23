import { Outlet } from "react-router";
import Header from "./components/Header";
import Animate from "./components/Animation";
import GetStartedButton from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <Animate />
      <GetStartedButton />
      <Outlet />
    </>
  );
}

export default App;

