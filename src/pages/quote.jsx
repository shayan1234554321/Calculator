import React from 'react';
import ApiNinja from '../hooks/api';

export default function Quote() {

  const { data , loading , fetchQuote } = ApiNinja()

  return (
    <section className="quote" >
      <div className="top">
        {loading? <p>Loading Quote</p> :
          <p>"{data ? data[0].quote : ''}"- {data? data[0].author : ''}</p>
        }
      </div>
      <div className="bottom">
        <button onClick={fetchQuote} disabled={loading} >
          {loading? "Loading" : "Another Quote"}
        </button>
      </div>
    </section>
  );
}
