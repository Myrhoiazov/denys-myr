import s from './Button.module.scss';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button type={type} className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
