import React, { useState } from "react";

const Form = () => {
  const [asearch, setSearch] = useState({
    city: "",
    country: "",
  });

  const [error, setError] = useState(false);

  const { city, country } = asearch;

  const handleChange = (e) => {
    setSearch({
      ...asearch,
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
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <p className='error red darken-4'>All fields are required</p>: null}
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

export default Form;
