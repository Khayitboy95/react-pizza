import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { setPizzas } from './redux/pizzaReducer';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3003/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas.pizzas
//   }
// }

// export default connect(mapStateToProps, {setPizzas})(App);
