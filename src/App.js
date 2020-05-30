import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ChoiceTrivia from './pages/SelectTrivia';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
function App() {
  return(
    <BrowserRouter>
    <Layout>
    <Switch>
      <Route exact path="/inicio" component={WelcomePage}/>
      <Route exact path="/choicetrivias" component={ChoiceTrivia}/>
      <Route component={NotFound}/>
    </Switch>
    </Layout>
      
    </BrowserRouter>
  )
}

export default App;
