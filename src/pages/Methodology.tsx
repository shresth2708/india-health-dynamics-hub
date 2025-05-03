
import { Layout } from "@/components/Layout";
import { ResearchRepository } from "@/components/ResearchRepository";

const Methodology = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Methodology & Research</h1>
          <p className="text-xl text-gray-600">
            Explore the academic foundation and systems thinking approach behind our analysis.
          </p>
        </div>

        <ResearchRepository />
      </div>
    </Layout>
  );
};

export default Methodology;
