// booleanNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const BooleanNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type='Boolean'
      inputs={[]}
      outputs={['value']}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label>
            Boolean:
            <select
              value={nodeData?.inputName || 'false'}
              onChange={(e) => handleInputChange('inputName', e.target.value)}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>
        </div>
      )}
    </BaseNode>
  );
};

export default BooleanNode;
