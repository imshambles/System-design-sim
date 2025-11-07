import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Clock,
  Zap,
  AlertTriangle,
  DollarSign,
  Shield,
  HelpCircle,
} from 'lucide-react';

const optimizationTopics = [
  {
    title: 'Reducing Latency',
    icon: <Clock className="h-5 w-5 mr-2" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Add <strong>Cache</strong> components to store frequently accessed data</li>
        <li>Place caches between servers and databases</li>
        <li>Ensure components aren't overloaded (keep load under 70% of capacity)</li>
        <li>Minimize the number of hops in your request path</li>
        <li>Use multiple smaller servers instead of one large server</li>
      </ul>
    ),
  },
  {
    title: 'Increasing Throughput',
    icon: <Zap className="h-5 w-5 mr-2" />,
    content: (
        <ul className="list-disc pl-5 space-y-2">
            <li>Use a <strong>Load Balancer</strong> to distribute traffic across multiple servers.</li>
            <li>Horizontally scale your application by adding more servers.</li>
            <li>Use asynchronous processing for long-running tasks.</li>
            <li>Optimize database queries and use connection pooling.</li>
      </ul>
    ),
  },
  {
    title: 'Reducing Error Rate',
    icon: <AlertTriangle className="h-5 w-5 mr-2" />,
    content: (
        <ul className="list-disc pl-5 space-y-2">
            <li>Implement retries with exponential backoff for transient failures.</li>
            <li>Use <strong>Circuit Breakers</strong> to prevent cascading failures.</li>
            <li>Add monitoring and alerting to detect issues early.</li>
            <li>Implement thorough testing, including unit, integration, and end-to-end tests.</li>
      </ul>
    ),
  },
  {
    title: 'Optimizing Cost',
    icon: <DollarSign className="h-5 w-5 mr-2" />,
    content: (
        <ul className="list-disc pl-5 space-y-2">
            <li>Use serverless components like <strong>Cloud Functions</strong> for stateless, event-driven workloads.</li>
            <li>Choose the right size for your servers and databases (right-sizing).</li>
            <li>Leverage auto-scaling to match capacity with demand.</li>
            <li>Use object storage for large, infrequently accessed files.</li>
      </ul>
    ),
  },
  {
    title: 'Building Resilience',
    icon: <Shield className="h-5 w-5 mr-2" />,
    content: (
        <ul className="list-disc pl-5 space-y-2">
            <li>Deploy your application across multiple availability zones or regions.</li>
            <li>Use a <strong>Message Queue</strong> to decouple services and handle spiky traffic.</li>
            <li>Implement health checks for your services.</li>
            <li>Have a disaster recovery plan and practice it.</li>
      </ul>
    ),
  },
  {
    title: 'Component Selection Guide',
    icon: <HelpCircle className="h-5 w-5 mr-2" />,
    content: (
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>API Gateway</strong>: Single entry point for all clients.</li>
            <li><strong>CDN</strong>: Serve content closer to users to reduce latency.</li>
            <li><strong>Database</strong>: Choose SQL for structured data, NoSQL for unstructured or scalable data.</li>
            <li><strong>Firewall</strong>: Protect your system from unauthorized access.</li>
      </ul>
    ),
  },
];

const OptimizationGuide = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold flex items-center mb-4">
        <HelpCircle className="h-6 w-6 mr-2" />
        How to Optimize Your System
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {optimizationTopics.map((topic, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <div className="flex items-center">
                {topic.icon}
                {topic.title}
              </div>
            </AccordionTrigger>
            <AccordionContent>{topic.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default OptimizationGuide;