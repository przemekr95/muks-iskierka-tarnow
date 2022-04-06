import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';

import './test.scss';

function Test() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData('test.json', setData);
  }, []);
  console.log(data);
  return (
    <section className="test-wrapper">
      {data.position}
    </section>
  );
}

export default Test;
