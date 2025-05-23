import React, { useState } from 'react';

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <header>
        <section className="banner">
          <h1>Explore Our New Data Recovery & Destruction Tools</h1>
          <a href="/software" className="banner-btn">See Tools</a>
        </section>
      </header>

        <section className="intro">
          <p>
            IWB, founded in 2024 by Kenneth, is one of the leading electronic recycling companies in Southern Africa.
            We specialize in recycling RAM, Hard Drives, and motherboard components. With growth and partnerships,
            including CEO Shadrack, we've expanded our services internationally.
          </p>
        </section>

        <section className="learn-more-section">
          <h2>Learn More About Recycling</h2>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Hide Info' : 'Learn More'}
          </button>
          {showMore && (
            <div className="learn-more-content show">
              <p>
                <strong>Why should you recycle your old computers and hardware?</strong><br /><br />
                Recycling and the disposal of computer hardware is considered environmentally friendly because it prevents hazardous waste,
                including heavy metals and carcinogens, from entering the atmosphere, landfill or waterways. While electronics consist a small
                fraction of total waste generated, they are far more dangerous. If you want to dispose of computer parts, there is stringent
                legislation that must be adhered to and is designed to enforce and encourage the sustainable disposal of electronic devices and
                appliances, the most notable being the Waste Electrical and Electronic Equipment Directive of the EU.
              </p>
            </div>
          )}
        </section>
    </>
  );
}

export default Home;
