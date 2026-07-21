// import logo from './logo.svg';
import "./App.css";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";
function App() {
  let flag = false;

  if (flag) {
    return <ListofPlayers />;
  } else {
    return <IndianPlayers />;
  }
}

export default App;
