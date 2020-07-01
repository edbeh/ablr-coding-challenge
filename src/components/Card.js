import React from 'react';
import StoreInfo from './StoreInfo';
import PropTypes from 'prop-types';

const Card = ({ result }) => {
  return (
    <div className='card'>
      <img className='store-image' src={result.photo} alt='storefront' />
      <StoreInfo result={result} />
    </div>
  );
};
Card.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Card;
