import * as style from './style.css';

type ButtonType = {
  type?: 'add' | 'remove' | 'checkout',
  title: string,
  isDisable: boolean,
  onClick: (prop?: any) => void,
};

export const Button = ({
  type, title, isDisable, onClick,
}: ButtonType) => {
  return (
    <button
      className={`${style.wrapper} 
        ${(type === 'add' && style.add)
        || (type === 'checkout' && style.checkout)
        || (type === 'remove' && style.remove)}`}
      disabled={isDisable}
      onClick={() => onClick()}>
      {title}
    </button>
  );
};
