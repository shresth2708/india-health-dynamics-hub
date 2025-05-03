
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export function DataVisualizer() {
  const [selectedDataset, setSelectedDataset] = useState('obesity');
  
  // Sample data for different visualizations
  const obesityTrendsData = [
    { year: 2000, urban: 10.2, rural: 5.8 },
    { year: 2005, urban: 15.6, rural: 7.2 },
    { year: 2010, urban: 21.3, rural: 9.7 },
    { year: 2015, urban: 27.8, rural: 12.9 },
    { year: 2020, urban: 32.4, rural: 15.6 },
  ];
  
  const incomeCorrelationData = [
    { incomeGroup: 'Lower', obesityRate: 14.3, diabetesRate: 7.8, hypertensionRate: 19.4 },
    { incomeGroup: 'Lower-Middle', obesityRate: 21.7, diabetesRate: 12.5, hypertensionRate: 24.1 },
    { incomeGroup: 'Middle', obesityRate: 28.9, diabetesRate: 17.2, hypertensionRate: 29.5 },
    { incomeGroup: 'Upper-Middle', obesityRate: 32.4, diabetesRate: 18.9, hypertensionRate: 31.7 },
    { incomeGroup: 'Upper', obesityRate: 29.6, diabetesRate: 16.4, hypertensionRate: 28.3 },
  ];
  
  const dietaryShiftData = [
    { year: 2000, traditional: 68, processed: 32 },
    { year: 2005, traditional: 60, processed: 40 },
    { year: 2010, traditional: 52, processed: 48 },
    { year: 2015, traditional: 45, processed: 55 },
    { year: 2020, traditional: 38, processed: 62 },
  ];
  
  const physicalActivityData = [
    { ageGroup: '18-24', active: 42, moderate: 26, sedentary: 32 },
    { ageGroup: '25-34', active: 35, moderate: 28, sedentary: 37 },
    { ageGroup: '35-44', active: 29, moderate: 31, sedentary: 40 },
    { ageGroup: '45-54', active: 24, moderate: 28, sedentary: 48 },
    { ageGroup: '55-64', active: 22, moderate: 25, sedentary: 53 },
    { ageGroup: '65+', active: 18, moderate: 22, sedentary: 60 },
  ];
  
  const stateObesityData = [
    { state: 'Maharashtra', value: 24.5 },
    { state: 'Tamil Nadu', value: 31.2 },
    { state: 'Karnataka', value: 28.7 },
    { state: 'Delhi', value: 33.8 },
    { state: 'Gujarat', value: 26.3 },
    { state: 'Punjab', value: 30.5 },
    { state: 'West Bengal', value: 22.1 },
  ];
  
  const comorbidityData = [
    { name: 'Diabetes', value: 38 },
    { name: 'Hypertension', value: 45 },
    { name: 'Cardiovascular', value: 22 },
    { name: 'Respiratory', value: 18 },
    { name: 'Joint Issues', value: 32 },
  ];
  
  const COLORS = ['#2A9D8F', '#E9C46A', '#E76F51', '#264653', '#F4A261'];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Data Explorer</CardTitle>
            <Select value={selectedDataset} onValueChange={setSelectedDataset}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="obesity">Obesity Trends</SelectItem>
                <SelectItem value="income">Income Correlation</SelectItem>
                <SelectItem value="diet">Dietary Shifts</SelectItem>
                <SelectItem value="activity">Physical Activity</SelectItem>
                <SelectItem value="states">State-wise Data</SelectItem>
                <SelectItem value="comorbidity">Comorbidities</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded-lg border mb-4">
            <p className="text-sm text-gray-500">
              The data presented here is synthesized from multiple sources including the National Family Health Survey (NFHS), 
              WHO Global Health Observatory, and research studies on Indian urban health patterns. All visualizations are 
              focused on middle-class populations in urban and semi-urban areas.
            </p>
          </div>
          
          {selectedDataset === 'obesity' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Obesity Trends in Urban vs Rural India (2000-2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={obesityTrendsData}
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
                        <Line 
                          type="monotone" 
                          dataKey="urban" 
                          stroke="#2A9D8F" 
                          name="Urban Middle-Class"
                          activeDot={{ r: 8 }}
                          strokeWidth={2}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="rural" 
                          stroke="#E76F51" 
                          name="Rural Population"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Urban middle-class obesity rates have tripled over 20 years</li>
                      <li>Urban-rural gap has widened significantly since 2010</li>
                      <li>Rate of increase is accelerating in urban areas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {selectedDataset === 'income' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Health Issues by Income Group (2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={incomeCorrelationData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="incomeGroup" />
                        <YAxis label={{ value: 'Prevalence (%)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="obesityRate" name="Obesity Rate" fill="#2A9D8F" />
                        <Bar dataKey="diabetesRate" name="Diabetes Rate" fill="#E9C46A" />
                        <Bar dataKey="hypertensionRate" name="Hypertension Rate" fill="#E76F51" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Highest obesity and related disease rates in upper-middle income group</li>
                      <li>Lower income groups showing increasing rates as processed foods become more accessible</li>
                      <li>Different pattern from Western countries where obesity often correlates inversely with income</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {selectedDataset === 'diet' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dietary Pattern Shifts (2000-2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={dietaryShiftData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis label={{ value: 'Percentage of Diet (%)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="traditional" 
                          stroke="#2A9D8F" 
                          name="Traditional Foods"
                          strokeWidth={2}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="processed" 
                          stroke="#E76F51" 
                          name="Processed/Fast Foods"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Dramatic shift from traditional to processed food consumption</li>
                      <li>Crossover point occurred around 2012-2013</li>
                      <li>Processed food now comprises over 60% of urban middle-class diet</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {selectedDataset === 'activity' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Activity Levels by Age Group (2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={physicalActivityData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="ageGroup" />
                        <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="active" name="Physically Active" stackId="a" fill="#2A9D8F" />
                        <Bar dataKey="moderate" name="Moderately Active" stackId="a" fill="#E9C46A" />
                        <Bar dataKey="sedentary" name="Sedentary" stackId="a" fill="#E76F51" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Sedentary behavior increases significantly with age</li>
                      <li>Working-age adults (25-54) show concerning inactivity levels</li>
                      <li>Less than 30% of middle-aged adults meet recommended physical activity guidelines</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {selectedDataset === 'states' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Obesity Rates by State (2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={stateObesityData}
                        layout="vertical"
                        margin={{
                          top: 5,
                          right: 30,
                          left: 120,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis 
                          type="category" 
                          dataKey="state" 
                        />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Obesity Rate (%)" fill="#2A9D8F" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Delhi has the highest obesity rate among urban middle-class populations</li>
                      <li>States with higher urbanization and tech industry presence show higher rates</li>
                      <li>West Bengal shows lower rates, possibly reflecting different dietary patterns</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {selectedDataset === 'comorbidity' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comorbidities in Obese Middle-Class Adults (2020)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={comorbidityData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {comorbidityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 bg-health-light p-4 rounded-md">
                    <h4 className="font-medium mb-2">Key Insights:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Hypertension is the most common comorbidity (45%)</li>
                      <li>Diabetes closely follows at 38% among obese middle-class adults</li>
                      <li>Multiple comorbidities present in over 50% of cases</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">National Family Health Survey (NFHS)</p>
                  <p className="text-sm text-gray-500">Comprehensive household survey data on health indicators</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">WHO Global Health Observatory</p>
                  <p className="text-sm text-gray-500">International comparative health statistics</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Indian Council of Medical Research</p>
                  <p className="text-sm text-gray-500">Clinical studies and epidemiological research</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-teal h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Open Government Data Platform India</p>
                  <p className="text-sm text-gray-500">Public sector data on health infrastructure and outcomes</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Integration Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Cross-sectional data normalization</p>
                  <p className="text-sm text-gray-500">Adjusting for demographic variations across data sources</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Time-series harmonization</p>
                  <p className="text-sm text-gray-500">Aligning historical data points for trend analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Socioeconomic classification standardization</p>
                  <p className="text-sm text-gray-500">Creating consistent income group definitions across sources</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-health-coral h-2 w-2 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-medium">Data quality assessment</p>
                  <p className="text-sm text-gray-500">Confidence scoring for each data point based on source reliability</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Download Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-health-teal text-white rounded hover:bg-opacity-90 transition-colors">
              Download CSV
            </button>
            <button className="px-4 py-2 bg-health-dark-blue text-white rounded hover:bg-opacity-90 transition-colors">
              Download Report
            </button>
            <button className="px-4 py-2 border border-health-teal text-health-teal rounded hover:bg-health-light transition-colors">
              API Documentation
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
