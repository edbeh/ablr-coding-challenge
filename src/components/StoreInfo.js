import React from 'react';
import PropTypes from 'prop-types';

const StoreInfo = ({ result }) => {
  return (
    <div className='store-info'>
      <img className='store-logo' src={result.merchant.logo} alt='logo' />
      <div>
        <span className='store-name'>{result.title}</span>
        <br />
        <span className='store-location'>{result.location}</span>
      </div>
    </div>
  );
};
StoreInfo.propTypes = {
  result: PropTypes.object.isRequired,
};

export default StoreInfo;
