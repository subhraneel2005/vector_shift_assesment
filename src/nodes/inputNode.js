// InputNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="Input"
      data={data}
      inputs={[]}
      outputs={['value']}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label className='block'>
            Name:
            <input
              type="text"
              value={nodeData?.inputName || id.replace('customInput-', 'input_')}
              onChange={(e) => handleInputChange('inputName', e.target.value)}
            />
          </label>
          <label className='block mt-4 ml-3'>
            Type:
            <select
              value={nodeData.inputType || 'Text'}
              onChange={(e) => handleInputChange('inputType', e.target.value)}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      )}
    </BaseNode>
  );
};
