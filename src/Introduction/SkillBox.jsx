import React from 'react';

const SkillBox = ({ Icon, skill }) => {
  return (
    <div className="bg-gray-900 rounded-3xl p-8 hover:bg-gray-800"> 
      <div className="flex flex-col items-center justify-center gap-2">
        <Icon size={56} />
        <span>{skill}</span>
      </div>
    </div>
  );
};

export default SkillBox;
