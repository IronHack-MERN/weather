import React, { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setConsult }) => {

  const [error, setError] = useState(false);
  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim() === '' || country.trim() === ''){
      setError(true);
      return;
    }
    setError(false);

    // set to the main component
    setConsult(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
    {error ? <Error message='All fields required'/> : null }
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value=""> *** Select country ***</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="city">Country</label>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Search'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired,
}

export default Form;
