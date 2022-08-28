import React from 'react';
import Button, { OutlineButton } from '../button/Button';
import apiConfig from '../../api/apiConfig';
import { useHistory } from 'react-router';

import './hero-slideItem.scss';

const HeroSlideItem = (props) => {
  let hisrory = useHistory();
  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => hisrory.push('/movie/' + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={() => console.log('trailer')}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
