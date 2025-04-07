import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import jackContemplative from './img/jack-contemplative.jpg';
import theSound from './img/the-sound.jpg';

function PreloadImage({ src }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <PreloadImage src={jackContemplative} />
    <PreloadImage src={theSound} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
