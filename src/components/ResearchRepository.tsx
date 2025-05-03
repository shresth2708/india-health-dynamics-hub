
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

export function ResearchRepository() {
  // Sample research data
  const keyResearch = [
    {
      id: 'r1',
      title: 'Trends in obesity and diabetes among Indian middle-class: A 10-year longitudinal study',
      authors: 'Shah, P., Mehta, R., Kumar, S.',
      year: 2022,
      journal: 'Indian Journal of Public Health',
      abstract: 'This longitudinal study tracks obesity and diabetes rates among middle-class Indians across 12 urban centers from 2012-2022, revealing a 47% increase in obesity prevalence and 65% increase in diabetes among adults aged 30-55.',
      keyFindings: [
        'Obesity prevalence increased from 18.4% to 27.1% over the study period',
        'Average age of type 2 diabetes diagnosis decreased from 45 to 37 years',
        'Correlation between processed food consumption and BMI showed r=0.72',
        'Urban residents with >8 hours daily sedentary time had 3.4x higher obesity risk'
      ],
      methodology: 'Longitudinal cohort study with 5,280 participants across 12 urban centers'
    },
    {
      id: 'r2',
      title: 'Socioeconomic factors influencing dietary patterns in urban India',
      authors: 'Gupta, A., Sharma, N., Patel, K.',
      year: 2021,
      journal: 'International Journal of Nutrition',
      abstract: 'This study examines how income, education, and occupation influence dietary choices in urban Indian households, with particular focus on the transition from traditional to western-style processed food consumption.',
      keyFindings: [
        'Traditional food consumption inversely correlated with household income (r=-0.58)',
        'Working professionals reported 63% higher consumption of convenience foods',
        'Status signaling through food choices identified as significant factor in brand selection',
        'Price sensitivity decreases as households move from lower to upper-middle income status'
      ],
      methodology: 'Mixed-methods study with food diaries (n=1,240) and in-depth interviews (n=85)'
    },
    {
      id: 'r3',
      title: 'Urban design and physical activity: Analysis of walkability in six Indian metropolitan areas',
      authors: 'Reddy, S., Singh, T., Das, M.',
      year: 2020,
      journal: 'Journal of Urban Planning and Development',
      abstract: 'This research evaluates the walkability indices of six Indian metropolitan areas and examines the relationship between urban design elements and physical activity levels among residents.',
      keyFindings: [
        'Average walkability score of 28/100 across studied metropolitan areas',
        'Residents in neighborhoods with higher walkability scores (>60) had 82% more daily steps',
        'Only 12% of work commutes involve walking >10 minutes continuously',
        'Lack of pedestrian infrastructure cited as primary barrier to walking by 78% of respondents'
      ],
      methodology: 'Geographic information system (GIS) mapping combined with accelerometer data from 2,400 participants'
    },
    {
      id: 'r4',
      title: 'System dynamics modeling of obesity feedback loops in Indian urban populations',
      authors: 'Chatterjee, P., Banerjee, S., Rao, K.',
      year: 2023,
      journal: 'Systems Research and Behavioral Science',
      abstract: 'Using system dynamics methodology, this study identifies and analyzes feedback loops contributing to obesity prevalence in Indian urban populations, with particular attention to middle-class communities.',
      keyFindings: [
        'Identified 7 reinforcing loops and 3 balancing loops influencing obesity prevalence',
        'The stress-diet-weight gain reinforcing loop showed highest gain factor (2.4)',
        'Time delays in health consequences reduce effectiveness of balancing loops',
        'Policy resistance patterns identified in food industry regulation attempts'
      ],
      methodology: 'System dynamics modeling with Vensim, calibrated with 15 years of longitudinal health data'
    }
  ];

  const systemsThinkingResources = [
    {
      id: 's1',
      title: 'Leverage Points: Places to Intervene in a System',
      author: 'Meadows, D.',
      year: 1999,
      description: 'Foundational article outlining twelve leverage points for system intervention, ranked from least to most effective.',
      relevance: 'Provides framework for identifying high-impact intervention points in the obesity system.'
    },
    {
      id: 's2',
      title: 'Thinking in Systems: A Primer',
      author: 'Meadows, D.',
      year: 2008,
      description: 'Introductory text on systems thinking concepts, feedback loops, and system behavior.',
      relevance: 'Core reference for understanding system structure and behavior patterns.'
    },
    {
      id: 's3',
      title: 'The Fifth Discipline: The Art & Practice of The Learning Organization',
      author: 'Senge, P.',
      year: 2006,
      description: 'Classic text on systems thinking applied to organizational learning and change.',
      relevance: 'Provides framework for system archetypes applicable to health systems.'
    },
    {
      id: 's4',
      title: 'Systems Archetype Basics: From Story to Structure',
      author: 'Kim, D.',
      year: 2007,
      description: 'Practical guide to identifying and working with common system archetypes.',
      relevance: 'Helps identify recurring patterns in health intervention failures.'
    }
  ];

  const healthInterventionStudies = [
    {
      id: 'h1',
      title: 'Community-based intervention for lifestyle modification in urban India: Three-year results',
      authors: 'Mohan, V., Deepa, M., Raj, D.',
      year: 2021,
      description: 'Evaluation of a comprehensive community intervention program targeting diet and physical activity.',
      outcomes: 'Modest 8% reduction in obesity prevalence; 12% reduction in diabetes incidence among high-risk individuals.',
      limitations: 'Limited sustainability after program completion; high attrition rate (38%).'
    },
    {
      id: 'h2',
      title: 'Workplace wellness program impact assessment in IT companies: A controlled trial',
      authors: 'Krishnan, A., Shah, N., Verma, R.',
      year: 2022,
      description: 'Evaluation of structured workplace interventions in 12 IT companies across Bangalore, Hyderabad, and Pune.',
      outcomes: 'Intervention group showed 4.2% decrease in BMI vs. 0.8% in control; 18% increase in daily physical activity.',
      limitations: 'Selection bias; benefits concentrated among already health-conscious employees.'
    },
    {
      id: 'h3',
      title: 'School-based nutrition and activity program in urban middle-class schools',
      authors: 'Sharma, S., Gupta, D., Mehta, P.',
      year: 2020,
      description: 'Implementation of comprehensive school health program targeting childhood obesity prevention.',
      outcomes: 'Reduced sugar-sweetened beverage consumption by 32%; increased fruit intake by 27%; limited impact on BMI.',
      limitations: 'Limited family engagement; competing influences from food marketing.'
    },
    {
      id: 'h4',
      title: 'Food environment modification through municipal policy: Case study of Chennai',
      authors: 'Raj, S., Venkataraman, K., Subramanian, S.',
      year: 2023,
      description: 'Analysis of Chennai municipality efforts to improve food retail environments near schools and public spaces.',
      outcomes: 'Successfully reduced unhealthy food outlets within 500m of schools by 24%; increased fresh food access points by 15%.',
      limitations: 'Limited implementation in higher-income neighborhoods; policy enforcement challenges.'
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader className="border-b">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Research Repository</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search research..." 
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-health-teal focus:border-transparent"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="key-research">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6">
              <TabsTrigger value="key-research">Key Research</TabsTrigger>
              <TabsTrigger value="systems-thinking">Systems Thinking Resources</TabsTrigger>
              <TabsTrigger value="interventions">Intervention Studies</TabsTrigger>
            </TabsList>
            
            {/* Key Research Tab */}
            <TabsContent value="key-research" className="space-y-6">
              {keyResearch.map(research => (
                <Card key={research.id} className="border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-health-dark-blue mb-2">{research.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {research.authors} ({research.year}) • {research.journal}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Abstract</h4>
                      <p className="text-gray-600">{research.abstract}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Findings</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {research.keyFindings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Methodology</h4>
                      <p className="text-gray-600">{research.methodology}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {/* Systems Thinking Resources Tab */}
            <TabsContent value="systems-thinking" className="space-y-6">
              <div className="bg-health-light border border-health-teal rounded-md p-4 mb-6">
                <h3 className="text-health-teal font-medium mb-2">Systems Thinking Approach</h3>
                <p className="text-gray-600">
                  Systems thinking provides a framework for understanding complex health challenges by identifying feedback 
                  loops, leverage points, and system archetypes. The resources below form the theoretical foundation 
                  for our analysis of obesity and lifestyle diseases in middle-class India.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systemsThinkingResources.map(resource => (
                  <Card key={resource.id} className="border shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-health-dark-blue mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {resource.author} ({resource.year})
                      </p>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="bg-health-light p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-1">Relevance to Project</h4>
                        <p className="text-sm text-gray-600">{resource.relevance}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Key Systems Thinking Concepts Applied</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-teal mb-2">Feedback Loops</h4>
                      <p className="text-gray-600 text-sm">
                        Circular causal relationships where a change in one variable affects other variables, 
                        which then feed back to influence the original variable. Our analysis identifies both 
                        reinforcing (amplifying) and balancing (stabilizing) feedback loops in the obesity system.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-teal mb-2">System Archetypes</h4>
                      <p className="text-gray-600 text-sm">
                        Recurring patterns of system behavior that appear across different contexts. By identifying 
                        archetypes like "shifting the burden" and "fixes that fail" in the obesity crisis, we can 
                        apply established intervention strategies.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-teal mb-2">Leverage Points</h4>
                      <p className="text-gray-600 text-sm">
                        Places in complex systems where small changes can lead to large shifts in system behavior. 
                        Our analysis focuses on identifying high-leverage intervention points for addressing 
                        obesity in middle-class India.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-teal mb-2">Time Delays</h4>
                      <p className="text-gray-600 text-sm">
                        Gaps between actions and their consequences in the system. The obesity system features 
                        significant delays between lifestyle changes and health outcomes, complicating intervention 
                        effectiveness measurement and behavioral change.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Intervention Studies Tab */}
            <TabsContent value="interventions" className="space-y-6">
              <div className="bg-health-light border border-health-teal rounded-md p-4 mb-6">
                <h3 className="text-health-teal font-medium mb-2">Intervention Effectiveness Analysis</h3>
                <p className="text-gray-600">
                  This section reviews existing intervention studies targeting obesity and lifestyle diseases 
                  in middle-class India. Understanding the successes and limitations of previous interventions 
                  helps identify opportunities for more systemic approaches.
                </p>
              </div>
              
              {healthInterventionStudies.map(study => (
                <Card key={study.id} className="border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {study.authors} ({study.year})
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Description</h4>
                      <p className="mt-1">{study.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-md p-3">
                        <h4 className="text-sm font-medium text-green-700 mb-1">Key Outcomes</h4>
                        <p className="text-sm">{study.outcomes}</p>
                      </div>
                      
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <h4 className="text-sm font-medium text-red-700 mb-1">Limitations</h4>
                        <p className="text-sm">{study.limitations}</p>
                      </div>
                    </div>
                    
                    {/* EPS Analysis - Would be customized for each intervention in a real implementation */}
                    <div className="border-t pt-4 mt-4">
                      <h4 className="text-sm font-medium mb-2">EPS (Event-Pattern-Structure) Analysis</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium mb-1">Event Level</h5>
                          <p>The intervention primarily addresses visible symptoms and immediate behaviors.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium mb-1">Pattern Level</h5>
                          <p>Some attention to trends and recurring behaviors, but limited system perspective.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <h5 className="font-medium mb-1">Structure Level</h5>
                          <p>Minimal engagement with underlying systemic drivers and root causes.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card>
                <CardHeader>
                  <CardTitle>Intervention Gaps Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-l-4 border-health-coral pl-4 mb-6">
                    <p className="text-gray-600">
                      Our analysis of existing interventions reveals significant gaps in addressing the systemic factors 
                      driving obesity and lifestyle diseases in middle-class India. Most current approaches focus on 
                      individual behavior change without addressing the deeper structural drivers.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-coral mb-2">Structural Gaps</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Limited attention to food environment regulation</li>
                        <li>Inadequate focus on urban design and walkability</li>
                        <li>Failure to address work structure and time poverty</li>
                        <li>Insufficient engagement with food industry practices</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-semibold text-health-coral mb-2">Implementation Gaps</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Short intervention timeframes (typically 1-2 years)</li>
                        <li>Poor sustainability planning and follow-through</li>
                        <li>Limited cross-sector collaboration</li>
                        <li>Insufficient attention to cultural context and values</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Methodology Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border rounded-md p-4">
              <h3 className="font-semibold mb-2">System Dynamics Approach</h3>
              <p className="text-gray-600">
                This project applies system dynamics methodology to understand the complex interactions driving obesity 
                and lifestyle disease trends in middle-class India. Rather than focusing on linear cause-and-effect 
                relationships, we identify feedback loops, delays, and emergent properties that characterize this 
                complex health challenge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Key Methodological Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Problem articulation and boundary definition</li>
                  <li>Causal loop diagram development through iterative refinement</li>
                  <li>Data integration from multiple sources to validate relationships</li>
                  <li>Identification of system archetypes and behavior patterns</li>
                  <li>Event-Pattern-Structure analysis to identify root causes</li>
                  <li>Leverage point identification and effectiveness assessment</li>
                  <li>Intervention strategy development and simulation</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Limitations and Considerations</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Model simplification necessarily excludes some variables and relationships</li>
                  <li>Data limitations, particularly around behavioral factors and time-series data</li>
                  <li>Cultural and regional variations across Indian middle-class populations</li>
                  <li>Uncertainties in quantifying relationship strengths between system variables</li>
                  <li>Dynamic nature of the system requires ongoing model refinement</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-3">Glossary of Key Terms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-health-teal mb-1">Causal Loop Diagram (CLD)</h4>
                  <p className="text-sm text-gray-600">
                    A visual representation of cause and effect relationships between system variables, 
                    showing feedback loops and their polarity.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-health-teal mb-1">Reinforcing Loop</h4>
                  <p className="text-sm text-gray-600">
                    A feedback loop where an initial change leads to additional change in the same direction, 
                    creating amplifying or exponential behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-health-teal mb-1">Balancing Loop</h4>
                  <p className="text-sm text-gray-600">
                    A feedback loop that counteracts change, seeking equilibrium or goal-oriented behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-health-teal mb-1">Leverage Point</h4>
                  <p className="text-sm text-gray-600">
                    A place in a complex system where a small change can produce large shifts in system behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-health-teal mb-1">System Archetype</h4>
                  <p className="text-sm text-gray-600">
                    A recurring pattern of system behavior found across different domains and contexts.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-health-teal mb-1">Event-Pattern-Structure (EPS) Analysis</h4>
                  <p className="text-sm text-gray-600">
                    An analytical approach that examines visible events, underlying patterns, and deep systemic structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
