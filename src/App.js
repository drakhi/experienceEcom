import logo from './logo.svg';
import './App.css';
import Latestnews from './components/latestnews';
import Visitorslist from './components/visitorslist'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Router>
          <Header />
             <Container fluid>
  
    
        {/* <div className="wrapper"> */}
          <Switch>
            <Route path={"/"} exact component={Visitorslist} />
            <Route path={"/latestnews"} component={Latestnews} />
            {/* <Route path={"/contact"} component={Contact} /> */}
            {/* <Route component={ErrorPage} /> */}
          </Switch>
        {/* </div> */}
        
        </Container>

    </Router>
  );
}

export default App;
