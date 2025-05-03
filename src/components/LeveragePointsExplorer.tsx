
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, Radar 
} from "recharts";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Define the leverage point interface
interface LeveragePoint {
  id: string;
  name: string;
  description: string;
  impact: number; // 1-10
  feasibility: number; // 1-10
  timeframe: "short" | "medium" | "long";
  type: string;
  details: string;
}

export function LeveragePointsExplorer() {
  // Sample leverage points based on Meadows' framework
  const leveragePoints: LeveragePoint[] = [
    {
      id: "lp1",
      name: "Food Environment Regulation",
      description: "Policies to limit unhealthy food density near schools and offices",
      impact: 8,
      feasibility: 5,
      timeframe: "medium",
      type: "Rules of the System",
      details: "Implement zoning regulations that limit the concentration of fast food outlets near schools, offices, and residential areas. Create incentives for fresh food markets in urban food deserts."
    },
    {
      id: "lp2",
      name: "Work-Life Balance Policies",
      description: "Structural changes to working hours and commute patterns",
      impact: 9,
      feasibility: 4,
      timeframe: "long",
      type: "System Structure",
      details: "National policies promoting flexible work arrangements, remote work options, and maximum working hours to reduce time poverty that contributes to poor health choices."
    },
    {
      id: "lp3",
      name: "Targeted Health Education",
      description: "Cultural context-specific nutrition and fitness education",
      impact: 6,
      feasibility: 8,
      timeframe: "short",
      type: "Information Flows",
      details: "Develop education programs that address specific cultural contexts and beliefs around food, body image, and health in middle-class Indian communities."
    },
    {
      id: "lp4",
      name: "Urban Design Transformation",
      description: "Redesigning cities for increased physical activity",
      impact: 9,
      feasibility: 3,
      timeframe: "long",
      type: "System Structure",
      details: "Implement walkability improvements, create pedestrian zones, develop cycling infrastructure, and increase green spaces in urban areas to encourage daily physical activity."
    },
    {
      id: "lp5",
      name: "Food Price Intervention",
      description: "Subsidies for healthy foods and taxes on ultra-processed foods",
      impact: 8,
      feasibility: 6,
      timeframe: "medium",
      type: "Rules of the System",
      details: "Implement a dual approach: subsidize fresh fruits, vegetables, and whole foods while applying taxes to ultra-processed foods high in sugar, salt, and unhealthy fats."
    },
    {
      id: "lp6",
      name: "Workplace Wellness Standards",
      description: "Mandatory health provisions in medium and large companies",
      impact: 7,
      feasibility: 7,
      timeframe: "short",
      type: "Rules of the System",
      details: "Create standards requiring companies above a certain size to provide healthy food options, physical activity breaks, and stress management resources."
    },
    {
      id: "lp7",
      name: "Prevention-Based Healthcare",
      description: "Restructuring insurance and healthcare around prevention",
      impact: 9,
      feasibility: 5,
      timeframe: "long",
      type: "Goals of the System",
      details: "Transform healthcare compensation models to reward prevention and health maintenance rather than only treatment of established disease."
    },
    {
      id: "lp8",
      name: "Community Health Champions",
      description: "Local influencers promoting behavior change",
      impact: 6,
      feasibility: 9,
      timeframe: "short",
      type: "Self-Organization",
      details: "Identify and support influential community members to model and promote healthy behaviors within their social networks and local areas."
    }
  ];

  // Filter by timeframe state
  const [timeframeFilter, setTimeframeFilter] = useState<"all" | "short" | "medium" | "long">("all");
  
  // Selected leverage point state
  const [selectedLeverage, setSelectedLeverage] = useState<LeveragePoint | null>(null);
  
  // Simulation values
  const [simulationValues, setSimulationValues] = useState({
    implementationLevel: 50,
    populationCovered: 50,
    complianceRate: 50
  });

  // Filter leverage points by timeframe
  const filteredLeveragePoints = timeframeFilter === "all" 
    ? leveragePoints 
    : leveragePoints.filter(lp => lp.timeframe === timeframeFilter);
  
  // Sort by impact score
  const sortedLeveragePoints = [...filteredLeveragePoints].sort((a, b) => b.impact - a.impact);
  
  // Calculate effectiveness score for simulation (simple formula for demo)
  const calculateEffectiveness = () => {
    if (!selectedLeverage) return 0;
    
    // Simple weighted formula for demo purposes
    const rawScore = (
      (selectedLeverage.impact * 0.5) +
      (simulationValues.implementationLevel * 0.2) +
      (simulationValues.populationCovered * 0.2) +
      (simulationValues.complianceRate * 0.1)
    ) / 10;
    
    // Normalize to 0-100 scale
    return Math.round(rawScore * 10);
  };
  
  // Format for radar chart
  const radarData = [
    {
      subject: "Impact",
      A: selectedLeverage?.impact || 0,
      fullMark: 10,
    },
    {
      subject: "Feasibility",
      A: selectedLeverage?.feasibility || 0,
      fullMark: 10,
    },
    {
      subject: "Implementation",
      A: simulationValues.implementationLevel / 10,
      fullMark: 10,
    },
    {
      subject: "Coverage",
      A: simulationValues.populationCovered / 10,
      fullMark: 10,
    },
    {
      subject: "Compliance",
      A: simulationValues.complianceRate / 10,
      fullMark: 10,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Leverage Points by Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-wrap gap-2">
              <Button 
                variant={timeframeFilter === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframeFilter("all")}
              >
                All Timeframes
              </Button>
              <Button 
                variant={timeframeFilter === "short" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframeFilter("short")}
              >
                Short-term
              </Button>
              <Button 
                variant={timeframeFilter === "medium" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframeFilter("medium")}
              >
                Medium-term
              </Button>
              <Button 
                variant={timeframeFilter === "long" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframeFilter("long")}
              >
                Long-term
              </Button>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sortedLeveragePoints}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 30,
                    left: 150,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    width={120}
                    tickFormatter={(value) => value.length > 18 ? `${value.substring(0, 18)}...` : value}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="impact" 
                    name="Potential Impact" 
                    fill="#2A9D8F" 
                    onClick={(data) => setSelectedLeverage(data as LeveragePoint)}
                  />
                  <Bar 
                    dataKey="feasibility" 
                    name="Feasibility" 
                    fill="#E9C46A" 
                    onClick={(data) => setSelectedLeverage(data as LeveragePoint)}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Click on a bar to select a leverage point for detailed analysis
            </div>
          </CardContent>
        </Card>
      </div>
      
      {selectedLeverage ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{selectedLeverage.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500">Description</h4>
                <p className="mt-1">{selectedLeverage.description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500">Details</h4>
                <p className="mt-1">{selectedLeverage.details}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="stat-card text-center">
                  <div className="text-sm font-medium text-gray-500">Timeframe</div>
                  <div className="mt-1 font-semibold capitalize">{selectedLeverage.timeframe}-term</div>
                </div>
                <div className="stat-card text-center">
                  <div className="text-sm font-medium text-gray-500">Impact</div>
                  <div className="mt-1 font-semibold">{selectedLeverage.impact}/10</div>
                </div>
                <div className="stat-card text-center">
                  <div className="text-sm font-medium text-gray-500">Feasibility</div>
                  <div className="mt-1 font-semibold">{selectedLeverage.feasibility}/10</div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="text-lg font-medium mb-4">Intervention Simulator</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Implementation Level: {simulationValues.implementationLevel}%</label>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      value={[simulationValues.implementationLevel]}
                      onValueChange={(value) => setSimulationValues({...simulationValues, implementationLevel: value[0]})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Population Covered: {simulationValues.populationCovered}%</label>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      value={[simulationValues.populationCovered]}
                      onValueChange={(value) => setSimulationValues({...simulationValues, populationCovered: value[0]})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium">Compliance Rate: {simulationValues.complianceRate}%</label>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      value={[simulationValues.complianceRate]}
                      onValueChange={(value) => setSimulationValues({...simulationValues, complianceRate: value[0]})}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Effectiveness Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-40 w-40 mx-auto">
                <div 
                  className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-health-teal"
                  style={{ zIndex: 10 }}
                >
                  {calculateEffectiveness()}%
                </div>
                <div className="absolute inset-0 bg-health-teal rounded-full opacity-20"></div>
                <svg className="absolute inset-0" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2A9D8F"
                    strokeWidth="10"
                    strokeDasharray={`${calculateEffectiveness() * 2.83} 283`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              
              <div className="text-center text-sm text-gray-500 mb-4">
                Projected effectiveness based on current settings
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    <Radar
                      name="Score"
                      dataKey="A"
                      stroke="#2A9D8F"
                      fill="#2A9D8F"
                      fillOpacity={0.6}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="border rounded-md p-3 bg-health-light">
                <h4 className="font-medium mb-1">Key Insight</h4>
                <p className="text-sm">
                  {calculateEffectiveness() > 75 
                    ? "This intervention shows excellent potential with high feasibility and impact."
                    : calculateEffectiveness() > 50
                    ? "This intervention shows moderate potential but may require optimization."
                    : "This intervention may face significant implementation challenges."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-gray-500 my-8">
              Select a leverage point from the chart above to view details and simulation options
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>Intervention Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="short">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="short">Short-term</TabsTrigger>
              <TabsTrigger value="medium">Medium-term</TabsTrigger>
              <TabsTrigger value="long">Long-term</TabsTrigger>
            </TabsList>
            
            <TabsContent value="short" className="pt-4">
              <div className="space-y-4">
                {leveragePoints
                  .filter(lp => lp.timeframe === "short")
                  .map(lp => (
                    <div 
                      key={lp.id} 
                      className={`p-4 border rounded-md cursor-pointer transition-colors ${
                        selectedLeverage?.id === lp.id ? "bg-health-light border-health-teal" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedLeverage(lp)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{lp.name}</h4>
                        <div className="text-sm">Impact: {lp.impact}/10</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{lp.description}</p>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="medium" className="pt-4">
              <div className="space-y-4">
                {leveragePoints
                  .filter(lp => lp.timeframe === "medium")
                  .map(lp => (
                    <div 
                      key={lp.id} 
                      className={`p-4 border rounded-md cursor-pointer transition-colors ${
                        selectedLeverage?.id === lp.id ? "bg-health-light border-health-teal" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedLeverage(lp)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{lp.name}</h4>
                        <div className="text-sm">Impact: {lp.impact}/10</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{lp.description}</p>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="long" className="pt-4">
              <div className="space-y-4">
                {leveragePoints
                  .filter(lp => lp.timeframe === "long")
                  .map(lp => (
                    <div 
                      key={lp.id} 
                      className={`p-4 border rounded-md cursor-pointer transition-colors ${
                        selectedLeverage?.id === lp.id ? "bg-health-light border-health-teal" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedLeverage(lp)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium">{lp.name}</h4>
                        <div className="text-sm">Impact: {lp.impact}/10</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{lp.description}</p>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
