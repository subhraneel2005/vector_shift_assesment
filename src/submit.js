import { useStore } from './store'; // Adjust the path if necessary
import { shallow } from 'zustand/shallow';


export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
      nodes: state.nodes,
      edges: state.edges,
    }), shallow);
  
    const handleSubmit = async () => {
      try {
        const pipelineData = {
          nodes: nodes.map(node => node.id),
          edges: edges.map(edge => [edge.source, edge.target]),
        };
  
        console.log('Pipeline Data:', pipelineData); // Debugging line
  
        const response = await fetch('http://localhost:8000/pipelines/parse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            pipeline: JSON.stringify(pipelineData),
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert(`Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    return (
      <div className="w-full h-auto flex justify-center items-center">
        <button
          className="text-white font-bold py-2 px-5 border border-gray-600 rounded-[24px] flex justify-center items-center btn"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  };
  