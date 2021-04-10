import React from 'react';
import './Filter.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, selectors } from '../../redux';

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { value: selectors.getVisibleContacts(state) };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
