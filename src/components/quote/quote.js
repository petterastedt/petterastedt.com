import React, { useState } from 'react';

const Quote = () => {
  const [isFullQuote, setIsFullQuote] = useState(false)

    return (
      <div
        className="quote"
        role="textbox"
        onKeyDown={() => setIsFullQuote(!isFullQuote)}
        onClick={() => setIsFullQuote(!isFullQuote)}
        tabIndex={0}>
        “I was lucky to work together with Petter for a year
        {isFullQuote ? ", at a point where he earlier had single handedly run the daily operations more than a year pretty much all by himself. Of everything, I will miss most Petter's ability to create instant trust from peers and users with his special mix of empathy, patience and integrity. " : "... "}
        At stressful and unsure times he is a rock everyone leans on. Anyone in the future working with him will be lucky.”
        <span className="quote-author">
          - Fredrik Karlberg (Country Manager, SnappCar Sweden)
        </span>
      </div>
    )
  }

export default Quote