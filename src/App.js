import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import Header from './Components/Header/Header';
import MealDetail from './Components/MealDetail/MealDetail';
import Meals from './Components/Meals/Meals';
import NotFound from './Components/NotFound/NotFound';
import Resturant from './Components/Resturant/Resturant';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Resturant />
          </Route>
          <Route path="/Resturant">
            <Resturant />
          </Route>
          <Route path="/Meals">
            <Meals />
          </Route>
          <Route exact path="/MealDetail/:idMeal">
            <MealDetail />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
