import React, { useState } from 'react';
import './App.css';
import useJsonFetch from './hooks/useJsonFetch';

function App(props) {
  const [{ data, loading, error }] = useJsonFetch(
    process.env.REACT_APP_DATE_URL,
    5 * 1000,
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

    </div>
  );
}

export default App;
