
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const Index = () => {
  // Sample data for overview chart
  const healthTrendsData = [
    { year: 2000, obesity: 10.2, diabetes: 8.5, hypertension: 20.1 },
    { year: 2005, obesity: 13.7, diabetes: 10.1, hypertension: 22.7 },
    { year: 2010, obesity: 18.5, diabetes: 12.4, hypertension: 25.3 },
    { year: 2015, obesity: 24.1, diabetes: 15.8, hypertension: 28.4 },
    { year: 2020, obesity: 30.2, diabetes: 18.9, hypertension: 32.7 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-dark-blue to-health-teal py-16 -mx-4 px-4 sm:px-6 lg:px-8 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Understanding India's Health Crisis
            </h1>
            <p className="text-xl mb-8">
              A systems thinking approach to addressing obesity and lifestyle diseases in middle-class India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-health-teal hover:bg-opacity-90">
                <Link to="/system-analysis">Explore System Analysis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-health-teal">
                <Link to="/solutions-lab">Discover Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Growing Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despite growing fitness awareness, obesity and lifestyle diseases continue to rise among
              India's middle-income population.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h3 className="text-xl font-semibold mb-4">Lifestyle Disease Trends in Middle-Class India (2000-2020)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={healthTrendsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="obesity" name="Obesity Rate (%)" fill="#2A9D8F" />
                  <Bar dataKey="diabetes" name="Diabetes Rate (%)" fill="#E9C46A" />
                  <Bar dataKey="hypertension" name="Hypertension Rate (%)" fill="#E76F51" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-health-teal mb-2">3x</div>
                <h3 className="font-semibold mb-2">Obesity Increase</h3>
                <p className="text-gray-600">
                  Obesity rates have tripled in India's middle class over the past two decades.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-health-teal mb-2">71%</div>
                <h3 className="font-semibold mb-2">Sedentary Behavior</h3>
                <p className="text-gray-600">
                  Of urban professionals report over 8 hours of sedentary time daily.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-health-teal mb-2">37</div>
                <h3 className="font-semibold mb-2">Average Age</h3>
                <p className="text-gray-600">
                  Average age of Type 2 diabetes diagnosis, down from 45 years in 2000.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 bg-health-light -mx-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Systemic Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This platform integrates system dynamics modeling with real-time health data to identify effective intervention points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-health-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-health-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Interactive Causal Loop Diagram</h3>
                <p className="text-gray-600">
                  Visualize complex relationships and feedback loops driving health outcomes.
                </p>
                <Button variant="link" asChild className="mt-2">
                  <Link to="/system-analysis">Explore Relationships</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-health-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-health-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">System Analysis Dashboard</h3>
                <p className="text-gray-600">
                  Event-Pattern-Structure analysis revealing root causes and trends.
                </p>
                <Button variant="link" asChild className="mt-2">
                  <Link to="/system-analysis">View Analysis</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-health-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-health-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Leverage Points Explorer</h3>
                <p className="text-gray-600">
                  Identify and test high-impact intervention opportunities.
                </p>
                <Button variant="link" asChild className="mt-2">
                  <Link to="/solutions-lab">Discover Solutions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-health-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-health-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Data Integration Hub</h3>
                <p className="text-gray-600">
                  Real-time data visualization and trend analysis.
                </p>
                <Button variant="link" asChild className="mt-2">
                  <Link to="/data-explorer">Explore Data</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="bg-health-dark-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Exploring India's Health Dynamics
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Dive into our comprehensive system analysis and discover effective intervention points for addressing India's rising lifestyle disease challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-health-teal hover:bg-opacity-90">
                <Link to="/system-analysis">Begin Analysis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-health-teal">
                <Link to="/methodology">Learn Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
