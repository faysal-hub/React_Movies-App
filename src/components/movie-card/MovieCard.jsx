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
  const movieRating = (item.vote_average * 10).toFixed(0);
  const pathColor =
    movieRating > 70 ? '#0eeb12' : movieRating > 50 ? '#ebeb0e' : '#ff0000';

  const trailColor = movieRating > 0 ? 'gray' : '#eb0e7c';

  const link = '/' + category[props.category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <div className="movie-card__rating">
          <CircularProgressbar
            value={movieRating}
            text={`${movieRating}%`}
            styles={buildStyles({
              textColor: '#fff',
              textSize: '30px',
              pathColor: pathColor,
              trailColor: trailColor,
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
