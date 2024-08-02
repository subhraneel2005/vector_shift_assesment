//dateNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const DateNode = ({id,data}) => {

    return(
        <BaseNode
            id={id}
            data={data}
            type='Date'
            inputs={[]}
            outputs={["value"]}
        >
            {(handleInputChange, nodeData) => (
                <div>
                <label>
                    <input
                    type="date"
                    value={nodeData?.inputName || id.replace('customInput-', 'input_')}
                    onChange={(e) => handleInputChange('inputName', e.target.value)}
                    />
                </label>
                </div>
            )}
        </BaseNode>
    )
}