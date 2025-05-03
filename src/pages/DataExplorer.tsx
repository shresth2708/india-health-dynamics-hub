
import { Layout } from "@/components/Layout";
import { DataVisualizer } from "@/components/DataVisualizer";

const DataExplorer = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Data Explorer</h1>
          <p className="text-xl text-gray-600">
            Visualize trends and patterns in health data across middle-class India's population.
          </p>
        </div>

        <DataVisualizer />
      </div>
    </Layout>
  );
};

export default DataExplorer;
