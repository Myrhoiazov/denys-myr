import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './PortfolioReviews.module.scss';

const PortfolioReviews = ({ item }) => {
  const location = useLocation();

  return (
    <div className={s.box}>
      <div className={s.box__inner}>
        <div className={s.box__img_thumb}>
          <img src={item.img_bg} alt={item.title} className={s.box__img} />
        </div>
        <div className={s.box__data}>
          <h1 className={s.box__data_title}>{item.title}</h1>
          <div className={s.box__data_skills}>
            <p className={s.box__data_text_text}>Skills:</p>
            {item?.skills?.map(skill => (
              <p key={skill} className={s.box__data_skill}>
                {skill}
              </p>
            ))}
          </div>
          <p className={s.box__data_text}>
            {' '}
            Role: <span className={s.box__data_text_accent}>{item.role}</span>
          </p>
          <p className={s.box__data_text}>
            WebLink:
            <a className={s.box__data_text_accent} href={item.link}>
              Link...
            </a>
          </p>
          <p className={s.box__data_text}>
            SourceCode:
            <a className={s.box__data_text_accent} href={item.source_link}>
              Link...
            </a>
          </p>
          <p className={s.box__data_text_text}>
            Summary:<span className={s.box__data_text_accent}>{item.text}</span>
          </p>
          <Link
            to={location.state?.from ?? '/portfolio'}
            className={s.box__link}
          >
            go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioReviews;
