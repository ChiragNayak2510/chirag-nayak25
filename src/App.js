import React from 'react';
import Intro from './Introduction/Intro';

// import { Button } from '@nextui-org/react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
    <div className='bg-gray-800 w-full rounded-3xl h-max text-white'>
      <Intro/>
    </div>
    </div>
  );
}

export default App;
