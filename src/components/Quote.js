import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=love';
      const headers = { 'X-Api-Key': 'aL4yRrpcK1ykMPWPi+rSeA==TEXP1k8ppWk6Zi9w' };
      try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setQuote(result[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className="quoteContainer">
      <p className="quote">
        Quote of the day:
        {quote.quote}
      </p>
      <p className="author">
        Author:
        {quote.author}
      </p>
    </div>
  );
};

export default Quote;
