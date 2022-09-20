import React from 'react';
import { Link } from 'react-router-dom';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import Button from '../button/Button';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './movie-card.scss';

const MovieCard = (props) => {
  const item = props.item;

  const link = '/' + category[props.category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <div className="movie-card__rating">
          <CircularProgressbar
            value={item.vote_average.toFixed(0)}
            maxValue={10}
            text={`${(item.vote_average * 10).toFixed(0)}%`}
            styles={buildStyles({
              textColor: '#fff',
              textSize: '30px',
              pathColor: 'turquoise',
              trailColor: 'gold',
            })}
          />
        </div>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
