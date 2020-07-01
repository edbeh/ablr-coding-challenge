import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from './components/Card';
import Loading from './components/Loading';
import ScrollTop from './components/ScrollTop';
import { API_URL } from './configuration';

import './index.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [next, setNext] = useState('page_1.json');
  const [trigger, setTrigger] = useState(false);

  // fetch results from json
  React.useEffect(() => {
    let endpoint = `${API_URL}${next}`;
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        setNext(json.next);
        setResults((results) => results.concat(json.results));
        setLoading(false);
      })
      .catch((err) => console.warn('Error while fetching endpoint:', err));
    // eslint-disable-next-line
  }, [trigger]);

  return (
    <div>
      <ScrollTop />

      <div className='container'>
        {results.map((result) => (
          <Card key={result.slug} result={result} />
        ))}
      </div>

      <div className='controls'>
        {loading && <Loading />}
        {/* Display view more button only if app is not loading, and next page is available */}
        {!loading && next ? (
          <button
            className='view-more-btn'
            onClick={() => setTrigger((trigger) => !trigger)}
          >
            View More
          </button>
        ) : null}
      </div>
    </div>
  );
};
App.propTypes = {
  results: PropTypes.array.isRequired,
};

ReactDOM.render(<App />, document.querySelector('#root'));
