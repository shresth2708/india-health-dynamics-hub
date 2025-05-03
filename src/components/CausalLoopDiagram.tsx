
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Node {
  id: string;
  name: string;
  type: 'variable' | 'parameter';
  x: number;
  y: number;
  description: string;
}

interface Link {
  source: string;
  target: string;
  polarity: '+' | '-';
  type: 'reinforcing' | 'balancing';
  description: string;
}

interface Loop {
  id: string;
  name: string;
  nodes: string[];
  type: 'reinforcing' | 'balancing';
  description: string;
}

interface CausalLoopDiagramProps {
  className?: string;
}

export function CausalLoopDiagram({ className }: CausalLoopDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedLink, setSelectedLink] = useState<Link | null>(null);
  const [selectedLoop, setSelectedLoop] = useState<Loop | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Sample CLD data - this would be replaced with actual data
  const nodes: Node[] = [
    { id: 'n1', name: 'Processed Food Consumption', type: 'variable', x: 300, y: 100, description: 'Consumption of ultra-processed foods high in sugar, salt, and unhealthy fats' },
    { id: 'n2', name: 'Sedentary Lifestyle', type: 'variable', x: 500, y: 200, description: 'Low physical activity due to desk jobs, screen time, and urban living' },
    { id: 'n3', name: 'Obesity Prevalence', type: 'variable', x: 300, y: 300, description: 'Percentage of middle-class population with BMI > 30' },
    { id: 'n4', name: 'Health Literacy', type: 'variable', x: 100, y: 200, description: 'Understanding of nutrition, exercise, and health consequences' },
    { id: 'n5', name: 'Work Stress', type: 'variable', x: 500, y: 100, description: 'Mental stress from work pressure and long hours' },
    { id: 'n6', name: 'Healthcare Costs', type: 'variable', x: 100, y: 400, description: 'Out-of-pocket expenses for treating lifestyle diseases' }
  ];

  const links: Link[] = [
    { source: 'n1', target: 'n3', polarity: '+', type: 'reinforcing', description: 'Increased processed food consumption leads to higher obesity rates' },
    { source: 'n2', target: 'n3', polarity: '+', type: 'reinforcing', description: 'More sedentary behavior contributes to higher obesity rates' },
    { source: 'n3', target: 'n6', polarity: '+', type: 'reinforcing', description: 'Higher obesity leads to increased healthcare costs' },
    { source: 'n4', target: 'n1', polarity: '-', type: 'balancing', description: 'Better health literacy reduces processed food consumption' },
    { source: 'n4', target: 'n2', polarity: '-', type: 'balancing', description: 'Better health literacy promotes more active lifestyle' },
    { source: 'n5', target: 'n1', polarity: '+', type: 'reinforcing', description: 'Higher work stress increases comfort/convenience food consumption' },
    { source: 'n5', target: 'n2', polarity: '+', type: 'reinforcing', description: 'Higher work stress reduces time/energy for exercise' }
  ];

  const loops: Loop[] = [
    { id: 'l1', name: 'Stress-Diet-Obesity Cycle', nodes: ['n5', 'n1', 'n3'], type: 'reinforcing', description: 'Work stress drives processed food consumption, leading to obesity' },
    { id: 'l2', name: 'Literacy Intervention Loop', nodes: ['n4', 'n1', 'n3'], type: 'balancing', description: 'Health literacy counteracts processed food consumption and obesity' }
  ];

  // Zoom functionality
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  // Pan functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left click
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset view
  const handleResetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Find node by id
  const getNodeById = (id: string): Node | undefined => {
    return nodes.find(node => node.id === id);
  };

  // Show CLD visualization
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Actual D3 or custom rendering would go here
    // For the prototype, we'll use basic SVG elements
    
    // In a real implementation, this would use D3.js for better visualization
  }, [svgRef, nodes, links, selectedNode, selectedLink, selectedLoop, scale, position]);

  return (
    <div className={className}>
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Causal Loop Diagram</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleZoomIn}>Zoom In</Button>
              <Button variant="outline" size="sm" onClick={handleZoomOut}>Zoom Out</Button>
              <Button variant="outline" size="sm" onClick={handleResetView}>Reset</Button>
            </div>
          </div>
          
          <div className="border rounded-lg bg-white overflow-hidden h-[600px] relative">
            <svg 
              ref={svgRef} 
              className="w-full h-full cursor-grab" 
              style={{ 
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Links */}
              {links.map(link => {
                const source = getNodeById(link.source);
                const target = getNodeById(link.target);
                if (!source || !target) return null;
                
                return (
                  <g key={`${link.source}-${link.target}`} onClick={() => setSelectedLink(link)}>
                    <line 
                      x1={source.x} 
                      y1={source.y} 
                      x2={target.x} 
                      y2={target.y} 
                      className={`cld-link ${link.type === 'reinforcing' ? 'cld-link-reinforcing' : 'cld-link-balancing'}`} 
                      strokeWidth={link === selectedLink ? 4 : 2}
                    />
                    {/* Polarity marker */}
                    <text 
                      x={(source.x + target.x) / 2 + 5} 
                      y={(source.y + target.y) / 2 - 5}
                      className="text-lg font-bold"
                      fill={link.type === 'reinforcing' ? '#2A9D8F' : '#E76F51'}
                    >
                      {link.polarity}
                    </text>
                  </g>
                );
              })}
              
              {/* Nodes */}
              {nodes.map(node => (
                <g 
                  key={node.id} 
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedNode(node)}
                  className="cursor-pointer"
                >
                  <circle 
                    r={30} 
                    className={`${node === selectedNode ? 'fill-cld-selected' : 'fill-white'} stroke-cld-variable stroke-2`}
                  />
                  <text 
                    textAnchor="middle" 
                    dy=".3em" 
                    className="text-xs font-medium"
                    fill="#264653"
                  >
                    {node.name.split(' ').slice(0, 2).join(' ')}
                  </text>
                </g>
              ))}
              
              {/* Loop indicators would be added here in a real implementation */}
            </svg>
            
            {/* Info panel for selected elements */}
            {(selectedNode || selectedLink || selectedLoop) && (
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t shadow-md">
                {selectedNode && (
                  <div>
                    <h4 className="font-semibold">{selectedNode.name}</h4>
                    <p className="text-sm text-gray-600">{selectedNode.description}</p>
                  </div>
                )}
                {selectedLink && (
                  <div>
                    <h4 className="font-semibold">
                      {getNodeById(selectedLink.source)?.name} → {getNodeById(selectedLink.target)?.name}
                    </h4>
                    <p className="text-sm text-gray-600">{selectedLink.description}</p>
                  </div>
                )}
                {selectedLoop && (
                  <div>
                    <h4 className="font-semibold">{selectedLoop.name} ({selectedLoop.type})</h4>
                    <p className="text-sm text-gray-600">{selectedLoop.description}</p>
                  </div>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2" 
                  onClick={() => {
                    setSelectedNode(null);
                    setSelectedLink(null);
                    setSelectedLoop(null);
                  }}
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Reinforcing Loops</h3>
            <ul className="space-y-2">
              {loops.filter(loop => loop.type === 'reinforcing').map(loop => (
                <li 
                  key={loop.id}
                  className="p-3 border rounded-md cursor-pointer hover:bg-health-light"
                  onClick={() => setSelectedLoop(loop)}
                >
                  <div className="font-medium text-health-teal">{loop.name}</div>
                  <div className="text-sm text-gray-600">{loop.description}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Balancing Loops</h3>
            <ul className="space-y-2">
              {loops.filter(loop => loop.type === 'balancing').map(loop => (
                <li 
                  key={loop.id}
                  className="p-3 border rounded-md cursor-pointer hover:bg-health-light"
                  onClick={() => setSelectedLoop(loop)}
                >
                  <div className="font-medium text-health-coral">{loop.name}</div>
                  <div className="text-sm text-gray-600">{loop.description}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Download Options</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Download as PNG</Button>
            <Button variant="outline">Download as SVG</Button>
            <Button variant="outline">Export to Vensim</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
