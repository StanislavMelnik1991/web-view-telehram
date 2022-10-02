import { v1 } from 'uuid';
import pizzaImg from '../../assets/images/pizza.png';
import burgerImg from '../../assets/images/burger.png';
import cocaImg from '../../assets/images/coca.png';
import saladImg from '../../assets/images/salad.png';
import waterImg from '../../assets/images/water.png';
import icecreamImg from '../../assets/images/icecream.png';
import icecream1Img from '../../assets/images/icecream1.png';
import kebabImg from '../../assets/images/kebab.png';
import { IFood } from '../../type';

export const getData: () => { [id: string]: IFood } = () => {
  const arr = [
    {
      title: 'Pizza', price: 17.99, image: pizzaImg, id: v1(),
    },
    {
      title: 'Burger', price: 15, image: burgerImg, id: v1(),
    },
    {
      title: 'Coca-cola', price: 3.5, image: cocaImg, id: v1(),
    },
    {
      title: 'Salad', price: 2.5, image: saladImg, id: v1(),
    },
    {
      title: 'Bottle of water', price: 0.99, image: waterImg, id: v1(),
    },
    {
      title: 'Ice cream', price: 2.99, image: icecreamImg, id: v1(),
    },
    {
      title: 'Ice cream', price: 3.5, image: icecream1Img, id: v1(),
    },
    {
      title: 'Kebab', price: 13.99, image: kebabImg, id: v1(),
    },
  ];
  const result: { [id: string]: IFood } = {};
  // eslint-disable-next-line no-return-assign
  arr.forEach((el) => result[el.id] = el);
  return result;
};
