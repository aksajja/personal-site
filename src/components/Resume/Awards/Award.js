import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ data, last }) => (
  <li className="award-container">
    <a href={data.link}>
      <h4 className="award-number">{data.year}:</h4>
      <p className="award-name">{data.title}</p>
    </a>
    {!last && <div className="award-dot"><p className="award-name"> &#8226;</p></div>}
  </li>
);

Award.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Award.defaultProps = {
  last: false,
};

export default Award;
