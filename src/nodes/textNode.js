// TextNode.js

import React, { useState, useMemo, useEffect } from 'react';
import BaseNode from './BaseNode';
import { Handle } from 'reactflow';

// Helper function to parse variables within curly braces
const parseVariables = (text) => {
  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
  const variables = new Set(); // Use a Set to avoid duplicate variables
  let match;

  while ((match = variableRegex.exec(text)) !== null) {
    variables.add(match[1]); // Capture the variable name
  }

  return Array.from(variables); // Convert the Set back to an Array
};

export const TextNode = ({ id, data }) => {
  const [nodeData, setNodeData] = useState(data || { text: '' });
  const [variables, setVariables] = useState(parseVariables(nodeData.text));

  // State to store values for each input field
  const [inputValues, setInputValues] = useState(() => {
    const initialValues = {};
    variables.forEach((variable) => {
      initialValues[variable] = ''; // Initialize with empty strings
    });
    return initialValues;
  });

  // Calculate dimensions for textarea growth based on input length
  const dimensions = useMemo(() => {
    const baseWidth = 100;
    const baseHeight = 40;
    const widthIncrement = 7; // Adjust the width scaling factor
    const heightIncrement = 1.5; // Adjust the height scaling factor

    const lines = (nodeData.text || '').split('\n').length;
    const width = Math.min(Math.max(baseWidth, (nodeData.text || '').length * widthIncrement), 300); // Constrain max width
    const height = Math.min(Math.max(baseHeight, lines * baseHeight * heightIncrement), 200); // Constrain max height

    return { width, height };
  }, [nodeData.text]);

  useEffect(() => {
    // Update variables when the text changes
    const vars = parseVariables(nodeData.text);
    // Only update if there is a change
    if (JSON.stringify(vars) !== JSON.stringify(variables)) {
      setVariables(vars);

      // Initialize input values for new variables
      const newInputValues = { ...inputValues };

      vars.forEach((variable) => {
        if (!(variable in newInputValues)) {
          newInputValues[variable] = ''; // Default value for new input fields
        }
      });

      setInputValues(newInputValues);
    }
  }, [nodeData.text, variables, inputValues]);

  const handleInputChange = (field, value) => {
    setNodeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleVariableChange = (variable, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [variable]: value,
    }));
  };

  return (
    <BaseNode
      id={id}
      type="Text"
      data={nodeData}
      inputs={variables} // Pass variables as inputs for handles
      outputs={['output']}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        minWidth: '150px', // Minimum width for better UI
        minHeight: '60px', // Minimum height for better UI
        padding: '10px',
        boxSizing: 'border-box', // Ensure padding doesn't affect width/height
        overflow: 'hidden', // Hide overflow content
        backgroundColor: '#f4f4f4', // Light background for better contrast
      }}
    >
      {() => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <label style={{ width: '100%' }}>
            Text:
            <textarea
              value={nodeData.text || ''}
              onChange={(e) => handleInputChange('text', e.target.value)}
              placeholder="Type here with {{variable}} syntax"
              style={{
                resize: 'none',
                width: '100%', // Set textarea width as 100% of the container
                minHeight: '60px', // Set a minimum height
                padding: '5px',
                margin: '10px 0', // Add margin for spacing
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                color: '#fff',
                outline: 'none',
                transition: 'all 0.2s ease',
                backgroundColor: '#fff', // White background for input
              }}
            />
          </label>

          {/* Render input fields for each variable */}
          {variables.map((variable, index) => (
            <div key={`input-field-${index}`} style={{ marginBottom: '10px', width: '100%' }}>
              <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ marginBottom: '5px' }}>{variable}:</span>
                <input
                  type="text"
                  value={inputValues[variable]}
                  onChange={(e) => handleVariableChange(variable, e.target.value)}
                  style={{
                    width: '100%', // Full width input
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: '#f9f9f9', // White background for input
                  }}
                />
              </label>
            </div>
          ))}

          {/* Render handles for each variable */}
          {variables.map((variable, index) => (
            <Handle
              key={`input-${index}`}
              type="target"
              position="left"
              id={`${id}-${variable}`}
              style={{
                top: `${(index + 1) * 20}px`,
                background: '#555',
                borderRadius: '50%',
                width: '10px',
                height: '10px',
              }}
            />
          ))}
        </div>
      )}
    </BaseNode>
  );
};
