import React from 'react';
import logo from './bbw.svg';
// [ ]: delete bellow 
import './Component/Style/App/appMain.css'
// [ ]: uncomment at end of project import './Component/Style/main.css';

/** REQUIREMENTS
 * [ ]: Create all needed components
 * [ ]: At least and maximum of 2 inputs for calculating (using a right triangle)
 * [ ]: Return all 3 sides & all 3 angles in text results
 * [ ]: Return surface area of triangle in text results  
 * [ ]: Return in what angle how far C is (return Vector)
 * [ ]: Alternate Input using 2 coordinates instead of lengths && || angles
 * [ ]: Graphically show resulting triangle
 * [ ]: Graphically show circumference of triangle
 END REQUIREMENTS */

function App() {
  return (      
        <div className='container'>
          <div className='Input-selector'></div>

          <div className='Logo'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>

          <div className='Result-header'>
            <p>Results:</p>
          </div>

          <div className='Input'>
            <div className='Input-first'></div>
            <div className='Input-second'></div>
          </div>

          <div className='Calculator-button'></div>

          <div className='Result-text'>
            <div className='Result-text-sides'></div>
            <div className='Result-text-angles'></div>
          </div>

          <div className='Result-vector'></div>

          <div className='Visual-result-graphics'></div>
      </div>
  );
}

export default App;
