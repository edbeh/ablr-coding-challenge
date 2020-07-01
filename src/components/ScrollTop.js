import React from 'react';
import ScrollButton from 'react-scroll-button';

const ScrollTop = () => {
  return (
    <div id='top'>
      <ScrollButton
        behavior={'smooth'}
        buttonBackgroundColor={'black'}
        iconType={'arrow-up'}
        style={{ fontSize: '24px' }}
        targetId={'top'}
      />
    </div>
  );
};

export default ScrollTop;
