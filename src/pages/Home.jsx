import React from 'react';
import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import SortPopup from '../components/SortPopup';
import { connect } from 'react-redux';
import { setCategory, setSortBy } from '../redux/filterReducer';
import { getPizzas } from '../redux/pizzaReducer';
import LoadingBlock from '../components/LoadingBlock';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

class Home extends React.Component {

    componentDidMount() {
      this.props.getPizzas(this.props.sortBy.type, this.props.category);
    }

    onSelectCategory = (index) => {
      this.props.setCategory(index);
      this.props.getPizzas(this.props.sortBy.type, index);
    }
    onSelectSortItems = (obj) => {
      this.props.setSortBy(obj);
      this.props.getPizzas(obj.type, this.props.category);
    }
   
    render() {
      return (
        <div className="container">
          <div className="content__top">
            <Categories
              activeCategory={this.props.category}
              onClickItem = {this.onSelectCategory}
              items={categoryNames}
            />
            <SortPopup setSortBy={this.onSelectSortItems} activeSort={this.props.sortBy.type} items={sortItems} />
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
      isLoading: state.pizzas.isLoading,
      category: state.filters.category,
      sortBy: state.filters.sortBy
  }
}

export default connect(mapStateToProps, {getPizzas, setCategory, setSortBy})(Home);