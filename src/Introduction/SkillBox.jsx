import React from 'react';

const SkillBox = ({ Icon, skill }) => {
  return (
    <div className="bg-[#161716] rounded-3xl p-8 border-2 border-[#292928] hover:border-[#3b3b39]"> 
      <div className="flex flex-col items-center justify-center gap-2">
        <Icon size={56} />
        <span>{skill}</span>
      </div>
    </div>
  );
};

export default SkillBox;
