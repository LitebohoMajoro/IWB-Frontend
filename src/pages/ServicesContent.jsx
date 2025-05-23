import React from 'react';

function Services() {
  return (
    <>
      <h1>Welcome to our Software Services</h1>

      <section className="services-dashboard">
        <div className="gallery">
          <img src="/img/RAM.jpg" alt="Service 1" />
          <img src="/img/Hard drive.jpg" alt="Service 2" />
          <img src="/img/motherboard.jpg" alt="Service 3" />
        </div>

        <div className="recycling-services">
          <div className="service-item">
            <h3>RAM Recycling</h3>
            <p>We extract and repurpose reusable materials from old RAM chips.</p>
            <img src="/img/ram.jpg" alt="RAM Recycling" />
          </div>
          <div className="service-item">
            <h3>Hard Drive Destruction</h3>
            <p>Secure data destruction with environmentally-safe disposal methods.</p>
            <img src="/img/Hard drive.jpg" alt="Hard Drive Recycling" />
          </div>
          <div className="service-item">
            <h3>Motherboard Components</h3>
            <p>Component-level recovery from outdated or non-functioning motherboards.</p>
            <img src="/img/motherboard.jpg" alt="Motherboard Recycling" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
