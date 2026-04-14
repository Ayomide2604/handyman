import React from 'react';

const MapSection = () => {
  return (
    <section className="p-0">
      <iframe 
        width="100%" 
        height="500" 
        id="gmap_canvas" 
        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        title="Location Map"
      />
    </section>
  );
};

export default MapSection;
