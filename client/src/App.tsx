import { useAppSelector } from '@hooks';
import { useEffect } from 'react';
import * as style from './App.css';
import { Card } from './components/Card';
import { Cart } from './components/Cart';

function App() {
  const { menu } = useAppSelector((state) => state.shopReducer);
  const tlegram = window.Telegram.WebApp;
  const onCheckout = () => {
    tlegram.MainButton.text = 'Pay :';
    tlegram.MainButton.show();
  };
  useEffect(() => {
    tlegram.ready();
  });
  return (
    <div className={style.wrapper} >
      <h1>Order Food</h1>
      <Cart onClick={onCheckout} />
      <div className={style.cards}>
        {Object.values(menu).map((el) => {
          return <Card id={el.id} image={el.image} price={el.price} title={el.title} key={el.id} />;
        })}
      </div>
    </div >
  );
}

export default App;
