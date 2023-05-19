import React, { useState } from 'react';

const countries = [
  {
    name: 'India',
    value: 'IN',
    cities: ['Delhi', 'Mumbai']
  },
  {
    name: 'Pak',
    value: 'PK',
    cities: ['Lahore', 'Karachi']
  },
  {
    name: 'Bangladesh',
    value: 'BG',
    cities: ['Dhaka', 'Chittagong']
  },
];

const Test = () => {
  const [data, setData] = useState({ name: '', value: '', cities: [] });

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
        (country) =>
         country.value === e.target.value
         );
         console.log(selectedCountry);
    setData(selectedCountry ? selectedCountry : { name: '', value: '', cities: [] });
  };

  return (
    <>
      {/* first select option */}
      <select value={data.value} onChange={handleCountryChange}>
        {countries.map((val, idx) => (
          <option value={val.value} key={idx}>
            {val.name}
          </option>
        ))}
      </select>

      {/* second select option */}
      <select>
        {data.cities.map((item, index) => (
          <option value={index} key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Test;
