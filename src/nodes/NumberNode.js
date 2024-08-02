//numberNode.js

import React from 'react';
import BaseNode from './BaseNode';

export const NumberNode = ({id,data}) => {

    return(
        <BaseNode
            id={id}
            data={data}
            type='Number'
            inputs={[]}
            outputs={["value"]}
        >
            {(handleInputChange, nodeData) => (
                <div>
                <label>
                    <input
                    type="number"
                    value={nodeData?.inputName || ''}
                    onChange={(e) => handleInputChange('inputName', e.target.value)}
                    />
                </label>
                </div>
            )}
        </BaseNode>
    )
}