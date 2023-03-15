import { MyComponent } from './MyComponent';
// import { ErrorBoundary } from './ErrorBoundary';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

try{
  
  require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <MyComponent>
      
      ${App()}
      </ErrorBoundary>
      
    </StrictMode>
  );
}catch(error){
console.log('\n React + leaflet exception.');
}finally{
console.log('\n React TypeScript App function finally.');
}
