
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CausalLoopDiagram } from "@/components/CausalLoopDiagram";
import { SystemAnalysisDashboard } from "@/components/SystemAnalysisDashboard";

const SystemAnalysis = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">System Analysis</h1>
          <p className="text-xl text-gray-600">
            Explore the complex interrelationships and feedback loops driving India's obesity and lifestyle disease crisis.
          </p>
        </div>

        <Tabs defaultValue="cld" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="cld">Causal Loop Diagram</TabsTrigger>
            <TabsTrigger value="eps">Event-Pattern-Structure Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cld">
            <CausalLoopDiagram />
          </TabsContent>
          
          <TabsContent value="eps">
            <SystemAnalysisDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SystemAnalysis;
