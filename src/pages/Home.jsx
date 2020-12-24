import React from 'react';
import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import SortPopup from '../components/SortPopup';
import { connect } from 'react-redux';
import { setCategory } from '../redux/filterReducer';
import { getPizzas } from '../redux/pizzaReducer';
import LoadingBlock from '../components/LoadingBlock';

const categoryNames = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

class Home extends React.Component {

    componentDidMount() {
      this.props.getPizzas();
    }

    onSelectCategory = (index) => {
      this.props.setCategory(index);
    }

    render() {
      return (
        <div className="container">
          <div className="content__top">
            <Categories
              onClickItem = {this.onSelectCategory}
              items={categoryNames}
            />
            <SortPopup items={sortItems} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
           {!this.props.isLoading ? this.props.pizzas.map(pizza => (<Pizza {...pizza} key={pizza.id} />)) 
           : Array(10).fill(0).map((_,index) => <LoadingBlock key={index} /> ) }
          </div>
        </div>
      );
    }
}

let mapStateToProps = (state) => {
  return{
      pizzas: state.pizzas.pizzas,
      isLoading: state.pizzas.isLoading
  }
}

export default connect(mapStateToProps, {getPizzas, setCategory})(Home);