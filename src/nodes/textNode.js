// TextNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="Text"
      data={data}
      inputs={[]}
      outputs={['output']}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label>
            Text:
            <input
              type="text"
              value={nodeData?.text || '{{input}}'}
              onChange={(e) => handleInputChange('text', e.target.value)}
            />
          </label>
        </div>
      )}
    </BaseNode>
  );
};
