import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const handlePositions = {
  source: Position.Right,
  target: Position.Left,
};

const BaseNode = ({ id, type, data, inputs = [], outputs = [], children = () => {}, style = {} }) => {
  const [nodeData, setNodeData] = useState(data);

  const handleInputChange = (field, value) => {
    setNodeData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className='w-auto min-h-[200px] border border-gray-500 rounded-lg flex flex-col inputBody'>
      {/* Handles for inputs */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={handlePositions.target}
          id={`${id}-${input}`}
          style={{ top: `${(index + 1) * (100 / (inputs.length + 1))}%` }}
        />
      ))}

      {/* Header */}
      <div className='inputHeader w-full py-1 px-3 text-white border-b border-gray-400 font-bold'>
        <span>{type}</span>
      </div>

      {/* Centered Content */}
      <div className='flex-grow flex flex-col items-center justify-center p-2 text-white'>
        {children(handleInputChange, nodeData)}
      </div>

      {/* Handles for outputs */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={handlePositions.source}
          id={`${id}-${output}`}
          style={{ top: `${(index + 1) * (100 / (outputs.length + 1))}%` }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
