import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Import Component
import Home from "./pages/Home";
import CashOpname from "./pages/CashOpname";
import HoGtoT from "./pages/HoGtoT";
import HoTtoG from "./pages/HoTtoG";
import RekonData from "./pages/RekonData";
import RvTrans from "./pages/RvTrans";
import SendToBank from "./pages/SendToBank";
import SetUserOutlet from "./pages/SetUserOutlet";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/setuseroutlet" exact component={SetUserOutlet} />
          <Route path="/handovercash-gas2teller" exact component={HoGtoT} />
          <Route path="/handovercash-teller2gas" exact component={HoTtoG} />
          <Route path="/rvtransfer" exact component={RvTrans} />
          <Route path="/cashopname" exact component={CashOpname} />
          <Route path="/sendtobank" exact component={SendToBank} />
          <Route path="/rekondata" exact component={RekonData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
