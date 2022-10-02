import { useAppDispatch, useAppSelector } from '@hooks';
import { shopSlice } from '@reducers/shopSlice';
import { IFood } from '../../type';
import { Button } from '../Button';
import * as style from './style.css';

export const Card = ({
  image, price, title, id,
}: IFood) => {
  const { basket } = useAppSelector((state) => state.shopReducer);
  const { changeCount } = shopSlice.actions;
  const dispatch = useAppDispatch();

  const handleIncrement = () => dispatch(changeCount({ productId: id, count: 1 }));
  const handleDecrement = () => dispatch(changeCount({ productId: id, count: -1 }));
  return (
    <div className={style.wrapper} id={id}>
      {basket[id] && <span className={style.count}>{basket[id].count}</span>}
      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
      <h4 className={style.title}>
        {`${title}. `}
        <span className={style.price}>
          {`$${price}`}
        </span>
      </h4>
      <div className={style.buttons}>
        <Button title='+' type='add' isDisable={false} onClick={handleIncrement} />
        {basket[id] && <Button title='-' type='remove' isDisable={!basket[id]} onClick={handleDecrement} />}
      </div>

    </div>
  );
};
