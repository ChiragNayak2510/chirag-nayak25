import React from 'react';
import Nav from './Nav';
import Name from './Name';
import { Button } from '@nextui-org/react';
function Intro() {
    return (
        <div>
        <div className="bg-gray-800 w-full rounded-3xl  text-white">
            <Nav />
            <div className="flex items-center justify-center w-full mt-16 flex-col mb-16">
                <img src="profileImage.jpg" alt="Profile of Chirag Nayak" className='rounded-full h-1/6 w-1/6 mb-16'/>
                <Name/>
                <div className='mt-8'>
                <div>Building efficient software applications</div>
                <div>with creativity, precision, and expertise.</div>
                </div>
                <Button radius="full" className="mt-4 p-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Github 
                </Button>
            </div>
        </div>
        <div className='flex space-evenly'>
            
        </div>
        </div>
    );
}

export default Intro;
