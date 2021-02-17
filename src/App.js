import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chat from './Chat';
import MessageScreen from './MessageScreen';
function App() {
  return (
    <div className="app">
    
    <Router>

        <Switch>
            <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <MessageScreen />
            </Route>

            <Route path="/chat">
            <Header backButton="/"/>
              <Chat />
            </Route>

            

            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
