import { useAppSelector } from '@hooks';
import { Button } from '../Button';
import * as style from './style.css';

type CartType = {
  onClick: (prop?: any) => void,
};

export const Cart = ({ onClick }: CartType) => {
  const { total } = useAppSelector((state) => state.shopReducer);
  return (
    <div className={style.wrapper}>
      {total.price !== 0 && `Total Price: ${total.price}$`}
      {total.price === 0 && 'No items in cart'}
      <Button isDisable={total.price === 0} title={`${total.price === 0 ? 'Order' : 'Checkout'}`} type={'checkout'} onClick={onClick} />
    </div>
  );
};
