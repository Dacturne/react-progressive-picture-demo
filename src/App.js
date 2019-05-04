import React, { Component } from 'react';
import './App.css';

import ProgressiveImage from "react-progressive-image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProgressiveImage
            // src="http://192.168.0.248:3333/sample.jpg" fallback
            srcSetData={{ //don't specify formats just serve WEBP if it exists in 'Accept' header 
              srcSet: 'http://192.168.0.248:3333/sample.jpg 1x, http://192.168.0.248:3333/retina.jpg 2x',
              // sizes: '(max-width: 2000px) 100vw, 2000px' ??????
            }}
            placeholder="http://192.168.0.248:3333/preview.jpg"
          >
            {(src, loading, srcSetData) => (
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <img
                  alt="img"
                  style={{ width: '100%', objectFit: 'cover', transform: loading ? 'scale(1.25)' : 'scale(1)', height: '100%', transition: 'all 0.5s ease', filter: loading ? 'blur(20px)' : '' }}
                  src={src}
                  srcSet={srcSetData.srcSet}
                // sizes={srcSetData.sizes}
                />
              </div>
            )}
          </ProgressiveImage>
        </header>
      </div>
    );
  }
}

export default App;
