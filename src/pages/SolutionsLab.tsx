
import { Layout } from "@/components/Layout";
import { LeveragePointsExplorer } from "@/components/LeveragePointsExplorer";

const SolutionsLab = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Solutions Lab</h1>
          <p className="text-xl text-gray-600">
            Identify effective leverage points and test potential interventions to address India's health challenges.
          </p>
        </div>

        <LeveragePointsExplorer />
      </div>
    </Layout>
  );
};

export default SolutionsLab;
