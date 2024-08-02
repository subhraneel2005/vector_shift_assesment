// apiNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  const handleEndpointChange = (e) => {
    setEndpoint(e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      type='Api'
      inputs={[]}
      outputs={['response']}
    >
      {(handleInputChange, nodeData) => (
        <div>
          <label className='block'>
            API Endpoint:
            <input
              type="text"
              value={endpoint}
              onChange={handleEndpointChange}
            />
          </label>
          <label  className='block mt-4 ml-10'>
            Method:
            <select
              value={method}
              onChange={handleMethodChange}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
          <div className='block mt-4 ml-10'>
            <span>Response will be shown here...</span>
          </div>
        </div>
      )}
    </BaseNode>
  );
};

export default ApiNode;
