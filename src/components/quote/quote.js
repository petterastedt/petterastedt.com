import React, { useState } from 'react';

const Quote = ({data}) => {
  const [isFullQuote, setIsFullQuote] = useState(false)

    return (
      <div
        className="quote"
        role="textbox"
        onKeyDown={() => setIsFullQuote(!isFullQuote)}
        onClick={() => setIsFullQuote(!isFullQuote)}
        tabIndex={0}
        data-aos="fade-up">
          { data.hideText ?
           <p>“{data.quote}
             { isFullQuote ? <div className="quote-hidden">{data.quoteHiddenText}</div> : " [...] "}
             {data.quoteSecondField}”
           </p>
          :
            <p>“{data.quote}”</p>
          }
        <span className="quote-author">
          {data.quoteAuthor}
        </span>
        <span className="quote-toggle">{isFullQuote ? " [-]" : " [+]" }</span>
      </div>
    )
  }

export default Quote