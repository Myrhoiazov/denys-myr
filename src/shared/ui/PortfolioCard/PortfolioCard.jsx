import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './PortfolioCard.module.scss';

const PortfolioCard = ({ item }) => {
  const location = useLocation();

  return (
    <Link
      to={`/portfolio/${item.id}`}
      state={{ from: location }}
      className={s.link}
    >
      <div className={s.container}>
        <img
          src={`${item.img_bg}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img_bg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
          className={s.img}
        />
        <h3 className={s.title}>{item.title}</h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;
