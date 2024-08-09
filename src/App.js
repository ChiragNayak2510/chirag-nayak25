import React from 'react';
import Intro from './Introduction/Intro';
import Projects from './ProjectSection/Projects';

// import { Button } from '@nextui-org/react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
    <div className='w-full rounded-3xl h-max text-white'>
      <Intro/>
      <Projects/>
    </div>
    </div>
  );
}

export default App;
