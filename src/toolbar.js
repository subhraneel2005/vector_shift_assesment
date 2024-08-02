// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='border-b nav border-gray-400'>
            <h1 className='text-xl font-bold text-white px-5 py-3'>Build Pipeline</h1>
            <div className='mt-5 flex flex-wrap gap-5 mb-3 w-fit px-5'>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='Date' label='Date' />
                <DraggableNode type='Number' label='Number' />
                <DraggableNode type='Boolean' label='Boolean' />
                <DraggableNode type='Textarea' label='Textarea' />
                <DraggableNode type='Api' label='API Endpoint' />
            </div>
        </div>
    );
};
