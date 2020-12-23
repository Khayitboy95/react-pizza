import React, { useEffect }  from 'react'
import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import SortPopup from '../components/SortPopup';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/filterReducer';
import { getPizzas } from '../redux/pizzaReducer';

const Home = () => {
  
  const dispatch = useDispatch();
  
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);

  const categoryNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const sortItems = [
    {name:"популярности", type:"popular"},
    {name:"цене", type:"price"},
    {name:"алфавиту", type:"alphabet"}
    ];

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);


  useEffect(() => {
    dispatch(getPizzas());
  }, []);

    return (
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem = {onSelectCategory}
            items={categoryNames}
          />
          <SortPopup items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
         {pizzas && pizzas.map(pizza => (<Pizza {...pizza} key={pizza.id} />))}
        </div>
      </div>
    );
}

export default Home;