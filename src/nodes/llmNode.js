// LLMNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      type="LLM"
      data={data}
      inputs={['system', 'prompt']}
      outputs={['response']}
    >
      {() => (
        <div>
          <span>This is an LLM.</span>
        </div>
      )}
    </BaseNode>
  );
};
