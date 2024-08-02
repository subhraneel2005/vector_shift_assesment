// textAreaNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const TextAreaNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type='Textarea'
      inputs={[]}
      outputs={['value']}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label>
            <textarea
              rows="4"
              cols="30"
              placeholder='Write your thoughts here...'
              value={nodeData?.inputName || ''}
              onChange={(e) => handleInputChange('inputName', e.target.value)}
            />
          </label>
        </div>
      )}
    </BaseNode>
  );
};

export default TextAreaNode;
