import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export function SystemAnalysisDashboard() {
  // Sample data for EPS (Event-Pattern-Structure) analysis
  const eventData = [
    { name: "Maharashtra", value: 24.5 },
    { name: "Tamil Nadu", value: 31.2 },
    { name: "Karnataka", value: 28.7 },
    { name: "Delhi", value: 33.8 },
    { name: "Gujarat", value: 26.3 },
    { name: "Punjab", value: 30.5 },
    { name: "West Bengal", value: 22.1 },
  ];

  const patternData = [
    { year: "2000", obesity: 10.2, diabetes: 8.5, hypertension: 20.1 },
    { year: "2005", obesity: 13.7, diabetes: 10.1, hypertension: 22.7 },
    { year: "2010", obesity: 18.5, diabetes: 12.4, hypertension: 25.3 },
    { year: "2015", obesity: 24.1, diabetes: 15.8, hypertension: 28.4 },
    { year: "2020", obesity: 30.2, diabetes: 18.9, hypertension: 32.7 },
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="events">Events (Symptoms)</TabsTrigger>
          <TabsTrigger value="patterns">Patterns (Trends)</TabsTrigger>
          <TabsTrigger value="structures">Structures (Causes)</TabsTrigger>
        </TabsList>
        
        {/* Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Obesity Prevalence in Urban Middle-Class India (2023)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={eventData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Prevalence (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Obesity Rate (%)" fill="#2A9D8F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Events & Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <span>33.8% obesity prevalence in Delhi's middle class (highest)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <span>27% of middle-class adults have hypertension</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <span>18% have type 2 diabetes (3x higher than in 1990)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <span>42% report daily consumption of ultra-processed foods</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <span>71% of IT professionals report sedentary behavior &gt;8 hrs/day</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Current Interventions (Symptom Level)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Weight management programs</p>
                      <p className="text-sm text-gray-500">Treating the symptom without addressing causes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Diabetes medication access</p>
                      <p className="text-sm text-gray-500">Managing symptoms rather than prevention</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Gym memberships and fitness trackers</p>
                      <p className="text-sm text-gray-500">Individual solutions for systemic problems</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lifestyle Disease Trends in Middle-Class India (2000-2020)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={patternData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Prevalence (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="obesity" name="Obesity" stroke="#2A9D8F" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="diabetes" name="Diabetes" stroke="#E76F51" />
                    <Line type="monotone" dataKey="hypertension" name="Hypertension" stroke="#E9C46A" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Identified Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-yellow h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Accelerating growth curve</p>
                      <p className="text-sm text-gray-500">Obesity rates increasing exponentially, not linearly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-yellow h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Urban-rural divide widening</p>
                      <p className="text-sm text-gray-500">Urban rates growing 2.4x faster than rural</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-yellow h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Younger onset age</p>
                      <p className="text-sm text-gray-500">Average age of diabetes onset decreased from 45 to 35</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-yellow h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Income-obesity correlation</p>
                      <p className="text-sm text-gray-500">Highest growth in upper-middle income bracket</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Current Interventions (Pattern Level)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Workplace wellness programs</p>
                      <p className="text-sm text-gray-500">Addressing sedentary work patterns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Health education campaigns</p>
                      <p className="text-sm text-gray-500">Targeting nutrition and exercise knowledge</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Diabetes screening programs</p>
                      <p className="text-sm text-gray-500">Early detection of emerging trends</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Structures Tab */}
        <TabsContent value="structures" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-health-teal bg-opacity-10 border-b">
                <CardTitle className="text-health-teal">Socioeconomic Structures</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Income-driven food access</p>
                      <p className="text-sm text-gray-500">Processed foods often cheaper & more accessible than fresh options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Work structure & time poverty</p>
                      <p className="text-sm text-gray-500">Long commutes & work hours reduce time for healthy meal prep</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Status consumption</p>
                      <p className="text-sm text-gray-500">Fast food as aspirational western lifestyle marker</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-health-coral bg-opacity-10 border-b">
                <CardTitle className="text-health-coral">Environmental Structures</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Urban design & walkability</p>
                      <p className="text-sm text-gray-500">Cities designed for vehicles, not pedestrians</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Food environment</p>
                      <p className="text-sm text-gray-500">High density of fast food near workplaces</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Recreational space access</p>
                      <p className="text-sm text-gray-500">Limited parks and safe outdoor exercise areas</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-health-yellow bg-opacity-10 border-b">
                <CardTitle className="text-health-yellow">Policy Structures</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Food regulation</p>
                      <p className="text-sm text-gray-500">Limited regulation of food advertising & content</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Healthcare model</p>
                      <p className="text-sm text-gray-500">Treatment-focused rather than prevention-oriented</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-health-dark-blue h-2 w-2 rounded-full mt-2 mr-2"></div>
                    <div>
                      <p className="font-medium">Urban planning policies</p>
                      <p className="text-sm text-gray-500">Prioritization of development over health infrastructure</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>System Archetypes Identified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-4">
                  <h4 className="font-semibold text-health-teal mb-2">Shifting the Burden</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Individual-focused interventions (symptomatic solution) are easier to implement than addressing 
                    structural factors (fundamental solution), leading to dependency on quick fixes.
                  </p>
                  <p className="text-sm font-medium">Example: Weight-loss programs vs. food environment reform</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-semibold text-health-teal mb-2">Fixes that Fail</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Short-term interventions that appear to work but trigger unintended consequences 
                    that make the problem worse over time.
                  </p>
                  <p className="text-sm font-medium">Example: Crash diets leading to yo-yo weight cycling</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-semibold text-health-teal mb-2">Success to the Successful</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Resources flow to already-successful entities, widening gaps in health outcomes 
                    between different socioeconomic groups.
                  </p>
                  <p className="text-sm font-medium">Example: Premium health services in affluent areas</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-semibold text-health-teal mb-2">Tragedy of the Commons</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Individual actors pursuing their own interests deplete shared resources needed for health.
                  </p>
                  <p className="text-sm font-medium">Example: Corporate profit vs. public health outcomes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Current Interventions (Structure Level)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border p-4 rounded-md bg-health-light mb-4">
                <p className="text-sm text-health-dark-blue font-medium">
                  Note: Few current interventions target the deep structural level, indicating a significant opportunity 
                  for high-leverage interventions.
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">Food labeling policies</p>
                    <p className="text-sm text-gray-500">
                      Emerging regulations to improve food transparency, but implementation is limited
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">National health mission campaigns</p>
                    <p className="text-sm text-gray-500">
                      Broad policy initiatives with limited resources for non-communicable diseases
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">School meal program reforms</p>
                    <p className="text-sm text-gray-500">
                      Changes to nutritional standards in education institutions
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
