import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

Header.defaultProps = {
  text: '',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
