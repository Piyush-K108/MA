import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Lighthouse({ images, onClose }) {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="App">
        
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} onAfterClose={onClose}>
        {images.map((img, index) => (
                
          <img key={index} src={img} alt={`img${index+1}.png`} />
   
        ))}
      </LightGallery>
    </div>
  );
}

export default Lighthouse;
