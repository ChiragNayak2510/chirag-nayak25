import React from 'react';
import Nav from './Nav';
import Name from './Name';
import { Button } from '@nextui-org/react';
import { GoArrowUpRight } from "react-icons/go";
import { FaJava } from "react-icons/fa";
import SkillBox from './SkillBox';
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
function Intro() {
    return (
        <div>
            <div className="bg-gray-900 w-full rounded-3xl text-white">
                <Nav />
                <div className="flex items-center justify-center w-full mt-16 flex-col mb-16">
                    <img src="profileImagePicture.jpg" alt="Profile of Chirag Nayak" className='rounded-full h-1/12 w-1/12 mb-16'/>
                    <Name/>
                    <div className='mt-8'>
                        <div>Building efficient software applications</div>
                        <div>with creativity, precision, and expertise.</div>
                    </div>
                    <Button radius="full" className="mt-4 p-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mb-8">
                        <div className='flex gap-2 items-center justify-center'>
                            Github
                            <GoArrowUpRight />
                        </div>
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto whitespace-nowrap p-12 text-white">
                <div className="inline-flex gap-8">
                    <SkillBox Icon={FaJava} skill="Java" />
                    <SkillBox Icon={SiJavascript} skill="JS" />
                    <SkillBox Icon={TbCircleLetterC} skill="C" />
                    <SkillBox Icon={FaPython } skill="Python" />
                    <SkillBox Icon={FaReact} skill="ReactJS"/>
                    <SkillBox Icon={FaNode} skill="NodeJS"/>
                    <SkillBox Icon={FaAws} skill="AWS" />
                    <SkillBox Icon={FaDocker} skill="Docker" />
                    <SkillBox Icon={BiLogoSpringBoot} skill="Spring" />
                    <SkillBox Icon={SiMongodb} skill="MongoDB" />
                    <SkillBox Icon={SiFlutter} skill="Flutter" />
                    <SkillBox Icon={RiNextjsFill} skill="NextJS" />
                    <SkillBox Icon={SiFirebase} skill="Firebase" />
                    <SkillBox Icon={SiSolidity} skill="Solidity" />
                </div>
            </div>
        </div>
    );
}

export default Intro;