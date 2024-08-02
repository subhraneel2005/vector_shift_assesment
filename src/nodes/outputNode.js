// OutputNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="Output"
      data={data}
      inputs={['value']}
      outputs={[]}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label className='block'>
            Name:
            <input
              type="text"
              value={nodeData?.outputName || id.replace('customOutput-', 'output_')}
              onChange={(e) => handleInputChange('outputName', e.target.value)}
            />
          </label>
          <label className='block  mt-4 ml-3'>
            Type:
            <select
              value={nodeData.outputType || 'Text'}
              onChange={(e) => handleInputChange('outputType', e.target.value)}
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      )}
    </BaseNode>
  );
};
